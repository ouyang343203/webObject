var mounkey={
    name:"我是涛哥",
    age:15
}

 //暴露模块内容使用： module.exports={暴露内容} 有且仅有一个module.exports 默认暴露的内容是一个空对象
 module.exports={
    //暴露的内容添加在此处
    mymounkey:mounkey,
}

console.log('我是猴子')
