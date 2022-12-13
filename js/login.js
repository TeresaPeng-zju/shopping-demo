$(function () {
    var _user = localStorage.getItem("username");
    var _pass = localStorage.getItem("pwd");
    var _token = localStorage.getItem("token")
    login(_user, _pass)
    $("#login-username").click(function () {
        $(".denglu").css("display", "block");
    })//登录框打开
    $("#glyphicon").click(function () {
        $(".denglu").css("display", "none");
    })//登录框关闭
    $(".login-button").click(function () {
        var _username1 = $("input[name='_username']").val().trim();
        var _password1 = $("input[name='_password']").val().trim();
        // console.log(_username1, _password1)-获取输入框账号密码
        login(_username1, _password1)
    })
    $(".user").on("click", "a", function () {
        $(".exit").css("display", "block");
    })

    $(".exit").on("click", "span", function () {
        console.log(2343);
        $(".exit").css("display", "none");
    })

    $(".exit").on("click", ".byebye", function () {
        console.log(2343);
        $(".exit").css("display", "none");
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("pwd")
        $(".user").html(`<div class="user_top">
        <img id="user-pic" src="pic/人头.png">
        <h3 id="login-username">点击登录</h3>
        <a class="glyphicon glyphicon-menu-right" aria-hidden="true" id="close-login"></a>
    </div>`)
    })

    $(".exit").on("click", ".rethink", function () {
        $(".exit").css("display", "none");
    })


    function login(a, b) {
        $.ajax({
            url: "http://kumanxuan1.f3322.net:8001/auth/loginByWeb",
            type: "POST",
            data: {
                username: a,
                pwd: b
            },
            success(res) {
                console.log(res);
                if (res.errno == 0) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("username", a);
                    localStorage.setItem("pwd", b);
                    // $(".user_top").css("display", "none");
                    $(".black").css("display", "none")

                    $(".user").html(`<div class="user_top_logined">
                    <img id="user-pic" src=${res.data.userInfo.avatar}>
                    <h3 id="login-username">${res.data.userInfo.username}</h3>
                    <a class="iconfont icon-tuichu"></a>
                </div>`)

                }
            }
        })
    }




})

