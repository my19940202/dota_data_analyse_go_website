// live比分部分
import {base} from './../util/base';
let scoreComponent = {
    props: ['radiant', 'dire', 'duration'],
    template: `
        <div class="live-score">
            <div class="live-score-team pull-left">
                <div v-for="item in dire.players"
                    class="live-hero"
                    :style="'background:center center no-repeat url(' + getImgUrl('hero',item.hero_id) + ')'">
                    <span>{{item.level || 1}}</span>
                </div>
                <div class="team-logo">
                    <img onerror="ifImgNotExist(this)" :src="getImgUrl('team',dire.team_id)" :alt="dire.team_id" />
                    <span>{{dire.team_name}}</span>
                </div>
            </div>
            <div class="live-score-detail">
                <div class="score-floor">
                    <span class="score">{{dire.score}}</span>
                    <span style="width:70%;">{{duration}}</span>
                    <span class="score">{{radiant.score}}</span>
                </div>
                <div class="score-floor">
                    <span :style="'width:' + dire.ec_percent +'%' ">
                        {{dire.ec_percent}}%
                    </span>
                    <span :style="'width:' + radiant.ec_percent +'%' ">
                        {{radiant.ec_percent}}%
                    </span>
                </div>
            </div>
            <div class="live-score-team pull-right">
                <div class="team-logo">
                    <img onerror="ifImgNotExist(this)" :src="getImgUrl('team',radiant.team_id)" :alt="radiant.team_id" />
                    <span>{{radiant.team_name}}</span>
                </div>
                <div v-for="item in radiant.players"
                    class="live-hero"
                    :style="'background:center center no-repeat url(' + getImgUrl('hero',item.hero_id) + ')'">
                    <span>{{item.level || 1}}</span>
                </div>
            </div>
        </div>
    `.replace(/\s+/g, ' '),
    methods: {
        getImgUrl: base.getImgUrl
    }
};

export {
    scoreComponent
}