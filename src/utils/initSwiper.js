function initSwiper(id) {
    var s1 = new Swiper("#" + id, {
        autoplay: {
            //自动轮播
            delay: 2000, //间隔时间
            disableOnInteraction: false //拖拽完后还能继续自动轮播
        },
        loop: true, //无缝 环路
        navigation: {
            //上下按钮
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            //焦点跟随
            el: ".swiper-pagination",
            clickable: true, //点击焦点跳到指定图片
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>"; //生成焦点数字
            }
        },
        mousewheel: true, //滚动滑轮可以切图
        // effect: 'cube' //选用:效果
    });
    var oBox = document.getElementById(id);

    oBox.onmouseover = function () {
        //鼠标经过停止
        s1.autoplay.stop();
    };

    oBox.onmouseout = function () {
        //鼠标离开就运动
        s1.autoplay.start();
    };
}

export {
    initSwiper
}