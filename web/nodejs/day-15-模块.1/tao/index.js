//一：文件系统模块:即fs模块，主要用于操作服务器端的文件的，文件分为目录形式和文件形式，不属于全局模块，需要先引入才能调用API
var tao={
    name:"我是涛哥",
    age:15
}

function printinfo(){
   console.log('我是涛哥')
 }

 //暴露模块内容使用： module.exports={暴露内容} 有且仅有一个module.exports 默认暴露的内容是一个空对象
 module.exports={
    //暴露的内容添加在此处
    mytao:tao,
    myinfo:printinfo,
}
