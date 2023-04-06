var urlstr = 'hhttp://www.codeboy.com:999/products.html?kw=小米&a=1'
var object = new URL(urlstr)
console.log(object)

//获取所有的参数
var ps = object.searchParams
console.log(ps)

//获取指定传递的参数值
var parame1 = ps.get('kw')
var parame2 = ps.get('a')
console.log(parame1)
console.log(parame2)

//练习：获取网址：https://www.tmooc.cn:443/course/web.html?id=2206&cname=nodejs 中传递的参数,打印一下格式： 班级WEB XXX 课程名称：XXX
var classurlstr = 'https://www.tmooc.cn:443/course/web.html?id=2206&cname=nodejs'
var classobject = new URL(classurlstr)
console.log(classobject)

//获取所有的参数
var classops = classobject.searchParams
var classparame1 = classops.get('id')
var classparame2 = classops.get('cname')

console.log(
`
班级WEB:${classparame1}
课程名称：${classparame2}
`
)