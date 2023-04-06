var a = 10
function b() {
    // var a 运行时会提升作用域顶部
    a = 20
    console.log(a)
    var a //注意这里声明的会运行时会提升作用域顶部
}
b()

console.log(a)




//函数的第一种做法
var r1 = { width: 100, height: 50 }
function area(r) {
    console.log('面积：', r.width, r.height)
}
area(r1)


//函数的第二种做法
var r2 = { width: 100, height: 50 }
function main() {
    console.log('第二种方式计算的面积', this.width * this.height)
    console.log(this == r1)
}

r2.main = main
r2.main()

//练习计算立方体
var r3 = { lenght: 10, width: 40, height: 40 }
var r4 = { lenght: 14, width: 45, height: 30 }

function volume() {
    console.log('体积', this.lenght * this.width * this.height)
}

// r3.xx = volume
// r3.xx()
volume.call(r3)//上面两个注释的部分可以使用当前的系统提供的call函数代替

function moum(x, y) { console.log(x + y) }
console.log('求和', (moum(10, 20)))

//自定义构造函数命名规范：大驼峰命名法 -首字母大写
function Rect(length, width) {
    //创建空对象
    var obj = {}

    obj.length = length
    obj.width = width


    //计算面积
    obj.area = function () {
        console.log('面积：', this.width * this.length);
    }

    //计算周长
    Object.zc = function () {
        console.log('周长：', 2 * (this, width + this.length))
    }

    return obj
}

var r1 = Rect(10, 4)
r1.area()//调用计算面积
r1.zc()//调用计算面积

// // 系统的构造函数
// var names = new Array('泡泡', '亮亮', '明明')

// 以上构造函数的问题
// 问题点：每次构造函数调用，都需要为对象临时创建 面积和周长的方法，而这个方法明显可以共享使用
// 所以：可以考虑提取到外部 实现共享，提升对象的制作效率
// 官方解决此问题：原型理论 在03.系统构造函数中