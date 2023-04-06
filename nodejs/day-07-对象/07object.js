//1：对象：js中的对象 ：自定义对象(用户自己创建的对象)  内置对象 (js标准提供的对象) 宿主对象
//1.1自定义对象:分为（a：对象字面量）
//1.1.对象字面量
var tao = { 
   age:30,
   nanme : "李四",
   salary : "李四",
   sex : "men",
   'birth-time':"1973.7.23"//注意如果属性里面有特殊字符需要添加‘’ 属性之间用，隔开
}

//遍历属性
for (var k in tao){
    // console.log('获取便利的属性',k)//获取便利的属性
     console.log('获取涛哥的便利的属性值',tao[k])//获取便利的属性值
 }



//属性访问注意如果添加了特殊字符访问需要添加[]
console.log(tao['birth-time']);
tao.age = 50;
tao['birth-time'] = "20000";
console.log(tao['birth-time']);
// tao.price = 3.14;
// tao['memory'] = '12G';
console.log(tao)

var book = { 
    bid:10062,
    title : '兔子的产后护理',
    author : "李四",
    price : 12.5,
    'public-time':"1973.7.23"//注意如果属性里面有特殊字符需要添加‘’ 属性之间用，隔开
 }

console.log(book['public-time']);
book.bid = 50;
book.price=12.5;


//1.2内置构造函数
var laptop = new Object();//创建一个空对象
//1.2.1给对象添加属性
laptop.title = 'ThinkPadE467'
laptop.count = 800
laptop.price = 3000
console.log(laptop,typeof laptop)//
//遍历属性
for (var k in laptop){
   // console.log('获取便利的属性',k)//获取便利的属性
    console.log('获取便利的属性值',laptop[k])//获取便利的属性值
}

//计算学生的平均分和总分
var m1 = { 
    english:30,
    math : 30,
    chiease : 60,
    wuli : 77,
    huaxue : 66,
 }

 //1.2.2遍历属性
 var sum = 0
 var count = 0
for (var k in m1){
    // console.log('获取便利的属性',k)//获取便利的属性
     sum+=m1[k]
     count++
 }
 console.log('总分',sum)// 平均分
 console.log('平均分',sum/count)// 平均分

 //1.3判断属性是否存在
 var product = { 
    title:'小米',
    color :'黄色',
    price : 60,
 }

 if(product.madein === undefined){
    product.madein = '中国'
 }

 if('price' in product){//price属性在product对象种
    product.price*=0.8
 }

 console.log(product)

//系统方法检测对象种是否有XX属性：hasOwnProperty('属性名')
console.log(product.hasOwnProperty('age'))//存在返回false不存在返回true

//1.4对象种的函数
var person = { 
    name:'涛哥',
    title:'小米',
    color :'黄色',
    price : 60,
    play:function(){//对象种添加函数
       console.log(this.name+'涛哥在玩挡杆') //this这里指向的就是person 谁调用就指向谁
    },  
    play2:function(){//对象种添加函数
        console.log('涛哥在游泳') 
    }, 
    play3:styday,
    runging:run
 }

 function styday(){
    console.log('我在学习')  
 }

 function run(){
    console.log(this.name+'我在学习英语')  
 }
 person.play3()
 person.runging()


 var circle = { 
    r:5,
    pi:3.14,
    area : function(){
        return this.pi*this.r*this.r
    },
    length:function(){
        return 2*this.pi*this.r  
    }
 }
 console.log('园的面积'+circle.area()) 

//2 数据的内存
//2.1原始类型的内存直接存储在栈内存
var a=1
var b=a//将a的值拷贝一份赋给b 这里相当于是开辟了两块内存一个是原来的a变量的内存 和新复制的b的内存
a = 2
console.log(b)//所以这里的值还是1他找的b内存的值

//2.2引用类型类型(包括函数，对象，数组)的内存:引用类型的数据存储在堆内存中，如果不被任何地址引用就会自动销毁，如果想手动销毁可以置空 objet=nil
var student = { 
   age:13,
   name:'李四'
 }
 console.log('园的面积'+circle.area()) 

 var student1 = student
 student1.name = '王五'
 console.log(student.name) 

 //2.3两个对象之间的比较比较的是内存地址
 var student2 = { 
    age:13,
    name:'李四'
  }
  console.log(student1 == student2)
  console.log(student1 == student)