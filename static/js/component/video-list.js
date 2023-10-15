// 对战地图svg绘制部分
import {base} from './../util/base';
let Video = {
    props: ['radiant', 'dire'],
    template: `
        <div class="video-list">
            <div class="live-video-title">直播网站列表</div>
            <ul class="list-unstyled">
                <li><i class="fa fa-play-circle" aria-hidden="true"></i> <a href="#">douyu</a></li>
                <li><i class="fa fa-play-circle" aria-hidden="true"></i> <a href="#">PandaTV</a></li>
                <li><i class="fa fa-play-circle" aria-hidden="true"></i> <a href="#">yy</a></li>
                <li><i class="fa fa-play-circle" aria-hidden="true"></i> <a href="#">火猫tv</a></li>
                <li><i class="fa fa-play-circle" aria-hidden="true"></i> <a href="#">全民tv</a></li>
            </ul>
        </div>
    `,
    created: function () {
        this.req();
    },
    methods: {
        req: function () {
            
        }
    }
};
export {
    Video
}