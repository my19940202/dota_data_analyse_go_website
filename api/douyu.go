package api

import (
	"context"
	"errors"
	"io/ioutil"
	"net/http"

	log "github.com/astaxie/beego/logs"
	"github.com/bitly/go-simplejson"
)

var (
	ErrDouyuLiveRoomEmpty = errors.New("response from douyu return 0 live rooms")
)

type DouyuApi struct {
	http.Client
	ParamRequired
}

func (da *DouyuApi) SetParamRequired(p ParamRequired) error {
	da.ParamRequired = p
	return nil
}

func (da *DouyuApi) SetParamCustom(p ParamCustom) error {
	return nil
}

func (a *DouyuApi) Name() string {
	return "Douyu"
}

func (da *DouyuApi) Search(ctx context.Context, args map[string]string) (string, error) {
	req, err := http.NewRequest(da.Method, da.Url, nil)
	if err != nil {
		return "", err
	}

	qs := req.URL.Query()
	if len(args) > 0 {
		for p, v := range args {
			qs.Set(p, v)
		}
	}
	req.URL.RawQuery = qs.Encode()

	ctx, cancel := context.WithTimeout(ctx, da.ParamRequired.Timeout)
	defer cancel()
	req = req.WithContext(ctx)
	res, err := da.httpDo(req)
	if err != nil {
		return "", err
	}

	return res, nil
}

func (da *DouyuApi) httpDo(req *http.Request) (string, error) {
	c := make(chan error, 1)
	var res string
	var err error
	//start a goroutine to send request to remote addr and parse the response
	go func() {
		res, err = da.parseResp(da.Do(req))
		c <- err
	}()

	select {
	case <-req.Context().Done():
		//wait for parse func finish
		<-c
		return "", req.Context().Err()
	case err = <-c:
		return res, err
	}
}

func (da *DouyuApi) parseResp(resp *http.Response, err error) (string, error) {
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	js, err := simplejson.NewJson(body)
	if err != nil {
		return "", ErrTrans2JsonFail
	}

	//check resp
	if err := da.generalCheck(js); err != nil {
		return "", err
	}

	data, ok := js.CheckGet("data")
	arr := js.Get("data").MustArray()
	if len(arr) == 0 || !ok {
		return "", ErrDouyuLiveRoomEmpty
	}

	resJson := simplejson.New()
	remains := []map[string]interface{}{}
	for i := 0; i < len(arr); i++ {
		g := data.GetIndex(i)
		s, _ := g.Encode()
		log.Debug(string(s))
		if da.itemFilter(g) {
			log.Debug(i, "th res filtered")
			continue
		}
		//log.Critical(i, "th res accpeted")

		if e := da.packResult(g); e != nil {
			log.Debug("pack result for DouyuApi fail:%s", e)
			continue
		}

		remains = append(remains, g.Interface().(map[string]interface{}))
		//break
	}

	resJson.Set("liverooms", remains)
	res, err := resJson.Encode()
	if err != nil {
		return "", err
	}
	return string(res), nil
}

func (da *DouyuApi) generalCheck(js *simplejson.Json) error {
	//check resp
	status, err := js.Get("error").Int()
	if err != nil {
		return err
	}

	if status != 0 {
		return ErrBadResultFormat
	}

	_, ok := js.CheckGet("data")
	if !ok {
		return ErrBadResultFormat
	}

	return nil
}

func (da *DouyuApi) itemFilter(js *simplejson.Json) bool {
	/*
		gm := js.MustMap()
			if len(gm) <= FieldsNumThrd {
				log.Debug("live game not enough fields[%d], filtered!", len(gm))
				//log.Error("live game not enough fields[%d], filtered!", len(gm))
				return true
			}

				if _, ok := gm["radiant_team"]; !ok {
					log.Debug("no radiant team filtered!")
					return true
				}

				if _, ok := gm["scoreboard"]; !ok {
					log.Debug("no scoreboard filtered!")
					return true
				}

				tier := js.Get("league_tier").MustInt()
				switch tier {
				case TierAmateur:
					log.Debug("tier [%d] filtered!", tier)
					return true
				case TierProfessional:
					sp := js.Get("spectators").MustInt()
					if sp <= SpectorThrd {
						log.Debug("Spector %d filtered!", sp)
						return true
					}
				case TierPremier:
					break
				default:
					log.Debug("tier %d not recognized", tier)
					return true
				}
	*/
	return false
}

func (da *DouyuApi) packResult(js *simplejson.Json) error {
	js.Del("room_id")
	js.Del("room_src")
	js.Del("vertical_src")
	js.Del("isVertical")
	js.Del("cate_id")
	js.Del("owner_uid")
	js.Del("nickname")
	js.Del("game_url")
	js.Del("game_name")
	js.Del("avatar")
	js.Del("avatar_mid")
	js.Del("avatar_small")
	js.Del("jumpUrl")
	js.Del("icon_data")

	return nil
}
