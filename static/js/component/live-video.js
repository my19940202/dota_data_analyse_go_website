// live比分部分
let videoComponent = {
    props: ['players'],
    template: `
        <div class="live-video pull-left">
            <div class="gold-exp-diff">
                经济经验差
            </div>
            <div class="video-list">
                <div class="live-video-title">直播列表</div>
                <ul class="list-unstyled">
                    <li v-for="item in videoList">
                        <i class="fa fa-play-circle" aria-hidden="true"></i>
                        <a target="_blank" :href="item.url">{{item.room_name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    `.replace(/\s+/g, ' '),
    created: function () {
        let me = this;
        $.getJSON(me.url, function(data) {
            if (data && data.liverooms && data.liverooms.length >= 1) {
                me.videoList = data.liverooms;
            } else {
                console.log('liverooms req error');
            }
        });
    },
    data: () => {
        return {
            url: '/liverooms',
            videoList: []
        }
    }
};

export {
    videoComponent
}