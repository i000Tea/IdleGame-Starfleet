// 定义一个变量用于存储 JSON 数据
let jsonData = [];
$(document).ready(function() {

    $(document).ready(function() {
        $.getJSON("baseData.json", function(data) {
            console.log(data);
        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("请求失败: " + err);
        });
    });
});