const packageName = require('./package.json').name;
module.exports = {
  configureWebpack: (config) => {
    config.output.library = 'vueApp2'
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`
  },
  devServer: {
    port: 8080,
    headers:{
      'Access-Control-Allow-Origin': '*' // 允许跨域
    }
  },
  productionSourceMap: false,
};