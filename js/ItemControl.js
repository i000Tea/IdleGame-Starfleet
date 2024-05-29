
$(document).ready(function () {
    $('#main-button').text('');
    NewBtn(`第一个按钮`,`id`);
});

function NewBtn(btnText, btnId) {
    // 创建一个新的按钮元素
    let newButton = $('<button></button>')
        .text(btnText)
        .attr('id', btnId)
        .addClass('base-btn');  // 添加一个类

    // 将新按钮添加到id为main-button的元素中
    $('#main-button').append(newButton);

    return newButton;
}

