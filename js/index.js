/// <reference types="../@types/jquery"/>

$(".nav-item ").on("click",function(e){
   $(e.target).addClass("active")
   $(e.target).siblings().removeClass("active")  
})

$("a[href^='#']").on("click",function(e){
    let current=e.target.getAttribute("href")
    let offsett=$(current).offset().top;
    $("body,html").animate({scrollTop:offsett},1000)
   
})
$(".clickToShow").on('click',function(){
    $('.showmore').toggleClass('d-none')
    if(!$('.showmore').hasClass('d-none')){
        $('.clickToShow').html('Show Less')
    }else{
        $('.clickToShow').html('Show More')

    }
})

