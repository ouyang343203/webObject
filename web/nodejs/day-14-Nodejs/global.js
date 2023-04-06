//全局变量和局部变量的检测

//一：global关键字：主要用于检测js文件一个变量或者函数是否为全局变量或者函数 只要他能通过global.  访问就是全局的 在浏览器下运行才有效
//(测试方法：1在终端 输入node 在enter 在输入 var a=1 在enter 在输入global.a 可以访问的话就是全局的变量
//测试方法函数 如果是函数的话直接写一个函数 function fn(){return 2} 在enter 在输入global.fn() 能够得到记结果的话就是全局函数
//另外一种检测方法就是终端 node 后在拖入一个js文件在enter 看结果此时一般是undefined 因为此时相当于在服务端运行不是在浏览器运行，因为js是运行在浏览器端的所以此时在后段无法反问这个js文件

//注意1： Nodes.js(主要用于服务端) 下，每一个js文件都是在一个作用域下，里面的变量和函数都是局部的，他可以防止全局污染
//注意2： js(主要用于前端) 下，每一个js文件都是在一个作用域下，里面的变量和函数都是全局的，存在全局污染

var a=1
 console.log(global.a)

function fn(){
  return 2
}
console.log(global.fn)

//二：window关键字：主要用于检测Nodes.js文件一个变量活着函数是否为全局变量或者函数 只要他能通过global.  访问就是全局的 在浏览器下运行才有效
//注意1： Nodes.js(主要用于服务端) 下，每一个js文件都是在一个作用域下，里面的变量和函数都是局部的，他可以防止全局污染
//注意2： js(主要用于前端) 下，每一个js文件都是在一个作用域下，里面的变量和函数都是全局的，存在全局污染
//例子编写 05_window.js 和05.html 在把js文件嵌入到HTML，声明变脸和创建函数，通过window关键字查看是否为全局
var b=1 //var 声明的变量一般是全局变量
let c=3//let 声明的变量一般是局部变量
function fn1(){
  return 2;
}
console.log(window.b)
console.log(window.fn1())
console.log(window.c)


//https://nodejs.org/dist/latest-v16.x/docs/api/console.html (node.js 文档）
//三：process 进程了解
//进程对象用于了解Node.js进程
//process.search 查看当前CPU架构
//process.paltform 查看当前的操作系统
//process.pid 查看当前的进程编号，是一个随机分配的数字
//process.kill() 退出指定编号进程

//四：buffer 缓冲区