
//构造函数命名规范：大驼峰命名法 -首字母大写
// 问题点：每次构造函数调用，都需要为对象临时创建 面积和周长的方法，而这个方法明显可以共享使用
// 所以：可以考虑提取到外部 实现共享，提升对象的制作效率
// 官方解决此问题：原型理论 在03.系统构造函数中 来解决次问题
// JS引擎的设定：当使用对象的一个属性时，如果找不到，则会自动到其 原型链 保存的 地址中 查找
// 原型链机制：对象自身没有的属性，就到原型链中找，按照这个规则，一层层查找
// 类似：儿子没钱，找爸爸要，爸爸没钱找爷爷要，爷爷没钱则继续向上....直到根上..都没有 就是

//构造函数的三个步骤：
//1．先完成函数-能够生成对象，包含传入的属性
//2．在原型中，增加共享方法
//3．对象的原型链 链接到 原型


//一、 原型理论
//原型链机制：对象自身没有的属性，就到原型链中找，按照这个规则，一层层查找
//类似：儿子没钱，找爸爸要，爸爸没钱找爷爷要，爷爷没钱则继续向上....直到根上..都没有 就是undefined

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
    obj.zc = function () {
        console.log('周长：', 2 * (this.width + this.length))
    }

    // 告知对象共享属性存储在哪里
    obj.__proto__ = Rect.prototype

    return obj
}

// console.log(Rect)//后台查看
// 把面积和周长方法辅导共享的原型对象里面
Rect.prototype.area = function () {
    return this.length * this.width
}

Rect.prototype.zc = function () {
    return 2 * (this.width + this.length)
}

var re1 = Rect(10, 5)
console.log(re1.area())
console.log(re1.zc())
// console.log(re1)


//========================使用es5实现类原型链的继承=====================================
// 父亲类的创建
function father() {
    //这些属性在father实例对象上
    this.name = "cry"
    this.age = 50
}
//这些方法在father原型对象上
father.prototype.getName = function () {
    return "父亲叫" + this.name
}
father.prototype.getAge = function () {
    return "父亲他今年" + this.age + "岁了"
}

//现在你已经可以访问father的name属性和age属性了
var c1 = new father()
console.log(c1.name, c1.age)
console.log(c1.getName(), c1.getAge())


// ======实现类的继承================
// 子类的创建
function child() {
    //继承第一步，实例对象的属性继承
    father.call(this)//call可以把child的上下文传进Father里进行属性赋值
}

var c1 = new child()
console.log('儿子的父亲名字' + c1.name, '儿子的父亲年龄' + c1.age)

//但是我们还是没有办法访问father原型上的方法
// console.error("error",c1.getAge())

//第二步骤继承--原型链继承（__proto__是原型指针）修改child的原型指针让它指向father这个原型对象（之前默认指向object）
child.prototype.__proto__ = father.prototype
console.log(c1.getName(), c1.getAge())//会报错
console.error("error", c1.getAge())


// 练习
function Cube(length, width, height) {
    var obj = {}
    obj.length = length
    obj.width = width
    obj.height = height

    //计算面积
    obj.area = function () {
        console.log('面积：', this.width * this.length);
    }

    //计算周长
    obj.zc = function () {
        console.log('周长：', 2 * (this.width + this.length))
    }

    //计算体积
    obj.volume = function () {
        console.log('体积：', this.width * this.length * this.height)
    }
    // 利用 原型链 属性，链接到 构造函数的原型 告知对象共享属性存储在哪里
    obj.__proto__ = Cube.prototype

    return obj
}

function React(width, lenght, heght) {
    var obj = {}
    obj.width = width
    obj.lenght = lenght
    obj.heght = heght
    obj.area = function(){
        console.log('面积', this.width * this.lenght)
    }

    obj.zc = function(){
        console.log('面积', (this.width + this.lenght) * 2)
    }

    obj.volume = function(){
        console.log('面积', (this.width * this.lenght * this.heght))
    }

    // 利用 原型链 属性，链接到 构造函数的原型 告知对象共享属性存储在哪里
    obj.__proto__ = React.prototype
}
var ract = React(10, 20, 30)
console.log(ract.volume())
console.log(ract.zc())
console.log(ract.area())


// console.log(Rect)//后台查看
// 把面积和周长方法辅导共享的原型对象里面
Cube.prototype.area = function () {
    return this.length * this.width
}

Cube.prototype.zc = function () {
    return 2 * (this.width + this.length)
}

Cube.prototype.volume = function () {
    return this.width * this.height * this.length
}


var cub = Cube(10, 20, 30)
console.log(cub.volume())
console.log(cub.zc())
console.log(cub.area())


// 练习三
//练习：完成一个 制作 圆形对象 的构造函数
function Circle(radius) {
    var obj = {}
    obj.radius = radius
    //计算面积
    obj.allarea = function () {
        console.log('圆面积：', 3.14 * this.radius * this.radius);
    }

    //计算周长
    obj.allzc = function () {
        console.log('圆周长：', 2 * 3.14 * this.radius)
    }
    // 利用 原型链 属性，链接到 构造函数的原型 告知对象共享属性存储在哪里
    obj.__proto__ = Circle.prototype
    return obj
}

Circle.prototype.allarea = function () {
    return this.length * this.width
}

Circle.prototype.allzc = function () {
    return 2 * (this.width + this.length)
}

var circle = Circle(10)
console.log(circle.allarea())
console.log(circle.allzc())


