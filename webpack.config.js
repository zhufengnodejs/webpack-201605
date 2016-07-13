//导出一个配置对象
var path = require('path');
//执行路径的替换
function rewrite(replacePath){
    //返回新的函数，负责替换每次的url
    return function(req,options){
        //先得到？的索引
        var queryIndex = req.url.indexOf('?');
        //再取得查询字符串
        var query = queryIndex>=0?req.url.substr(queryIndex):'';
        //改写url
        // 把原来的路径名替换掉  options.path = /^\/api\/(.*)/, '/$1\.json
        req.url = req.path.replace(options.path, replacePath) + query;
    }
}
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
        //publicPath:'/static/',
        //显示颜色
        stats:{colors:true},
        //监听的端口号
        port:8080,
        //指定了服务器的根目录指向是硬盘上的哪个目录
        contentBase:'build',
        proxy:[
            {
                //替换路径,当客户端请求哪个接口的时候才会进行替换
                path:/^\/api\/(.+)$/,
                //要转向的目标服务器
                target:'http://localhost:8080',
                rewrite:rewrite('/$1\.json'),
                //是否修改来源地址
                changeOrigin:true
            }
        ]
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