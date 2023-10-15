package main

import (
	_ "dota666/routers"

	"github.com/astaxie/beego"
	log "github.com/astaxie/beego/logs"
)

func init() {
	log.SetLogger(log.AdapterMultiFile, `{"filename":"log/web_serv.log","separate":["critical", "warning", "notice", "debug"]}`)
}

func main() {
	beego.Run()
}
