const { defineConfig } = require('@vue/cli-service');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
// const TerserPlugin = require('terser-webpack-plugin')//去除多余的console.log
// let path = require('path')
// let resolve = (dir) => path.resolve(__dirname, dir);
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  // assetsDir: 'static',

  configureWebpack: config => {
    // config.resolve.symlinks(true); // 修复热更新失效
    // config.resolve.alias // 添加别名
    // .set('@', resolve('src'))
    // .set('@assets', resolve('src/assets'))
    // .set('@components', resolve('src/components'))
    // .set('@views', resolve('src/views'))
    // .set('@store', resolve('src/store'));
    // gzip 压缩
    const plugins = [];
    if (IS_PROD ) {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,//大于10k的进行压缩
          minRatio: 0.8,
        })
      );
      // plugins.push(
      //   //打包环境去掉console.log等
      //   new TerserPlugin({
      //     terserOptions: {
      //       ecma: undefined,
      //       warnings: false,
      //       parse: {},
      //       compress: {
      //         drop_console: true,
      //         drop_debugger: false,
      //         pure_funcs: ['console.log'], // 移除console
      //       },
      //     },
      //   }),
      // );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  css: {
    extract: IS_PROD,
    loaderOptions: {
        // 给 less-loader 传递 Less.js 相关选项
        less: {
          // `globalVars` 定义全局对象，可加入全局变量
          globalVars: {
            primary: '#333'
          }
        }
    }
  },
});
