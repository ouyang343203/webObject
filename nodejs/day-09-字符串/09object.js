//1：字符串对象
var str1='1' //字面量
//1.1字符串包装成对象 目的是为了让字符串具备对象向拥有的属性和方法，js一共提供三种包装对象：字符串，数值，布尔
var str2=new String('1')//将一个字符串包装成字符串对象
console.log(str2,typeof str2)
console.log(str2.length)//他是将str2字符串包转成 new String('1')才可以调用length
console.log("对象字符串添加"+str2+1)
console.log("非象字符串添加"+str1+1)

//1.2将一个值强制转换为字符串
var str3=String(1)//结果为'1'
console.log(str3,typeof str3)

//1.3获取下标对应的字符
var str4='javascript'
console.log('获取对应的下标:'+str4.charAt(5))

//1.4获取对应下标字符:charAt(下标) 或者str[下标]
var str5='helloworld'
console.log(str4.charAt(1))

for (var i=0,count=0;i<str4.length;i++){
    if(str4[i]==='l'){
        count++
    }
    console.log(str4[i])
}

//1.5 查找字符串中包含XX字符：xxx.indexOf('X') 找到返回第一次出现的下标 找不到返回-1
var str6='helloworld'
console.log(str6.indexOf('l'))

//1.6 查找字符串中最后XX字符：xxx.lastIndexOf('X') 找到返回第一次出现的下标 找不到返回-1
console.log(str6.lastIndexOf('d'))


//1.7 字符串转换大些
var str7='hell'
console.log(str7.toUpperCase())//原来字符串的大小写不变，只是生成了一个新的

//1.8 字符串转换小些
var str8='WORLD'
console.log(str8.toLowerCase())//原来字符串的大小写不变，只是生成了一个新的

//1.9 截取字符串:slice(start,end)不包含end这个位置       如果不写end就是从start截取到最后
var str9='abcdefghijk'
console.log(str9.slice(-3,-1))

//练习分别截取出邮箱的用户名和域名
var str10='taobao@con'
var i=str10.indexOf('@')
var startpart=str10.slice(0,i)
var endpart=str10.slice(i+1)
console.log(startpart)
console.log(endpart)

//1.9 字符串转数组
var str11='a-b-c-d-e-f-g-h-i-j-k'
var str12=str11.split('-')
console.log(str12)

//1.10 字符串转数组
//数组转字符串:join('连接符号')
var arrstr=['我','是','王','二','麻','子']
var str=arrstr.join('')//
// var str=arrstr.toString()//这种转换会出现一个‘，’
console.log('toString数组转字符串:'+str)
var arrtostr1=str.split('')//字符串转数组使用split()
console.log('string字符串转数组:',arrtostr1)


//字符串转数组：使用split('分割方式')
var arrstr1=['我','是','王','二','麻','子']
var str1=arrstr1.join('-')//数组转字符串使用join() 这里里面添加"-"后的结果就是：我-是-王-二-麻-子的字符串
console.log('数组转字符串:',str1)

var arrtostr=str1.split('-')//字符串转数组使用split(str) 将字符串转位数组，可以指定分割的字符串str可以是分割符号
console.log('字符串转数组:',arrtostr)

//1.11 字符串分割
//练习获取一个名字中的姓氏部分
var str13='尼古拉斯.皮特.托马斯.涛哥'
var array14=str13.split('.')//字符串以‘.’分割字符串
console.log(array14)
// console.log(array14[array14.length-1])//获取最后一个元素
console.log(array14.lastIndexOf)


/*
// //2：转义字符
// /*
// \b:代表退格。

// \t:代表一个制表符,即一个Tab空格(连续的空格)。
var tab='ta\tb'
console.log(tab)
// \n:换行回车。
var n1='it\nb'
console.log(n1)
// \v:垂直的制表符。

// \r:回车。

// \":双引号。

// \':单引号。
//var str1='it's  dog' 用   \'   替换 '
//var str1='it \ dog' 用 \' 替换'
var str1='it\'s dog'
console.log(str1)
// \\:反斜线,即\。

var https='https:\\www.com'//单\不会显示需要再加上一个才会显示一个
console.log(https)

// \OOO:使用八进制表示的拉丁字母。OOO表示一个3位的八进制 整数,范围是000-377.

// \xHH:使用十六进制数表示的拉丁字母,HH表示一个2位的十六进制整数,范围是00-FF。

// \uHHHH:使用十六进行数(该数值指定该字符的Unicode值)表示的字符,HHHH表示一个4位的十六进制整数
*/
// 练习打印输出一下字符串
var strlogn = 'c:\WEB2202\JS'   
console.log('含有转义得字符串'+strlogn)//这种\的转义字符会被转义结果为c:WEB2202JS
console.log('含有转义得字符串'+'c:\\WEB2202\\JS')//添加\后就会保留原来的效果



