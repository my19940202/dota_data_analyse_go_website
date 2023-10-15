/**
 * @file index page
 * @author xishengbo@gmail.com
 */

import throttle from 'lodash/function/throttle';
import date from 'lodash/date';
import {base} from './../util/base';

let recentItem = {
    props: ['recent'],
    template: `
        <div class="recent-cell">
            <div class="league-logo">
                <img onerror="ifImgNotExist(this, '175x45')" :src="getImgUrl('league', recent.LeagueId)" />
            </div>
            <div class="league-info">
                <div>{{recent.Winner.Name}}</div>
                <div>俄罗斯</div>
            </div>
            <div class="league-time">
                <div>已完成</div>
                <div>大约{{formatTime(recent.GameTime)}}前</div>
            </div>
            <div class="league-result">
                <div>
                    <span>{{recent.Winner.Score}}</span> - 
                    <span>{{recent.Loser.Score}}</span>
                </div>
                <div>winner</div>
            </div>
            <div class="league-teams">
                <div>
                    <img onerror="ifImgNotExist(this, '30x20')"
                        :src="getImgUrl('team', recent.Winner.TeamId)" height="20" width="30" />
                    {{recent.Winner.Name}}
                    <i class="fa fa-trophy" aria-hidden="true"></i>
                </div>
                <div>
                    <img onerror="ifImgNotExist(this, '30x20')"
                        :src="getImgUrl('team', recent.Loser.TeamId)" height="20" width="30">
                    {{recent.Loser.Name}}
                </div>
            </div>
            <div class="league-round">
                <a v-for="(index, item) in recent.MatchIds" :href="'/match_detail?match_id=' + item">{{index + 1}}</a>
            </div>
        </div>
    `.replace(/\s+/g, ' '),
    methods: {
        // 处理时间格式
        formatTime: (unix_time) => {
            // 20m前(< 60m) 2h(< 24h) 2d(< 30d) 1m(< 12m) 
            let diff = Math.round(date.now() / 1000)- unix_time;
            let result = '';
            if (diff < 60) {
                result = `${diff}秒`;
            } else if(diff < 60 * 60) {
                result = `${Math.round(diff / 60)}分钟`;
            } else if(diff < 60 * 60 * 12) {
                result = `${Math.round(diff / 60 / 60)}小时`;
            } else {
                result = `${Math.round(diff / 60 / 60 / 24)}天`;
            }
            return result;
        },
        getImgUrl: base.getImgUrl
    }
};

let recentWrapper = {
    template: `
        <div class="row title-header">
            <div class="title">{{title}}</div>
            <div class="tab">
                <span :class="[state[0] ? 'under-line' : '']" @click="tab(0)">Premium</span> / 
                <span :class="[state[1] ? 'under-line' : '']" @click="tab(1)">Professional</span>
            </div>
        </div>
        <div class="row recent">
            <recent-item v-show="state[0]" v-for="item in list.pre" :recent="item"></recent-item>
            <recent-item v-show="state[1]" v-for="item in list.pro" :recent="item"></recent-item>
        </div>
    `.replace(/\s+/g, ' '),
    components: {
        'recent-item': recentItem
    },
    created: function () {
        this.req();
        if (!this.pagination) {
            this.bindEvent();
        }
    },
    methods: {
        tab: function (tab_idx) {
            // let tab_idx_now = 0;
            this.state = tab_idx ? [0, 1]: [1, 0];
        },
        req: function () {
            let me = this;
            let url = `/recentgame?pageidx=${me.pageidx}&size=${me.size}`;
            $.getJSON(url, function(data) {
                if (data && data.length > 0) {
                    me.list.pre = me.list.pre.concat(data);
                    me.list.pro = me.list.pro.concat(data.slice(0,3));
                    me.pageidx++;
                } else {
                    console.log('req error', me.pageidx);
                }
            });
        },
        bindEvent: function () {
            let me = this;
            let screen_h = window.screen.availHeight;
            let checkScroll =  throttle(() => {
                let page_h = document.body.offsetHeight;
                if ((page_h - screen_h) < window.scrollY + 100) {
                    me.req();
                }
            }, 300);
            window.addEventListener('scroll', checkScroll);
        }
    },
    data: () => {
        return {
            pageidx: 0,
            size: 20,
            title: '近期热门',
            state: [1, 0],
            pagination: true,
            list: {
                pre: [],
                pro: []
            }
        };
    }
};

export {
    recentWrapper 
}