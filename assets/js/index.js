$(function () {

})


getUserInfo()
function getUserInfo() {
    $.ajax({
        method: "GET",
        url: "/my/userinfo",
        // headers就是请求头
        headers: {
            Authorization: localStorage.getItem("token") || ""
        },
        success: function (res) {
            console.log(res);
        }
    })
}