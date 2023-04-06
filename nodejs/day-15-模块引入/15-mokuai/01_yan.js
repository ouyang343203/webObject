var a=1//Node.js 中 a是局部变量不能直接使用 需要在module.exports中暴露

function fn1(){
    console.log('我是眼睛')
}

function fn2(n1,n2){
    console.log(n1+n2)
}

//获取周长
function fnr(r){
    return 2*Math.PI*r
}

//获取面积
function fnarer(r){
    return Math.PI*Math.pow(r,2)
}

var Studen={
    name:'我是学生涛哥',
    sex:'男'
  }

//两个预定义的局部变量 他会被自动调用
console.log(__dirname)//文件的绝对路径：如 XXX/XXX/day02
console.log(__filename)//文件的绝对路径+文件名称：如XXX/XXX/day02/xxx.js


//暴露模块内容使用： module.exports={暴露内容} 有切仅有一个module.exports 默认暴露的内容是一个空对象
module.exports={
    //暴露的内容添加在此处
    myA:a,
    myFn1:fn1,
    myFn2:fn2,
    myFn3:fnr,
    myFn4:fnarer,
    myFn5:Studen
}