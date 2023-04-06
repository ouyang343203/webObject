//传统的匿名函数：function(){}
var a = function () { console.log('nihao') }
a()

//箭头函数:
//箭头函数简化：()=>{}
var a = () => { console.log('nihao') }
a()

// 简化1 当形参只有一个的时候 可以省略括号
// const db = (x) => { return x * 2 }
// console.log(db(10))
const db = x => { return x * 2 }
console.log(db(10))

// 简化2 函数题只有一行代码可以省略大括号和return
const dc = x => { return x * 2 }
//简写
const df = x => x * 2

console.log(db(30))


// 练习
const h = (y) => { return y + 2 } // 简化前
const h1 = y =>  y + 2 // 简化后

const j = (x, y) => { return x + y }// 简化前
const j1 = (x, y) => x + y// 简化后

const p = (x) => { return y * y }// 简化前
const p1 = x => y * y// 简化后

const f = (a, b, c) => { return a + b * c }// 简化前
const f1 = (a, b, c) => a + b * c // 简化前

//坑：如果返回值是对象类型，对象的｛｝会被错误识别为函数的｛｝ 解决：用（）括起来，避免歧义
const g = (a, b) => {return  {a : a, b : b}}// 简化前
const g1 = (a, b) => ({a : a, b : b}) // 简化前

var uname = '泡泡',age = 18
var obj = {uname:uname,age:age}//简化前
console.log(obj)

var obj1 = {uname,age}//简化后
console.log(obj1)
