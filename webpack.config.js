//配置 html-webpack-plugin 组件
const htmlwp = require('html-webpack-plugin');

//vue-loader v15之后需要引用这段代码
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/main2.js', //指定打包入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), //指定位置路径
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,//test -> 正则表达式
                loader:'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|jepg|gif)$/,
                loader: 'url-loader?limit=10000'//图片大小临界值10K 小于则被打包
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    // babel: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    // }
    plugins: [
        new htmlwp({
            title: '首页',//用于生成的HTML文档的标题
            filename: 'index.html',//要将HTML写入的文件。默认为index.html。您可以在这里指定一个子目录（如：assets/admin.html）
            template: '11-test.html'
        }),
        new VueLoaderPlugin()
    ]

};