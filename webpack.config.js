//导出一个配置对象
var path = require('path');
module.exports = {
    //打包的入口文件 resolve从当前路径出发找到另一个路径
    entry: path.resolve('src/index.js'),//返回一个index.js的绝对路径
    //entry:path.join(__dirname,'src','index.js')//返回一个index.js的绝对路径
    //配置打包后的结果
    output: {
        //定义输出路径
        path: path.resolve('build'),
        //指定打包后的文件名
        filename: 'bundle.js'
    },
    devServer:{
        //在web的html中访问文件的前缀
        publicPath:'/static/',
        //显示颜色
        stats:{colors:true},
        //监听的端口号
        port:8080,
        contentBase:'build'
    },
    module: {//模块加载定义
        loaders: [//加载器
            {
                test: /\.js$/,//要加载的文件正则
                loader: 'babel',//加载器
                include: path.resolve('src'),
                exclude: /node_modules/
            }
        ]
    }
}