let BtnDictionary = {};

function NewBtn(inputBtnId) {
    if (inputBtnId in BtnDictionary) {
        console.info(`已添加过${inputBtnId}`);
        return;
    }

    let getItem = getDataByBtnID(inputBtnId);
    console.log(getItem)



    // 创建一个新的按钮元素
    let newButton = $('<button></button>')
        .text(getItem.textZh)
        .attr('id', inputBtnId)
        .attr('data-btnId', inputBtnId)  // 添加 data-btnId 属性
        .addClass('base-btn');  // 添加一个类

    // 将新按钮添加到id为main-button的元素中
    $('#main-button').append(newButton);

    // 绑定点击事件，调用 ButtonInvoke 方法，传入 data-btnId 的值作为参数
    newButton.on('click', function () {
        ButtonClick($(this).attr('data-btnId'));
    });

    BtnDictionary[inputBtnId] = newButton;

    return newButton;
}

function ButtonClick(btnID) {
    switch (btnID) {
        case "getMetal":
            console.log("点击获取金属");
            ResAdd("Metal", 1);
            break;
        case "getFuel01":
            console.log("点击获取燃料");
            ResAdd("Fuel01", 1);
            break;
        default:
            console.log("执行默认操作");
    }
}

