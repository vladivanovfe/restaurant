$(document).ready(function(){
    $('.ba-banner-slider').slick({
        dots: true,
        arrows: false
    });

    $('.ba-feature-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000
    });

    $('.ba-blog-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 500
    });

    $('.ba-stuff-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    });

    $('.ba-about__btn').on('click', function() {
        
        $(this).parent().toggleClass('active');
    });

})