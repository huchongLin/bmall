$(function(){

    var flag = true;
    // 用户名验证
    $("#userName").blur(function(){
        if($("#userName").val().trim().length<1){
            $("#userTip").html("请填写用户名！").addClass("red");
            flag = false;
        }else{
            $("#userTip").html(" ");
            flag = true;
        }
        var reg0 = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        var userName = $("#userName").val();
        if(!reg0.test(userName)) {
            $("#userTip").html("用户名由英文字母和数字组成的4-16位字符，以字母开头！").addClass("red");
            flag = false;
        }else{
            $("#accTip").html(" ");
            flag = true;
        }
        //调用接口验证
        $.get("http://47.104.244.134:8080/username.do",{"username":$("#userName").val()},function(data){
            //console.log(data,data.code);
            if(!data.code){
                $("#userTip").html("此用户名已被占用！").addClass("red");
                flag = false;
            }else{
                $("#userTip").html("此用户名可以放心使用").removeClass("red");
                flag = true;
            }
        });
        return flag;
        
    })

    //用户邮箱验证
    // API前缀 http://47.104.244.134:8080/
    $("#accountNum").blur(function(){
        if($("#accountNum").val().trim().length<1){
            $("#accTip").html("请填写用户邮箱！").addClass("red");
            flag = false;
        }else{
            $("#accTip").html(" ");
            flag = true;
        }
        var reg1 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
        var userEml = $("#accountNum").val();
        if(!reg1.test(userEml)) {
            $("#accTip").html("邮箱格式错误，请输入正确邮箱！").addClass("red");
            flag = false;
        }else{
            $("#accTip").html(" ");
            flag = true;
        }
        //调用接口验证
        $.get("http://47.104.244.134:8080/useremail.do",{"email":$("#accountNum").val()},function(data){
            //console.log(data,data.code);
            if(!data.code){
                $("#accTip").html("此邮箱已被占用，请重新填写邮箱！").addClass("red");
                flag = false;
            }else{
                $("#accTip").html("此邮箱可以放心使用").removeClass("red");
                flag = true;
            }
        });
        return flag;
    })

    //密码验证
    $("#pas").blur(function(){
        if($("#pas").val().trim().length<1){
            $("#pasTip").html("请填写密码！").addClass("red");
            flag = false;
        }else{
            $("#pasTip").html(" ");
            flag = true;
        }
        var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        var userPas = $("#pas").val();
        if(!reg2.test(userPas)) {
            $("#pasTip").html("格式错误！").addClass("red");
            flag = false;
        }else{
            $("#pasTip").html("格式正确").removeClass("red");
            flag = true;
        }
        return flag;
    })

    // 确认密码
    $("#pas2").blur(function(){
        if($("#pas").val().length){
            if($("#pas2").val().trim().length<1){
                $("#pas2Tip").html("请再次输入密码！").addClass("red");
                flag = false;
            }else{
                $("#pas2Tip").html(" ");
                flag = true;
            }
        
            if($("#pas").val()==$("#pas2").val()) {
                $("#pas2Tip").html("验证成功").removeClass("red");
                flag = true;
            }else{
                $("#pas2Tip").html("两次输入的密码必须一致！").addClass("red");
                flag = false;
            }
        }else{
            $("#pas2Tip").html("请先填写密码在验证！").addClass("red");
            flag = false;
        }
        return flag;
    })
    //点击验证
    $("#yzBtn").on("click",function(){
        $(this).val("验证成功").css({"background":"#32cd32","color":"#fff","border":"none"});//有空再补全
    })
    
    //验证手机号
    $("#phoneNum").blur(function(){
        if($("#phoneNum").val().trim().length<1){
            $("#pNumTip").html("请填写手机号！").addClass("red");
            flag = false;
        }else{
            $("#pNumTip").html(" ");
            flag = true;
        }
        var reg3 = /^1[34578]\d{9}$/;
        var userPhone = $("#phoneNum").val();
        if(!reg3.test(userPhone)) {
            $("#pNumTip").html("手机号码格式错误！").addClass("red");
            flag = false;
        }else{
            $("#pNumTip").html("格式正确").removeClass("red");
            flag = true;
        }
        return flag;
    })
    
    //短信验证码

        //生成随机四位验证码
    function yzm(){
        var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        return str;
    }
    $("#yzmBtn").on("click",function(){
        $("#yanzhengma").fadeIn().html(yzm());
    })

    $("#yzmContent").blur(function(){

        if(!$("#yzmContent").val().length){
            $("#yzmTip").html("请输入验证码！").addClass("red");
            flag = false;
        }else{
            $("#yzmTip").html(" ");
            flag = true;
        }
        
        if($("#yzmContent").val()==$("#yanzhengma").html()){
            $("#yzmTip").html("验证成功").removeClass("red");
            flag = true;
        }else{
            $("#yzmTip").html("验证码错误,验证码区分大小写！").addClass("red");
            flag = false;
        }
        return flag;
    })

    //如果输入框为空  不允许提交
    if($("input").val().length<1){
        flag = false;
    }else{
        flag = true;
    }

    $("input").blur(function(){
        if($("input").val().length<1){
            flag = false;
        }else{
            flag = true;
        }
    })

    $("#btnSubmit").on("click",function(e){
        e.preventDefault();
        if(flag){
            $.post("http://47.104.244.134:8080/usersave.do",{
                "username":$("#userName").val(),
                "password":$("#pas").val(),
                "email":$("#accountNum").val(),
                "sex":"女"
            },function(data){
            //console.log(data,data.code);
            //console.log(data,data.code);
            if(!data.code){
                alert("注册成功");
            }else{
                alert("注册失败，请重试")
            }
        });
        // window.location.href="login.html";
        }else{
            alert("请填入正确信息")
        }
    })
});


