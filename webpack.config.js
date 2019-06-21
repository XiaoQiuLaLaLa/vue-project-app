const path = require('path');   //webpack基于Node.js，可以直接用，path模块
const htmlWebpackPlugin = require('html-webpack-plugin');   //导入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),    // 入口文件，要用webpack打包哪个文件
    output: {   //输出文件相关的配置
        filename: 'bundle.js',      // 输出文件的名称
        path: path.resolve('dist')  // 打包后文件的输出目录，必须是绝对路径
    },
    mode: 'development',
    plugins:[   //配置插件的节点
        new htmlWebpackPlugin({   //创建一个在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),   //指定模板页面
            //将来会根据此页面生成内存中的页面
            filename:'index.html'   //指定生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{   //此节点用于配置所有第三方模块加载器
        rules:[   //所有第三方模块的匹配规则
            {
                test:/\.vue$/,   //匹配.vue文件  
                use:'vue-loader'
            },
            {
                test:/\.css$/,   //正则
                use:['style-loader','css-loader']   //匹配到则使用这些第三方loader
            },
            {
                test:/\.less$/,  
                use:['style-loader','css-loader','less-loader']  
            },
            {
                test:/\.scss$/,  
                use:['style-loader','css-loader','sass-loader']  
            },
            {
                test:/\.(jpg|png|gif|bmp|jpeg)$/,  
                use:'url-loader?limit=39083&name=[hash:8]-[name].[ext]'
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2|otf)$/,   //字体文件  
                use:'url-loader'
            },
            {
                test:/\.js$/,   //匹配JS文件  
                use:'babel-loader',
                exclude:/node_modules/  //排除node_modules目录
            }
        ]
    }
}