$(document).ready(function () {
    // $(".owl-carousel").owlCarousel({
    //     nav: false,
    //     dots:true
    // })
    $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: false,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })
    
    
})