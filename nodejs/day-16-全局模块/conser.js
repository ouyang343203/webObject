//1.0 console模块 提供了一组用户控制台输出的方法
console.log(1)//打印日志
console.info(2)//打印消息
console.warn(3)//打印警告
console.error(4)//打印错误
console.time() //开始计时
console.timeEnd() //结束计时 注意开始计时和结束计时括号的里面的内容要一致
//统计好耗时
//开始计时函数：
var start='start'
console.time(start);
for(var i=1;i<=1000000;i++){
   // console.log(1)//打印日志  
}
console.timeEnd(start)

// 1.1 process进程模块：系统上每个软件的运行都是到表一个进程，就相当于开启了一个任务，他会咱用一定的cpu 内存
//process.arch 查看当前cpu架构
//process.platform 查看当前的操作系统
//process.pid 查看当前进程的编号，随机生成的
//process.kill() 借宿指定编号的进程

//1.2 Buffer(缓冲区)模块
//创建Buffer
var buf=Buffer.alloc(5,'abc你好')//前面的5是分配的存储空间长度为5一个汉字占用三个字节如果前面分配5个字节的话回出现存了一部分溢出来
console.log(buf)//打印的结果<Buffer 61 62 63 e4 bd>abc�   abc�这部分就是分配了5个字节导致装不下益处的部分
//将buffer数据转字符串只有有中文的时候才有效
console.log(buf.toString())

//2.0  timer模块（定时器模块） 他提供了一组全局函数
//开启一次性定时器setTimeout(回调函数,间隔时间默认是毫秒为单位)
var timer=setTimeout(function pengaction(){
    console.log('爆炸')
},3000)//说明3000毫秒以后他会自动调用function()函数

//清除销毁定时器
clearTimeout(timer)

// //3.0 周期性定时器
// //var setInterval(回调函数,间隔时间)没隔一段时间调用一次回调函数
// var timeinter=setInterval(function intervalaction(){
//     console.log('周期回调函触发')
// },3000)