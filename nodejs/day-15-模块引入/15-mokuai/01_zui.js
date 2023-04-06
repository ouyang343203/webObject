function zui(){
  console.log('我是嘴巴我在吃东西')
}

var person={
  name:'tao',
  sex:'男'
}
//只是暴露一个person对象  可以直接把需要暴露的对象赋给 module.exports 如果是多个的话就依然使用:module.exports={}
module.exports=person



