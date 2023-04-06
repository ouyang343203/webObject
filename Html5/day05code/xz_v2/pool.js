/*********************数据库连接池模块 ******************************/
const myspl = require('mysql')
const pool = myspl.createPool({
	host:'127.0.0.0.1',//数据的地址这里是放在的机上所以是127.0.0.0.1也可以不写默认是127.0.0.0.1
	prot:'3306',//端口号默认是3306
	user:'root',//管理员的用户root是权限最高的用户
	// password:'',数据库的root用户对应的密码是空的
	database:'xz',//连接的是哪个库
	connectionlimit:15//最大连接数
})
module.exports = pool