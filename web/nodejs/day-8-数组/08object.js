
//数组api文档地址：https://www.w3school.com.cn/
//MDN JS   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

//1：数组：一组数据的集合
//1.1数组的创建方法：var phone=[元素1,元素2,元素3,元素4,元素5]
var phone=['华为','小米','OPPO']
console.log(phone.length)
console.log(phone[0])
console.log(phone[phone.length-1])
//访问
console.log(phone[0])
//值覆盖
phone[0]='荣耀'
//末尾添加元素
phone[phone.length]='一加'
console.log(phone)

//1.1.1清空数组的方法:数组.leng=0
phone.length=0

//2.1第二种内置构造函数创建方式 :var arr=new Array(元素1,元素2,元素3,元素4,元素5)
var arr=new Array('华为','小米','OPPO')
var course=new Array(3)//创建只有3个元素的数据 可以赋值超过3个
console.log(course)
course[0]='元素1'
course[1]='元素2'
course[2]='元素3'
course[4]='元素4'


//1.2 便利数组
var contry =['美国','中国','俄罗斯']
for(var i=0 ; i<contry.length;i++){
   console.log(contry[i])
}
// for (var key in contry) {
//    console.log(contry[key])
// }
//求数组种和和平局分
var score=[100,200,5080];
for(var i=0,sum=0;i<score.length;i++){
   sum+=score[i];
}
console.log(sum/score.length)
//求数组中元素的最大值
var array=[4,5,400,400,4500,50,-40,];
//声明变量用第一个值做初始值
for(var i=0,max=array[0];i<array.length;i++){
   //如果max小于任意一个元素则把这个元素赋值给max
  if(max<array[i]){
   max=array[i]
  } 
}
console.log(max)

//1.3 创建空数组
var arr=[]
//关联数组的形式添加的数组元素的的话数组的长度都是0 以字符串做为下标添元素取出来的时候也只能用 字符串做为下标取
arr['name']='tao'//地中添加原属的方式
arr['sex']='men'
arr.sarlary=500//第二种添加元素的方式
console.log(arr)
console.log(arr['sex'])
console.log(arr.sarlary)

//1.4 数组中的元素是对象
var peresonarray=[{name:'李四',age:33},
                  {name:'王五',age:32},
                  {name:'赵六',age:3},
                  {name:'钱七',age:88},
                  {name:'王扒',age:9},
                  {name:'李四',age:100}]
                  
console.log(peresonarray[4].name)
//1.5 对象中嵌套数组
var struden={
   name:'二麻子',
   age:4,
   course:['计算机','英语','设计']
}
console.log(struden.course[2])

//1.6 二维数组
var cityarray=[['广州','深圳'],['济南','青岛'],['南京','无锡'],['太原','长治']]
console.log(cityarray[0][0])
//1.7数组转字符串：toString()
var arraystr=cityarray.toString()
console.log(cityarray.toString())

var cityarray1=['a','b','c']
console.log(cityarray1.toString())

//1.8数组转字符串，可以指定分割符号:join(分割符号)
console.log(cityarray1.join('/'))

//1.9 数组的拼接：concat(数组1,数组2,数组2)
var arry1=['广州','深圳']
var arry2=['南昌','赣州']
var arry3=['长沙','株洲']
var arry4=['杭州','宁波']
//拼接
var newarray=arry1.concat(arry2,arry3,arry4)//他会生成一个新的数组，原数组arry1不变
console.log(newarray)


//2.0 数组的截取:slice(start,end) start是开始下标   end是结束下标不好包涵end，没有end则是截取到最后，下标是负数这是倒数-1开始算
var tityarray=['北京','上海','深圳','长沙','成都','重庆']//从后面开始算的话是（-6，-5，-4，-3，-2，-1）
var rang=tityarray.slice(0,3)//2是开始下标 3是结束下标实际的取值是(2,2)   的的后一个(即如果要截取到第n个位置后面的需要改成n+1)
console.log(rang)//结果是[ '深圳' ]

// var rang2=tityarray.slice(2)//2是开始下标 后面没有的话表示从2开始截取到最后
// console.log(rang2)

// var rang3=tityarray.slice(-3,-1)//如果负数倒数开始
// console.log(rang3)//结果是[ '长沙', '成都' ]

//从a～h中截取bc和f在讲两个拼接
var narray=['a','b','c','d','e','f','g','h']
var sub1array=narray.slice(1,3)//截取bc
console.log(sub1array)

var sub2array=narray.slice(5,6)//截取f
console.log(sub2array)

var sub3array=sub1array.concat(sub2array)
console.log(sub3array)

//3.0 数组的删除:array.splice(start,leng)//start:起始下标，leng删除的元素个数
var marray=['张三','李四','王五','赵六','钱七','王八']
marray.splice(-3,2)//结果是删除了'赵六','钱七',
console.log(marray)

//3.1数组的替换或者过增加
var m1array=['成都','昆明','南宁','广州','上海','北京']
m1array.splice(-3,2,'王二麻子','三毛','四更')//这种是替换 array.splice(start,count)：start起始下标 count替换的元素个数
console.log(m1array)

var m2array=['成都','昆明','南宁','广州','上海','北京']
m2array.splice(-3,0,'王二麻子','三毛','四更')//这种是插入 array.splice(start,count)：start起始下标 count替换的元素个数
console.log(m2array)

var m3array=['成都','昆明','南宁','广州','上海','北京']
m3array.splice(-3)//这种是插入 array.splice(start)：删除start后面所有元素 count为责删除start后面所有的元素
console.log(m3array)

//练习创建数组包含a～h,删除cd，替换f为m，在下标为1的位置插入z
var harray=['a','b','c','d','e','f','g','h']
harray.splice(2,2)//[ 'a', 'b', 'e', 'f', 'g', 'h' ]删除cd
console.log(harray)

harray.splice(3,1,'m')//替换f为m
console.log(harray)

harray.splice(1,0,'z')//标为1的位置插入z
console.log(harray)

//4.0数组元素翻转:reverse()
var garray=['a','b','c','d','e','f','g','h']
garray.reverse()
console.log(garray)

//自己实现交换
//倒着便利
var matharry=['1','2','3','4','5','6','7','8']
var newmatharry=[]
for(var i=matharry.length-1;i>=0;i--){
   console.log(matharry[i])
   newmatharry.push(matharry[i])
}
console.log(newmatharry)

//4.1排序
var mumberarray=[3,79,8,11,9,45,200,2]
//mumberarray.sort()//这种是按照首字母来排序的不符合
console.log(mumberarray.sort(function(a,b){ //这种排序方式可以
   return a-b  //从小到大 
   //return b-a  //从大到小 
}))

//4.2查找数组中包含某个元素:indexOf() 找不到返回-1 找得到打印对应的下标
var indexarray=['a','b','c','d','e','f','g','h']
console.log(indexarray.indexOf('h'))

//4.3数组末尾添加元素:push('')
indexarray.push('s')
console.log(indexarray)

//4.3删除数组末尾元素:pop('')
indexarray.pop()
console.log(indexarray)

//4.4数组开头添加元素:unshift()
var unshiftarray=['敬业福','和谐福','自强福']
unshiftarray.unshift('友善福')
console.log(unshiftarray)

//4.3删除数组开头元素:shift()
unshiftarray.shift()
console.log(unshiftarray)

//4.4数组元素翻转
var reversearray=['张三','李四','王武']
var reversearray1=reversearray.reverse()
console.log(reversearray1)
//使用过便利数组的方式将数组元素翻转

var reversearray2=['张三','李四','王武','赵六','钱七']
var reversearray3=[]
for(var i=reversearray2.length-1;i>=0;i--){
   console.log(i,reversearray2[i])
   reversearray3.push(arr[i])
}
console.log(reversearray3)


//使用便利数组对数字进行从小到大排里

