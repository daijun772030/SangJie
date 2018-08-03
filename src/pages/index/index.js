require('./index.css')
var axios = require('../api.js')
console.log(axios)


$("#button").click(function() {
    var checkMobile = function checkMobile() {
        var sMobile = $('#test').val();
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
            alert("请输入正确的手机号");
            return false;
        }
    }

    function updata() {
        checkMobile()
        $.ajax({
                // baseURL: "/api",
                url: '/api/archives/network',
                type: "post",
                datatype: 'json',
                data: {
                    phone: '13666288963',
                    type: "2",
                },
                success: function(response) {
                    console.log(response)
                }
            })
            // axios("network", { phone: "13666288963", type: "2" }).then((res) => {
            //     console.log(res)
            // })
            // console.log($("#test").val())
    }
    updata()
})