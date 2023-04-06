//：Date对象 用于显示日期
//1.1 Date的第一种创建方式
var d1=new Date('2022/3/16 14:11:30')
console.log(d1)//打印出来的时间会显示0时区的

var d1copy=new Date(d1)//拷贝一份日期
console.log('d1copy'+d1copy)//打印出来的时间会显示0时区的

//1.2 Date的第二种创建方式
var d2=new Date(2022,0,16,14,11,30)//注意存储的月份是从0～11来表示12个月份 这里的实际结果是 2022,01-16 14:11:30
console.log(d2)
//获取时间的具体年份 月份 日期 小时
var year=d2.getFullYear() //年份（注意获取年份需要）
console.log('年：'+year)

var mounth=d2.getMonth()+1//月份（注意获取月份份需要+1）
console.log('月：'+mounth)

var date=d2.getDate()//日期
console.log('日：'+date)

var hours=d2.getHours()//小时
console.log('小时：'+hours)

var minutes=d2.getMinutes()//分
console.log('分：'+minutes)

var sencond=d2.getSeconds()//秒
console.log('秒：'+sencond)

var millisencond=d2.getMilliseconds()//毫秒
console.log('毫秒：'+millisencond)

var week=d2.getDay()//获取日期是星期（注意 星期天是0 星期六是6 也就是一个礼拜从星期天开始从0～6）
console.log('星期：'+week)

var countime=d2.getTime()//日期转时间戳

//1.3 Date的第三种创建方式
var d3=new Date()//这种是当前操作系统的时间
console.log('当前操作系统的时间：'+d3)//只获时间期部分
console.log('当前操作系统日期：'+d3.getFullYear()+'/'+(d3.getMonth()+1)+'/'+d3.getDate())//只获时间期部分

//第一种获取当前系统时间戳
var firsttimestamp = d3.getTime();
console.log('第一种获取当前时间戳：'+firsttimestamp)//只获时间期部分

var secondtimestamp = Date.parse(new Date());//第二种获取当前时间戳 获取的时间戳是把毫秒改成000显示，因为这种方式只精确到秒
console.log('第二种获取当前时间戳：'+secondtimestamp)//只获时间期部分

var d3year=d3.getFullYear()
var d3mounth=d3.getMonth()+1
if(d3mounth<10){//月份<0拼接成‘01’效果
    d3mounth='0'+mounth 
}
var d3date=d3.getDate()//日期
var d3week=d3.getDay()
var d3hours=d3.getHours()//小时
var d3minutes=d3.getMinutes()//分
var d3sencond=d3.getSeconds()//秒
var d3milliseconds=d3.getMilliseconds()//毫秒
//拼写日期格式为 XXX年XXX月XXX日XXX日XXX星期XXX时XXX分XXX秒
var weeekarray=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
console.log('今天日期：'+d3year+'年'+d3mounth+'月'+d3date+'日'+weeekarray[d3week]+d3hours+'时'+d3minutes+'分'+d3sencond+'秒'+d3milliseconds)

//1.4 Date的第三种创建方式
var d3=new Date(1680000000000)//这种里面1680000000000是距离计算机元年(1970-1-1 0:0:0)有1680000000000毫秒
console.log(d3)

//1.5倒计时的做法
//例如计算距离2022/3/21日还有X天X小时X分X秒
//第一步获取当前时间戳(默认是毫秒为单位)
var currentDate=new Date()//这种是当前操作系统的时间
console.log('当前日期'+currentDate)

var currenttimeDate=currentDate.getTime()
console.log('当前系统时间戳'+currenttimeDate)
var lastdate=new Date('2022/9/21')
var lasttimedate=lastdate.getTime()
console.log('目标间戳'+lasttimedate)

//相差的时间
var distencetime=lasttimedate-currenttimeDate//此处也可以不用转时间戳可用时间直接相减 lastdate-currentDate
console.log(lastdate-currentDate)
console.log(distencetime)

//将时时间戳转成秒
var distenminutes=Math.floor(distencetime/1000)//取向上整
console.log('距离秒数:'+distenminutes)

//相差距离天数
var distenceday= Math.floor(distenminutes/(24*3600))//向上取整
console.log('距离天数:'+distenceday)

// //相差距离小时
var distencehours= Math.floor((distenminutes%(24*60*60))/3600)//先剔除24天数，留下的24小时内的小时时间 在向上取整
console.log('距离小时:'+distencehours)

// 2022/9/21日距离当前时间的分钟计算 对不满q小时以内的就是分钟了 去除相差的时间戳中的一小时内的就是剩下的分钟了
var distenceminutes= parseInt(distenminutes%(60*60))/60//向上distenminutes%(60*60)就是剔除时间戳里面的整小时在对一小时是60分钟去余
console.log('距离分钟数:'+distenceminutes)

// 2022/9/21日距离当前时间距离秒数计算 对60取余也就是一分钟一下的就是读秒了
var distenceseconds= distenminutes%60//向上取整
console.log('距离秒数:'+distenceseconds)


console.log('距XX天还有:'+distenceday+'天'+distencehours+'小时'+distencehours+'分钟'+distenceseconds+'秒')

//1.6获取本地字符串格式 用于调试阶段使用就是显示当地的时间
var localdate=new Date()//toLocaleString()即转化位当前的所在区时间
// console.log(d1)//
//显示完整日期
console.log('本地日期'+localdate.toLocaleString())//转为本地字符串不同的电脑系统会有不一样的显示，存在兼容性问题 在苹果电脑端显示9/18/2022, 10:44:29 PM可能其他的电脑又不一样不能直接使用用户调试
console.log('只获取日期部分'+lastdate.toDateString())//只获取日期部分
console.log('只获时间期部分'+lastdate.toLocaleTimeString())//只获时间期部分

//1.7 Date修改存储的值 注意它不允许修改星期
var datetime=new Date('2022/3/26 16:56:40')
//修改原时间年份
datetime.setFullYear(2024)
console.log('修改后的年份'+datetime)

//修改原时间的月份
datetime.setMonth(12)//注意如果月份超过12就会向前面的年份进一 如果是负数前面年份会减一 其他的小时/分钟/秒都遵循这个规则
console.log('修改后的月份'+datetime)

//修改原时间的小时
datetime.setHours(20)
console.log('修改后的小时'+datetime)

//修改原时间的分钟
datetime.setMinutes(03)
console.log('修改后的分钟'+datetime)

//修改原时间的秒
datetime.setMilliseconds(30)
console.log('修改后的秒'+datetime)

//修改原时间的时间戳代表距离计算机元年年即19701.1日的时间
datetime.setTime(5000)//注意修改时间戳后原来的时间就会全部清除就会从计算机元年开始计算 此处改成5000就是距离计算机元年5000毫秒
console.log('修改后的时间戳toLocaleString:'+datetime.toLocaleString())//

//不能修改星期
//练习创建一个Date保存一个员工的入职时间2022/3/16，假设合同期为期3年，计算出到期时间最后打印出入职时间和到期时间两toLocaleString

//相差的时间
var startDate=new Date('2022/3/16')
var startLocaleDate=startDate.toLocaleDateString()
console.log('入职时时间：'+startLocaleDate)

var d2=new Date(startDate)//拷贝startDate时间对象
var endDate=d2.getFullYear()+3
d2.setFullYear(endDate)
var endLocaleDate=d2.toLocaleDateString()//转时间字符串到日期
var endLocalestring=d2.toLocaleString()//转时间字符串到日期+时分秒
var endLocaletimestring=d2.toTimeString()//只转出显示时分秒
console.log('合同到期时间：'+endLocaleDate)
// console.log('合同到期时间2：'+endLocalestring)//
// console.log('合同到期时3：'+endLocaletimestring)//

//合同提前一个月续签
var d3=new Date(d2)
var d3endDate=d3.getMonth()-1
d3.setMonth(d3endDate)
var d3endLocaleDate=d3.toLocaleDateString()
console.log('合同续签时间：'+d3endLocaleDate)

//(2)练习一:创建函数getDays，传递任意一个 日期,返回这个日期是一年中的第几天

 //第一种方案 
function getDays(year,mounth,date){
    //创建对象保存当前日期
    var d1=new Date(year,mounth-1,date+1)//(注意由data如果不+1就可能出现一年中的第0天)
    //创建对象保存这一年的第一天
    var d2=new Date(year,0,1)//(实际上他相当于一年的第一天而不是第0天所以我们开始就占用了一天，也就是说不存在这种写发：Date(year,0,0))
    //计算d1距离这一一年的第一相差多少毫秒
    //var countday=d1-d2// 这样写也可以这里的得到的结果也是毫秒
    var countday=d1.getTime()-d2.getTime()
    //将毫秒换算成天数
    var days=countday/(24*60*60*1000)
    console.log('这是一年的中的第'+days+'天')
    return days
}
getDays(2000,12,31)

// //第二种累加方法：把之前每个月的天数加在一起在加上这个月的天数，判断是否为闰年，如果是闰年，2月份就多加是29天
function getDays2(year,mounth,day){
    // 获取是否是闰年天数还是平年天数
    var second = year%4==0&&year%100!=0||year%400==0 ? 29 : 28
    var sum = day
    var mounthDays = [0,second,31,30,31,30,31,31,30,31,30,31]
    for(var i=0;i<=mounth-1;i++){
        sum+=mounthDays[i]
    }
    console.log('第二种方法这是一年的中的第'+sum+'天')
    return sum
 }
 getDays2(2000,12,31)
// // 练习二：选做:双色球
// // 红球:在1~33之间随机获取6个，不能重复
// // 蓝球:在1~16之间随机获取1个，可以和红球重复
// // 将获取的红球放入到一个数组，进行从小到大的排列
// // 将获取额蓝球放入到数组最后