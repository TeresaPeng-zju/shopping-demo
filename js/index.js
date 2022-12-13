
$(function () {
    $("#loadDiv").css("display", "block");
    //1发送ajax
    $.ajax({
        url: 'http://kumanxuan1.f3322.net:8001/index/index',
        type: 'GET',
        data: {},
        success(res) {/*成功的回调是异步的（补充：计时器、...（重新听一下）也是异步的）
            function A有一个参数function B，function B会在function A执行完成之后被调用执行 */
            //2.响应处理
            if (res.errno == 0) {
                // console.log(111);
                // 商品直供渲染
                $(".brand").empty();
                res.data.brandList.forEach(function (item, index) {
                    // console.log(item, index)
                    $(".brand").append(`<li>
                    <a href="#">
                        <img src=${item.pic_url} alt="" width=100%>
                        <h4 class="fourtext">
                            ${item.name}
                        </h4>
                        <p class="fourprice">&#165 ${item.floor_price} 元</p>
                    </a>
                </li>`)
                })
                //新品首发渲染
                $(".brandnew").empty();
                res.data.newGoodsList.forEach(function (item, index) {
                    // console.log(item, index)
                    $(".brandnew").append(`<li>
                    <a href="#">
                        <img src=${item.list_pic_url} alt="" width=100%>
                        <div class="newtext">
                        ${item.name}
                        </div>
                        <section class="newprice">&#165 ${item.retail_price}. 元</section>
                    </a>
                </li>`)
                })
                //人气标题渲染
                $(".recommend").empty();
                res.data.hotGoodsList.forEach(function (item, index) {
                    // console.log(item, index)
                    $(".recommend").append(`<div class="recommend-content">
    <img src=${item.list_pic_url} alt="">
    <p class="recommend-title">${item.name}</p>
    <p class="recommend-jianjie">${item.goods_brief}</p>
    <div class="recommend-price">&#165 ${item.retail_price} 元</div>
</div>`)
                })
                //专题精选渲染
                $(".swiper-jingxuan").empty();
                res.data.topicList.forEach(function (item, index) {
                    // console.log(item, index)
                    $(".swiper-jingxuan").append(`<div class="swiper-slide jingxuan-slide"><img src=${item.scene_pic_url} alt="">
                    <h2>${item.title} <span>&nbsp; &#165 ${item.price_info}
                            元</span></h2>
                    <p>${item.subtitle}</p>
                </div>`)
                })

                // 分类渲染
                $(".home").empty();
                res.data.categoryList.forEach(function (item, index) {
                    // console.log(item, index)
                    $(".home").append(`<div class="brand-pinpai jujia-title">
                    <p>${item.name}</p>
                </div>
                <ul class="product-ul"></ul>`)
                })
                for (let i = 0; i < res.data.categoryList.length; i++) {
                    res.data.categoryList[i].goodsList.forEach(function (item, index) {
                        // console.log(item, index);//无误
                        $(".product-ul").eq(i).append(`
                        <li class="jujia-li">
                        <img src=${item.list_pic_url} alt="">
                        <h4 class="jujia-productname">${item.name}</h4>
                        <p class="jujia-price"> &#165 ${item.retail_price} 元 </p>
                    </li>`)
                    })
                }
                $("#loadDiv").css("display", "none");
            }
        }
    })
})





