//1．对象作为参数传递给函数
//2．函数传递到对象里执行-- this

var r1 = { width: 10, leght: 20 }
function area() {
    return this.width * this.leght
}

r1.area = area
console.log(r1.area())
delete r1.area
console.log(r1)
console.dir(area)


function volume(h) {
    return this.width * this.leght * h
}

//把volume 放到r1 对象里，额外传递高度
console.log(volume.call(r1, 100))


//练习1 函数：计算出某个人n年后的年纪
var pao = { ename: '泡泡', age: 17 }
//var pao = { ename: '泡泡', age: 17, salary: 8000 }
function show(n) {
    return this.age + n
}
// pao.show = show
console.log(show.call(pao, 10))


var pao1 = { ename: '泡泡', age: 17,salary:5000 }
//练习2 函数：计算出某个人n年后的薪资
function total(n) {
    return this.salary * 12 * n
}
console.log(total.call(pao1, 5))