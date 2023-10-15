package controllers

import (
	"dota666/api"
	"dota666/storage"

	"github.com/astaxie/beego"
)

type MatchDetailController struct {
	beego.Controller
}

func (c *MatchDetailController) Get() {
	c.TplName = "match_detail.html"
}

func (c *MatchDetailController) DataFunc() {
	c.EnableRender = false

	if storage.Cache.IsExist("GetMatchDetails") {
		c.Ctx.WriteString(storage.Cache.Get("GetMatchDetails").(string))
	}

	var res string
	var params = make(map[string]string)
	id := c.GetString("match_id")
	params["match_id"] = id
	g, err := api.Call("GetMatchDetails", params)
	if err != nil {
		res = "internal error"
	} else {
		res = g
		//storage.Cache.Put("GetMatchDetails", g, 15*time.Second)
	}
	c.Ctx.WriteString(res)
}
