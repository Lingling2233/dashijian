$(function () {

})


getUserInfo()
function getUserInfo() {
    $.ajax({
        method: "GET",
        url: "/my/userinfo",
        // headers就是请求头
        // headers: {
        //     Authorization: localStorage.getItem("token") || ""
        // },
        success: function (res) {
            // console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg("获取用户信息失败")
            }
            // 调用渲染用户的头像
            renderAvatar(res.data)
        },
        // 不论登录成功还是失败，都会调用complete
        completr: function (res) {
            if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败") {
                localStorage.removeItem("token")
                location.href = "../../login.html"
            }
        }

    })
}
function renderAvatar(user) {
    // 获取用户名称
    var name = user.nickname || user.username
    // 设置欢迎的文本
    $("#welcome").html("欢迎&nbsp;&nbsp;" + name)
    // 渲染用户头像
    if (user.user_pic !== null) {
        $(".layui-nav-img").attr("src", user.user_pic).show()
        $(".text-avatar").hide()
    } else {
        // 渲染文本头像
        $(".layui-nav-img").hide()
        // 获取第一个字符，并转换成大写
        var first = name[0].toUpperCase()
        $(".text-avatar").html(first).show()
    }
}
var layer = layui.layer
// 设置退出
$("#btnLogout").on("click", function () {
    // console.log(1);
    layer.confirm('is not?', { icon: 3, title: '提示' }, function (index) {
        //do something

        layer.close(index);
    });
    //eg2
    layer.confirm('确认退出?', function (index) {
        //do something
        // console.log(1);
        localStorage
        // 清除本地的token
        localStorage.removeItem("token")
        location.href = "../../login.html"
        layer.close(index);
    });
})