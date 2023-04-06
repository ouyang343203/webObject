/*********************用户路由器模块******************************/
//1.引入express文件
const express = require('express')
const router = require('../../proApp/router/product.js')
const pool = require('../pool.js')
//2. 创建路由器
const userRouter = express.Router()

//3. 将创建的路由器暴露
module.exports = userRouter

//1完成验证用户用户名时候否存在
//测试地址：http://127.0.0.1:8080/v2/user/check_uname?uname=tom
router.get('/check_uname',(rep,res)=>{
	let n = rep.query.uname
	let sql = 'select uid from xz_user where uname= ?'
	pool.query(sql,[n],(err,result)=>{
		if(err){
			throw err
		}
		if(result.length>0){
			res.send('exists')
		}else{
		    res.send('non-exists')	
		}
	})
})