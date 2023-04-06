console.log('找到了web.js文件')
var pesonmen={
    name:"我是pakckage",
    age:15
}

module.exports={
    mypesonmen:pesonmen
 }
require('./index')//如果需要在package.json文件中引入index文件则只能将index文件引入web文件赖实现不能在package.json文件中引入多个