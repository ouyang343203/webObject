//在引入项目的方法就是 require(文件目录) 例如require('./01_yan') 同一级文件的路径需要./
//同一级目录是：./ 
//下一级目录是：./a/main.js
// 上一级目录：../   
// 上上一级目录：../../
//引入成功后获取模块暴露的内容 require('./01_yan.js')
var zuiobject = require('././01_zui.js')
console.log(zuiobject.name)//访问仅有一个person的文件

var yanobject = require('././01_yan.js')
console.log(yanobject.myFn1(),yanobject.myFn2(1,2))
console.log(yanobject.myFn3(5).toFixed(2),yanobject.myFn4(5).toFixed(2))
console.log(yanobject.myFn5.name)

var noisbject = require('././01_noise')
console.log(noisbject())//访问仅有一个函数的文件

function tou(){
  console.log('我是头')
}
//=====================引入非同级目录的文件===============================
var dog = require('../Animail/dog.js')
console.log(dog.myFn9.name)//引入非同级目录的文件

//======================目录模块========================================
var object = require('../15-package/15-tao')
console.log(object.persong.name)
