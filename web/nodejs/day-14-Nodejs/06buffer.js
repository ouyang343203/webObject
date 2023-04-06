//创建缓冲区buffer用于临时存储数据 单位是字节
var buf = Buffer.alloc(5,'abcd')//分配5个空间字节的存储abc 每个汉字占3个字节
console.log(buf)//这里打印出来的是阿斯克编码中对应数字
//如果buffer中的是字符串
console.log(buf.toString())