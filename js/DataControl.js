const path = "https://raw.githubusercontent.com/i000Tea/IdleGame-Starfleet/main/data/";

// 定义一个变量用于存储 JSON 数据
let jsonData_Btn = [];
let jsonData_Res = [];

$(document).ready(function () {
    // 使用Promise.all来等待所有的LoadData函数执行完毕
    Promise.all([
        LoadData("resData"),
        LoadData("btnData")
    ]).then(function (results) {
        // 当所有的LoadData函数都成功执行后，将结果存储到jsonData_Btn和jsonData_Res中
        jsonData_Res = results[0];
        jsonData_Btn = results[1];

        // 执行LoadOver函数
        LoadOver();
    }).catch(function (error) {
        console.error("加载数据失败: ", error);
    });
});


function LoadData(jsonName) {
    return new Promise(function (resolve, reject) {
        $.getJSON(`${path}${jsonName}.json`, function (data) {
            // console.log("拉取GitHub");
            localStorage.setItem('cachedData', JSON.stringify(data));
            console.log(data);
            resolve(data); 
        }).fail(function (jqxhr, textStatus, error) {
            let err = textStatus + ", " + error;
            console.error("请求失败: " + err);
            reject(error); 
        });
    });
}

function LoadOver() {
    console.log("加载完成");
    // NewResByID("getFuel01");
    // NewResByID("getFuel01");
    AwakeRes();
    AwakeBtn();
    NewResByID("getMetal");
    // NewResByID("metal");
}


// 定义一个函数来搜索并返回匹配的数据
function getDataByResID(inputResID) {
    if (inputResID.trim() === "") {
        console.log(`未获取到任何对象 ${inputResID}`);
        return null; // 如果输入为空，则返回null
    }
    return $.grep(jsonData_Res, function (item) {
        return item.resID === inputResID;
    })[0];
}
// 定义一个函数来搜索并返回匹配的数据
function getDataByBtnID(inputBtnID) {

    if (inputBtnID.trim() === "") {
        return null; // 如果输入为空，则返回null
    }
    return $.grep(jsonData_Btn, function (item) {
        return item.btnID === inputBtnID;
    })[0];
}