//共有变量
var wife = '泡泡'
function aa() {
    console.log('aa媳妇是:', wife);
}
aa()

function bb() {
    console.log('bb媳妇是', wife);
}
bb()


// ========私有变量 相当于匿名函数的自调用==========================
var cc = (function () {
    var wifename = '泡泡'
    return function () {
        console.log('cc的媳妇是：', wifename)
    }
})()
//   console.dir(cc)
cc()


// 练习
var show = (function () {
    var num = 0
    return function () {
        num++
        console.log('num:', num)
    }
})()

show()
show()
show()


function test(a, b, c, d) {
    console.log(a + b + c + d);
} (1, 2, 3, 4)


var f = (function (a, b, c, d) {
    console.log(a + b + c + d);
})()

f()

