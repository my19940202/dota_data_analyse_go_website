// 基础库文件
import './../../less/base.less';
// 头尾组件
import {navTpl, searchTpl} from './nav';
import {footerTpl} from './footer';

let pageComponent = {
    el: '#page-container',
    data: {
        show: false
    },
    methods: {
        // 展现搜索框
        reveal: function (param) {
            this.show = param || true;
        }
    },
    components: {
        'search-component': searchTpl,
        'nav-component': navTpl,
        'footer-component': footerTpl
    }
};

export {
    pageComponent
}