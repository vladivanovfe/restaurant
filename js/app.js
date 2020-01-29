$(document).ready(function(){
    $('.ba-banner-slider').slick({
        dots: true,
        arrows: false
    });

    $('.ba-feature-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 500
    });
})