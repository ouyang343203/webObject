// 一：破盾功能：...可以破盾”：对象 和 数组的 外包围［］｛｝
//数组破盾
var a = [12,32,54]
var b = [88,99,...a]
console.log(b)

var x  = Math.max(...b)
console.log(x)

//对象破盾
var c = {m:10,n:18,x:30}
var d = {...c,x:40,y:50}//注意后面的写的写的：x:40 会覆盖前面写的x:30
console.log(d)



