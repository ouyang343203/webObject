
//nodejs官网： nodejs.org/dist/latest-v16.x/docs/api/fs.html

//数据类型 
//1声明常量数据类型及不能改变 声明后且必须赋值 const
const r = 4
const pi = 3.14
console.log(r,r*pi)

//2声明基本数据类型
var a1 = 3.24
var a2 = 4
var a3 = 012
var a4 = 0x1
console.log(typeof a4)//检测数据的类型：typeof + 空额

//3字符串数据类型和隐式转换
var str = "hello"
console.log(typeof str)//检测数据的类型：typeof + 空额
//字符串的拼接：
//(3.1)数字+字符串 结果为字符串类型
var number = 2 //隐式转换为"2"
var chart3 = "4"
var result = number + chart3

console.log("数字+字符串:" + result,typeof result)
//(3.2)数字+布尔值 结果为nuber类型
var second = 6
var bool = true
var result1 = second + bool
console.log("数字+布尔值:" + result,typeof result1)
//(3.3)布尔值+字符串 结果为nuber类型
var chart4 = "7"
var boolno= false
var result2 = chart4 + boolno
console.log("布尔值+字符串:" + result2,typeof result2)

var name = "张三"
var salary = 5000
console.log("姓名：" + name + "  工资：" + salary)
//(3.4)布特殊字符 字符串所有类似：3a 他的打印结果都是NaN
var m1 = "3"-1 // 结果2 number 类型 特殊说明这里 "3" 等于是 var a = Number(3) 将字符串转成了Number类型
console.log(m1)
var m2 = "3"*1 // 结果3 umber 类型
console.log(m2)
var m5 = "5"/"4" // 结果1.25 umber 类型
console.log(m5)
var m6 = "3a"/-1 // 结果NaN 
console.log(m6)
var m7 = 3-undefined // 结果NaN
console.log(m7)
var m8 = 3-null // 结果3 null会自动转成0
console.log(m8)
var m10 = 3*false // 结果3 true会自动转成0  true会自动转成0  false会自动转成0
console.log(m8)

// 查看字符的Unicode编码:XX + charCodeAt()
console.log( "建".charCodeAt())
var x = "hello"
console.log( x.charCodeAt())

//4布尔值类型
var vip = true
var b = 1 > 3
console.log(b)
console.log(typeof b)

//5未定义类型 只有一个值表示空值，声明了变量未赋予值班
var c;
console.log(c,typeof c)

//6 空值类型 只有一个值 
var p = null
console.log(p,typeof p)

//7 强制转换为整型 parseIntan 函数 他的原则是按一个来转如果是数字直接转成整数 如果不是则为NaN
//(7.1)
var char1 = "16a"//结果3
console.log(parseInt(char1))
var char2 = 58.9 //结果5
console.log(parseInt(char2))
var char3 = "3a8q3"//结果
console.log(parseInt(char3))
var char4 = "c3a"//结果NanN
console.log(parseInt(char4))

//(7.2) 强制转换为浮点型 他的原则是按一个来转如果是数字直接转成整数 如果不是则为NaN
var floatchar1 = "6.18ad"//结果6.18
var floatchar2 = "3c"//结果3
var floatchar3 = "c3"//结果NaN
var floatchar4 = true//结果NaN
console.log(parseFloat(floatchar1))
console.log(parseFloat(floatchar2))
console.log(parseFloat(floatchar3))
console.log(parseFloat(floatchar4))

//8强制转换为字符串
var n = true
var str = n.toString()
console.log("true强制转换为字符串：" + str,typeof str)

var n2 = 2
var str2 = n2.toString()
console.log("数字强制转换为字符串：" + str2,typeof str2)

//以下两种不能转
// var n3 = null
// var str3 = n3.toString()
// console.log("null强制转换为字符串：" + str3,typeof str2)

// var n4 = undefined  //undefined为定义类型
// var str4 = n4.toString()
// console.log("undefined强制转换为字符串：" + str4,typeof str4)

//练习 交换两个变量的值
var a1 = 1;
var b1 = 2;
var c1 = a1
b = c1
a1 = b1
console.log(a1,b1)

