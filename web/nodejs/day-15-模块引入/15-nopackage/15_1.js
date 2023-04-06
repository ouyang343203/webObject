//主模块引入以路径路径开头的模块
//./同一级目录
// 上一级目录../
// 上一级目录../../上上级目录
const Student = require('./15_2')
var object = require('./15_2')
console.log(object.myAvg(8,10))
console.log(object.myStudent.name)