
import {matchDetailData}  from './../mockup/data';
import {base} from './../util/base';

let table = {
    props: ['players'],
    template: `
        <table class="table">
            <thead>
                <tr class="table-head">
                    <th>玩家头像</th>
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
                <tr v-for="item in players">
                    <td>
                        <img src='/static/img/default.jpg' height="30" />
                    </td>
                    <td>
                        <img onerror="ifImgNotExist(this)" 
                            :src="getImgUrl('hero', item.hero_id)"
                            :alt="item.hero_name||item.hero_id" height="30" />
                    </td>
                    <td>17388 (15.9%)</td>
                    <td>{{item.kill}}/{{item.death}}/{{item.assist}}</td>
                    <td><img src="/static/img/item/magic_wand_icon.png" height="30" title="Magic Wand"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Tranquil Boots"><img src="/static/img/item/hand_of_midas_icon.png" height="30" title="Hand of Midas"><img src="/static/img/item/magic_wand_icon.png" height="30" title="Observer and Sentry Wards"><img src="/static/img/item/tranquil_boots_icon.png" height="30" title="Town Portal Scroll"><img src="/static/img/item/linken's_sphere_icon.png" height="30" title="Linken"></td>
                    <td>15095 (17.1%)</td>
                    <td>53</td>
                    <td>122</td>
                    <td>{{item.level}}</td>
                </tr>
            </tbody>
        </table>
    `,
    methods: {
        getImgUrl: base.getImgUrl
    }
};
let matchDetail = {
    template: `
        <div class="match-detail">
            <div class="match-detail-left">
                <img onerror="ifImgNotExist(this)" 
                    :src="getImgUrl('team', detail.winner.team_id)"
                    :alt="detail.winner.team_id" />
            </div>
            <div class="match-detail-middle left-win">
                <div class="match-detail-total-item">
                    <span>{{detail.winner.kill}}</span>
                    <span>
                        <a class="btn btn-danger btn-lg" href="#">击杀</a>
                    </span>
                    <span>{{detail.loser.kill}}</span>
                </div>
                <div class="match-detail-total-item">
                    <span>{{detail.winner.ward}}</span>
                    <span>
                        <a class="btn btn-danger btn-lg" href="#">插眼</a>
                    </span>
                    <span>{{detail.loser.ward}}</span>
                </div>
                <div class="match-detail-total-item">
                    <span>{{detail.winner.smoke}}</span>
                    <span>
                        <a class="btn btn-danger btn-lg" href="#">开雾</a>
                    </span>
                    <span>{{detail.loser.smoke}}</span>
                </div>
                <div class="match-detail-total-item">
                    <span>{{detail.winner.roshan}}</span>
                    <span>
                        <a class="btn btn-danger btn-lg" href="#">肉山</a>
                    </span>
                    <span>{{detail.loser.roshan}}</span>
                </div>
            </div>
            <div class="match-detail-right">
                <img onerror="ifImgNotExist(this)" 
                    :src="getImgUrl('team', detail.loser.team_id)"
                    :alt="detail.loser.team_id" />
            </div>
        </div>
        <div class="match-btnbar">
            <div class="btn-group">
                <a :href="'#?' + detail.replay_id" class="btn btn-primary btn-lg">观看replay</a>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-primary btn-lg">个人表现</button>
                <button @click="handleClick" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu" v-show="menu_display">
                    <li v-for="item in detail.winner.players">
                        <span>
                            <img onerror="ifImgNotExist(this)" 
                                :src="getImgUrl('hero', item.hero_id)"
                                :alt="item.hero_name||item.hero_id" />
                        </span>
                        <span>{{item.hero_id}}</span>
                    </li>
                    <li v-for="item in detail.loser.players">
                        <span>
                            <img onerror="ifImgNotExist(this)" 
                                :src="getImgUrl('hero', item.hero_id)"
                                :alt="item.hero_name||item.hero_id" />
                        </span>
                        <span :href="'#?' + item.hero_id">{{item.hero_id}}</span>
                    </li>
                </ul>
            </div>
            <div class="btn-group">
                <a :href="'#?' + detail.video_id" class="btn btn-primary btn-lg">下载录像</a>
            </div>
        </div>
        <div class="match-info">
            <table class="table">
                <thead>
                    <tr class="table-head">
                        <th>比赛ID</th>
                        <th>比赛时间</th>
                        <th>胜利方</th>
                        <th>比赛模式</th>
                        <th>时长</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{match_id}}</td>
                        <td>5天前</td>
                        <td>{{detail.winner.team_name}}</td>
                        <td>{{detail.match_mode}}</td>
                        <td>{{detail.duration}}</td>
                    </tr>
                </tbody>
            </table>
            <table-component :players="detail.winner.players"></table-component>
            <table-component :players="detail.loser.players"></table-component>   
        </div>
    `,
    components: {
        'table-component': table
    },
    
    created: function () {
        let url = `${this.api}?match_id=${this.match_id}`;
        console.log(url)
        $.getJSON(url, function(data) {
            if (data && data.result) {
                console.log(data.result);
            } else {
                console.log('req error');
            }
        });
    },
    data: () => {
        return {
            api: '/getMatchDetail',
            menu_display: false,
            detail: matchDetailData,
            match_id: base.getUrlParam('match_id')
        };
    },
    methods: {
        handleClick: function () {
            this.menu_display = !this.menu_display;
        },
        getImgUrl: base.getImgUrl,
    }
};

export {
    matchDetail
}