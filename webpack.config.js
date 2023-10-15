var webpack = require('webpack');
var path = require('path');
var APP_PATH = path.resolve(__dirname, 'static');
var BUILD_PATH = path.resolve(__dirname, 'static/dist');
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

//生产环境
// if (process.argv.indexOf('-p') > -1) {
//     //编译成生产版本
//     plugins.push(new webpack.DefinePlugin({
//         'process.env': {
//             NODE_ENV: JSON.stringify('production')
//         }
//     }));
// }

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8899,
        inline: true,
        progress: true,
        stats: {
            colors: true
        }
    },
    entry: {
        home: './static/js/home.js',
        contact_us: './static/js/contact_us.js',
        match_detail: './static/js/match_detail.js',
        match_detail_hero: './static/js/match_detail_hero.js',
        search: './static/js/search.js',
        // draft test js
        chart: './static/draft/echart.js',
        vendor: ['zepto', 'echarts/lib/chart/pie', 'echarts/lib/component/tooltip', 'echarts/lib/component/title']
    },
    output: {
        // publicPath,
        path: BUILD_PATH,
        //编译后的文件名字
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 匹配'js' or 'jsx' 后缀的文件类型
            exclude: /(node_modules)/, // 排除某些文件
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            // 处理less文件
            test: /\.less/,
            include: APP_PATH,
            // exclude: APP_PATH + '/css',
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    plugins: plugins,
    resolve: {
        //后缀名自动补全
        extensions: ['.js', '.jsx'],
        alias: {
            
        }
    }
};
