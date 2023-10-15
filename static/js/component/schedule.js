let scheduleTpl = {
    template: `
        <div class="title-header">
            <div class="title">赛程</div>
            <div class="tab">
                <span @click="tab(0)" :class="[state[0] ? 'under-line' : '']">Premium</span> / 
                <span @click="tab(1)" :class="[state[1] ? 'under-line' : '']">Professional</span>
            </div>
        </div>
        <div class="schedule">
            <div v-for='item in list' class="schedule-cell"> 
                <div class="schedule-cel-leadge pull-left">
                    <img :src="'/static/img/league/' + item.league_id + '.png'">
                </div>
                <div class="schedule-cel-team pull-left">
                    <img class="pull-left" :src="'/static/img/team_logo/' + item.team_id[0] + '.png'">:
                    <img class="pull-right" :src="'/static/img/team_logo/' + item.team_id[1] + '.png'">
                </div>
                <div class="schedule-cel-time pull-left">
                    2h 19m
                </div>
            </div>
        </div>
    `.replace(/\s+/g, ' '),
    created: function () {
        console.log('activity created');
        this.list = [
            {league_id: 5157, team_id: [36,3580606]},
            {league_id: 5392, team_id: [1838315,2006913]},
            {league_id: 5396, team_id: [3214108,3580606]},
            {league_id: 5336, team_id: [1838315,3580606]},
            {league_id: 5157, team_id: [726228,36]},
            {league_id: 5392, team_id: [2006913,3580606]},
            {league_id: 5396, team_id: [1838315,726228]}
        ];
    },
    methods: {
        tab: function (tab_idx) {
            this.state = tab_idx ? [0,1]: [1,0];
        }
    },
    data: () => {
        return {
            state: [1,0]
        }
    }
};
export {
    scheduleTpl   
}