package routers

import (
	"dota666/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.HomeController{})
	beego.Router("/home:suf:string", &controllers.HomeController{})
	beego.Router("/recentgame", &controllers.RecentGameController{})
	beego.Router("/getRecentGames", &controllers.RecentGameController{})
	beego.Router("/live", &controllers.LiveGameController{})
	beego.Router("/contact_us:suf:string", &controllers.ContactController{}, "get,post:DefFunc")
	beego.Router("/match_detail", &controllers.MatchDetailController{})
	beego.Router("/getMatchDetail", &controllers.MatchDetailController{}, "get,post:DataFunc")
	beego.Router("/liverooms", &controllers.DouyuRoomController{})
}
