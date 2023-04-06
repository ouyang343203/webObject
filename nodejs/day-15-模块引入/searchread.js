//使用 querystring 获取searchstr的字符串
var searchstr='kw=小米&a=1'
//第一步：引入核心查询字符串模块安装js的他会自动去目录下寻找
const querystring=require('querystring')
console.log(querystring)
//使用核心模块将查询字符串转为对象
var obj=querystring.parse(searchstr)
console.log(obj.kw)


//联系获取字符串：'user=tao&pwd=1234'的值 最后打印以下格式；登录成功！ 用户名：XXX 密码：XXX
var str='user=tao&pwd=123456'
var obj1=querystring.parse(str)
console.log(`登录成功！ 用户名：${obj1.user} 密码：{obj1.pwd}`)
