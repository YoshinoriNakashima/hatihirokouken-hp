// FVのスライド
$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000,
        accessibility: false,      // aria-hidden 警告を避ける
        pauseOnFocus: false,       // フォーカスによる停止防止
        pauseOnHover: false
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide').find(':focus').blur(); // フォーカス解除
    });
});