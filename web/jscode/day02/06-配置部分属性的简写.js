// 第五个：计算属性 不需要()  就能自动触发 
     //函数的第一种做法
     var r1 = {
        width: 100,
        height: 50,

        /* 第一种简写
        area: function () {
            return this.width * this.height
        }

        上面的函数可以简写
        area() {
            return this.width * this.height
        }
        */


        /*
        第二种简写
        get：关键词---把函数修改成计算属性，特点是不用（）就能自动触发 注意这里添加get后后面可以直接：console.log(r1.area)调用  同事上面的
         area() {
            return this.width * this.height
        }需要屏蔽
        */
       //上买可以简写成如下形式，注意这种仅使用在么有参数的情形
        get area(){
            return this.width * this.height 
        },

        //获取周长
        get zc(){
            return (this.width + this.height)*2 
        }

    }
    console.log(r1)

    //():作用触发函数和接受实参
    console.log(r1.area())


    //上面对象中添加get后可以省略 （）
    console.log(r1.area)
    console.log(r1.zc)


//==============================使用圆形链添加一个计算属性=====================================
var c1 = {radius:10}
Object.defineProperty(c1,)

    //练习给一圆添加计算周长和面积的属性
    function React(length, width) {
        this.length = length
        this.width = width
    }
    Object.defineProperties(emp, React.prototype, {
        zc: {
            get() { return 2 * (this.length + this.width) }
        },
        area: {
            get() { return this.length * this.width }

        }
    })
    var r1 = new React(10, 20)
    console.log(r1)
    //直接调用计算周长和计算面积的方法后不用添加小括号可以直接调用
    console.log(r1.zc)
    console.log(r1.zc)

    r1.prototype.xx =  function(){
        console.log(r1.zc)
    }

    confirm.log(r1.xx)