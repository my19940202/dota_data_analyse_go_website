/**
 * @file index page
 * @author xishengbo@gmail.com
 */

// 基础库文件
import './../less/home.less';
import Vue from 'vue/dist/vue.js';

// 页面组件
import {pageComponent} from './component/base';
import {recentWrapper} from './component/recent';
import {liveTpl} from './component/live';
import {activityTpl} from './component/activity';
import {scheduleTpl} from './component/schedule';

pageComponent.components['recent-wrapper'] = recentWrapper;
pageComponent.components['life-component'] = liveTpl;
pageComponent.components['activity-component'] = activityTpl;
pageComponent.components['schedule-component'] = scheduleTpl;

new Vue(pageComponent);
