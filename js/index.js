/// <reference types="../@types/jquery"/>

$(".nav-item ").on("click",function(e){
   $(e.target).addClass("active")
   $(e.target).siblings().removeClass("active")  
})

$("a[href^='#']").on("click",function(e){
    let current=e.target.getAttribute("href")
    let offsett=$(current).offset().top;
    $("body,html").animate({scrollTop:offsett},1500)
   
})
