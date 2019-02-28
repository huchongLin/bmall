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
            <tr>
            <td><input class="chkbox"  type="checkbox"></td>
            <td>
                <img src="${xinxi.picurl}"/>
            </td>
            <td>
                <span class ="shengLue">${(xinxi.name)}</span><br/>
                <span>${(xinxi.name).split(" ")[0]}</span>
            </td>
            <td>￥
                <span>${_price}</span>
            </td>
            <td>
                <span class="reduceBtn">-</span>
                <span>${data[i].count}</span>
                <span class="addBtn">+</span>
            </td>
            <td>
                ￥<span>2999.00</span>
            </td
            <td>
                <input type="button" class="btn btn-info" value="删除">
            </td>
        </tr>
        
            `
        }
        str1 =`
        <table class="table table-hover cart-table clearfix">
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
						<input class="chkbox" type="checkbox">已选（<span>0</span>）
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
						<p>应付金额：<span class="total">￥0</span></p>
						<p class="totalAll">商品合计：<span >￥2999</span></p>
					</td>
					<td>
						<input class="btn btn-primary" type="button" value="下单">
					</td>
				</tr>
                </table>
        `
        $("#shopTable").html(str1);
        
    // 加减按钮

    $(".addBtn").click(function(){
        var num = $(this).prev("span").html();
        num++;
        $(this).prev("span").html(num);
    });
    $(".reduceBtn").click(function(){
        var num = $(this).next("span").html();
        num--;
        if(num<2){
            num = 1;
        }
        $(this).next("span").html(num);
    });

    //总价计算

        
    });





/* 
    // 加减按钮

    $(".addBtn").click(function(){
        var num = $(this).prev("span").html();
        num++;
        $(this).prev("span").html(num);
    });
    $(".reduceBtn").click(function(){
        var num = $(this).next("span").html();
        num--;
        if(num<2){
            num = 1;
        }
        $(this).next("span").html(num);
    });

    //总价计算
 */


})

