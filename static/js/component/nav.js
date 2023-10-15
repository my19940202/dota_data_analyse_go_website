
let navTpl = {
    props: ['reveal'],
    template: `
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand"><img src="/static/img/dotalab_tab_icon.png"></a>
                    <a class="navbar-brand" href="/">666刀塔</a>
                </div>
                <ul class="nav navbar-nav">
                <!--    <li><a href="/wardAnalysis/">眼位大数据</a></li>
                    <li><a href="/simulateBP/">BP模拟器</a></li> -->
                    <li><a href="/contact_us_new">关于我们</a></li>
                    <li><a href="javascript:;" @click="reveal"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
                <!-- <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form> -->
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" role="button">
                           <svg color="#F5F5F5" viewBox="0 0 110 110" style="vertical-align: middle;border-radius:15px;margin-left: 12px; margin-right: 0px;"><path d="M55,0C25.881,0,2.062,22.634,0.14,51.267l28.525,11.507C31.172,61.029,34.214,60,37.5,60 c0.706,0,1.396,0.063,2.076,0.155l13.426-19.691C53.021,29.159,62.19,20,73.5,20C84.822,20,94,29.178,94,40.5S84.822,61,73.5,61 c-0.01,0-0.021-0.001-0.031-0.001L52.944,74.385C52.97,74.754,53,75.124,53,75.5C53,84.061,46.061,91,37.5,91 c-7.565,0-13.855-5.422-15.218-12.591L2.118,70.107C8.685,93.134,29.866,110,55,110c30.376,0,55-24.624,55-55 C110,24.625,85.376,0,55,0z M37.5,84c-0.915,0-1.795-0.148-2.621-0.416l-0.004,0.01l-0.252-0.104 c-0.243-0.087-0.48-0.185-0.712-0.293l-6.805-2.801C28.945,84.295,32.902,87,37.5,87C43.851,87,49,81.852,49,75.5 S43.851,64,37.5,64c-1.406,0-2.747,0.265-3.993,0.727l7.2,2.904c0.05,0.021,0.1,0.039,0.149,0.061l0.56,0.226l-0.015,0.037 C44.131,69.368,46,72.213,46,75.5C46,80.194,42.194,84,37.5,84z M88,40.5C88,32.492,81.508,26,73.5,26S59,32.492,59,40.5 S65.492,55,73.5,55S88,48.508,88,40.5z M63,40.5C63,34.701,67.701,30,73.5,30S84,34.701,84,40.5S79.299,51,73.5,51 S63,46.299,63,40.5z"></path></svg>
                            login
                        </a>
                     </li>
                    <li><a href="/logout" role="button">登出</a></li>
                </ul>
            </div>
        </nav>
    `.replace(/\s+/g, ' ')
};

let searchTpl = {
    props: ['show'],
    template: `
        <div class="full-screen-search" v-show="show">
            <input @blur="submit('')" @keyup.enter="submit(msg)" type="text" v-model.trim="msg" placeholder="搜索" autofocus />
        </div>
    `,
    methods: {
        submit: function(content) {
            let me = this;
            if (content !== '') {
                console.log(content)
                window.open(`${me.submitUrl}?q=${window.encodeURIComponent(content)}`);
            }
            setTimeout(() => {
                me.show = false;
            }, 200);
        }
    },
    data: function () {
        return {
            msg: '',
            submitUrl: '/search'
        }
    }
};

export {
    navTpl,
    searchTpl
}