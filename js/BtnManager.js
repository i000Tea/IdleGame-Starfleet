let BtnDictionary = {};

function AwakeBtn() {
    for (let i = 0; i < jsonData_Btn.length; i++) {
        // console.log(`inf:${i}`);
        // console.log(jsonData_Btn[i]);
        let item = GetBtn(jsonData_Btn[i]);
        item.hide();
    }
}
function NewResByID(inputBtnId) {
    if (inputBtnId in BtnDictionary) {
        BtnDictionary[inputBtnId].show();
        // console.info(`已添加过${inputBtnId}`);
        return;
    }
    let iBtnData = getDataByResID(inputBtnId);
    NewRes(iBtnData);
}

function GetBtn(inputBtn) {
    if (inputBtn.btnID in BtnDictionary) {
        // console.info(`已添加过按钮${inputBtn.btnID}`);
        return;
    }

    // 创建一个新的按钮元素
    let newButton = $('<button></button>')
        .text(inputBtn.textZh)
        .attr('id', inputBtn.btnID)
        .attr('data-btnId', inputBtn.btnID)  // 添加 data-btnId 属性
        .addClass('base-btn');  // 添加一个类

    // 将新按钮添加到id为main-button的元素中
    $('#main-button').append(newButton);

    // 绑定点击事件，调用 ButtonInvoke 方法，传入 data-btnId 的值作为参数
    newButton.on('click', function () {
        ButtonClick($(this).attr('data-btnId'));
    });

    BtnDictionary[inputBtn.btnID] = newButton;

    return newButton;
}

function ButtonClick(btnID) {

    switch (btnID) {
        case "get_metal":
            console.log("点击获取金属");
            ResAdd("metal", 1);
            break;
        case "get_fuel01":
            console.log("点击获取燃料");
            ResAdd("fuel01", 1);
            break;
        case "make_metalPlate":
            TryMake_metalPlate();

            break;
        default:
            console.log(`未获取正确类型 ${btnID}`);
    }
    BtnOpenSelect();
}

// ============================================================================================================
function BtnOpenSelect() {
    if (!on_make_metalPlate) {
        if (ResSatisfy("metal", 10)) {
            GetBtn("make_metalPlate").show();
            on_make_metalPlate = true;
        }
    }
}

// Make_metalPlate ============================================================================================================
let on_make_metalPlate = false;
function TryMake_metalPlate() {
    if (ResSatisfy("metal", 10)) {
        console.log("点击制作金属板");
        ResAdd("metal", -10)
        ResAdd("metalPlate", 1);
    }
    else {
        console.log("资源不足，扣除失败");
    }
}