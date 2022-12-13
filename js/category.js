$(function () {
    $("#loadDiv").css("display", "block");
    $.ajax({
        url: "http://kumanxuan1.f3322.net:8001/catalog/index",
        type: "GET",
        success(res) {
            // console.log(res);
            if (res.errno == 0) {
                $(".vertical-bar").empty();
                res.data.categoryList.forEach(function (item) {
                    $(".vertical-bar").append(`
                <button type="button" class="btn btn-default" data_id="${item.id}">${item.name}</button>`);
                })

                $.ajax({
                    url: "http://kumanxuan1.f3322.net:8001/catalog/index",
                    type: "GET",
                    data: { id: 1005000 },
                    success(res) {
                        // console.log(res.data.currentCategory.subCategoryList[1]);
                        if (res.errno == 0) {
                            $(".right").empty();
                            $(".right").append(` <div class="image">
<img src=${res.data.currentCategory.banner_url}>
<h5>${res.data.currentCategory.front_desc}</h5>
</div>
<div class="mytitle">
<span></span>
<h3>${res.data.currentCategory.name}</h3>
<div class="weui-grids gezi"></div>
`)
                            res.data.currentCategory.subCategoryList.forEach(function (item) {
                                $(".gezi").append(`<a href="" class="weui-grid js_grid">
<div class="weui-grid__icon">
    <img src=${item.wap_banner_url} alt="">
</div>
<p class="weui-grid__label">
    ${item.name}
</p>
</a>`);
                            })
                        }//if
                    }//success
                })//ajax


                function click_btn(myId) {
                    $(".btn-default").click(function () {
                        console.log(111);
                        myId = $(this).attr("data_id");
                        console.log(myId);
                        $.ajax({
                            url: "http://kumanxuan1.f3322.net:8001/catalog/index",
                            type: "GET",
                            data: { id: myId },
                            success(res) {
                                // console.log(res.data.currentCategory.subCategoryList[1]);
                                if (res.errno == 0) {
                                    $(".right").empty();
                                    $(".right").append(` <div class="image">
    <img src=${res.data.currentCategory.banner_url}>
    <h5>${res.data.currentCategory.front_desc}</h5>
    </div>
    <div class="mytitle">
    <span></span>
    <h3>${res.data.currentCategory.name}</h3>
    <div class="weui-grids gezi"></div>
    `)
                                    res.data.currentCategory.subCategoryList.forEach(function (item) {
                                        $(".gezi").append(`<a href="" class="weui-grid js_grid">
        <div class="weui-grid__icon">
            <img src=${item.wap_banner_url} alt="">
        </div>
        <p class="weui-grid__label">
            ${item.name}
        </p>
    </a>`);
                                    })
                                }//if
                            }//success
                        })//ajax
                    })//click
                }//function
                click_btn();
                $("#loadDiv").css("display", "none");
            }
        }
    })
})