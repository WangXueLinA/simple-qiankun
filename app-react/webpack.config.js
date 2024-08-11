const path = require('path');
const packageName = require('./package.json').name;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd',
        library: `${packageName}-[name]`,
        chunkLoadingGlobal: `webpackJsonp_${packageName}`
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 3001, // 端口号
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'public/index.html'
        })
    ]
}
