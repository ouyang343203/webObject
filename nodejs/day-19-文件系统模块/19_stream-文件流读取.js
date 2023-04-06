//大文件读取文件流
var n=0
var fs = require('fs') //也可以写成//const fs = require('fs')
//以流的方式读取文件 这里必须是文件
//创建读取的流
var rs = fs.createReadStream('./1.png')
//监听内存中是否有数据流入
rs.on('data',(value)=>{//
    n++
    console.log(value)//value 就是流入的数据
})
//注意 data是固定的字符串
//监听读取结束:'end'是固定的字符串
//rs.on('事件名称',回调函数)添加事件监听，监听某个动作，一旦监听到会自动调用回调函数这里的回调是异步的
rs.on('end',(value)=>{//
    console.log('读取结束',n)//value 就是流入的数据
})