let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

let table = {
    props: ['item'],
    template: `
        <table class="table">
            <thead>
                <tr class="table-head">
                    <th> winner team</th>
                    <th>英雄</th>
                    <th>总金钱</th>
                    <th>K/D/A</th>
                    <th>道具</th>
                    <th>英雄伤害</th>
                    <th>建筑伤害</th>
                    <th>补刀</th>
                    <th>等级</th>
                </tr>
            </thead>
            <tbody class="table-result">
                <tr v-for="n in 5">
                    <td>
                        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a3/a30814e3a1edd64818e96522da9ede451fc9acf9_medium.jpg" height="30/">
                        <!--
                            <a href="http://127.0.0.1:8899/templates/play_analysis.html">个人表现-》</a>
                        -->
                    </td>
                    <td><img src="/static/img/hero_portraits/phoenix.png" height="30" title="phoenix"></td>
                    <td>17388 (15.9%)</td>
                    <td>3/3/18</td>
                    <td><img src="/static/img/item/magic_wand_icon.png" height="30" title="Magic Wand"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Tranquil Boots"><img src="/static/img/item/hand_of_midas_icon.png" height="30" title="Hand of Midas"><img src="/static/img/item/magic_wand_icon.png" height="30" title="Observer and Sentry Wards"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Town Portal Scroll"><img src="/static/img/item/linken's_sphere_icon.png" height="30" title="Linken"></td>
                    <td>15095 (17.1%)</td>
                    <td>53</td>
                    <td>122</td>
                    <td>23</td>
                </tr>
            </tbody>
        </table>
    `
};
let heroDetail = {
    template: `
        <div class="hero-select">
            <div class="btn-group">
                <img src="/static/img/team_logo/3547682.png" height="60" />
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-primary btn-lg">个人表现</button>
                <button type="button" class="btn btn-primary btn-lg dropdown-toggle" @click='handleClick'>
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu" v-show="menu_display">
                    <li v-for="n in 10">
                        <span><img height="25" width="45" src="http://cdn.dota2.com/apps/dota2/images/heroes/shadow_shaman_sb.png"></span>
                        <span href="#">name is {{n}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hero-info">
            <table class="table">
                <thead>
                    <tr class="table-head">
                        <th>总金钱</th>
                        <th>伤害</th>
                        <th>K/D/A</th>
                        <th>装备</th>
                        <th>建筑伤害</th>
                        <th>等级</th>
                    </tr>
                </thead>
                <tbody class="table-result">
                    <tr>
                        <td>17388 (15.9%)</td>
                        <td>17388 (15.9%)</td>
                        <td>3/3/18</td>
                        <td><img src="/static/img/item/magic_wand_icon.png" height="30" title="Magic Wand"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Tranquil Boots"><img src="/static/img/item/hand_of_midas_icon.png" height="30" title="Hand of Midas"><img src="/static/img/item/magic_wand_icon.png" height="30" title="Observer and Sentry Wards"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Town Portal Scroll"><img src="/static/img/item/linken's_sphere_icon.png" height="30" title="Linken"></td>
                        <td>122</td>
                        <td>23</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="hero-area row">
            <div class="hero-detail-title">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> 轨迹分析
            </div>
            <div class="col-xs-6">
                <h1>活动区域</h1>
                <div class="hero-area-move">
                </div>
            </div>
            <div class="col-xs-6">
                <h1>打钱轨迹</h1>
                <div class="hero-area-gold">
                </div>
            </div>
            <div class="col-xs-12">
                <div class="hero-area-time-bar">
                    能够按照时间 调整 bar
                </div>
            </div>
        </div>
        <div class="hero-operation-analys">
            <div class="hero-detail-title">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> 战斗分析
            </div>
            <div class="hero-detail-content">
                <h5>技能使用</h5>
                <div class="content-row">
                    <div class="content-item">
                        <img src="/static/img/skill/abaddon_mist_coil.png" />
                        <p>10次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/alchemist_chemical_rage.png" />
                        <p>12次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/alchemist_goblins_greed.png" />
                        <p>10次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/arc_warden_flux.png" />
                        <p>12次</p>
                    </div>
                </div>
                <h5>道具使用</h5>
                <div class="content-row">
                    <div class="content-item" v-for="n in 10">
                        <img src="/static/img/skill/abaddon_mist_coil.png" />
                        <p>{{n}}次</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-groupbattle-analys">
            <div class="hero-detail-title">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> 团战分析
            </div>
            <div class="hero-detail-content">
                <table class="table">
                    <thead>
                        <tr class="table-head">
                            <th>团战时间</th>
                            <th>结果</th>
                            <th>死亡时间</th>
                            <th>伤害</th>
                            <th>技能使用</th>
                            <th>道具使用</th>
                            <th>经济变化</th>
                        </tr>
                    </thead>
                    <tbody class="table-result">
                        <tr>
                            <td>12m44s</td>
                            <td>17388 (15.9%)</td>
                            <td>32s</td>
                            <td>1258</td>
                            <td>122</td>
                            <td><img src="/static/img/item/magic_wand_icon.png" height="30" title="Magic Wand"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Tranquil Boots"><img src="/static/img/item/hand_of_midas_icon.png" height="30" title="Hand of Midas"><img src="/static/img/item/magic_wand_icon.png" height="30" title="Observer and Sentry Wards"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Town Portal Scroll"><img src="/static/img/item/linken's_sphere_icon.png" height="30" title="Linken"></td>
                            <td>+1223</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="hero-economy-analys row">
            <div class="hero-detail-title">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> 经济分析
            </div>
            <div class="col-xs-3">
                <table class="table">
                    <tbody class="table-result">
                        <tr>
                            <td>总金钱</td>
                            <td>123412</td>
                        </tr>
                        <tr>
                            <td>补刀</td>
                            <td>17388</td>
                        </tr>
                        <tr>
                            <td>打野</td>
                            <td>188</td>
                        </tr>
                        <tr>
                            <td>击杀、辅助</td>
                            <td>3788</td>
                        </tr>
                        <tr>
                            <td>建筑</td>
                            <td>2788</td>
                        </tr>
                        <tr>
                            <td>买活损失</td>
                            <td>-1788</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xs-8">
                <div class="gold-chart" style="width:300px;height:300px;">
                </div>
            </div>
        </div>
        <div class="hero-economy-analys">
            <div class="hero-detail-title">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> 装备分析
            </div>
            <div class="hero-detail-content">
                <h5>购买次数</h5>
                <div class="content-row">
                    <div class="content-item">
                        <img src="/static/img/skill/abaddon_mist_coil.png" />
                        <p>10次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/alchemist_chemical_rage.png" />
                        <p>12次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/alchemist_goblins_greed.png" />
                        <p>10次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/arc_warden_flux.png" />
                        <p>12次</p>
                    </div>
                </div>
                <h5>购买记录</h5>
                <div class="content-row">
                    <div class="content-item">
                        <img src="/static/img/skill/abaddon_mist_coil.png" />
                        <p>10次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/alchemist_chemical_rage.png" />
                        <p>12次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/alchemist_goblins_greed.png" />
                        <p>10次</p>
                    </div>
                    <div class="content-item">
                        <img src="/static/img/skill/arc_warden_flux.png" />
                        <p>12次</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    components: {
        // 'table-component': table
    },
    // req match_id data
    created: function () {
        let me = this;
        setTimeout(() => {
            me.pieChart = echarts.init(document.querySelector('.gold-chart'));
            me.pieChart.setOption(me.pieChartOpt);
        }, 500)
    },
    data: () => {
        return {
            menu_display: false,
            pieChartOpt: {
                title : {
                    show: false,
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series : [
                    {
                        name: '经济情况',
                        type: 'pie',
                        radius: '70%',
                        data:[
                            {value:235, name:'补刀'},
                            {value:274, name:'打野'},
                            {value:310, name:'击杀、辅助'},
                            {value:335, name:'建筑'}
                        ]
                    }
                ]
            }
        };
    },
    methods: {
        handleClick: function () {
            this.menu_display = !this.menu_display;
        }
    }
};

export {
    heroDetail
}