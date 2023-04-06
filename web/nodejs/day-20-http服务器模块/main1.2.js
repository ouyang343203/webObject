//http 服务器模块
//引入http模块
const http = require('http')
//创建web服务器
const server = http.createServer()
//设置端口
server.listen(3000, () => {
    console.log('服务器启动成功')
})

//假如要实现 登入成功后跳转到web.html页面则需要引入 var fs = require('fs')这个文件引入模块
var fs = require('fs')

//接收到了浏览器的请求 :第一个参数是固定参数 ‘request’
//练习：设置响应的状态码为404，响应内容为＇Not Found＇，最后结束并发送
server.on('request', (req, res) => {

    if(req.url ==='/home/index'){
        //常见的响应类型信息
          // {
          //     "css": "text/css",
          //     "gif": "image/gif",
          //     "html": "text/html",
          //     "ico": "image/x-icon",
          //     "jpeg": "image/jpeg",
          //     "jpg": "image/jpeg",
          //     "js": "text/javascript",
          //     "json": "application/json",
          //     "pdf": "application/pdf",
          //     "png": "image/png",
          //     "svg": "image/svg+xml",
          //     "swf": "application/x-shockwave-flash",
          //     "tiff": "image/tiff",
          //     "txt": "text/plain",
          //     "wav": "audio/x-wav",
          //     "wma": "audio/x-ms-wma",
          //     "wmv": "video/x-ms-wmv",
          //     "xml": "text/xml"
          //   }
          //设置相应的头信息, 编码为 'Content-Type','text/html;charset=utf-8' 针对的只是文本类型 如果是图片这需要更换
          res.setHeader('Content-Type','text/html;charset=utf-8')
              //设置相应到浏览器的内容
          res.write('这是首页响应的内容')
      }else if(req.url ==='/userinfo/index'){
          res.setHeader('Content-Type','text/html;charset=utf-8')
          res.write('这是个人信息内容')   
      } else if(req.url ==='/studay/index'){
          res.statusCode = 302
          //错误后设置要跳转的网址
          res.setHeader('Location','http://www.baidu.com')
      }else if(req.url ==='login/index'){
          res.setHeader('Content-Type','text/html;charset=utf-8') //这个也可以不用添加应为左右的html网页都有   <meta charset="UTF-8">这个声明作用和前面的头设置是一样的效果
        //   res.write('请登录')  //如果没有跳转的网页可以临时使用res.write('请登录')代替

        //把读取到的内容作为要响应的内容 他会自动将buffer转位字符串   
          var data = fs.readFileSync('./web.html')//同步读取
          res.write(data)

      }else{
          res.statusCode = 404
          res.write('Not Found')
      }
      //结束并发送响应
      res.end()
})

