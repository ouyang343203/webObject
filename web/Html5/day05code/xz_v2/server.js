/*********************服务器文件
1.在day04 文件夹下创建proApp文件夹[自定义的商品服务器]中。
2.在proApp文件夹下拷入node_ modules 文件夹[第三E方模块文件]
3.在proApp文件夹下拷入datajson.js 文件[里面有10条商品数据]
4.在proApp文件夹下创建server:js文件[ 自定义服务器，监听8080]测试
5.在proApp文件夹下创建router文件大[里面是各种路由器文件]
6.在router文件夹下创建product.js文件[商品路由器模块]
7.商品路由器创建并暴露，并在server.js中引入和配置路由前缀/v2/pro.
8.在product.js中写接口并进行测试

******************************/
//1.引入express文件
const express=require('express')

//2创建web服务器
const app = express()

//3定义指定的端口，并且监听此端口
const port = 8080
app.listen(port,()=>{
	console.log('已成功监听端口:'+port)
})

//6注意
//post请求需要处理Body请求的时候使用添加此处中间件
app.use(express.urlencoded({
	extended:false
}))

//7.页面静态托管
//托此处是类事将本地的html文件托管到服务起然后通过ajax的方式来反问html文件（即通过托管的方式访问） 注意此处托管的是上级一级的文件夹 他会根据返回的接口的地址如：127.0.0.1:8080/01_list.html找到01_list.html文件
app.use(express.static('./public'))

//4.引入自定义的商品路由器模块
const userRouter = require('./router/user.js')

//5. 配置路由前缀类似一个域名 使用路由app.user(路径，路由器名字)
//注意 ：/v2/pro 代表的时候路由前缀似一个域名 
app.use('/v2/user',userRouter)
