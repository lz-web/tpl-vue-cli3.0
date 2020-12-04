const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 插件用来缩小（压缩优化）js文件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css', 'ts'];

const resolve = dir => {
    return path.join(__dirname, dir)
}
let dist_url;// 打包生成的生产环境构建文件的目录;
if (process.env.VUE_APP_ENV === 'test') {
    dist_url = 'test_dist'
} else if(process.env.VUE_APP_ENV === 'release'){
    dist_url = 'dist_release'
} else {
    dist_url = 'dist_' + process.env.VUE_APP_ENV;
}

// cdn引入
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    publicPath: '', // 122
    outputDir: dist_url,
    assetsDir: 'dist_trend', // 放置生成的静态资源路径，默认在outputDir
    indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
    pages: undefined, // 构建多页
    lintOnSave: false, // 屏蔽EsLint错误
    productionSourceMap: false, // 开启 生产环境的 source map?
    runtimeCompiler: true, // 包含运行时编译器的Vue 构建版本
    // lintOnSave: true, // 是否在保存的时候检查
    parallel: require('os').cpus().length > 1,
    // derServer : {hot: true}, // 包含运行时编译器的Vue 构建版本
    configureWebpack: config => {
        return {
            plugins: [
                new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,
                })
            ],
            optimization: {
                minimizer: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                // warnings: false,
                                // comments : true, // 去掉注释
                                drop_console: !(process.env.VUE_APP_ENV == 'test' || process.env.VUE_APP_ENV == 'stage'), // console
                                drop_debugger: true,
                            }
                        }
                    })
                ]
            }
        }

    },
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@c', resolve('src/components'))
            .set('@v', resolve('src/views'))
        // 生产环境注入cdn
        // if (isProduction) {
        //     config.plugin('html')
        //         .tap(args => {
        //             args[0].cdn = cdn;
        //             return args;
        //         });
        // }
    },
    css: {
        // requireModuleExtension: false, // 启用 CSS modules
        // extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        // loaderOptions: {} // css预设器配置项
    },
    devServer: {
        port: 8080, // 端口
        // proxy: 'https://dncapi.bqiapp.com/', // 设置代理
        open: true,
        // hotOnly: false,
        // ws: true,// 如果要代理 websockets
        // changeOrigin: true // 将主机标头的原点更改为目标URL
        // overlay: {
        //     warnings: false,
        //     errors: false
        // },
        // lintOnSave: false
    }
}