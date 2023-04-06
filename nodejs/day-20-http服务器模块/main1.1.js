//http 服务器模块
//引入http模块
const http = require('http')
//创建web服务器
const server = http.createServer()
//设置端口
server.listen(3000,()=>{
    console.log('服务器启动成功')
})

//接收到了浏览器的请求 :第一个参数是固定参数 ‘request’
server.on('request',(req,res)=>{
    console.log('监听到了浏览器的访问')
    console.log(req.url,req.method)
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
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.write('请登录')   
    }else{
        res.statusCode = 404
        res.write('Not Found')
    }
    //结束并发送响应
    res.end()
})
server.close()

//访问上面创建的本地服务器：域名地址是http://127.0.0.1:3000 或者 http://localhost:3000
// 终端cd到当前文件的上一级目录  在node  文件名称
