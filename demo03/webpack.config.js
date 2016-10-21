var webpack = require('webpack') ;
var HtmlwebpackPlugin = require('html-webpack-plugin');
//let ExtractTextPlugin = require('extract-text-webpack-plugin');
//let extractLESS = new ExtractTextPlugin('[name].css');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

 
module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/js/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/demo3',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            //{test: /\.css$/, loader: 'style!css'},
            //{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            //{test: /\.less$/, loader: 'css!less'},
            {test: /\.less$/,loader: ExtractTextPlugin.extract("css!less") },
            {test: /\.js$/,loaders: [ 'babel' ],exclude: /(node_modules|lib)/,include: __dirname},
        ]
    },
    //其它解决方案配置
    resolve: {
         extensions: ['', '.js', '.less']
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: './src/template/index.html'
        }),
        new ExtractTextPlugin('[name].css')
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
  ]
};