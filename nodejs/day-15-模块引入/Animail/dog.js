var Dog ={
    name:'我是小狗',
  }

//两个预定义的局部变量 他会被自动调用
console.log(__dirname)//文件的绝对路径：如 XXX/XXX/day02
console.log(__filename)//文件的绝对路径+文件名称：如XXX/XXX/day02/xxx.js


//暴露模块内容使用： module.exports={暴露内容} 有切仅有一个module.exports 默认暴露的内容是一个空对象
module.exports={
    //暴露的内容添加在此处
    myFn9:Dog
}