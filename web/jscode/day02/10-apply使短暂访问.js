var r1 = { width: 100, leght: 20 }
function area() {
    return this.width * this.leght
}
//使用call短暂访问
console.log(area.call(r1))

//  apply：应用，效果同call
console.log(area.apply(r1))



function volume(h1, h2) {
    return this.width * this.leght * h1 * h2

}


// 区别：call带有参数的传递它不接收数组作为参数，只支持1个1个数字
var x = volume.call(r1, 100, 5)
console.log(x)


//apply带有参数的传递这个是要传递数组他能将里面的数据拆分达到call函数的效果
var y = volume.apply(r1, [100, 5])
console.log(y)

// apply的用户练习
var maxNumber = (109, 30, 40, 50, 69, 77.80)
var max1 = Math.max(maxNumber)
console.log(max1)

var nums = [109, 300, 40, 50, 69, 77.80]
var max2 = Math.max.apply(null,nums)
console.log(max2)