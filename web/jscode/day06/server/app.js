// const express = require('express')
// const app = express()
// app.listen(3000, () => {
//     console.log('服务器启动完毕')
// })

//启动服务器方式1在my-server 目录下打开 cmd，运行 node app.js

//启动服务器方式2 因为：express服务器代码有修改 必须重启才能生效·前提：需要安装全局的nodemon模块一般安装的上面的Express都安装了nodemon 
// 如果无法安装，可以继续使用 node app.js 来启动；但是要注意：每次修改代码，必须手动关闭命令行ctrl＋c然后重新开启服务器
//启动方式cd到 当前的项目目录 执行命令：npm i  -g nodemon 就可以启动

// //7.页面静态托管
// //浏览器访问 localhost:3000   或者http://127.0.1:3000(注意这种访问方式需要处理跨域问题，否则不能访问)
// app.use(express.static('public'))

// //跨域问题处理 第一种方案
// //报错关键词：CORS Access-Control-Allow-Origin   表示跨域错误  解决方式如下 通过响应 告知浏览器 允许其他来源的访问
// //回调函数3个形参：中间件／拦截器
// //all：代表所有类型的请求 get post put delete...    *代表所有来源
// app.all('*',(req,res,next)=>{
//     //局限性：要么允许所有来源；要么允许单个来源；不能写多个
//     res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Origin", "http://127.0.1:3000");//指定访问的接口
//     next()
// })

// //数据接口：get /post
// //访问方式：http://localhost:3000/emps 
// app.get('/emps', (rep, res) => {
//     res.send({
//         code: 200,
//         data: ['张三', '李四']
//     })
// })


//==============================================跨域问题处理 第二种方案==============================================

// const express = require('express')
// //安装cors模块：提供再加专业的 解决跨域问题的方安
// //在 my-server 目录下执行：npm i cors
// const cors = require('cors')//引入 cors 用户来解决跨域只能设置一个访问地址的问题
// const app = express()
// app.listen(3000, () => {
//     console.log('服务器启动完毕')
// })
// app.use(express.static('public'))

// //必须在请求代码之前书写下面这段代码表示允许所有来源访问
// // app.use(cors())//允许所有来源  //http://127.0.0.1:5500

// //允许白名单模式：指定允许多个具体反问地址
// app.use(
//     cors({
//         origin:['http://127.0.0.1:3000']//这里使用http://127.0.0.1:5500 需要安装live server插件 然后可以使用 http://127.0.0.1:5500/public/index.html访问得到写入的数据 ['张三', '李四']否者得不到
//     })
// )

// app.get('/emps', (rep, res) => {
//     res.send({
//         code: 200,
//         data: ['张三', '李四']
//     })
// })

//==============================================跨域问题处理 第三种方案使Express用代理服务器==============================================
//制作代理服务器
const express = require('express')
const cors = require('cors')
//按照代理模块，在项目目录下执行：npm i express-http-proxy
const proxy = require('express-http-proxy')
const app = express()
app.listen(3000, () => console.log('代理服务器已经开启'))
//添加cors,允许浏览器跨域
app.use(cors())

//https://m.douyu.com/api/cate/recList这个地址斗鱼禁止直接访问这里开启代理后就可以使用http://localhost:3000/douyu访问

//代理服务器1:  http://localhost:3000/douyu 直接在流浪起可以访问
app.use('/douyu',proxy('https://m.douyu.com/api/cate/recList'))

//代理服务器1:  http://localhost:3000 直接在浏览器中可以访问
app.use('/',proxy('https://m.douyu.com/api/cate/recList'))


//代理服务器:  http://localhost:3000/taranalogin 直接在浏览器中可以访问
app.use('/taranalogin', proxy('https://uc.tmooc.cn/login'))