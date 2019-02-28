$(function(){
    //判断用户是否登录
    if($.cookie("token")){
        $("#topList").html(`
        <li>欢迎您，尊敬的用户${$.cookie("token")}</li>
        <li id="zhuxiao">&nbsp;&nbsp;&nbsp;注销</li>
        `);
        $("#zhuxiao").click(function(){
            $.removeCookie('token');
            window.location.href="index.html";
            alert("注销成功！");
        })
    }
    //顶部hover事件
    $("#subMenu").hover(function(){
       $(this).addClass("color").find("li").fadeIn();
    },function(){
        $(this).removeClass("color").find("li").fadeOut();
    })

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

    // 轮播部分
        // 角标居中
    $("#jiaobiao").css({"left":"50%","marginLeft":-$("#jiaobiao").width()/2});
    //先播一次
    $(".pic").find("li").eq(0).fadeIn()
    var count = 0;
    var timer = setInterval(function(){
        count++
        if(count >= $(".pic li").length){
            count = 0;
        }
        // 角标
        $("#selList").find("li").eq(count).addClass("select")
        .siblings().removeClass("select");

        // 轮播
        $(".pic").find("li").eq(count).fadeIn()
        .siblings().fadeOut();
    },2000);

    












});