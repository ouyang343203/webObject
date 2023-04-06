//全局对象：console
var a=1
function fn(){
  return 2;
}
// console.log(window.a);//
// console.log(window.fn());
console.info(1)//打印消息
console.warn(2)//打印警告
console.error(3)//打印错误

//全局耗时统计：time 注意开始计时和结束计时里面的必须是同一个字符串或者同一个值
//开始计时 
var start = 'start'
console.time(start)//开始计时
for(var i=1;i<100000000;i++){

}
console.timeEnd(start)//结束计时

var start1 = 'start1'
console.time(start1)//开始计时
var i=0
do{
  i++
}while(i<10000000000000)
console.timeEnd(start1)//结束计时

var start2 = 'startting'
console.time(start2)//开始计时
var j=1
while(j<10000000000000){
  j++
  //console.log(j)
}
console.timeEnd(start2)//结束计时