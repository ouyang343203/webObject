
//函数重载：判断实参的个数型，来执行不同的逻辑

const { attachment } = require("express/lib/response")

// 商场打折
function zhekou(money) {
    if (arguments.length == 3) {
        var man = arguments[1]
        var jian = arguments[2]
    }
    // 如果3个参数：就满减
    if (money >= man) money -= jian
    console.log('满减')


    // 如果是两个参数
    if (arguments.length == 2) {
        //类型是number,就打折
        if (typeof arguments[1] == 'number') {
            money *= arguments[1]
            console.log('折扣', money)
        }
    }

    // 如果参数重有字符串
    if (typeof arguments[1] == 'string') {
        var vip = arguments[1]
        if (vip == 'vip1') money *= 0.9
        if (vip == 'vip2') money *= 0.8
        if (vip == 'vi3p') money *= 0.7

    }

}

zhekou(3000, 2000, 500)
zhekou(3000, 'vip')


/*
练习制作sum函数，能够实现如下效果：
tedu＿张德文＿E＿bfv3rdt
sum（100）／／计算出1-100 数字累加之和5050
sum（50,100）／／计算出50-100 数字累加之和？？？？
sum（100,200,3）／／计算出：100 103 106 ．．．199 数字之和，即间隔3个数字之和
*/

function sum(money) {
    if (arguments.length == 1) {
        var s = 0
        for (var i = 0; i <= attachment[0]; i++) {
            s += i
        }
        console.log(s)
    }

    if (arguments.length == 2) {
        var s = 0
        for (var i = arguments[0]; i < arguments[1]; i++) {
            s += i
        }
        console.log(s)
    }

    if (arguments.length == 3) {
        var s = 0
        for (var i = arguments[0]; i < arguments[1]; i+=arguments[2]) {
            s += i
        }
        console.log(s)
    }

}

sum(100)
sum(50,100)
sum(1,100,5)
