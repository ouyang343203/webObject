//：包装对象
var n1=1

//Number对象
//1.1将数字包装为Number对象
var n2=new Number('1')
console.log(n2)

//将true使用包装转换为1 false转换成0
var n3=Number(true)
console.log(n3)

var n4=Number(false)
console.log(4)

//将Number转化为数字
var n5=Number('11')
var n6=Number('12')
console.log(n5+n6)

//1.2 保留小数点后面若干位
var n7=n6.toFixed(2)
console.log('保留两位小数'+n7)

//1.3 包装为Boolean对象：new Boolean()将一个Boolean值包装成对象
var b1=new Boolean(true) //
console.log(b1,typeof b1)

//1.4 Boolean() 将一个值强制转换为布尔类型 出现false的情况 0 ,NaN, '', undefined, null
var b3=Boolean(undefined)
console.log('强制转换的结果' + b3)
console.log(b3,typeof b3)

//1.5 !!将一个值隐士转换为布尔类型
var c=!!0 //先把0转为布尔类型false, 第二个!先把false取反则为true,第一个！在对true取反 就就是false
console.log(c,typeof c)

//将数值转为字符串
var b4='11'
var b5=b4.toString()
console.log(b5,typeof b5)

//2错误情形
//2.1语法错误：语法错误的提示语一般是的  提示语一般是：SyntaxError 出现语法错误后面的代码都不在执行
// console.log(1)
// var a=1；// 报错SyntaxError错误应为他不是英文的;
// console.log(2)

//2.2引用错误： 提示语一般是：ReferenceError 一般出现在使用了未声明的变量

//2.3类型错误 调用的api函数错误： 提示语一般是is not a function
//引用错误和类型错误都会影响后面的代码

//例如调用一个错误的api
var arr=[8,13,22]
console.log(arr.slice(1))//如果将这个截取数组的函数写错就会提示: TypeError  然后就是 is not a function

//2.4 自定义错误:throw抛出错误信息
//例如
 var age=80;
 if(age>75){
    throw'他是老年人';
 }
console.log('自定义错误不在输出')

//2.5错误处理 tyr{尝试执行，可能 出现过的错误出现后不在影响后面的代码执行}catch{只有try中的出现错误爱会执行} 即使出现的错误也不会影响后面的代码执行

//  if(age!=1){

// //    //try做错误处理了错误处理
// //     try {//尝试捕获错误
// //         console.log(use)
// //      } catch (err) {//这里执行的条件是上面的错误补货成功在走这里 将try种的错误信息搜集到形参err中
// //         console.log(err) //捕获错误信息
// //      }
// //  } 

// //  console.log('上面错误依然可以运行这个段代码')  

 //错误处理
 try {
    console.log(use)
 } catch (err) {
    // console.log(err)
    // var use=1
    use=1
 }