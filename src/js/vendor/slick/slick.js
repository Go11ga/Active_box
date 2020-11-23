//= ../../../../node_modules/slick-carousel/slick/slick.js

// Reviews slider
(function(){

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

}());
