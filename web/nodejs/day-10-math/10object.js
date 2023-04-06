// math
//1.1：获取圆周率: Math.PI
var mathpi = Math.PI
console.log(Math.PI)

//1.2：绝对值: Math.abs()
var absapi = Math.abs(-3)
console.log(Math.abs(-3))

//1.2：向上取整数: Math.ceil()
var ceilapi = Math.ceil(4.3)
console.log('向上取整数',Math.ceil(4.3))
var number=3.9
console.log(parseInt(number))//parseInt取整他是直接将消暑部分去除


//1.3：向下取整数: Math.floor()
var floorapi = Math.floor(4.3)
console.log('向下取整数',Math.floor(4.3))

//1.4：四舍五入取整: Math.round()
var absapi = Math.round(4.3)
console.log(Math.round(4.3))

//2.1：次方: Math.pow(5,3)
var powapi = Math.pow(5,3)
console.log(powapi)

//3.1：获取数组的最大值: Math.max(23，78，45)//里面暂时不能使用数组
var powapi = Math.max(3,6,5,4,3,21)
console.log(powapi)

//3.2：获取数组的最小值: Math.min(23，78，45)里面暂时不能使用数组
var minapi = Math.min(3,6,5,4,3,21)
console.log(minapi)

//3.3：获取随机数：Math.random 
var random1api = Math.random()//他的取值是0～1之间
console.log('获取随机数'+ random1api)

//扩展随机获取0～9的数字
var n=Math.floor(Math.random()*10) //乘以10就是0～10以内的数，在向下取整
console.log('获取0～9的随机数'+ n)

//获取一个范围内的随机数
function getrandom(min, max) {
   return Math.floor(Math.random() * (max - min)) + min   
}
console.log(('获取50～100的随机数'+ getrandom(50,100)))

//获取数组的随机下标元素:先获取0～1内的随机数在乘以数组的长度在向下取整
var indextarray = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸','子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']
var indext=Math.floor(Math.random()*indextarray.length)
console.log(indextarray[indext])

//随机获取啊a~z之间的4个字母放到一个新的数组中。循坏4次，每次获取一个，放到新数组中
var abcarray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var abcarray2 = [] 
for(var i=0;i<4;i++){
    var abcindext=Math.floor(Math.random()*abcarray.length)
    abcarray2.push(abcarray[abcindext])
    //将获取的随机元素删除
    abcarray.splice(abcindext,1)//删除当前下表的元素
}
console.log(abcarray2)
console.log(abcarray)

//2.0：获取随机数：Math.random 