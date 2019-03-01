$(function(){

    $.get("http://47.104.244.134:8080/cartlist.do",{token:$.cookie("token")},function(data){
        console.log(data);
        var str = "";
        for(var i = 0; i<data.length;i++){
            var xinxi= data[i].goods;
            var count = data[i].count;
            var _price = (xinxi.price/100).toFixed(2);
            //_name = _name.Substring(0,10);
            str+=`
            <tr class="tr-biaoji" data-id="${data[i].id}" data-gid="${data[i].gid}">
            <td><input class="chkbox"  type="checkbox"></td>
            <td>
                <img src="${xinxi.picurl}"/>
            </td>
            <td>
                <span class ="shengLue">${(xinxi.name)}</span><br/>
                <span>${(xinxi.name).split(" ")[0]}</span>
            </td>
            <td class= "danjia">￥
                <span>${_price}</span>
            </td>
            <td>
                <span class="reduceBtn">-</span>
                <span>${data[i].count}</span>
                <span class="addBtn">+</span>
            </td>
            <td class="xiaoji">
                ￥<span class="xjNum">${(_price*data[i].count).toFixed(2)}</span>
            </td>
            <td>
                <input type="button" class="btn btn-info" value="删除">
            </td>
        </tr>
        
            `
        }
        var str1 =`
        <table id="cartTable" class="table table-hover cart-table clearfix">
        <tr>
        <th>
            <input class="chkbox" type="checkbox">全选
        </th>
        <th>商品信息</th>
        <th> </th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>活动</th>
    </tr>
    ${str}
    <tr>
					<td>
						已选（<span id="yiXuan">0</span>）
					</td>
					<td>
						<span class="batchDelBtn">
							批量删除
						</span>
					</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>
						<p>应付金额：<span id="yf$" class="total">￥0</span></p>
						<p class="totalAll">商品合计：<span id="hjNum" >￥0</span></p>
					</td>
					<td>
						<input class="btn btn-primary" type="button" value="下单">
					</td>
				</tr>
                </table>
        `
        $("#shopTable").html(str1);
        



        //默认让购物车内所有的商品选中
        $("#cartTable input").prop("checked",true);
        //商品合计
        total(".xjNum","#hjNum");
        function total(sel,content){
            var sum = 0;
            $(sel).each(function(){
                sum += parseInt($(this).html());
            });
            $(content).html("￥"+sum.toFixed(2));
        }
        function total1(){
            var sum1 = 0;
            $("input:checked").parent().next(".").each(function(){
                sum += parseInt($(this).html());
            });
            $(content).html("￥"+sum.toFixed(2));
        }
        // 加减按钮

        $(".addBtn").click(function(){
            var num = $(this).prev("span").html();
            num++;
            $(this).prev("span").html(num);
            
            // 调用购物车接口
            //http://47.104.244.134:8080/
           /*  $.get("http://47.104.244.134:8080/cartupdate.do",{
                id:$(this).parent().parent(".tr-biaoji").arrt("data-id"),
                gid:$(this).parent().parent().arrt("data-gid"),
                token:$.cookie("token"),
                num:1
            },function(){

            }) */


            // 点击时更新小计
            var actPrice = $(this).parent().prev(".danjia").find("span").html();
            $(this).parent().next(".xiaoji").find("span").html((num*actPrice).toFixed(2));
            //点击时更新总计
            total(".xjNum","#hjNum");
           /*  //点击时更新应付金额
            total1(); */


        });
        $(".reduceBtn").click(function(){
            var num = $(this).next("span").html();
            num--;
            if(num<2){
                num = 1;
            }
            $(this).next("span").html(num);
            // 点击时更新小计
            var actPrice = $(this).parent().prev(".danjia").find("span").html();
            $(this).parent().next(".xiaoji").find("span").html((num*actPrice).toFixed(2));
            //点击时更新总计
            total(".xjNum","#hjNum");
            //点击时更新应付金额
            total1();
        });
   
    });

    





})

