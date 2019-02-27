$(function(){
     // 鼠标经过导航
    $("#navList li").hover(function(){
        $(this).find("span").addClass("hover")
        .next().fadeIn().end().parent()
        .siblings().find("span").removeClass("hover");
    },function(){
        $(this).find("span").removeClass("hover").next().fadeOut();
    });
    //导航固定
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        //console.log(scrollTop);
        if(scrollTop >= 300){
            $("#h-nav").addClass("navFix");
        }else{
            $("#h-nav").removeClass("navFix");
        }
    });

});