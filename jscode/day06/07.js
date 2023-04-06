// onload = function(){
//     $('ul>li').css('color','blue') 
// }
//或者
//简化语法，来自JQ
//＄（函数）：函数会在DOM加载完毕后 执行
// $(function(){
//     $('ul>li').css('color','blue')    
// })

//或者
$(document).ready(function(){
    $('ul>li').css('color','blue')       
})