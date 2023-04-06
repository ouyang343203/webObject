//：一、ES6 新增声明变量的方式
//1.1let 声明没有提升功能 var有提升功能 且不允许重复声明
//console.log(a)//这样会不到a因为他没有var的提升功能
let a=1

//1.2块级作用域 打括号之间的语句就是块作用域，例如 if,else,for...  ，块级作用域下let和const声明是局部的，外部无法访问，可以防止全局污染
{
var b=2//var声明的是全局变量，不存在块级作用域
let c=3//let声明的是局部，存在块级作用域外部不允许访问
const d=4//声明的是常量局部变量，局部常量存在块级作用域外部不允许访问
}
console.log(b)
// console.log(c)//超出作用域无法访问


//下面是一个例子使用for循环计算1～100之间的所有的整数的和，使用let声明变量
for (let i=0,sum=0; i<100;i++){
    sum+=i
}
//console.log(sum)//超出作用域无法访问 //sum  的作用域在for中才有效

//1.3参数增强
function add(a,b,c){
    console.log(a+b+c)
}
add(800,300,500)//这种不会报错
// add(800,300,)//这种会报错出现 因为c没有被赋值他就会默认为undefined 就会出现800+300+undefined 导致结果为undefined

//解决Es6上面这种就是设置默认值
function add1(a=0,b=0,c=0){
    //b=b||0;//表示如果b有值则把b的值赋给b走则把0赋给b
    console.log(a+b+c)
}
add1(800,300)//这种函数中设置默认值就不报错

//ES6以前解决上面问题不是这只默认值二是通下面的设置方式
function add2(a,b,c){
    a=a||0;
    b=b||0;
    c=c||0;//表示如果b有值则或者前面为true则把b的值赋给b否则把0赋给b
    console.log(a+b+c)
}
add2(800)//这种函数中设置默认值就不报错

//二、箭头函数
// 2.1 箭头函数 简化匿名函数的写法，不等价于匿名函数

//箭头函数的一般语法  function(){}//匿名函数 -》转箭头函数(去掉了function 在括号后面添加=>)  ()=>{} 
//系统的排序
// var array=[23,9,78,6,45,0,100,88.2]
// array.sort(function(a,b){
//     return a-b;
// })
// console.log(array)


//匿名函数转箭头函数
// array.sort(function(a,b){
//     return a-b;
// })
// console.log(array)
array.sort((a,b)=>{return a-b})
console.log(array)
//如果箭头函数的函数体中只有一一行代码，并且是return形式，则可以简化为
var array1=[23,9,78,6,45,0,100,88.2]
array1.sort((a,b)=>a-b)
console.log(array1)

//联系使用匿名函数创建函数，传递任意三个数字返回平均值，在使用箭头函数替换匿名函数
// ;var doselfunc=(function(number1,number2,number3){
//     //此时会输出123好帅！
//     console.log(number1+number2+number3)/3;
// })
// (doselfunc())(9,4,9)
var fun=(number1,number2,number3)=>{
    return (number1+number2+number3)/3
}
//简化上面 fun箭头函数
var fun1=(number1,number2,number3)=>(number1+number2+number3)/3
console.log(fun1(8,10,40));

//3.1模版字符串,简化字符串的拼接  使用``即反引号反之间的内通就是模版字符串${表达式内容} toFixed(n)n表示保留的小数
var enname='涛哥'
var salary=50000
var sex=1

console.log(`
    姓名：${enname}
    性别：${sex===1?'女':'男'}
    工资：${salary.toFixed(2)}
`)

//练习创建对象，包含一条商品数据，包含的属性有编号，标题，价格是否在售，最后打印输出一下格式
var lap={
    lid:7,
    title:'小米Air',
    price:4599,
    isOnsale:0
}

console.log(`
    编号：${lap.lid}
    标题：${lap.title}
    价格：${lap.price.toFixed(3)}
    是否在售：${lap.isOnsale==1?'是':'否'}
`)


