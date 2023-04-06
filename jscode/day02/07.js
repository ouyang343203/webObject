var emp = { ename: '泡泡', age: 29 }

//_age:是辅助属性，在底层负责存储数据，不应被用户察觉
//此方案新新增的——age属性：不可写不可便利，不可配置，需要配置成科协餐能完成后的赋值操作
Object.defineProperty(emp, '_age', { writable: true })



// 对赋值操作进行监听，确保赋值合理
Object.defineProperty(emp, 'age', {
    set function(value) {
        //这里对传递的属性监听并且可以做相关条件限制
        //如要求传递的值必须是数字
        if (typeof value != "number") {
            throw Error('age的值必须是数字，而当前的传入的是' + typeof value)
        }
        //范围：如果年龄可在1～120岁之间条件如果判断
        if (value >= 1 && value <= 120) {

            //正确的值，就存起来，制作一个变量，负责存储数据
            //这种辅助 age 监听器，用来存值的属性，用＿开头即可
            //约定俗成的命名方案，不强制 但都这么写
            this._age = value //注意如果这里使用this.age = value 会出现无限循环执行
        } else {
            throw Error('age的范围在1～120之间！' + value)
        }
    },
    // 计算属性这个方法会被赋值的时候默认触发，不写这个方法也会默认触发
    get() {
        return this._age
    }


})

//读取age
console.log(emp.age)
emp.genger = '男'

for (var key in emp) {
    console.log(key, emp[key])
}


//练习
//要求1．利用set监听器让 married 属性赋值时监听值的类型 typeof不是boolean的就报错是boolean的就存起来_married
//2．当读取时，用get计算属性返回＿married 中的值
//3．用define方式新增＿married防止被用户遍历到注意：改成可写的
var pao = { ename: '泡泡', married: true }
Object.defineProperties(pao, {
    _married: { writable: true },
    married: {
        get() { return this._married },
        set(value) {
            if (typeof value == 'boolean') {
                this._married = married
            } else {
                throw Error('marryf赋值类型错误!' + typeof value)
            }
        }
    }
})

// emp.married = 666,//报错提示类型错误
emp.married = '啊',//报错提示类型错误
// emp.married = false //正常赋值
console.log(pao.married)



