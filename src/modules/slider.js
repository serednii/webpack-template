// 

import * as $ from 'jquery';
require('slick-carousel');

$('.top_slider__big-images').slick({
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: true,

});

$('.top_slider__bottom-cards').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    responsive: [
        {
            breakpoint: 1390,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

});


export const startSlider = () => {

    $('.product_about_foto-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product_about_foto-small'
    });

    $('.product_about_foto-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product_about_foto-big',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
    });
}
