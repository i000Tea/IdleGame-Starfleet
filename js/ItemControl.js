

function NewBtn(btnText, btnId) {



    // 创建一个新的按钮元素
    let newButton = $('<button></button>')
        .text(btnText)
        .attr('id', btnId)
        .attr('data-btnId', btnId)  // 添加 data-btnId 属性
        .addClass('base-btn');  // 添加一个类

    // 将新按钮添加到id为main-button的元素中
    $('#main-button').append(newButton);

    // 绑定点击事件，调用 ButtonInvoke 方法，传入 data-btnId 的值作为参数
    newButton.on('click', function () {
        ButtonInvoke($(this).attr('data-btnId'));
    });

    return newButton;
}

function NewRes(resID) {

    // 使用jq的grep函数来查找具有特定ResItem值的对象
    var result = $.grep(jsonData_Btn, function (item) {
        return item.ResItem === "metal"; // 替换 "metal" 为你要查找的ResItem值
    });
    let newResLine = $('<button></button>')
}

