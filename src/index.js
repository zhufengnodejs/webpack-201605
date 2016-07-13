var $ = require('jquery');

import {name,age} from './component';
console.log(name,age);
require('./base');
$('#app').html('hello');
//加载bootstrap样式
require('bootstrap');
//再创建一个Img元素
var img = document.createElement('img');
img.style.width= 100+'px';
img.style.height= 100+'px';
//指定类名
img.className = 'img-circle';
//src 指向图片路径
img.src = require('./avatar.jpg');
//再次把此图片引入到页面中
document.body.appendChild(img);
//这个变量是defineplugin挂载到全局对象下面的
if(___DEV___){
    console.log('这是开发环境333');
    console.log('这是开发环境的日志，只有开发环境才能输出');
}else{
    console.log('这是生产环境');
}

