(function ($) {
    'use strict';

    // 1.0 Full Screen Code
    // 2.0 testimonials active code
    // 3.0 Single Portfolio slider active code
    // 4.0 scrollUp active code
    // 5.0 Language and Currency Data Active Code
    // 6.0 meanmenu active code
    // 7.0 prevent default a click code
    // 8.0 wow active code
    // 9.0 counterup active code
    // 10.0 countdown clock active code
    // 11.0 Preloader active code

    
    // 1.0 Full Screen Code

    $(window).on('resizeEnd', function () {
        $(".cooming_soon_area").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");


    
    // 2.0 testimonials active code

    if ($.fn.owlCarousel) {
        $(".single_advisor_profile").owlCarousel({
            items: 1,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: false,
            smartSpeed: 800,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
    }

    // 3.0 Single Portfolio slider active code

    if ($.fn.owlCarousel) {
        $(".partners_thumbs.slide").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });
    }

    // 4.0 Testimonial active code

    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 500
        });
    }

    // 5.0 scrollUp active code

    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 450,
        scrollFrom: 'top',
        scrollSpeed: 500,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="fa fa-angle-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // 6.0 Language and Currency Data Active Code

    var langopt = $('.language_option li'),
        langtxt = $('.lang_view .lang_code');
    langopt.on('click', function () {
        var langcode = $(this).attr('data-code');
        langtxt.text(langcode);
    });

    var curopt = $('.currency_option li'),
        curtxt = $('.cur_view .cur_code');
    curopt.on('click', function () {
        var curcode = $(this).attr('data-code');
        curtxt.text(curcode);
    });

    // 7.0 meanmenu active code

    $('.main_header_area #navbar').meanmenu();

    // 8.0 prevent default a click code

    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // 9.0 wow active code
    
    new WOW().init();

    // 10.0 counterup active code

    $('.counter').counterUp({
        delay: 5,
        time: 500
    });

    // 11.0 countdown clock active code

    if ($.fn.countdown) {
        $('#clock').countdown('2017/10/10', function (event) {
            var $this = $(this).html(event.strftime('' + '<span>%w</span> weeks ' + '<span>%d</span> days ' + '<span>%H</span> hr ' + '<span>%M</span> min ' + '<span>%S</span> sec'));
        });
    }

    // 12.0 Preloader active code

    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);