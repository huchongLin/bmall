$(function () {
     // 用户名验证
    var flag = true;
    $("#userName").change(function () {
        //console.log('aa');
        if ($("#userName").val().trim().length < 1) {
             alert("请输入用户名！");
             flag = false;
        }else{
            flag = true;
        }
        
        //调用接口验证
        $.get("http://47.104.244.134:8080/username.do", {
             "username": $("#userName").val()
        }, function (data) {
            //console.log(data,data.code);
            if (data.code) {
                alert("查无此用户名");
                flag = false;
            }else{
                flag = true;
            }
            return flag;
        });
        return flag;
    })

    //密码验证
    $("#pas").change(function(){
        if($("#pas").val().trim().length<1){
            alert("请填写密码！");
            flag = false;
        }else{
            flag = true;
        }
        return flag;
    })

    //登录验证
        //如果输入框为空  不允许登录
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

    $("#btnLogin").on("click",function(){
        if(flag){
            $.post("http://47.104.244.134:8080/userlogin.do",{
                "name":$("#userName").val(),
                "password":$("#pas").val()
            },function(data){
            console.log(data,data.code);
            console.log(data,data.code,data.data,data.data.token);
            if(data.code==0){
                $.cookie("token",data.data.token);
                alert("登录成功,点击确定跳转到首页");
                console.log(data,data.code,data.data.token,$("#userName").val());
                window.location.href="index.html";
            }else{
                alert("登录失败，请重试")
            }
        });
        //window.location.href="login.html";
        }else{
            alert("请检查您的用户名或者密码是否填写正确");
        }
    })


})