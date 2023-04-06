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
 