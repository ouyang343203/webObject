/*********************创建商品路由器模块******************************/
//1.引入express文件
const express=require('express')
//引入放了10条数据的商品数据的自定义文件
const prodata = require('../datajson.js')
//2. 创建路由器
const router = express.Router()

//3. 将创建的路由器暴露
module.exports=router

/*********************开始写路由接口 请求方式get******************************/
// 1.定义一个查询所有商品信息的 接口名称：此处我们定义为/List 请求方式为:get 没有请求参数
//测试地址:http://127.0.0.1:8080/v2/pro/List
router.get('/List',(req,res)=>{
	//返回一个简单的单词(字符串)
	//res.send('hello')
	//返回JSON格式的数据
	//res.send({"name":"tom","age":20})
	//返回普通字符串形式的html
	//res.send('<!DOCTYPE html><html><head></head><body><h1>大标题</h1></body></html>')
	//返回模板字符串形式的html
	// res.send(`<!DOCTYPE html><html><head></head><body><h1>大标题2</h1></body></html>`)
	//返回自己准备的数据，使用变量名就等于找到了变量值
	res.send(prodata)
})

// // 2定义查询一条商品信息的路由 接口名称：此处我们定义为/show  请求方式为:get 参数:id=3
// //测试地址:http://127.0.0.1:8080/v2/pro/show?id=3   注意这里的接口参数id是通过问号补在后面
router.get('/show',(req,res)=>{
// res.send('hello')
    let object = req.query //注意： 如果是以？的方式传递参数，参数的获取方式
	//查看从前台获取到的数据
	console.log((prodata[object.id-1]))//数组是从0开始所以需要减-1
	res.send(object)
})


// 3定义查询一条商品信息的路由使用/杆传参 接口名称：此处我们定义为/show2  请求方式为:get 参数:id=3 
//测试地址:http://127.0.0.1:8080/v2/pro/show2/3   注意这里的接口参数id 通过是/杆 方式补在后面的
router.get('/show2/:id',(req,res)=>{//这里使用id作为标记接口传递过来的id值
	// res.send('hello')
	//获取返回的结果
    let object = req.params//注意如果接口中是通过将/:id 方式 来作为参数来获取则此处获取参数的方式和上面 let object = req.query 不同 而是let object = req.params
	// 获取id值
	var goodsid = object.id
	//查看从前台获取到的数据
	console.log((prodata[goodsid-1]))//数组是从0开始
	res.send(object)
})


// 4.1定义删除一条商品信息的路由使用查询字符串参数传参 接口名称：此处我们定义为/del  请求方式为:DELRTE 参数:id=3  
//测试地址:http://127.0.0.1:8080/v2/pro/del?id=3   注意这里的接口参数id 通过问好 方式补在后面的
//注释测试要在ApiPost工具中测试
router.delete('/del',(req,res)=>{//这里使用id作为标记接口传递过来的id值
	// res.send('hello')
	//获取返回的结果
    let id = req.query.id//注意如果接口中是通过将/:id 方式 来作为参数来获取则此处获取参数的方式和上面 let object = req.query 不同 而是let object = req.params
	if(id>=1 && id<=10){
		res.send(`即将要删除的商品为${id}号商品`)
	}else{
		res.send('删除失败')
	}
})

// 4.2/杆传参 接口名称：此处我们定义为/del2  请求方式为:DELRTE 参数:id=4 
// 测试地址:http://127.0.0.1:8080/v2/pro/del2/6   注意这里的接口参数id 通过是/杆 方式补在后面的
// 注释测试要在ApiPost工具中测试
router.delete('/del2/:id',(req,res)=>{//这里使用id作为标记接口传递过来的id值
	// res.send('hello')
	// //获取返回的结果
    let id = req.params.id//注意如果接口中是通过将/:id 方式 来作为参数来获取则此处获取参数的方式和上面 let object = req.query 不同 而是let object = req.params
	if(id>1&&id<=10){
		res.send(`即将要删除的商品为${id}号商品`)
	}else{
		res.send('删除失败')
	}
})

/*********************开始写路由接口 请求方式post******************************/
// 1定义新增一条商品信息的路由 接口名称：此处我们定义为/add  请求方式为:post 参数:id=4 
// 测试地址:http://127.0.0.1:8080/v2/pro/add 
// 注释测试要在ApiPost工具中测试方法POST ,application/x-www-form-urlencodeed
// 切记要在apiPost的body中写参数与参数值  id=11 tit=MacBook price=8999
// 相应消息问：新增的商品信息为:编号11,价格:8999，标题:MacBook
// 特别注意只要是通过body请求需要在server.js中设置一个中间
router.post('/add',(req,res)=>{//这里使用id作为标记接口传递过来的id值
	// res.send('hello')
	// //获取返回的结果
    let object = req.body//注意如果接口中是通过将/:id 方式 来作为参数来获取则此处获取参数的方式和上面 let object = req.query 不同 而是let object = req.params
	// 注意：需要在server.js 文件中添加中间件代码，否者从body中拿不到数据
    res.send(`新增的商品信息为:编号${object.id},价格:${object.price},标题:${object.tit}`)
})

/*********************开始写路由接口 请求方式put******************************/
// 1定义一条编辑商品信息的路由  接口名称：此处我们定义为/editor  请求方式为:put 参数:id=4 
// 测试地址:http://127.0.0.1:8080/v2/pro/editor
// 注释测试要在ApiPost工具中测试方法POST ,application/x-www-form-urlencodeed
// 切记要在apiPost的body中写参数与参数值  id=11 tit=MacBook price=8999
// 相应消息问：新增的商品信息为:编号11,价格:8999，标题:MacBook
// 特别注意只要是通过body请求需要在server.js中设置一个中间

// 响应状态码：200：请求成功  301：资源被转移到其他的URL上 404：请求的资源未找到（一般是客服断的请求地址有错误） 500服务器代码有语法错误  1XX：服务器接受到请求 需要进一步后续操作
router.put('/editor',(req,res)=>{//这里使用id作为标记接口传递过来的id值
	// res.send('hello')
	// //获取返回的结果
    let object = req.body//注意如果接口中是通过将/:id 方式 来作为参数来获取则此处获取参数的方式和上面 let object = req.query 不同 而是let object = req.params
	// 注意：需要在server.js 文件中添加中间件代码，否者从body中拿不到数据
    res.send(`编辑商品的的商品信息为:编号${object.id},价格:${object.price},标题:${object.tit}`)
})