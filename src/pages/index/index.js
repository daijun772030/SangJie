require('./index.css')
const commin = require('./img/commin.png');


// 检查手机号格式
var checkMobile = function checkMobile() {
    var sMobile = $('#test').val();
    if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
        return false;
    }else return true;
}

// 提交数据方法
var updata = function() {
    var phone = $('#test').val();
    $.ajax({
        url: `/api/archives/network?phone=${phone}&type=2`,
        type: "post",
        dataType: 'json',
        contentType:"application/json",
        data: formdata,
        success: function(data) {
            if(data.retCode === 200) {
                updateStyle();
            }else{
                alert(data.message);
            }
        }
    });
}

// 修改样式状态
var updateStyle = function(){
    $("#appWexin").css('display', 'block');
    $('.appInput').css("display", "none");
    $('.appButton').css("display", "none");
    $('#firstImg').attr("src", commin);
}

// 绑定点击事件
$("#button").click(function() {
    const isPhone = checkMobile();
    // 手机号检查
    if(isPhone){
        updata()
    }else{
        alert("请输入正确的手机号");
    }
});