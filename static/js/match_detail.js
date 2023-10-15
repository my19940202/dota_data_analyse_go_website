/**
 * @file match detail page
 * @author xishengbo@gmail.com
 */

// 基础库文件
import Vue from 'vue/dist/vue.js';
import './../less/match_detail.less';

import {pageComponent} from './component/base';
import {matchDetail} from './component/match_detail_tpl';

pageComponent.components['detail-component'] = matchDetail;

new Vue(pageComponent);
