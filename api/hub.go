package api

import (
	"errors"
	"fmt"
	"math/rand"
	"net/http"
	"sync"
	"time"

	"github.com/astaxie/beego/config"

	"context"
)

func HttpStatusCodeToErr(code int) error {
	return errors.New(http.StatusText(code))
}

var (
	ErrTrans2JsonFail  = errors.New("response from steam api trans2json fail")
	ErrBadResultFormat = errors.New("response from steam api not recognized")
)

var (
	mu   sync.RWMutex
	apis map[string]Api = make(map[string]Api)
	Acfg config.Configer
	keys = []string{}
)

const (
	DefaultTimeOut int    = 60
	DefaultMethod  string = "GET"
)

func init() {
	cfg, err := config.NewConfig("ini", "conf/api.conf")
	if err != nil {
		panic(fmt.Sprintf("load api.conf fail: %s", err))
	}

	Acfg = cfg
	//read keys from config, used to gen key for steam api
	keys = Acfg.DefaultStrings("keys", keys)
	if len(keys) == 0 {
		panic("api keys not given")
	}

	//register live game api
	la := &LiveApi{}
	if err := initOne(la); err != nil {
		panic(fmt.Sprintf("init api[%s] failed: %s", la.Name(), err))
	}
	Register(la)

	//register match detail api
	ma := &MatchDetailApi{}
	if err := initOne(ma); err != nil {
		panic(fmt.Sprintf("init api[%s] failed: %s", ma.Name(), err))
	}
	Register(ma)

	//register douyu api
	da := &DouyuApi{}
	if err := initOne(da); err != nil {
		panic(fmt.Sprintf("init api[%s] failed: %s", da.Name(), err))
	}
	Register(da)
}

func initOne(a Api) error {
	section := a.Name()
	url := Acfg.String(section + "::url")
	if url == "" {
		return fmt.Errorf("api url empty")
	}

	method := Acfg.String(section + "::method")
	if method == "" {
		method = DefaultMethod
	}

	timeout := Acfg.DefaultInt(section+"::timeout", DefaultTimeOut)
	p := ParamRequired{
		Url:     url,
		Method:  method,
		Timeout: time.Duration(timeout) * time.Second,
	}

	return a.SetParamRequired(p)
}

func Register(a Api) {
	mu.Lock()
	defer mu.Unlock()

	if a == nil {
		panic("fail to register api hub, api nil!")
	}

	if _, dup := apis[a.Name()]; dup {
		panic(fmt.Sprintf("fail to register api[%s] twice", a.Name))
	}

	apis[a.Name()] = a
}

func GetSteamKey() string {
	i := rand.Intn(len(keys))
	return keys[i]
}

func Call(name string, args map[string]string) (string, error) {
	mu.RLock()
	api, ok := apis[name]
	mu.RUnlock()
	if !ok {
		return "", fmt.Errorf("unknown api %q (forgotten register?)", name)
	}

	return api.Search(context.Background(), args)
}

type ParamRequired struct {
	Method  string
	Url     string
	Timeout time.Duration
}

type ParamCustom map[string]string

type Api interface {
	//parseResp(*http.Response, error) (string, error)
	//generalCheck(*simplejson.Json) error
	//itemFilter(*simplejson.Json) bool
	Search(context.Context, map[string]string) (string, error)
	SetParamRequired(ParamRequired) error
	SetParamCustom(ParamCustom) error
	Name() string
	//CacheKey() string
}
