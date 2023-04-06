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