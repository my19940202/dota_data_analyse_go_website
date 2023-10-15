/*
     详情页 from 列表页跳转
*/

// 基础库文件
import './../less/match_detail.less';
import Vue from 'vue/dist/vue.js';
import _ from 'lodash';
import {matchDetailSelect} from './component/match_detail';
import {recentItem} from './component/recent_tpl';
import './component/base';


let recentGameDataFormat = (data) => {
    let keyArr = ['match_id', 'league_id', 'radiant_team_tag', 'dire_team_tag', 'winner', 'end_time', 'duration', 'start_time', 'upload_time', 'radiant_team_id', 'dire_team_id'];
    let formattedData = {};
    let now = _.now();
    formattedData = data.map((val) => {
        let obj = {};
        for (var i = val.length - 1; i >= 0; i--) {
            if (keyArr[i] === 'upload_time') {
                obj[keyArr[i]] = ((now / 1000 - val[i]) / 3600).toFixed(1);
            } else {
                obj[keyArr[i]] = val[i];
            }
        }
        return obj;
    });

    return formattedData
};

Vue.component('select-component', matchDetailSelect);
Vue.component('result-item', recentItem);

// select 组件的组成
let selectComponent = new Vue({
    el: '#content',
    data: {
        title: '近期热门',
        menu_state: [0, 0],
        // 输入和结果的展现状态
        input_show: [false, true],
        selectlist: ['比赛ID', '战队', '英雄', '联赛'],
        resultlist: ['比赛ID', '战队', '英雄', '联赛'],
        select_state: [],
        result_data: [],
        req_path: [
            '',
            '/getSearchResult/?searchType=2',
            '/getSearchResult/?searchType=3',
            '/getSearchResult/?searchType=4'
        ]
    },
    created: function () {
    },
    methods: {
        toggle: function (idx) {
            let me = this;
            let tmpArr = me.menu_state.concat();
            tmpArr[idx] = tmpArr[idx] ? 0:1;
            me.menu_state = tmpArr;

        },
        // 使用这样的形式会拿不到this
        test: () => {
            // this is undefined
            console.log('fucker')
        },
        handle_blur: function () {
            let me = this;
            me.menu_state = [0, 0];
        },
        handle_li_click: function (idx, result) {
            let me = this;
            if (!result) {
                me.select_state[0] = idx + 1;
                if (idx === 0) {
                    me.input_show = [true, false];
                } else {
                    me.input_show = [false, true];
                    me.req_path[idx] && me.req(me.req_path[idx], (data) => {
                        me.resultlist = me.dataFormat(data, idx);
                    })
                }
            } else {
                // 选中后关闭下拉dropdown menu
                me.menu_state = [0, 0];
                me.select_state[1] = result;
                if (_.isArray(result)) {
                    me.select_state[1] = result[0];
                }
                console.log(me.select_state)
            }
        },
        handle_result_req: function () {
            let me = this;
            let url = `/returnSearchResult/?search_type=${me.select_state[0]}&value=${me.select_state[1]}`;
            me.req(url, (data) => {
                me.result_data = recentGameDataFormat(data['result']);
            })
        },
        req: (url, callback) => {
            $.ajax({
                type: 'GET',
                url: url,
                contentType: 'application/json',
                success: (data) => {
                    if (data) {
                        callback(data);
                    } else {
                        alert('server error', data)
                    }
                },
                error: function(xhr, type){
                    alert('server error!', type)
                }
            });
        },
        dataFormat: (data, dataKind) => {
            // data = data.map((val) => {
            //     if (dataKind === 2
            //         && val[0].match('npc_dota_hero')) {
            //         val = val[0].replace('npc_dota_hero_', '');
            //     }
            //     return val;
            // });
            return data;
        }
    }
});

