$(function(){

    // 通过商品id展示内容
    var id = location.search.split("=")[1];
    $.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
       //console.log(data,data.price);
        var _price = (data.price/100).toFixed(2);
        //console.log(_price);
        str = `
        <div class="infoDatail">
        <div class="info-left">
            <ul class="bigImg">
                <li><img class="active" src="${data.picurl}"></li>
                <li><img src="img/ss2.jpg"></li>
                <li><img src="img/ss3.jpg"></li>
                <li><img src="img/ss4.jpg"></li>
                <li><img src="${data.picurl}"></li>
            </ul>
            <ul class="smallImg">
                <li><img src="${data.picurl}"></li>
                <li><img src="img/ss2.jpg"></li>
                <li><img src="img/ss3.jpg"></li>
                <li><img src="img/ss4.jpg"></li>
                <li><img src="${data.picurl}"></li>
            </ul>
        </div>
        <div class="info-right">
            <div class="desc">
                <h2>${data.name}</h2>
                <p>${data.info}</p>
                <div class="pSale">
                    <div>售价：<span class="red">￥<span class="big">${_price}</span></span></div>
                    <div>服务： ·全场满88包邮 ·部分地区无法配送</div>
                </div>
            </div>
            <div class="actions">
                <div>规格：<span class="name active-sp">普通</span></div>
                <div class="num">数量：<span id="jianBtn" class="btn">-</span><span id ="byNum"></span><span class="btn" id ="addBtn">+</span></div>
                <input class="buy click" type="button" value="立即购买"> <input data-id="${data.id}" class="addToCart" type="button"
                    value="加入购物车">
            </div>
        </div>
    </div> `
       
    $("#datX").html(str);
    fn();
    });

    
    function fn(){
         // 左侧图片
        $(".smallImg").find("li").hover(function(){
            var _index = $(this).index();
            // console.log(_index);
            $(".bigImg").find("li").eq(_index).fadeIn()
            .siblings().fadeOut();
            // console.log($(".bigImg").find("li").eq(_index)[0]);
        });

        // 加减按钮
		var count = 1;
		$("#byNum").html(count);
		$("#jianBtn").click(function(){
			count--;
			if(count<=0){
				count=1;
				alert("最少购买一件商品！");
			}
			$("#byNum").html(count);
		});
		$("#addBtn").click(function(){
			count++;
			$("#byNum").html(count);
		});
		
		//加入购物车
		

    };

    
    


});