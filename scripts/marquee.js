$(function () {
    $('.marquee').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: false,
        duration: 10000,
        gap: 1,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: false,
        repeat: true
    });
});