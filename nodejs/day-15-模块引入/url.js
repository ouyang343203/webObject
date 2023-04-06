var str='http://www.codeboy.com:999/1.html?kw=小米'
//将url转对象
var obj=new URL(str)
console.log(obj)
//1.获取查询字符串部分的对象
var searchParams=obj.searchParams
console.log(searchParams)
//2.获取查询对象里面的值通过get()方法获取
var objectvalue=searchParams.get('kw')
console.log(objectvalue)