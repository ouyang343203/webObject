//目录模块的引入：引入同一级目录下的 目录文件模块 没有package.json 回默认会自动去找引入的文件的下的index.js文件  如果要找其他的文件需要添加说明书文件:package.json
var obj=require('././15-tao')
print(obj.mypesonmen.name)