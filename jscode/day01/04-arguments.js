
// 一：arguments：参数
    // 函数自带的关键词：其中存放函数收到的所有实参
    // 函数的arguments属性
    // 保存函数运行时，收到的所有实参
    // 用途
    // 制作实参个数不固定的函数
    // 函数重载：通过if判断 实参的个数 或 类型 不同，运行不同的代码逻辑

function show() {
    console.log(arguments)
}
show('亮哥哥', 42, true, ['抽烟', '喝酒', '打牌', '赌博',])

// 求最大值
var max = arguments[0]
function maxmatn() {
    for (var i = 0; i < arguments.length; i++) {
        var n = arguments[i]
        if (n > max) {
            max = n
        }
    }
    return max;
}

console.log(maxmatn(11, 491, 2, 3, 6, 101))

// 求平均数
var sum = 0
function avg() {
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum / arguments.length;
}
console.log(avg(11, 491, 2, 3, 6, 101))
