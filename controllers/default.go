package controllers

import "github.com/astaxie/beego"

type ContactController struct {
	beego.Controller
}

func (c *ContactController) DefFunc() {
	c.TplName = "contact_us.html"
}
