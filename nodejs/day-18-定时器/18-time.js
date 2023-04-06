/*//定时器:setTimeout(回掉函数,间隔时间)
//1.1一次性定时器
//开启定时器
var timer = setTimeout(function(){
    console.log('爆炸来了')
},3000)

//清除time
clearTimeout(timer)

//================================================
//1.2周期性定时器 var intertimer = setInterval(回掉函数，间隔时间)
//开启
var intertimer = setInterval(function(){
   console.log('周期性定时器执行-滴滴滴');
},3000)
console.log('1')

//================================================
// 1.3立即执行定时器
console.log('1开始执行')
var tiatetimer = setImmediate(function(){//此处会在2和3执行完成之后在在执行
    console.log('3开始执行滴答');  
})
console.log('2开始执行')
clearInterval(tiatetimer)


//1.4 process立即执行定时器  这个的执行顺序如下：因为process就相当于是一个插班生
// process1开始执行
// process2开始执行
// process4开始执行
// process3开始执行滴答

console.log('process1开始执行')
var processtimer = setImmediate(function(){//此处会在2和3执行完成之后在在执行
    console.log('process3开始执行滴答');  
})

process.nextTick(function(){//插队执行 此处会在1和2执行完后立马执行在4执行完成之后在在执行3
    console.log('process4开始执行');  
})

console.log('process2开始执行')
//清除time
clearInterval(processtimer)
*/
//练习：开启周期性定时器，每隔3秒中打印‘hello’,打印3次后清除定时器
var n=0
var hellotimer = setInterval(function(){
    console.log('hello');
    n++
    if(n >=3){
        clearInterval(hellotimer)   
    }
 },3000)
 console.log('1')
 