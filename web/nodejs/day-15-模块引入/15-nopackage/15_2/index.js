function getavg(number1,number2){
   //return  (number1+number2)/2//求平均值
   return  Math.max(number1,number2)//求最大值
}
var Student ={
    name:'tao',
    sex:'男'
 }

//暴露模块内容使用： module.exports={暴露内容} 有且仅有一个module.exports 默认暴露的内容是一个空对象
module.exports={
    //暴露的内容添加在此处
    myAvg:getavg,
   myStudent:Student
}
//module.exports=Student //仅暴露一个模块的时候可以这样写

//module.exports=getavg //仅暴露一个模块的时候可以这样写


//系统与定于的两个局部变量
console.log(__dirname)//文件的模块绝对路径
console.log(__filename)//文件的模块绝对路径+文件名称
