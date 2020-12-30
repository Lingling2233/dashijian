$(function () {
    // 去注册的点击事件
    $("#link_reg").on("click", function () {
        $(".login-box").hide()
        $(".reg-box").show()
        // $("#queren").show()
        // $("#zhucef").hide()
    })
    // 去登录点击事件
    $("#link_login").on("click", function () {
        $(".login-box").show()
        $(".reg-box").hide()
        // $("#queren").hide()
        // $("#zhucef").show()
    })
    var form = layui.form
    var layer = layui.layer
    // 通过 form.verify() 函数自定义校验规则
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

        repwd: function (value) {
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })

    // 监听注册表单的提交事件
    $("#form_reg").on("submit", function (e) {
        // 阻止默认行为e.preventDefault()
        e.preventDefault()
        $.post("/api/reguser", { username: $("#form_reg [name=username]").val(), password: $("#form_reg [name=password]").val() }, function (res) {
            if (res.status !== 0) {
                return console.log(res.message)
            } else {
                console.log("注册成功");
            }
        })
    })
})