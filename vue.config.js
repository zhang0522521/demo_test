const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/dist/' : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "localhost",
        port: 9000, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置后自动启动浏览器
        // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
        proxy: { //配置多个代理
            "api/": {
                target: "http://192.168.0.128/visitor/",
                changeOrigin: true,
                ws: true, //websocket支持
                secure: false,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "src/assets/css/variable.scss";
                  @import "src/assets/css/common.scss";
                  @import "src/assets/css/mixin.scss";
               `
            }
        }
    },
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    chainWebpack: config => {
        configureWebpack: (config) => {
            if (process.env.NODE_ENV === 'production') {
                config.plugins.push(
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                warnings: false,
                                drop_debugger: true, // console
                                drop_console: true,
                                pure_funcs: ['console.log'] // 移除console
                            },
                        },
                        sourceMap: false,
                        parallel: true,
                    })
                )
            }
        }
    }
}