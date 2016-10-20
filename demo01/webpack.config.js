var webpack = require('webpack') ;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/js/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/demo1',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
         extensions: ['', '.js', '.styl']
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: './src/template/index.html'
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
  ]
};