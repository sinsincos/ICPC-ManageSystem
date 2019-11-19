
function form_check() {
    $("#response").empty().hide();
    if ($("[name='sid']").val().length !== 9) {
        $("#response").append('请输入正确的学号').show();
        return false
    }
    if ($("[name='pass']").val().length < 6) {
        $("#response").append('密码长度应大于等于6位').show();
        return false
    }
    return true
}

function login() {
    form_check();
    $.post("login.php",{
            "sid" : $("[name='sid']").val(),
            "pass": $.md5($("[name='pass']").val())
        },
        function (res) {
            res = JSON.parse(res);
            if(res.log === 0){
                window.location.href="./my.html";
            }else{
                $("#response").append('用户名不存在或密码错误').show();
            }
        });
}