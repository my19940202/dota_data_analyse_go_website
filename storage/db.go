package storage

import (
	"encoding/json"
	"fmt"
	"math"
	"sort"

	"github.com/astaxie/beego/config"
	log "github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

var (
	DB    orm.Ormer
	Dbcfg config.Configer
)

//Event table schema
type Event struct {
	Id      uint64
	MatchId uint64 `orm:"column(match_id)"`
	Frame   int64  `orm:"column(frame)"`
	Source  string `orm:"column(source)"`
	Target  string `orm:"column(target)"`
	Action  string `orm:"column(action)"`
	Value   string `orm:"column(value)"`
}

func (e *Event) TableName() string {
	return "events"
}

//
//func (e *Event) TableUnique() [][]string {
//	return [][]string{[]string{"match_id", "frame"}}
//}
//
//game info table schema
type Game struct {
	MatchId        uint64 `orm:"pk";column(match_id)"`
	LeagueId       uint32 `orm:"column(league_id)"`
	RadiantTag     string `orm:"column(radiant_team_tag)"`
	DireTag        string `orm:"column(dire_team_tag)"`
	Winner         int32  `orm:"column(winner)"`
	Duration       int32  `orm:"column(duration)"`
	StartTime      int32  `orm:"column(start_time)"`
	FirstBloodTime int32  `orm:"column(first_blood_time)"`
	UploadTime     int64  `orm:"column(upload_time)"`
	GameMode       int32  `orm:"column(game_mode)"`
	RadiantCaptain string `orm:"column(radiant_captain)"`
	DireCaptain    string `orm:"column(dire_captain)"`
	Parsed         int32  `orm:"column(parsed)"`
	EndTime        int64  `orm:"column(end_time)"`
	RadiantId      uint32 `orm:"column(radiant_team_id)"`
	DireId         uint32 `orm:"column(dire_team_id)"`
	SeriesId       uint64 `orm:"column(series_id)"`
	SeriesType     int    `orm:"column(series_type)"`
	GameIdx        int    `orm:"column(game_idx)"`
}

func (g *Game) TableName() string {
	return "game_info"
}

type Series struct {
	Id         uint64
	SeriesId   uint64 `orm:"column(series_id)"`
	SeriesType int    `orm:"column(series_type)"`
	MatchId    uint64 `orm:"column(match_id)"`
	LeagueId   uint32 `orm:"column(league_id)"`
	WinnerTag  string `orm:"column(winner_tag)"`
	LoserTag   string `orm:"column(loser_tag)"`
	GameTime   int    `orm:"column(game_time)"`
	WinnerId   int    `orm:"column(winner_id)"`
	LoserId    int    `orm:"column(loser_id)"`
	Tier       int    `orm:"column(tier)"`
	Cluster    int    `orm:"column(cluster)"`
	Parsed     int    `orm:"column(parsed)"`
}

func (g *Series) TableName() string {
	return "series_game"
}

func GetRecentGameInfoFromNewDB(num, offset int) (string, error) {
	db := orm.NewOrm()
	db.Using("new")
	var series []Series

	qs := db.QueryTable("series_game")

	_, err := qs.OrderBy("-SeriesId", "MatchId").Limit(num, 2*offset).All(&series)
	if err != nil {
		return "", err
	}

	return "", nil
}

func GetRecentGameInfo(num, offset int) (string, error) {
	var games []Game
	qs := DB.QueryTable("game_info")

	//cnt, err := qs.Exclude("LeagueId", 4177).Distinct().Limit(num, offset).OrderBy("-SeriesId").ValuesFlat(&list, "SeriesId")

	_, err := qs.Exclude("LeagueId", 4177).OrderBy("-SeriesId", "-MatchId").Limit(num, 2*offset).All(&games)
	if err != nil {
		return "", err
	}

	out := transGame(games)

	js, _ := json.Marshal(out)
	return string(js), nil
}

//temporally
func sameSeries(g1 Game, g2 Game) bool {
	if g1.LeagueId != g2.LeagueId {
		return false
	}

	if g1.SeriesId != 0 && g2.SeriesId != 0 && g1.SeriesId == g2.SeriesId {
		return true
	}

	if g1.DireId == g2.DireId && g1.RadiantId == g2.RadiantId {
		return true
	}

	if g1.DireId == g2.RadiantId && g1.RadiantId == g2.DireId {
		return true
	}

	return false
}

func mergeOneDaySeries(gs []Game) []gameOutput {
	log.Debug("merge day games:", gs)
	out := []gameOutput{}
	used := make(map[uint64]bool)
	for i, gi := range gs {
		if _, ok := used[gi.MatchId]; ok {
			continue
		}

		matchIds := []int{}
		var winTeam, loseTeam string
		var winTeamId, loseTeamId uint32

		if gi.Winner == 2 {
			winTeam = gi.RadiantTag
			winTeamId = gi.RadiantId
			loseTeam = gi.DireTag
			loseTeamId = gi.DireId
		} else {
			winTeam = gi.DireTag
			winTeamId = gi.DireId
			loseTeam = gi.RadiantTag
			loseTeamId = gi.RadiantId
		}
		wins := 1
		loses := 0
		matchIds = append(matchIds, int(gi.MatchId))
		used[gi.MatchId] = true

		for _, gj := range gs[i+1:] {
			//间隔大于24小时的认为不是一轮系列赛,由于match_Id和比赛时间单调递增关系，可以直接break
			if math.Abs(float64(gi.EndTime-gj.EndTime)) > 24*60*60 {
				break
			}
			//相同系列赛合并
			if !sameSeries(gi, gj) {
				continue
			}

			used[gj.MatchId] = true
			matchIds = append(matchIds, int(gj.MatchId))
			if (gj.Winner == 2 && winTeamId == gj.RadiantId) || (gj.Winner == 3 && winTeamId == gj.DireId) {
				wins += 1
			} else {
				loses += 1
				if loses > wins {
					//swap win team tag
					tmpTeam := winTeam
					winTeam = loseTeam
					loseTeam = tmpTeam

					//swap win team id
					tmpId := winTeamId
					winTeamId = loseTeamId
					loseTeamId = tmpId

					//swap win/loses stats
					tmp := wins
					wins = loses
					loses = tmp
				}
			}
		}

		//pack result
		sort.Sort(sort.IntSlice(matchIds))
		o := gameOutput{
			LeagueId: gi.LeagueId,
			Winner: Team{
				TeamId: winTeamId,
				Name:   winTeam,
				Score:  wins,
			},
			Loser: Team{
				TeamId: loseTeamId,
				Name:   loseTeam,
				Score:  loses,
			},

			MatchIds: matchIds,
			GameTime: gi.EndTime,
		}
		out = append(out, o)
	}
	return out
}

func transGame(gs []Game) []gameOutput {
	out := []gameOutput{}
	if len(gs) > 0 {
		out = append(out, mergeOneDaySeries(gs)...)
	}
	return out
}

type Team struct {
	TeamId uint32
	Name   string
	Score  int
}

type gameOutput struct {
	//SeriesId        uint64 `orm:"pk";column(match_id)"`
	LeagueId uint32
	Region   uint32
	Winner   Team
	Loser    Team
	MatchIds []int
	GameTime int64
}

func init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	cfg, err := config.NewConfig("ini", "conf/db.conf")
	if err != nil {
		panic(fmt.Sprintf("load db conf fail: %s", err))
	}

	Dbcfg = cfg
	orm.Debug = Dbcfg.DefaultBool("debug", false)

	//begin register default db
	dbAddr := Dbcfg.String("dota::db_host")
	if dbAddr == "" {
		panic(fmt.Sprintf("register default db fail: %s", err))
	}
	dbType := Dbcfg.DefaultString("dota::db_type", "mysql")
	orm.RegisterDataBase("default", dbType, dbAddr)

	//begin register new db
	dbAddr = Dbcfg.String("dota_new::db_host")
	if dbAddr == "" {
		panic(fmt.Sprintf("register new db fail: %s", err))
	}
	dbType = Dbcfg.DefaultString("dota_new::db_type", "mysql")
	orm.RegisterDataBase("new", dbType, dbAddr)

	//begin register models
	orm.RegisterModel(new(Game), new(Event), new(Series))

	//new ormer
	DB = orm.NewOrm()
	DB.Using("default")
}
