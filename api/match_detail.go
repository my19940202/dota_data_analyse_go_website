package api

import (
	"context"
	"errors"
	"io/ioutil"
	"net/http"

	"github.com/bitly/go-simplejson"
)

var (
	ErrMatchNotFound = errors.New("match not found")
)

type MatchDetailApi struct {
	http.Client
	ParamRequired
	//parsedRes *simplejson.Json
	//backupRes *simplejson.Json
}

func (ma *MatchDetailApi) SetParamRequired(p ParamRequired) error {
	ma.ParamRequired = p
	return nil
}

func (ma *MatchDetailApi) SetParamCustom(p ParamCustom) error {
	return nil
}

//const ()

func (ma *MatchDetailApi) Name() string {
	return "GetMatchDetails"
}

func (ma *MatchDetailApi) Search(ctx context.Context, args map[string]string) (string, error) {
	req, err := http.NewRequest(ma.Method, ma.Url, nil)
	if err != nil {
		return "", err
	}

	qs := req.URL.Query()
	qs.Set("key", GetSteamKey())
	if len(args) > 0 {
		for p, v := range args {
			qs.Set(p, v)
		}
	}
	req.URL.RawQuery = qs.Encode()

	ctx, cancel := context.WithTimeout(ctx, ma.ParamRequired.Timeout)
	defer cancel()
	req = req.WithContext(ctx)
	res, err := ma.httpDo(req)
	if err != nil {
		return "", err
	}

	return res, nil
}

func (ma *MatchDetailApi) httpDo(req *http.Request) (string, error) {
	c := make(chan error, 1)
	var res string
	var err error
	//start a goroutine to send request to remote addr and parse the response
	go func() {
		res, err = ma.parseResp(ma.Do(req))
		c <- err
	}()

	select {
	case <-req.Context().Done():
		<-c
		return "", req.Context().Err()
	//wait for parse func finish
	case err = <-c:
		return res, err
	}
}

const (
	PlayersNum int = 10
)

func (ma *MatchDetailApi) parseResp(resp *http.Response, err error) (string, error) {
	if err != nil {
		return "", err
	}
	//
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
	if err := ma.generalCheck(js); err != nil {
		return "", err
	}

	players, ok := js.Get("result").CheckGet("players")
	if !ok {
		return "", ErrBadResultFormat
	}

	arr := players.MustArray()
	if len(arr) != PlayersNum {
		return "", ErrBadResultFormat
	}

	//resJson := simplejson.New()
	//remains := []map[string]interface{}{}

	//for i := 0; i < len(arr); i++ {
	//	g := games.GetIndex(i)
	//	s, _ := g.Encode()
	//	log.Debug(string(s))
	//	if la.itemFilter(g) {
	//		log.Debug(i, "th res filtered")
	//		continue
	//	}
	//log.Critical(i, "th res accpeted")

	//if la.itemFilter(g) {
	//	log.Debug("match detail res filtered")
	//	return "", ErrMatchNotFound
	//}

	//if e := la.packResult(g); e != nil {
	//	log.Debug("pack result for MatchDetailApi fail:%s", e)
	//	continue
	//}

	////remains = append(remains, g.Interface().(map[string]interface{}))

	//resJson.Set("games", remains)
	res, err := js.Encode()
	if err != nil {
		return "", err
	}
	return string(res), nil
}

func (la *MatchDetailApi) generalCheck(js *simplejson.Json) error {
	//check resp result field
	_, ok := js.CheckGet("result")
	if !ok {
		return ErrBadResultFormat
	}

	//check resp error field
	_, bad := js.Get("result").CheckGet("error")
	if bad {
		return ErrMatchNotFound
	}

	return nil
}

func (la *MatchDetailApi) itemFilter(js *simplejson.Json) bool {
	return false
}

func (la *MatchDetailApi) packResult(js *simplejson.Json) error {

	/*
		dura := js.GetPath("scoreboard", "duration").MustFloat64()
		js.SetPath([]string{"duration"}, dura)

		//set radiant scoreboard & sum gold
		rad := js.GetPath("scoreboard", "radiant")
		players := rad.Get("players")
		plen := len(players.MustArray())
		if plen != PlayerNumPerTeam {
			return fmt.Errorf("radiant [%d] players num not 5!", plen)
		}
		radGold := 0
		for i := 0; i < plen; i++ {
			gold := players.GetIndex(i).Get("net_worth").MustInt()
			radGold += gold
		}
		rad.Set("team_name", js.GetPath("radiant_team").Get("team_name").MustString())
		rad.Set("team_logo", js.GetPath("radiant_team").Get("team_logo").MustInt64())
		rad.Set("team_id", js.GetPath("radiant_team").Get("team_id").MustInt())
		rad.Del("abilities")
		js.Set("radiant", rad.Interface().(map[string]interface{}))
		js.SetPath([]string{"radiant", "gold"}, radGold)

		//set dire scoreboard & sum gold
		dire := js.GetPath("scoreboard", "dire")
		players = dire.Get("players")
		plen = len(players.MustArray())
		if plen != PlayerNumPerTeam {
			return fmt.Errorf("dire players num not 5!")
		}
		direGold := 0
		for i := 0; i < plen; i++ {
			gold := players.GetIndex(i).Get("net_worth").MustInt()
			direGold += gold
		}
		dire.Del("abilities")
		dire.Set("team_name", js.GetPath("dire_team").Get("team_name").MustString())
		dire.Set("team_logo", js.GetPath("dire_team").Get("team_logo").MustInt64())
		dire.Set("team_id", js.GetPath("dire_team").Get("team_id").MustInt())

		js.Set("dire", dire.Interface().(map[string]interface{}))
		js.SetPath([]string{"dire", "gold"}, direGold)

		//delete none use filelds
		js.Del("players")
		js.Del("scoreboard")
		js.Del("dire_team")
		js.Del("radiant_team")

	*/
	return nil
}
