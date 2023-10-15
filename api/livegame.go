package api

import (
	"context"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"

	log "github.com/astaxie/beego/logs"
	"github.com/bitly/go-simplejson"
)

//
//type LiveGameResult struct {
//	Duration float64
//	Dire     struct {
//		Score   int
//		Gold    int
//		Players struct {
//			Player_slot int
//			Account_id  int
//			Hero_id     int
//		}
//	}
//}

var (
	ErrLiveGameListEmpty = errors.New("response from steam api return 0 live games")
)

type LiveApi struct {
	http.Client
	ParamRequired
	//parsedRes *simplejson.Json
	//backupRes *simplejson.Json
}

func (la *LiveApi) SetParamRequired(p ParamRequired) error {
	la.ParamRequired = p
	return nil
}

func (la *LiveApi) SetParamCustom(p ParamCustom) error {
	return nil
}

const (
	TierAmateur      int = 1
	TierProfessional int = 2
	TierPremier      int = 3
	FieldsNumThrd    int = 15
	SpectorThrd      int = 200
	PlayerNumPerTeam int = 5
)

func (a *LiveApi) Name() string {
	return "GetLiveLeagueGames"
}

func (la *LiveApi) Search(ctx context.Context, args map[string]string) (string, error) {
	req, err := http.NewRequest(la.Method, la.Url, nil)
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

	ctx, cancel := context.WithTimeout(ctx, la.ParamRequired.Timeout)
	defer cancel()
	req = req.WithContext(ctx)
	res, err := la.httpDo(req)
	if err != nil {
		return "", err
	}

	return res, nil
}

func (la *LiveApi) httpDo(req *http.Request) (string, error) {
	c := make(chan error, 1)
	var res string
	var err error
	//start a goroutine to send request to remote addr and parse the response
	go func() {
		res, err = la.parseResp(la.Do(req))
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

func (la *LiveApi) parseResp(resp *http.Response, err error) (string, error) {
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
	if err := la.generalCheck(js); err != nil {
		return "", err
	}

	games, ok := js.Get("result").CheckGet("games")
	if !ok {
		return "", ErrBadResultFormat
	}

	arr := games.MustArray()
	if len(arr) == 0 {
		return "", ErrLiveGameListEmpty
	}

	resJson := simplejson.New()
	remains := []map[string]interface{}{}
	for i := 0; i < len(arr); i++ {
		g := games.GetIndex(i)
		//s, _ := g.Encode()
		//log.Debug(string(s))
		if la.itemFilter(g) {
			log.Debug(i, "th res filtered")
			continue
		}
		//log.Critical(i, "th res accpeted")

		if e := la.packResult(g); e != nil {
			log.Debug("pack result for LiveApi fail:%s", e)
			continue
		}

		remains = append(remains, g.Interface().(map[string]interface{}))
		//break
	}

	resJson.Set("games", remains)
	res, err := resJson.Encode()
	if err != nil {
		return "", err
	}
	return string(res), nil
}

func (la *LiveApi) generalCheck(js *simplejson.Json) error {
	//check resp
	status, err := js.Get("result").Get("status").Int()
	if err != nil {
		return err
	}

	if status != http.StatusOK {
		return HttpStatusCodeToErr(status)
	}

	return nil
}

func (la *LiveApi) itemFilter(js *simplejson.Json) bool {
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
	return false
}

func (la *LiveApi) packResult(js *simplejson.Json) error {

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
		return fmt.Errorf("dire [%d] players num not 5!", plen)
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

	return nil
}
