// 定义 ButtonInvoke 方法
function ButtonInvoke(id) {
    console.log('传入id：' + id);
    // 在这里可以添加其他处理逻辑
}

// NewBtn(`第一个按钮`,`id`);

$(document).ready(function () {
    $('#main-button').text('');
    NewBtn(`获取金属`, `get-Metal-1`);
    NewRes(`Metal`,`钢铁`);
});