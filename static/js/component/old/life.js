
/*
直播页面的组件
*/ 
import Vue from 'vue/dist/vue.js';
import _ from 'lodash';
require('zepto');
let d3 = require('d3');

import './../../less/life.less';
import {HeroMap} from './../constants/hero';
import {FixedPoints} from './../constants/map';
import {lifeTpl} from './life_tpl';
import {mapTpl} from './map_tpl';
import {lifeDiffData} from './../mockup/data';

let localDevUrl = 'http://j:7788';
let remoteDevUrl = 'http://cq01-rdqa-dev017.cq01.baidu.com:8117';
let getLifeData = (url, callback) => {
    if (url === '') {
        url = localDevUrl;
        // url = remoteDevUrl;
    }
    $.ajax({
        url: url,
        type: 'get',
        async:false,
        dataType: 'jsonp',
        jsonp: "c",
        success: (data) => {
            if (data && data.result) {
                callback(data.result);
            } else {
                console.log('req error');
                callback({});
            }
        },
        error: (xhr,type) => {
            console.log('req error');
            callback({});
        }
    });
};


let lifeComponent = new Vue({
    el: '#life-vue',
    data: {
        top_match: {
            dire: [
                {hero_potrait: 'juggernaut'},{hero_potrait: 'juggernaut'},{hero_potrait: 'juggernaut'},{hero_potrait: 'juggernaut'},{hero_potrait: 'juggernaut'}
            ],
            radiant: [{hero_potrait: 'slardar'},{hero_potrait: 'slardar'},{hero_potrait: 'slardar'},{hero_potrait: 'slardar'},{hero_potrait: 'slardar'}],
            score: {
                dire: 0,
                radiant: 0,
                duration: {min:0,sec:0}
            }
        },
        matchArr: [],
        map: {
            title: '12412341',
            w: 300,
            h: 300,
            fixedPoi: FixedPoints,
            heros: {
                dire: [],
                radiant: []
            }
        },
        chart: {
            w: 234,
            h: 150
        }
    },
    created: function () {
        let me = this;
        // top match 整体数据呈现
        getLifeData('', (matchData) => {
            if (matchData && matchData.games) {
                if (matchData.games.length >= 1) {
                    let top_match = matchData.games[0];
                    me.top_match.match_id = top_match.match_id;
                    me.top_match.dire = [];
                    me.top_match.radiant = [];
                    top_match.players.map((val) => {
                        if (val.team === 0) {
                            me.top_match.dire.push({
                                hero_potrait: HeroMap[val.hero_id.toString()]
                            });
                        }
                        if (val.team === 1) {
                            me.top_match.radiant.push({
                                hero_potrait: HeroMap[val.hero_id.toString()]
                            });
                        } 
                    });
                    me.top_match.score = {
                        dire: top_match.radiant_series_wins,
                        radiant:top_match.radiant_series_wins
                    };
                    me.top_match.score.duration = {
                        min: _.floor(top_match.scoreboard.duration / 60),
                        sec: _.floor(top_match.scoreboard.duration % 60)
                    };

                    me.map.heros.dire = top_match.scoreboard.dire.players.map((val) => {
                        return me.formatPoi(val)
                    });
                    me.map.heros.radiant = top_match.scoreboard.radiant.players.map((val) => {
                        return me.formatPoi(val)
                    });
                }
            }
            me.pollingData();
        });
        
        setTimeout(() => {
            me.drawLineChart(lifeDiffData);
        }, 500);
    },
    methods: {
        drawLineChart: function (data) {
            let maxNum = d3.max(data, (d) => { return d.pv; });
            let minNum = d3.min(data, (d) => { return d.pv; });
            let width = this.chart.w;
            let height = this.chart.h;
            
            let x = d3.scale.linear()
            .domain([0, 31])
            .range([0, width]);
                
            let y = d3.scale.linear()
                .domain([minNum, maxNum])
                .range([height, 0]);
            let xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(10);
            let yAxis = d3.svg.axis()
                .scale(y)
                .orient('left')
                .ticks(10);
            let line = d3.svg.line()
                .x((d) => { return x(d.date);})
                .y((d) => { return y(d.pv);})
                .interpolate('monotone');

            let svgRoot = d3.select('.gold-exp-diff')
                .append('svg')
                .attr('width', width)
                .attr('height', height);

            let svg = svgRoot.append('g')
                .attr('class', 'content')
                .attr('transform', 'translate(1,1)');

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height / 2 + ')')
                .attr('stroke', '#FFF')
                .call(xAxis)
                // .append('text')
                // .text('日期')
                // .attr('transform', 'translate(' + (width - 20) + ', 0)');

            svg.append('g')
                .attr('class', 'y axis')
                .call(yAxis)
                // .append('text')
                // .text('次/天');

            let path = svg.append('path')
                .attr('class', 'line')
                .attr('d', line(data));
        },
        //  轮询获取数据
        pollingData: function () {
            let me = this;
            // me.pollTimer = setInterval(() => {
            //     getLifeData(`${localDevUrl}?match_id=${me.top_match.match_id}`, (matchData) => {
            //         if (matchData && matchData.games) {
            //             let top_match = matchData.games;
            //             if (top_match.length >= 1) {
            //                 top_match = matchData.games[0];
            //                 me.map.heros.dire = top_match.scoreboard.dire.players.map((val) => {
            //                     return me.formatPoi(val)
            //                 });
            //                 me.map.heros.radiant = top_match.scoreboard.radiant.players.map((val) => {
            //                     return me.formatPoi(val)
            //                 });
            //             }
            //         }
            //     });
            //     console.log('轮询打点');
            // }, 5000)
        },
        formatPoi: (hero) => {
            let middleX = 8192;
            let middleY = 8192;
            let w = 300;
            let h = 300;
            let factor = 16384 / w;
            let result = {};
            result.w = 20;
            result.id = hero.hero_id;
            result.name = `${HeroMap[hero.hero_id.toString()]}_Minimap_icon`
            result.x = ((-hero.position_x + middleX) / factor);
            result.y = (h - (hero.position_y + middleY ) / factor);
            result.cx = result.x + result.w / 2;
            result.cy = result.y + result.w / 2;
            return result;
        }
    },
    components: {
        'life-map': mapTpl,
        'life-show': lifeTpl
    }
});
