var emp = {
    ename: '泡泡',
    age: 18,
    phone: '1383838438'
}

// var ename = emp.ename, age = emp.age, phone = emp.age  老得语法结构赋值
var { ename, age, phone } = emp //ES6以后的赋值
console.log(ename, age, phone)
//练习结构属性书来
//一：换位语法
var emp1 = {
    ename: '凯南',
    age: 33,
    phone: '1383838dsafd438'
}

var { phone, enname, age } = emp1
console.log(phone, enname, age)

//一：别名语法
var sname = '欢欢'
var stu1 = { sname: '铁柱' }
var { sname: sanme1 } = stu1
//{属性名：别民}
// var { sanme: s1name } = stu1
console.log(sname, sanme1)


//别名语法练习
var r1 = { length: 10, width: 10, height: 10 }
function volume() {
    // return this.length*this.width*this.height //传统别名前求体积

    //{属性名：别名}
    var { length: l, width: w, height: h } = this

    //取别名后
    return l * w * h
}

//别名语法练习2 求上面正方体面积 面积 = （长*宽 + 长*高 + 宽*高）*2
function area() {
    //  return (length*width +length*height * width*height)*2 //传统别名前求面具

    //{属性名：别名}
    var { length: l, width: w, height: h } = this

    //取别名后
    return (l * w + l * h + w * h) * 2

}


var x = volume.call(r1)
var v = area.call(r1)
console.log(x)
console.log(v)


//别名语法练习3
var re2 = { x: 10, y: 20 }
function add(r) {
    return r.x + r.y
}
console.log(add(re2))


// 形参解构语法练习2
var emp = {
    ename: '泡泡',
    age: 28,
    married: true,
    skills: ['html', 'css', 'java', 'scss', 'ajax'],
    desc: {
        phone: '138383438',
        eid: '1002'
    }
}

//对上面进行解构
var { ename, age, married, skills: [s1,s5], desc: { phone, eid } } = emp
console.log(ename, age, married, s1, s2, s3, s4, s5, phone, eid)




var stu = {
    sname:'开开',
    age: 18,
    gender:'男',
    tags:['吃','喝','玩','乐'],
    desc: {
        phone: '138383438',
        eid: '1002'
    }
}

var { sname, age:sage, gender, tags: [s1, s2, s3, s4, s5], desc: { phone, eid } } = stu
console.log(ename, sage,gender, s1, s2, s3, s4, s5,phone, eid)