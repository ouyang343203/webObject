let username = 'tom'
let age = 20
//传统的字符串拼接
let msg1 = "用户名："+username +"年龄为："+age
console.log(msg1)

//模版字符串拼接
let msg2 = `用户名为：${username}年龄为：${age}`
console.log(msg2)

//html格式的字符串在js中就是普通的字符串
let msg3 =`<td>${username}</td> <td${age}</td>`
console.log(msg3)

//字符串的运算
let msg4 = `<li>用户名:${username}</li> <li>年龄:${age}</li> <li> 是否成年：${age>=18?"是":"否"}</li>`
console.log(msg4)

/*
常见的url的结构
<scheme>:// <host>:<port>/< path> ? <query> # <anchor>.
协议+主机名+端口号+资源的目录结构+查询字符串+锚点

scheme：协议
host：主机名称分为ip地址或者域名
query：get后面带参数查询的字符串
*/