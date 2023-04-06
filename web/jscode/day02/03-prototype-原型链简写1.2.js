//练习：完成一个 制作 圆形对象 的构造函数
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.allarea = function () {
    return 3.14 * this.radius * this.radius
}

Circle.prototype.allzc = function () {
    return 2 * 3.14 * this.radius
}

//简写第二处
var circle = new Circle(10)
console.log(circle.allarea())
console.log(circle.allzc())







//简写计算周长
function Rect(length, width) {
    this.length = length
    this.width = width
}


// console.log(Rect)//后台查看
// 把面积和周长方法辅导共享的原型对象里面
Rect.prototype.area = function () {
    return this.length * this.width
}

Rect.prototype.zc = function () {
    return 2 * (this.width + this.length)
}

var cub = new Rect(10, 20)
console.log(cub.zc())
console.log(cub.area())



// 原型链运用 如：给系统的数据类型添加方法 类似ios的扩展
// 例如给下面系统数据添加方法
var nums = [12, 13, 4535]
console.log(nums.__proto__ == Array.prototype)
console.log(Array.prototype)//获取所有的数组里面的函数
Array.prototype.xx = function () { //xx就是给系统的方法添加xx方法  ／／可以给系统对象的构造函数的原生主，添加新的方法--扩展原型
    // alert('xxxxx')
}
nums.xx()

