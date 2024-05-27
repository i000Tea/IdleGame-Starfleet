// 声明一个变量来跟踪动画状态
let isAnimating = false;
// 声明一个变量来设置动画速度（毫秒）
let animationSpeed = 200;


$(document).ready(function () {
    // 定义调整.main元素高度的函数
    function adjustMainHeight() {
        // 获取窗口的高度
        let windowHeight = $(window).height();
        // 获取.head元素的高度，包括外边距
        let headHeight = $('.head').outerHeight(true);
        // 计算.main元素的高度，减去.head元素的高度和100像素
        let mainHeight = windowHeight - headHeight - 100;
        // 设置.main元素的高度
        $('.main').height(mainHeight);
    }

    // 页面加载时初次调整.main元素高度
    adjustMainHeight();

    // 窗口大小变化时调整.main元素高度
    $(window).resize(function () {
        adjustMainHeight();
    });


    // 绑定点击事件到 .tab-links 中的 a 元素
    $('.tab-links a').on('click', function (e) {
        e.preventDefault(); // 阻止默认的链接跳转行为

        // 如果动画正在进行，直接返回
        if (isAnimating) return;

        // 获取被点击链接的 href 属性值
        let currentAttrValue = $(this).attr('href');
        // 获取即将显示的选项卡内容元素
        let $currentTab = $(currentAttrValue);
        // 获取当前显示的选项卡内容元素
        let $activeTab = $('.tab-content .tab.active');

        // 如果点击的选项卡不是当前活动的选项卡
        if (!$currentTab.hasClass('active')) {
            let activeIndex = $('.tab-links li').index($('.tab-links li.active'));
            let newIndex = $('.tab-links li').index($(this).parent('li'));

            // 确定动画方向
            let direction = (newIndex > activeIndex) ? 'left' : 'right';

            // 设置动画状态为正在进行
            isAnimating = true;

            if (direction === 'left') {
                $activeTab.animate({ left: '-200%' }, animationSpeed, function () {
                    $activeTab.removeClass('active').css('left', '100%');
                });
                $currentTab.css('left', '100%').show().animate({ left: '0' }, animationSpeed, function () {
                    $currentTab.addClass('active');
                    // 动画结束，设置动画状态为完成
                    isAnimating = false;
                });
            } else {
                $activeTab.animate({ left: '100%' }, animationSpeed, function () {
                    $activeTab.removeClass('active').css('left', '-200%');
                });
                $currentTab.css('left', '-200%').show().animate({ left: '0' }, animationSpeed, function () {
                    $currentTab.addClass('active');
                    // 动画结束，设置动画状态为完成
                    isAnimating = false;
                });
            }

            // 更新选项卡链接的 active 状态
            $('.tab-links li').removeClass('active');
            $(this).parent('li').addClass('active');
        }
    });

});
