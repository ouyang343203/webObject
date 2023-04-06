//1条件语句 if  如果括号里面为：0、NaN  、“” 、undefind、null  都会自动转化为false
//使用
var total = 22
if(total > 30){
  total -= 15
}
console.log(total)

var str = "恒河水真好喝"
if(str == ""){
   str = "设家伙很懒什么都没留下 "
}
console.log(str)

//逻辑运算符赋值
var n1 = 0 || 3  //如果第一成立则取第一个值 如果第一个不成立在判断第二值
if (n1){
    console.log(n1)  
}

var n2 = 6 && 9 //如果第一成立则取第一个值 如果第一个不成立在判断第二值
if (n2){
    console.log(n2)  
}

// if-else语句
var n2 = 6  //如果第一成立则取第一个值 如果第一个不成立在判断第二值
if (n2 == 6){//表达式一
    console.log(n2)  
}else{
    console.log("不想等")  
}
//习题 判断是否润年还是平年 条件可以4倍整出 并且不能被100整除 或者能被400整除
var year = 2022
if((year%4 == 0 && year%100 != 0)||year%400 == 0){
console.log("是闰年")

}else{
    console.log("平年")
}








