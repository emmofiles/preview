$(document).ready(function() {
    "use strict";

    // Anchor Smooth Scroll
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Intro Slider
    $('#main-slider').flexslider({
        animation: "fade",
        slideshowSpeed: 3500,
        controlNav: false,
        directionNav: false
    });

    // Laptop Slider
    $('#laptop-slider').flexslider({
        animation: "slide",
        slideshowSpeed: 3500,
        controlNav: false,
        directionNav: false
    });

    $('.ls-prev').on('click', function() {
        $('#laptop-slider').flexslider('prev')
        return false;
    })

    $('.ls-next').on('click', function() {
        $('#laptop-slider').flexslider('next')
        return false;
    })

    // Fullwidth Slider
    $('#intro6-slider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        animationSpeed: 1000,
        controlNav: false,
        directionNav: true
    });

    $('.is-prev').on('click', function() {
        $('#intro6-slider').flexslider('prev')
        return false;
    })

    $('.is-next').on('click', function() {
        $('#intro6-slider').flexslider('next')
        return false;
    })

    // Scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 105
    })

    // Video Lightbox
    $( '.swipebox-video' ).swipebox();

    // Countdown Timer
    var endDate = "August 20, 2016";
    $('.countdown.styled').countdown({
        date: endDate,
        render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
        }
    });

    // Testimonial Carousel
    $('.quote-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 300,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

// Fixed Header
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 80)
        $(".navbar-default").css("background", "#000").css("padding", "3px 0px 5px").css("height", "89px");
    else
        $(".navbar-default").css("background", "transparent").css("padding", "12px 0").css("height", "109px");
});