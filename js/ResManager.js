let resDictionary = {};
function NewRes(resID) {

    // 使用jq的grep函数来查找具有特定ResItem值的对象
    var result = $.grep(jsonData_Btn, function (item) {
        return item.ResItem === "metal"; // 替换 "metal" 为你要查找的ResItem值
    });
    let newResLine = $('<button></button>')
}

function ResAdd(inputResID, addValue) {
    let res;
    if (inputResID in resDictionary) {
        console.info(`已添加过${inputResID}`);
        res = Object.values(inputResID);
    }
    else {
        NewRes();   
        console.info(`添加新的${inputResID}`);
    }
}