package controllers

import (
	"dota666/api"
	"dota666/storage"
	"time"

	"github.com/astaxie/beego"
	log "github.com/astaxie/beego/logs"
)

type HomeController struct {
	beego.Controller
}

func (c *HomeController) Get() {
	c.TplName = "home_new.html"
}

type RecentGameController struct {
	beego.Controller
}

const (
	PageSize int = 20
)

func (c *RecentGameController) Get() {
	c.EnableRender = false

	page, _ := c.GetInt("pageidx", 0)
	offset := page * PageSize
	num, _ := c.GetInt("size", PageSize)

	res, err := storage.GetRecentGameInfo(num, offset)
	if err != nil {
		log.Error("get recent game error: %s", err)
		c.Ctx.WriteString("internal error")
	}

	c.Ctx.WriteString(res)

}

type LiveGameController struct {
	beego.Controller
}

func (c *LiveGameController) Get() {
	c.EnableRender = false

	if storage.Cache.IsExist("GetLiveLeagueGames") {
		c.Ctx.WriteString(storage.Cache.Get("GetLiveLeagueGames").(string))
		return
	}

	var res string
	g, err := api.Call("GetLiveLeagueGames", nil)
	if err != nil {
		log.Warn("call live game api error: %s", err)
		res = "internal error"
	} else {
		res = g
		storage.Cache.Put("GetLiveLeagueGames", g, 15*time.Second)
	}
	c.Ctx.WriteString(res)
}

type DouyuRoomController struct {
	beego.Controller
}

func (d *DouyuRoomController) Get() {
	d.EnableRender = false

	if storage.Cache.IsExist("Douyu") {
		d.Ctx.WriteString(storage.Cache.Get("Douyu").(string))
		return
	}

	var res string
	g, err := api.Call("Douyu", nil)
	if err != nil {
		log.Warn("call douyu game api error: %s", err)
		res = "internal error"
	} else {
		res = g
		storage.Cache.Put("Douyu", g, 15*time.Second)
	}
	d.Ctx.WriteString(res)
}
