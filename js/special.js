$(function () {
    $("#loadDiv").css("display", "block");
    getPage(page = 1)
    //设置默认值

    function getPage(page) {
        $.ajax({
            url: "http://kumanxuan1.f3322.net:8001/topic/list",
            type: "GET",
            data: {
                page: page,
                size: 10
            },
            success(res) {
                console.log(res.data.totalPages);
                if (res.errno == 0) {
                    $(".zhuanti").empty();
                    res.data.data.forEach(function (item) {
                        $(".zhuanti").append(`<li>
    <img src=${item.scene_pic_url}>
    <div class="title">${item.title}</div>
    <div class="tips">${item.subtitle}</div>
    <div class="price">&#165 ${item.price_info} 元起</div>
</li>`)
                    })


                    $(".previous").click(function () {
                        if (page > 1) {
                            page -= 1
                            console.log(page)
                            $.ajax({
                                url: "http://kumanxuan1.f3322.net:8001/topic/list",
                                type: "GET",
                                data: {
                                    page: page,
                                    size: 10
                                },
                                success(res) {
                                    if (res.errno == 0) {
                                        $(".zhuanti").empty();
                                        res.data.data.forEach(function (item) {
                                            $(".zhuanti").append(`<li>
    <img src=${item.scene_pic_url}>
    <div class="title">${item.title}</div>
    <div class="tips">${item.subtitle}</div>
    <div class="price">&#165 ${item.price_info} 元起</div>
</li>`)
                                        })
                                    }
                                }
                            })
                            console.log(this)
                            console.log(this.parent())
                            $(this).parent().attr("disabled", "disabled")//禁用，让其不能再往前翻或往后翻
                        }
                    })



                    $(".next").click(function () {
                        if (page < res.data.totalPages) {
                            page += 1
                            console.log(page)
                            $.ajax({
                                url: "http://kumanxuan1.f3322.net:8001/topic/list",
                                type: "GET",
                                data: {
                                    page: page,
                                    size: 10
                                },
                                success(res) {
                                    if (res.errno == 0) {
                                        $(".zhuanti").empty();
                                        res.data.data.forEach(function (item) {
                                            $(".zhuanti").append(`<li>
    <img src=${item.scene_pic_url}>
    <div class="title">${item.title}</div>
    <div class="tips">${item.subtitle}</div>
    <div class="price">&#165 ${item.price_info} 元起</div>
</li>`)
                                        })
                                    }
                                }
                            })
                            $(this).parent().attr("disabled", "disabled")
                        }
                    })
                    $("#loadDiv").css("display", "none");
                }
            }
        })
    }




})