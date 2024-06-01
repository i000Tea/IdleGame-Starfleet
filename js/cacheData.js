const path = "https://raw.githubusercontent.com/i000Tea/IdleGame-Starfleet/main/data/"

// 定义一个变量用于存储 JSON 数据
let jsonData_Btn = [];
let jsonData_Res = [];
$(document).ready(function () {

    jsonData_Btn = LoadData("resData");
    jsonData_Res = LoadData("btnData");
});


function LoadData(jsonName) {
    // 定义一个变量用于存储 JSON 数据
    let getJson = [];
    // 如果本地存储中没有缓存数据，则发送 AJAX 请求获取数据
    $.getJSON(`${path}${jsonName}.json`, function (data) {
        console.log("拉取GitHub");
        // 将获取到的数据存储到本地存储中
        localStorage.setItem('cachedData', JSON.stringify(data));
        getJson = data;
        console.log(jsonData);
    }).fail(function (jqxhr, textStatus, error) {
        let err = textStatus + ", " + error;
        console.error("请求失败: " + err);
    });
    return getJson;
}