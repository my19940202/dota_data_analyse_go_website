
let echarts = require('echarts/lib/echarts');

import './../../less/live.less';
import {mapTpl} from './live-map';
import {scoreComponent} from './live-score';
import {rankListComponent} from './live-ranklist';
import {videoComponent} from './live-video';
// import {Video} from './video-list';
import {HeroMap} from './../constants/hero';
import {heroesMap} from './../constants/heroes';
import {liveData} from './../mockup/data';
import sortByOrder from 'lodash/collection/sortByOrder'
import {base} from './../util/base';

let liveTpl = {
    template: `
        <div class="live" v-show="show">
            <div class="title-header">直播</div>
            <div class="row live-show">
                <live-score
                    :duration="liveData[0].duration"
                    :radiant="liveData[0].radiant"
                    :dire="liveData[0].dire"
                    v-if="liveData[0]"
                    @click="accordion(0)">
                </live-score>
                <div class="live-detail" v-if="liveTabList[0]">
                    <map-component 
                        :radiant='liveData[0].radiant.mapData'
                        :dire='liveData[0].dire.mapData'>
                    </map-component>
                    <live-ranklist :players="liveData[0].sortedPlayers"></live-ranklist>
                    <live-video></live-video>
                </div>
                <live-score
                    :duration="liveData[1].duration"
                    :radiant="liveData[1].radiant"
                    :dire="liveData[1].dire"
                    v-if="liveData[1]"
                    @click="accordion(1)">
                </live-score>
                <div class="live-detail" v-if="liveTabList[1]">
                    <map-component 
                        :radiant='liveData[1].radiant.mapData'
                        :dire='liveData[1].dire.mapData'>
                    </map-component>
                    <live-ranklist :players="liveData[1].sortedPlayers"></live-ranklist>
                    <live-video></live-video>
                </div>
                <live-score
                    :duration="liveData[2].duration"
                    :radiant="liveData[2].radiant"
                    :dire="liveData[2].dire"
                    v-if="liveData[2]"
                    @click="accordion(2)">
                </live-score>
                <div class="live-detail" v-if="liveTabList[2]">
                    <map-component 
                        :radiant='liveData[2].radiant.mapData'
                        :dire='liveData[2].dire.mapData'>
                    </map-component>
                    <live-ranklist :players="liveData[1].sortedPlayers"></live-ranklist>
                    <live-video></live-video>
                </div>
            </div>
        </div>
    `.replace(/\s+/g, ' '),
    components: {
        'map-component': mapTpl,
        'live-score': scoreComponent,
        'live-ranklist': rankListComponent,
        'live-video': videoComponent
        // ,
        // 'video-component': Video
    },
    created: function () {
        let me = this;
        me.req();
        me.timer = setInterval(() => {
            console.log('live轮询');
            me.req();
        }, me.interval_gap);
        
        me.initEchart();
        me.liveData[0].sortedPlayers = me.sortPlaysByGlod(liveData[0]);
    },
    methods: {
        req: function () {
            let me = this;
            $.getJSON(me.url, function(data) {
                if (data && data.games && data.games.length >= 1) {
                    me.show = true;
                    let result = data.games;
                    me.formatData(result);
                } else {
                    me.show = false;
                    console.log('live req error');
                }
            });
            me.reqNum++;
        },
        getImgUrl: base.getImgUrl,
        formatPoi: (hero) => {
            let middleX = 8192;
            let middleY = 8192;
            let w = 306;
            let h = 300;
            let factor = 16384 / w;
            let result = {};
            result.w = 30;
            result.imgw = result.w - 6;
            result.r = result.w / 2;
            result.id = hero.hero_id;
            result.name = `${HeroMap[hero.hero_id.toString()]}_Minimap_icon`;
            result.x = ((hero.position_x + middleX) / factor).toFixed(2);
            result.y = ((-1 * hero.position_y + middleY ) / factor).toFixed(2);
            result.cx = result.x;
            result.cy = result.y;
            result.imgx = result.x - result.imgw / 2;
            result.imgy = result.y - result.imgw / 2;
            return result;
        },
        // 经济排行需要排序
        sortPlaysByGlod: function (val) {
            let me = this;
            let sortedPlayers = [];
            let tmpArr = val.dire.players.concat(val.radiant.players);
            tmpArr.forEach((val) => {
                sortedPlayers.push({
                    team: val.team,
                    hero_id: val.hero_id,
                    net_worth: val.net_worth
                });
            });
            sortedPlayers = sortByOrder(sortedPlayers, ['net_worth'], ['desc'])
            let max = sortedPlayers[0].net_worth;
            sortedPlayers.forEach((val) => {
                val.percent = (val.net_worth / max * 65).toFixed(2);
            });
            return sortedPlayers;
        },
        formatData: function (data) {
            let me = this;
            me.liveData = data;
            me.liveData.forEach((val) => {
                let goldSum = val.radiant.gold + val.dire.gold;
                let goldDiff = val.radiant.gold - val.dire.gold;
                val.radiant.ec_percent = (100 * val.radiant.gold / goldSum).toFixed(0);
                val.dire.ec_percent = 100 - val.radiant.ec_percent;
                me.chart.bar.series[0].data = [
                    {value: val.dire.gold, name: '夜魇'},
                    {value: val.radiant.gold, name: '天辉'},
                ];

                val.duration = `${Math.floor(val.duration / 60)}m${Math.floor(val.duration % 60)}s`;
                //  地图数据
                val.dire.mapData = [];
                val.radiant.mapData = [];
                let r_players = val.radiant.players;
                let d_players = val.dire.players;
                val.radiant.players.forEach((innerVal) => {
                    innerVal.team = 'radiant';
                    val.radiant.mapData.push(me.formatPoi(innerVal));
                });
                val.dire.players.forEach((innerVal) => {
                    innerVal.team = 'dire';
                    val.dire.mapData.push(me.formatPoi(innerVal));
                });
                val.sortedPlayers = me.sortPlaysByGlod(val);
            });
            // 经济排行数据
        },
        getEchartOption: () => {
            return {
                title : {
                    show: false,
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['夜魇','天辉']
                },
                series : [
                    {
                        name: ' 队伍经济值',
                        type: 'pie',
                        radius : '85%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'夜魇'},
                            {value:310, name:'天辉'}
                        ],
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal:{
                                color: (d) => {
                                    let nameArr = ["天辉","夜魇"];
                                    if (d.name === nameArr[0]) {
                                        return '#006600'    
                                    }
                                    if (d.name === nameArr[1]) {
                                        return '#CC0000'
                                    }
                                }
                            }
                        }
                        
                    }
                ]
            };
        },
        accordion: function (idx) {
            let result = [0, 0, 0];
            if (this.liveTabList[idx] !== 1) {
                result[idx] = 1;
                this.liveTabList = result;
                this.initEchart();
            }
        },
        // 等待后 进行 echart init
        initEchart: function () {
            let me = this;
            setTimeout(() => {
                me.chart.dom = me.$el.querySelector('.gold-exp-diff');
                me.barChart = echarts.init(me.chart.dom);
                if (me.barChart) {
                    me.barChart.setOption(me.chart.bar);
                }
            }, 1000);
        }
    },
    data: function () {
        let me = this;
        return {
            url: '/live',
            show: false,
            // 初始化 live data
            liveData: liveData,
            liveTabList: [1, 0, 0],
            timer: null,
            interval_gap: 10 * 1000,
            reqNum: 0,
            chart: {
                dom: null,
                bar: me.getEchartOption()
            }
        }
    }
};

export {
    liveTpl
}