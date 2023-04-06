//一：全局和局部作用域函数
var a=1 //声明变量
function fun(){
  a=2 
}
//1
function fun(){
   b=2 //如果b在外面没有声则此处默认是全局变量
 }
 
 //以下执行说明程序执行前，会将var声明的变量提升到所在作用域的最前边，只是提升声明部分，赋值不提升。如果没有var就不提升而且会出现undefined
 console.log(a)
 var a=1;

 function fun1(){
   console.log(b)//结果是undefined
   var b=2 //var声明的变量提升到所在作用域的最前边 也就是在 console.log(b)上面会生成一个 var b = undefined 但是没有赋值 会出现undefined
   //  console.log(a);
 }

 fun1()

 //2
 var c=3
 function fun2(){
   console.log(c)//结果是undefined
   var c=5 //var声明的变量提升到所在作用域的最前边 也就是在 console.log(c)上面会生成一个 var b = undefined 但是没有赋值 会出现undefined
 }
 fun2()
 console.log(c)

 /*//3
function foo(n){
   //参数内部属于局部变量，只能在函数内部访问到
   var n=1
}
foo(1)
console.log(n)// 这里会报错找不到这个n*/

var m=5
function boo(m){
   //传惨相当于给局部变量m赋值
   m=m+3
   console.log("m+3:",m)
}
boo(1)
console.log("m:",m)//查找的是全局变量m

//二：函数的作用域
//全局函数:在全局作用域下创建的函数，可以在任意作用域下调用
//局部函数:在函数作用域下创建的函数，只能在所在的函数作用域下调用
5 //作用域链:作用域之间相互嵌套
6 //查找变量的时候，先到当前作用域下查找。如果没有会一直往上一级作用域查找|
//例如 一开始他会在funsubs中找到a=9的直，如果funsubs函数中没有他就会在funs中找有没有a=2的值如果没有他就会找到上一级最的a=5这个值
var a=5
function funs(){
   var a=2
   function funsubs(){
      var a=9
      console.log("a:",a)//查找的是全局变量m  
   }
   funsubs()
}
funs()
