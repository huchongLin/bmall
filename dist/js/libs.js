// import { finished } from "stream";

$(function(){
  
    // 请求数据
    $.get("http://47.104.244.134:8080/goodsbytid.do",{
        tid:13,
        page:1,
        limit:20
    },function(data){
        // console.log(data,data.data);
        var _data = data.data;
        

        console.log(_data,_data.length,_data[1].name);
        var str = "";
        for(var i = 0; i<_data.length;i++){
            var _price = (_data[i].price/100).toFixed(2);
           /*  <li>
                <a href="datail.html">
                    <img src="img/backpack.png" alt="商品">
                    <p class="title">守望先锋 特工行动 双肩包</p>
                </a>
                <p class="price">
                    商城价：<span>￥459.00</span>
                </p>
             </li> */
            str+=`
            <li>
                <a href="datail.html?id=${_data[i].id}">
                    <img src="${_data[i].picurl}" alt="${_data[i].typename}">
                    <p class="title">${_data[i].name}</p>
                </a>
                <p class="price">
                    商城价：<span>￥${_price}</span>
                </p>
            </li> 
            `
            /* <li>
                <a href="datail.html?id=${_data[i].id}"
                    <img src="${_data[i].picurl}" alt="${_data[i].typename}">
                    <p lass="title">${_data[i].name}</p>
                <a/>
                <p class="price">
                    商城价：<span>￥${_data[i].price}</span>
                </p>
            </li> */
        }
       
        $("#shopList").html(str);

    });
    

        /*分页
        var count =1;
        $(".fanye-fix").find("ul li:not(:last)").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            count = $(this).index()+1;
            console.log(count);
            return count;
        });
        // 下一页
        $(".fanye-fix ul").find(".next").hover(function(){
            $(this).addClass("active");
            return _this = $(this);
        },function(){
            $(this).removeClass("active");
        });
        $(".fanye-fix ul").find(".next").click(function(){
            count++;
            console.log(count);
            return count;
        }) */

});