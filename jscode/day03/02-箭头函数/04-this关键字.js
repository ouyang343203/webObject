
//function 场景：this 关键子的说明

//第一种情况：对象函数名 this是对象


//第二种情况：没有前缀的函数调用，this 指向的都是window  在严格模式下是undefined

// new 函数名() this 是构造的实例对象

//箭头函数场景：
//1、箭头函数没有构造功能，不能搭配new使用
//2、箭头函数没有this关键词 会通通过作用域链机制就近查找

var emp = {
    ename:'泡泡',
    show(){

        console.log('show的this:',this)
        const b= () => {
            //箭头函数没有this，会根据作用域链的就近原则
            console.log('this:',this)
        }
        b()
    }
}

emp.show()