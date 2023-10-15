/*
     详情页 from 列表页跳转
*/

// 基础库文件
import Vue from 'vue/dist/vue.js';
import './../less/match_detail_hero.less';
import {pageComponent} from './component/base';
import {heroDetail} from './component/match_detail_hero_tpl';

pageComponent.components['hero-component'] = heroDetail;

new Vue(pageComponent);