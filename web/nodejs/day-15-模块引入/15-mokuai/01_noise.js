function noise(){
    console.log('我是鼻子模块')
  }
  //只是暴露一个person对象  可以直接把需要暴露的对象赋给 module.exports 如果是多个的话就依然使用:module.exports={}
  module.exports=noise
  
  
  