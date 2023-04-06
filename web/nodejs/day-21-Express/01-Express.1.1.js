// 1.express 框架基于 Node.is 平台快速开放、极简的Web开发框架  官网：expressjs.com.cn

//下载express安装方式 命令 npm install express 将下载的node_modules 文件放到自己的项目中去使用

//第二步：创建web服务器步骤

//引入模块
const express = require('express')
console.log(express)

//创建web服务器
const app = express()

//设置端口
app.listen(3000, () => {
    console.log
})

//创建监听对首页的路由 假如首页的请求地址为 /index  请求方式为：get
app.get('/index', (req, res) => {
    //req：请求的对象
    //res：响应的对象

    //设置相应的内容并发送
    res.send('我是首页内容')

})

//访问上面创建的本地服务器：域名地址是http://127.0.0.1:3000 或者 http://localhost:3000
// 终端cd到当前文件的上一级目录  在node  文件名称

// 练习1 添加路由 请求的网址：／list 请求的方式：get／／响应 ＇这是商品列表＇I
app.get('/list', (req, res) => {
    http://127.0.0.1:3000/list
    //req：请求的对象
    //res：响应的对象

    //设置相应的内容并发送
    res.send('我是商品页面')
})

//如果出现304可能是之前缓存的地址。如果服务端返回的数据有变动就会重新加载服务器的资源就不会使用缓存


//练习2 监听学习请求 路由 请求的网址：／study 请求的方式：get
app.get('/study', (req, res) => {
    http://127.0.0.1:3000/study
    //req：请求的对象
    //res：响应的对象
    //响应重定向跳转
    res.redirect('https://www.sina.com')
})


//练习3 添加路由（请求的网址：／ 请求的方式：get）跳转到／index 这个路由
app.get('/', (req, res) => {
    http://127.0.0.1:3000
    //req：请求的对象
    //res：响应的对象
    //响应重定向跳转
    res.redirect('/index')//注意这条/index表示跳转到当前本地的的服务器当前本地的服务器就是 http://127.0.0.1:3000/index
})


//练习4 添加路由（请求的网址：／login 请求的方式：get），响应文件 本地的 web.html
app.get('/login', (req, res) => {
    http://127.0.0.1:3000/login
    //req：请求的对象
    //res：响应的对象

    //设置响应的文件并发送
    //注意设置相应到本地的html文件中必须使用绝对路径
    console.log('当前模块的绝对路径', __dirname)
    res.sendFile(__dirname + '/1.html')
})


// 练习5：编写脚本文件01-Express.1.2.js，使用express 创建WEB服务器，设置端口；添加路由（请求的网址：／search请求的方式：get），响应1.html。
app.get('/search', (req, res) => {
    http://127.0.0.1:3000/search
    //req：请求的对象
    //res：响应的对象

    //设置响应的文件并发送
    //注意设置相应到本地的html文件中必须使用绝对路径
    console.log('当前模块的绝对路径', __dirname)
    res.sendFile(__dirname + '/1.html')
})

//添加路由，监听按钮提交的请求
//请求的方式：get 请求的网址：／mysearch／／响应＇搜索成功＇
app.get('/mysearch', (req, res) => {
    http://127.0.0.1:3000/mysearch
    //req：请求的对象
    //res：响应的对象

    //获取请求的网址
    console.log(req.url,req.method)
    //获取get传递的参数
    console.log(req.query)
    res.send('搜索成功',req.query)
})


// 练习6：添加路由（get ／userlogin），响应登录的网页login.html；点击提交向服务器发请求（get ／mylogin），获取传递的用户名和密码，响应＇登录成功！欢迎：xxx＇
app.get('/userlogin', (req, res) => {
    http://127.0.0.1:3000/userlogin
    //req：请求的对象
    //res：响应的对象

    //获取请求的网址
    console.log(req.url,req.method)
    //获取get传递的参数
    console.log(req.query)
    res.sendFile(__dirname + '/login.html')
})

app.get('/mylogin', (req, res) => {
    http://127.0.0.1:3000/mysearch
    //req：请求的对象
    //res：响应的对象

    //获取请求的网址
    console.log(req.url,req.method)
    //获取get传递的参数
    console.log(req.query)
    res.send('登录成功!欢迎'+req.query.uname)
})

//练习7 使用express 创建WEB服务器，设置端口；添加路由（get／login2）响应登录的网页login2.html，点击提交向服务器发请求（post／mylogin2），响应 登录成功！＇
app.get('/login2', (req, res) => {
    http://127.0.0.1:3000/login2
    //req：请求的对象
    //res：响应的对象

    //获取请求的网址
    console.log(req.url,req.method)
    //获取get传递的参数
    console.log(req.query)
    res.sendFile(__dirname + '/login2.html')
})

//添加插件，将所有post传递的参数转为对象
app.use(express.urlencoded())
//下面这个是上面的详情内容 告诉插件内部是如何转对象，是否使用一个第三方模块可以不添加这个
// app.use(express.urlencoded({
//     //告诉插件内部是如何转对象，是否使用一个第三方模块可以不添加这个
//     extended:true
// }))

//添加路由，监听按钮提交的请求(post/mylogin2)
app.post('/mylogin2', (req, res) => {
    http://127.0.0.1:3000/mylogin2
    //req：请求的对象
    //res：响应的对象

    //获取请求的网址
    // console.log(req.url,req.method)
    // //获取get传递的参数
    console.log(req.body)
    res.send('Post版本登录成功!欢迎'+req.body.uname,'Post版本登录成功!您的密码'+req.body.pwd)
})
