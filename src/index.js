import {name,age} from './component';
console.log(name,age);
require('./base');
var $ = require('jquery');
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


