//导出一个配置对象
var path = require('path');
module.exports = {
    //打包的入口文件 resolve从当前路径出发找到另一个路径
    entry:path.resolve('src/index.js'),//返回一个index.js的绝对路径
    //entry:path.join(__dirname,'src','index.js')//返回一个index.js的绝对路径
    //配置打包后的结果
    output:{
        //定义输出路径
        path:path.resolve('build'),
        //指定打包后的文件名
        filename:'bundle.js'
    }
}