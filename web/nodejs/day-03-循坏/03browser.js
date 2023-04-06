//一、弹出输入框 if 多种条件语句  

/* if(){

}else if(){

}else{

}


// */
// //练习：如果总价满1000打九折，超过1000提示警示框pay success

// var price = prompt('input price')
// console.log(price,typeof price)//打印用户输出的内容和类型

// var num = prompt('input num')
// console.log(num,typeof num)//打印用户输出的内容和类型

// //弹出警示框 注意运算会隐式转换为数值
// var total = price*num
// if(total >= 1000){
//     total*=0.9  
//     confirm.log()
// }

// var card = 1500
// if(card > total){
//     alert("pay success")//Number作用键输入框的字符转为Number类型在添加  
// } else{
//     alert("余额不足")
// }


// //二、 swift语句
// var a = 5
// switch(a){
//    case  1: 
//    console.log(a)
//      break
//    case 2: 
//    console.log(a)
//      break
//    case  3: 
//    console.log(a)
//      break
//    case  4: 
//    console.log(a)
//      break
//    case  5: 
//    console.log(a)
//      break
//    default:
// }


// //三、 循坏 要素：1循坏条件；控制是否往后执行 2循坏体：要重复执行的代码
// //1 while循坏
// // while(循坏条件){
// // //循环体
// // }
// var i = 10
// while(i<=10){
//     i++
//     confirm.log()
// }


//打印50 55 60 65 70
var i = 50
while(i<=70){
    i=i+5 //或者写成i+=5
    console.log()
}

//打印0～100的偶数
var i = 0
while(i<=100){
    if(i%2 == 0){
        console.log("打印出来的偶数:",i)  
    }
    i++ //或者写成i+=5
}


//求和1～100之间偶数的和 var i = 0
var j = 1
var sum = 0
while(j<=100){
    if(j%2 == 0){
        sum = sum + j    
    }
    j++
}
console.log("1～100之前的偶数和:",sum) 

//求和1～100之前的和var i = 0
var j = 1
var sum1 = 0
while(j<=100){
    sum1 = sum1 + j
    j++
}
console.log("～100之前的和:",sum1) 

//求10～20的乘积
var i = 10
var s = 1;
while(true){
  s = s*i 
  if(i==20){
    break
  } 
  i++
}
console.log("10～20之前的积:",s) 

// 四 do-while循坏
//循坏打印50～40之间的所有整数
// var i = 50
// do{
//   console.log(i)
//   i--
// }while(i>=40)

//循坏打印1～100之间的所有能被3整数的数字的和
var a1 = 1
var sum = 0
do{
    if(a1%3==0){
        sum+=a1
    }
    a1++
}while(a1<=100)
console.log(sum)

// 五for循坏
//循坏打印80 75 70 65 60
for(var i=80;i>=60;i-=5){
   console.log(i)
}

sum1 = 0
for(var i=1;i<=100;i++){
    if(i%7==0){
        sum1+=i
    }
 }
 console.log(sum1)

 sum2 = 1
 //计算1～100所整数的合当合超过4000时不在计算
 for(var i=1;sum=0;i<100,i++){
    sum2+=i
    if(sum2==4000){
      break
    }
 }
 console.log(sum2)

  //计算2000～2100 有多少个
  var a3 = 2000
  var count = 0
while(a3 <= 2100){
  if(a3%4==0 && a3%100 !=0 || a3/400 == 0){
    count++
    console.log(a3)
  
  }
  a3++
}
console.log(count)

//六：continue关键字使用 用于跳出部分循坏体
//例子打印1～10所有整数不包含5
for(var a4=1;a4<=10;a4++){
  if(a4==5){
    continue
  }
  console.log(a4)
}

//7：循坏嵌套使用
var str = ""
// for(var a5=1,str="";a5<=5;a5++){
//   str= str+"*"
// }
// console.log(str)
for(var a6=1;a6<=5;a6++){//外层循环控制行数量
  for(var a5=1,str="";a5<=5;a5++){//内循坏控制列数量
    str= str+"*"
  }
  console.log(str)
}

for(var j=1;j<=5;j++){//外层循环控制行数量
  for(var a7=1,str1="";a7<=j;a7++){//内循坏控制列数量
    str1= str1+"*"
  }
  console.log(str1)
}
//制作乘法口诀表
for(var j1=1;j1<=9;j1++){//外层循环控制行数量
  for(var i1=1,sum1="";i1<=j1;i1++){//内循坏控制列数量
   // str = j1 < 3 ? "   " : "  "
    str = " "
    if ((j1 == 3||j1 == 4) && i1 == 2){
      str = "  "
     }
    sum1+= i1+"*"+j1 + "=" +(i1*j1) + str
       //列*行 = （列*行的结果）
  }
  console.log(sum1)
}