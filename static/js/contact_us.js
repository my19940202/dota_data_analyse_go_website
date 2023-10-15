/* 
    contact_us 没什么页面逻辑
    设置一些内容高度 是页面撑满
*/
import Vue from 'vue/dist/vue.js';
import {pageComponent} from './component/base';
new Vue(pageComponent);

let windowH = document.documentElement.clientHeight;
let contentH = windowH - 50 * 2 - 20 - 10 -2;
let contentDom = document.getElementById('content');
contentDom.style.height = `${contentH}px`;