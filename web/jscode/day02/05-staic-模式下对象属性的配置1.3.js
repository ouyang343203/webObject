'use strict'
var emp = {
    ename: '泡泡',
    age: 28,
    eid: '10020',
    husband: '铁柱',
}
emp.husband = '杨洋'
//第三个配置：需求希望其中某个属性不能在配置（即只能改一次） 希望丈夫属性的值 无法被修改
Object.defineProperty(emp, 'husband', {
    Writable: false,
    configurable: false,//表示无法在被配置
})

// 表示不能删除属性 因为他只能配置一次
// delete emp.husband


//黑客：改回可写的 报错：因为不允许重新配置
Object.defineProperty(emp, 'husband', {
    Writable: true
})

console.log(emp)
