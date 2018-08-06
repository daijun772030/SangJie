require('./index.css')


$("#button").click(function() {
    $("#appWexin").css('display', 'block');
    $('.appInput').css("display", "none")
    $('.appButton').css("display", "none")
    $('#firstImg').attr("src", "/img/commin.png")
        // console.log($('#firstImg').attr('src'))
    var checkMobile = function checkMobile() {
        var sMobile = $('#test').val();
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
            alert("请输入正确的手机号");
            return false;
        }
    }


    function updata() {
        $.ajax({
            url: "archives/network ",
            type: "post",
            datatype: "json",
            data: {
                phone: $("#text").val(),
                type: "2"
            },
            success: function(data) {
                console.log(data)
            }
        })
        checkMobile()

        console.log($("#test").val())
    }
    updata()
})