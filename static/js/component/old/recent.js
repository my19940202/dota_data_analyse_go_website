import './../../less/home_new.less';
import Vue from 'vue/dist/vue.js';
require('zepto');
import _ from 'lodash';

// 页面组件
import {recentItem, recentWrapper} from './recent_tpl';

// 近期比赛组件
let recentComponent = new Vue({
    el: '#recent-vue',
    data: {
        title: '近期热门',
        tabState: [1, 0],
        list: {
            pre: [],
            pro: []
        }
    },
    created: function () {
        let me = this;
        $.getJSON('/recentgame', function(data){
            if (data) {
                me.list.pre = data;
                me.list.pro = data;
            } else {
                alert('req error');
            }
        })
    },
    methods: {
        tabSwitch: function (tab_idx) {
            // let tab_idx_now = 0;
            this.tabState = tab_idx ? [0,1]: [1,0];
        },
        getState: () => {
            return this.tabState;
        },
    },
    components: {
        'recent-item': recentItem,
        'recent-wrapper': recentWrapper
    }
});

export {}