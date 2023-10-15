// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
// require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        show: false,
        padding: [0,0,0,0]
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {
        show: false
    },
    grid: {
        right: '0',
        left: '0',
        top: '0',
        bottom: '0',
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


//  饼状图
var pieChart = echarts.init(document.getElementById('pie'));
var pieOption = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
pieChart.setOption(pieOption);

// // 折线图
// function randomData() {
//     now = new Date(+now + oneDay);
//     value = value + Math.random() * 21 - 10;
//     return {
//         name: now.toString(),
//         value: [
//             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
//             Math.round(value)
//         ]
//     }
// }

// var data = [];
// var now = +new Date(1997, 9, 3);
// var oneDay = 24 * 3600 * 1000;
// var value = Math.random() * 1000;
// for (var i = 0; i < 30; i++) {
//     data.push(randomData());
// }

// var lineOption = {
//     title: {
//         text: '动态数据 + 时间坐标轴'
//     },
//     tooltip: {
//         trigger: 'axis',
//         formatter: function (params) {
//             params = params[0];
//             var date = new Date(params.name);
//             return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
//         },
//         axisPointer: {
//             animation: true
//         }
//     },
//     xAxis: {
//         type: 'time',
//         splitLine: {
//             show: false
//         }
//     },
//     yAxis: {
//         // show: false,
//         type: 'value',
//         boundaryGap: [0, '100%'],
//         splitLine: {
//             show: false
//         }
//     },
//     series: [{
//         name: '模拟数据',
//         type: 'line',
//         showSymbol: false,
//         hoverAnimation: false,
//         data: data
//     }]
// };

// var lineChart = echarts.init(document.getElementById('line'));
// lineChart.setOption(lineOption); 