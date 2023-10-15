package storage

import (
	"fmt"

	"github.com/astaxie/beego/cache"
)

var (
	Cache cache.Cache
)

func init() {
	c, err := cache.NewCache("memory", `{"interval":30}`)
	if err != nil {
		panic(fmt.Sprintf("init cache error: %s", err))
	}

	Cache = c
}
