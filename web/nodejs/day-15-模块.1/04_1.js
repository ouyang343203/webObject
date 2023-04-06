//应如以路径开头的文件
var objectTao = require('./tao')
console.log(objectTao.mytao.name)

//不以路径开头的文件 这个在node命令行运行
var objectmounkdey = require('mounkdey')
console.log(objectmounkdey.mymounkey.name)