//一：文件系统模块:即fs模块，主要用于操作服务器端的文件的，文件分为目录形式和文件形式，不属于全局模块，需要先引入才能调用API
//获取文件模块
var fs = require('fs') //也可以写成//const fs = require('fs')
console.log(fs)

/*这里都是通过命令行来运行
//查看是是否为文件：homedir.isFile()
console.log('查看是否为文件'+homedir.isFile())

// //查看是否为目录:homedir.isDirectory()
// console.log('查看是否为目录'+homedir.isDirectory())

// //判断文件/目录是否存在.
// fs.access('./19_homework.js',(err)=>{console.log(err?'目录/文件不存在':'文件存在,可以进行读写')})
*/


//二 ：同步API和异步API
//同步执API：在主线程执行，会阻止住程序后续代码的执行，通过返回值获取结果
//异步API：在一个独立的线程执行，不会阻止程序后续代码的执行，痛殴回调函数来获取结果，最后是将回调结果返回的在回调函数中，再将这个异步线程放入到队列中

//2.1
//同步查看XXX文件的状态：包括闯将的时间，文件大小等, 同步(在主线程执行，会阻止程序后续代码执行)看一个文件的状态：fs.statSync(文件)  使用命令行必须指向当前的目录
var homedir = fs.statSync('./19_homework.js')//文件：19_homework.js 他是同步执行的
//var homedir = fs.statSync('../day-19-文件系统模块')//目录：day-19-文件系统模块
console.log('文件的路径'+homedir)

//异步查看XXX文件的状态(注意它会将回调函数放入到事件队列中，将结果放到回调函数中，不会阻止主程序后续代码执行)查看一个文件的状态：fs.stat(文件,(error,value)=>{}) 文件状态结果在回调函数查看(error,value)=>{} 就是回调函数
var stat = fs.stat('./19_homework.js',(error,value)=>{//回调函数里面的第一个参数就是错误，第二个就是正确的结果
    //回调捕获结果
    //err：错误的结果
    //value 成功的结果
    if(error){
        throw error
    }
   console.log('返回成功结果：'+value)

})
console.log('程序结束')


//2.2写入文件：先创建文件，在写入，如果过文件存在会清空文件里面的内容然后在写入 fs.writeFileSync('写入的XXX.x 文件','写入的内容xxxx')
//同步写入文件
fs.writeFileSync('./2.txt','我是同步写入的内容\n')

//异步写入文件
fs.writeFile('./1.txt','我是异步写入的内容\n',(error)=>{
  if(error){
    throw error
  }
  console.log('异步写入成功')
})


//2.3 追加写入文件
//同步追加写入文件：先创建文件，在追加写入，如果过文件存在会清空文件里面的内容然后在写入
fs.appendFileSync('./2.txt','我是同步追加写入的内容\n')

//异步追加写入文件：先创建文件，在追加写入，如果过文件存在会清空文件里面的内容然后在写入
fs.appendFile('./1.txt','我是异步追加写入的内容\n',(err)=>{
    if(err) throw err;
    console.log('异步追加写入成功');
});


// //练习创建数组，包含一组姓名姓名，遍历数组得到每个姓名，使异步方法将每个姓名写入data.html
// var datas = ['张三','李四','王五','赵六','钱七','王八'] //不确定写入顺序
// for(var i=0;i<datas.length;i++){
//     fs.appendFile('./data.html',datas[i]+'\n',(err)=>{
//         if(err){
//             throw err
//         }
//         console.log('写入成功')
//     })
// }

//2.4 读取文件这种读取方式是读取整个文件，如果是大文件读取这种方式就不适合
//同步读取
var data = fs.readFileSync('./2.txt')//同步读取
// //data的格式是buffer
// console.log('读取文件结果:'+data.toString())

//异步读取
//第1个参数，可能产生的错误结果
//第2个参数，只有成功的结果是一个值才会出现I
fs.readFile('./1.txt',(err,value)=>{
    if(err) {
       throw err;
    }
    console.log('读取文件结果:'+value.toString())
});


// 2.5：删除文件
// 同步删除 unlinkSync(XXX.X)
if(fs.existsSync('./2.txt')){//判断文件/目录是否存在：existsSync(文件名称)
    fs.unlinkSync('./2.txt')//删除文件
    console.log('删除成功')
}

// 异步删除
if(fs.existsSync('./1.txt')){
    fs.unlink('./1.txt',(err,value)=>{
        if(err) {
        throw err;
        }
        console.log('读取文件结果:'+value.toString())
    });
}
