$(window).on("load", function() {
    "use strict";


    /************---Preloader---************/

    $(function(){
      setTimeout(function(){
        $('#overlayer').fadeOut('slow', function() {
          $(this).remove();
        });
       }, 1500);
    });


    /************---open-Popup---************/

    $(".open-search").on("click", function() {
        $(".search-page").addClass("active");
        return false;
    });
    $(".close-search").on("click", function() {
        $(".search-page").removeClass("active");
        return false;
    });


    /************---products_carousel---************/

    $(".menu-btn, .mobile-men-btn > a").on("click", function() {
        $(".responsive-mobile-menu").addClass("active");
    });
    $(".close-menu-btn, html").on("click", function() {
        $(".responsive-mobile-menu").removeClass("active");
    });
    $(".menu-btn, .mobile-men-btn > a, .responsive-mobile-menu").on("click", function(e) {
        e.stopPropagation();
    });

    $("#side-nav ul ul").parent().addClass("menu-item-has-children");
    $("#side-nav ul ul").slideUp();
    $("#side-nav ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });

    /************---products_carousel---************/

    $(".cart").on("click", function() {
        $(".cart-dropdown").slideToggle();
    });

    /************---products_carousel---************/

    $(".products_carousel").owlCarousel({
        margin: 30,
        "items": 3,
        "nav": true,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": false,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 3000,
        "loop": true,
        "dots": false,
        "responsive": {
            "0": {
                "items": 1
            },
            "480": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        },
    });

    /************---blog_carousel---************/

    $(".blog_carousel").owlCarousel({
        margin: 30,
        "items": 3,
        "autoPlay": true,
        "nav": true,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 3000,
        "loop": true,
        "dots": false,
        "responsive": {
            "0": {
                "items": 1
            },
            "480": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        },
    });

    /************---brand_carousel---************/

    $(".brand_carousel").owlCarousel({
        margin: 30,
        "items": 5,
        "autoPlay": true,
        "nav": false,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 4000,
        "loop": true,
        "dots": false,
        "responsive": {
            "0": {
                "items": 2
            },
            "480": {
                "items": 3
            },
            "768": {
                "items": 4
            },
            "1200": {
                "items": 6
            }
        },
    });

    /************---testimonials_carousel---************/

    $(".testimonials_carousel").owlCarousel({
        "items": 3,
        "autoPlay": true,
        "nav": false,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 3000,
        "loop": true,
        "dots": true,
        "responsive": {
            "0": {
                "items": 1
            },
            "480": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        },
    });

    /************---products_single---************/

    $(".products_single").owlCarousel({
        margin: 50,
        "items": 3,
        "autoPlay": true,
        "nav": true,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 4000,
        "loop": true,
        "dots": true,
        "responsive": {
            "0": {
                "items": 1
            },
            "480": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        },
    });

    /************---category_carousel---************/

    $(".category_carousel").owlCarousel({
        "items": 3,
        "autoPlay": true,
        "nav": false,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 4000,
        "loop": true,
        "dots": true,
        "responsive": {
            "0": {
                "items": 1
            },
            "480": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        },
    });

    /************---category_carousel---************/

    $(".products_carousel2").owlCarousel({
        "items": 3,
        "autoPlay": true,
        "nav": false,
        "navigationText": [""],
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [980, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [479, 1],
        "pagination": true,
        "autoHeight": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "autoplaySpeed": 4000,
        "loop": true,
        "dots": false,
        "responsive": {
            "0": {
                "items": 1
            },
            "480": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        },
    });

    /************---Back To Top---***************/

    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 1400,
        $back_to_top = $('.top-btn');

    //hide or show the "back to top" link

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, scroll_top_duration);
    });

    /************---Tabs---************/

    $('#myTab a').on('click', function(e) {
        e.preventDefault()
        $(this).tab('show')
    });

    /*  ==========================================
                Increment & Decrement
        ========================================== */

    var incrementPlus;
    var incrementMinus;

    var buttonPlus = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");

    var incrementPlus = buttonPlus.on('click',function() {
        var $n = $(this)
            .parent(".button-container")
            .parent(".container")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.on('click',function() {
        var $n = $(this)
            .parent(".button-container")
            .parent(".container")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });

    /*  ==========================================
                counterUp
        ========================================== */

        //Fact Counter + Text Count
    if($('.count-box').length){
        $('.count-box').appear(function(){

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        },{accY: 0});
    }


    /*  ==========================================
                Accordion
        ========================================== */

    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };
                });
            });
        });

    };


});