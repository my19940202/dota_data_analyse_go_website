let matchDetailSelect = {
    props: ['toggle', 'key', 'menu', 'blur', 'input_show', 'click', 'slist', 'rlist', 'resultreq'],
    template: `
        <form class="form-inline">
            <div class="dropdown">
                <button @focus="blur" @click="toggle(0)" class="btn btn-default dropdown-toggle" type="button">
                    比赛ID
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" v-show="menu[0]">
                    <li v-for="(index,item) in slist" @click="click(index)">
                        <a href="#">{{item}}</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown" v-show="input_show[1]">
                <button @focus="blur" @click="toggle(1)" class="btn btn-default dropdown-toggle" type="button">
                    {{rlist.length}}个结果
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" v-show="menu[1]">
                    <!--<li>
                        <a href="#">
                            <span class="text"><img src="/static/img/league/3726.png" height="30" width="60">3726</span><span class="glyphicon glyphicon-ok check-mark"></span>
                        </a>
                    </li>-->
                    <li>
                        <input type="email" class="form-control">
                    </li>
                    <li v-for="(index,item) in rlist" track-by="$index" @click="click(index, item)">
                        <a href="#">{{item}}</a>
                    </li>
                </ul>
            </div>
            <input v-show="input_show[0]" type="email" class="form-control" id="match_id" placeholder="比赛id">
            <button @click="resultreq()" type="button" class="btn btn-default">search</button>
        </form>
    `.replace(/\s+/g, ' '),
};

export {
    matchDetailSelect 
}