$(document).ready(function () {
    $('#main-button').text('');
    for (let i = 0; i < 10; i++) {
        NewBtn(`按钮${i}`);

    }
});

function NewBtn(buttonText) {
    // 创建一个新的按钮元素
    let newButton = $('<button></button>')
        .attr('id', 'new-button')
        .text(buttonText)
        .addClass('base-btn');  // 添加一个类

    // 将新按钮添加到id为main-button的元素中
    $('#main-button').append(newButton);

    return newButton;
}