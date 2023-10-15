// live比分部分
import {base} from './../util/base';
let rankListComponent = {
    props: ['players'],
    template: `
        <div class="live-action pull-left">
            <div class="title-bar">经济排行</div>
            <div class="live-content">
                <ul class="list-unstyled">
                    <li v-for="item in players">
                        <span><img onerror="ifImgNotExist(this)" :src="getImgUrl('hero',item.hero_id)" :alt="item.hero_id" /></span>
                        <span>{{item.net_worth}}</span>
                        <span :style="'width:' + item.percent + '%'" :class="item.team"></span>
                    </li>
                </ul>
            </div>
        </div>
    `.replace(/\s+/g, ' '),
    methods: {
        getImgUrl: base.getImgUrl
    }
};

export {
    rankListComponent
}