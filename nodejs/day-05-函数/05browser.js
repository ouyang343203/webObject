//函数
//1、没有参数的函数: function 无参数 函数名称（）{}
function helloworld() {
  console.log("hell world")
}
helloworld()

//1、有参数的函数: function (参数1，参数2，参数3，)函数名称（）{}
function add(a,b) {
    console.log(a+b)
}
add(1,2)

function getSum(a) {
    var i = 0;
    var sum = 0;
  do{
      i++
      sum+=i
  }while(i<a)
  console.log(sum)
}
getSum(100)

//计算任意两个数行之间所有的年份
function getCount(n1,n2) {
   for(var i=n1,count=0;i<n2;i++){
      if((i%4==0 && i%100!==0) || i%400==0){
         count++
      }
   }
   console.log(count)
}
getCount(1949,2022)

//2有返回值的函数：说明函数中没有return或者return后不添加返回的值 调用函数的结果都是undefined
function getCount(n1,n2) {
    for(var i=n1,count=0;i<n2;i++){
       if((i%4==0 && i%100!==0) || i%400==0){
          count++
       }
    }
    return count
 }
 var suncont = getCount(1949,2022)
 console.log(suncont)
 
 //创建函数传递两个值返回最大的值
 function getMax(a,b) {
    var max = a>b?a:b
    return max
 }
 console.log(getMax(3,9))

  //创建函数传递三个值返回最大的值
  function getMax1(a,b,c) {
    // if(a>b&&a>c){
    //     return a
    // }else if(b>c){
    //     return b 
    // } else{
    //     return c
    // }  
    return a>b&&a>c ? a : (b>c) ? b:c
 }

 console.log(getMax1(22,88,40));
  //求1～5所有数的阶乘的和
function getsum(a) {
    for (var i=1,sum=0;i<a;i++){
        for (var j=1,s=1;j<=i;j++){
           s*=j//计算当前数的阶乘
        }
        sum+=s //每次的阶乘果在相加
    }
    return sum
};
console.log(getsum(10))

//3匿名函数：既没有行数名的函数 写法：function{函数体} 匿名函数的自调用格式：(function(){})()
;(function(){//如果不确定前面是否有分号那就可以自动加上不报错
	console.log("页面一加载自动调用")
})();

var doselfunc =  (function(){
	console.log("我是匿名函数")
});//匿名函数赋给一个变量
doselfunc();//调用匿名函数

(function (str){
    //此时会输出123好帅！
    console.log('123'+str);
})('我是匿名函数传递的值')


//二：递归函数
//计算阶乘
function jc(n){
   if (n==1){
      return 1;
   }
  return n*jc(n-1)
}

console.log("阶乘",jc(6))

//三回掉函数
function cao(yuangong){//如果不确定前面是否有分号那就可以自动加上不报错
  var you = "炒" 
  var reelult = you +  yuangong()
  console.log(reelult)
};

function huidiaohanshu(){//如果不确定前面是否有分号那就可以自动加上不报错
	console.log("鱿鱼")
   return "鱿鱼"    
};
cao(huidiaohanshu)

var p={
   say:function(){
     this 
   }
}
//3.1 函数作为参数传递:function funcname(参数1,参数2,参数3){}
function cao1(can1,can2,can3){//如果不确定前面是否有分号那就可以自动加上不报错
      var  countstr =   can1()/*调用回调函数*/ + can2() + can3()
      return countstr
 };

 function yuangon1(){//如果不确定前面是否有分号那就可以自动加上不报错
   return "我是yuangon1"
};

function yuangon2(){//如果不确定前面是否有分号那就可以自动加上不报错
   return "我是yuangon2"
};

function yuangon3(){//如果不确定前面是否有分号那就可以自动加上不报错
   return "我是yuangon3"
};

console.log(cao1(yuangon1,yuangon2,yuangon3))

//4系统函数
// Number()//数字装Number
// parseFloat()//字符转float
// isNaN()//检测字符串中是否有数字 含有->true 不含有->false  他会自动调用Number()转位数值，然后查看是否为NaN
// eval()执行执行字符串表达式 ：执行字符串表达式
var num = "1+2"
eval(num)//他会自动计算1+2的值

//练习创建一个函数传递一个数字检测是否为质数返回bool类型（质数：一以上的整数只能被1和自身整数的数字）
function isPrime(n){
   if(n < 2){
      return false  
   }
//循环2～n-1之间所有整数
  for(var i=2; i<n; i++){
     if(n%1==0){
      return false
     }
  }
  return true
}
 console.log(isPrime(5))
