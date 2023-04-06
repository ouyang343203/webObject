//nodejs官网：nodejs.org/en/

//一： 常见的j内置处理：
// 1、声明提升
// 2变量的覆盖
// 2同名函数覆盖 如下：

// 说明打印的结果是2 2后面的结果会立马覆盖前面的结果
function a() {
    console.log(1);
}
a()

function a() {
    console.log(2);
}
a()

// ==========================================

var b = function () {
    console.log(100)
}
b()

var b = function () {
    console.log(200)
}
b()


//上面程序的执行顺序这个相当于会先声明两个 var b  var b 
var b
var b //第二次的声明会被忽略因为已经声明了一个b
// 所以会先执行 下面这个
b = function () {
    console.log(100)
}

// 在执行
b()

// 执行
b = function () {
    console.log(200)
}
// 在调用 所以结果是 100 200
b()
