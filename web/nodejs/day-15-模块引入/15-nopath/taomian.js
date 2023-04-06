//引入不以路径路径开头的目录，他会自动到同级目录中去寻找node_modules文件下的cat.js文件，如果找不到他就会到上一级目录中去寻找node_modules文件下的文件，重复这样
//./同一级目录
// 上一级目录../
// 上一级目录../../上上级目录
var object = require('Cat')
console.log(object.myDog.name)


// var crow = require('crow')
// console.log(crow.name)