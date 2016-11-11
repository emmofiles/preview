/* -------------------------------------------------------------------------------- /
Theme Name: CEP
Author: Viki Team
Author URI: http://www.vikitheme.com
Version: 1.0.0
Description: A Beautiful, Professional and Multipurpose Theme Made by Viki Team

	+----------------------------------------------------+
		TABLE OF CONTENTS
	+----------------------------------------------------+
	
	[1]		Page Preloader
	[2]		Animation on Scroll Page
    [3]		Count to
    [4]		Parallax
    [5]	    Sticky Bar
    [6] 	Slider
    [7]		Portfolio
    [8]	    Google Maps
	
/ -------------------------------------------------------------------------------- */

'use strict';

// BEGIN: preloader
var PreLoader = function () {
    var _initInstances = function () {
        $('.animsition').animsition({
            loadingClass: 'loader',
            inDuration: 900,
            outDuration: 500,
            linkElement: 'a:not([target="_blank"]):not([href^="#"])',
        });
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// END: preloader

// BEGIN: animation scroll page
var AnimationScrollPage = function () {
    var _initInstances = function () {
        $('.animation').waypoint(function (direction) {
            $(this).addClass('animation-active');
        }, {
            offset: '100%',
            triggerOnce: true
        });
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// END: animation scroll page

// BEGIN: count to
var CountTo = function () {
    var _initInstances = function () {
        $('.counter').waypoint(function (direction) {
            $(this).countTo();
        }, {
            offset: '100%',
            triggerOnce: true
        });
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// END: count to

// BEGIN: parallax background
var ParallaxBackground = function () {
    var _initInstances = function () {
        $('.vk-parallax').attr('data-stellar-background-ratio', '0.4');
        $.stellar({
            responsive: true,
            horizontalScrolling: false,
        });
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// END: parallax background

// BEGIN: sticky bar
var StickyBar = function () {
    var _initInstances = function () {
        $(".vk-header").stickOnScroll({
            topOffset: 0,
            setParentOnStick: false
        });


        var shrinkHeader = 100;
        var dMin = '70px';
        var dMax = '130px';

        $(window).scroll(function () {
            if ($('.vk-header-transparent').length == 0) {
                if ($('.stickOnScroll-on').length > 0) {
                    $('.vk-content').css('padding-top', $('.vk-header').height() + 'px');
                } else {
                    $('.vk-content').css('padding-top', '0px');

                }
            }

            if ($(window).scrollTop() > shrinkHeader) {
                $('.vk-navbar-mobile ').css('margin-top', dMin);
            } else {
                $('.vk-navbar-mobile ').css('margin-top', dMax);
            }

            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.vk-header').addClass('shrink');
            }
            else {
                $('.vk-header').removeClass('shrink');
            }
        });

        var getCurrentScroll = function () {
            return window.pageYOffset || document.documentElement.scrollTop;
        };
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// END: sticky bar

// BEGIN: slider
var Slider = function () {
    var ShopSlider = function () {
        //shop full slider
        $('.vk-shop-full-slider.vk-slider-for').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , fade: true
            , asNavFor: '.vk-shop-full-slider.vk-slider-nav'
            , prevArrow: '<button class="vk-btn vk-arrow prev"><i class="fa fa-angle-left"></i></button>'
            , nextArrow: '<button class="vk-btn vk-arrow next"><i class="fa fa-angle-right"></i></button>'
        ,
        });
        $('.vk-shop-full-slider.vk-slider-nav').slick({
            slidesToShow: 4
            , slidesToScroll: 1
            , asNavFor: '.vk-shop-full-slider.vk-slider-for'
            , focusOnSelect: true
            , arrows: false
            , infinite: false
        ,
        });

        //shop sidebar slider
        $('.vk-shop-sidebar-slider.vk-slider-for').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , fade: true
            , asNavFor: '.vk-shop-sidebar-slider.vk-slider-nav'
            , prevArrow: '<button class="vk-btn vk-arrow prev"><i class="fa fa-angle-left"></i></button>'
            , nextArrow: '<button class="vk-btn vk-arrow next"><i class="fa fa-angle-right"></i></button>'
        ,
        });
        $('.vk-shop-sidebar-slider.vk-slider-nav').slick({
            slidesToShow: 3
            , slidesToScroll: 1
            , asNavFor: '.vk-shop-sidebar-slider.vk-slider-for'
            , focusOnSelect: true
            , arrows: false
            , infinite: false
        ,
        });

        //portfolio full slider
        $('.vk-portfolio-full-slider.vk-slider-for').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , fade: true
            , asNavFor: '.vk-portfolio-full-slider.vk-slider-nav'
            , prevArrow: '<button class="vk-btn vk-arrow prev"><i class="fa fa-angle-left"></i></button>'
            , nextArrow: '<button class="vk-btn vk-arrow next"><i class="fa fa-angle-right"></i></button>'
        ,
        });
        $('.vk-portfolio-full-slider.vk-slider-nav').slick({
            slidesToShow: 10
            , slidesToScroll: 1
            , asNavFor: '.vk-portfolio-full-slider.vk-slider-for'
            , focusOnSelect: true
            , arrows: false
            , infinite: false
        ,
        });
    };
    var PortfolioSlider = function () {
        //portfolio half slider
        $('.vk-portfolio-half-slider.vk-slider-for').slick({
            slidesToShow: 1
            , slidesToScroll: 1
            , fade: true
            , asNavFor: '.vk-portfolio-half-slider.vk-slider-nav'
            , prevArrow: '<button class="vk-btn vk-arrow prev"><i class="fa fa-angle-left"></i></button>'
            , nextArrow: '<button class="vk-btn vk-arrow next"><i class="fa fa-angle-right"></i></button>'
        ,
        });
        $('.vk-portfolio-half-slider.vk-slider-nav').slick({
            slidesToShow: 6
            , slidesToScroll: 1
            , asNavFor: '.vk-portfolio-half-slider.vk-slider-for'
            , focusOnSelect: true
            , arrows: false
            , infinite: false
        ,
        });

        //porfolio construction slider
        $('.portfolio.vk-p-g3s1.slider').slick({
            slidesToShow: 3
                   , slidesToScroll: 1
                   , dotsClass: 'hidden-xs hidden-sm'
                   , prevArrow: ' <button type="button" class="vk-btn vk-arrow-construct vk-prev"><span><i class="fa fa-chevron-left" aria-hidden="true"></i></span></button>'
                   , nextArrow: ' <button type="button" class="vk-btn vk-arrow-construct vk-next"><span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></button>'
                   , responsive: [{
                       breakpoint: 1024
                       , settings: {
                           slidesToShow: 3
                           , infinite: true
                       }
                   }, {
                       breakpoint: 960
                       , settings: {
                           slidesToShow: 1
                           , dots: true
                       }
                   }, {
                       breakpoint: 300
                       , settings: "unslick" // destroys slick
                   }]
        });
    };
    var TestimonialSlider = function () {
        //testimonial slider default 
        $('.vk-testimonial-default .slider').slick({
            dots: true,
            dotsClass: 'vk-nav-dots list-inline',
            prevArrow: ' <button type="button" class="vk-btn vk-arrow vk-prev"><span><i class="fa fa-chevron-left" aria-hidden="true"></i></span></button>',
            nextArrow: ' <button type="button" class="vk-btn vk-arrow vk-next"><span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></button>',
        });

        //testimonial background slider
        $('.vk-testimonial-bg .slider').slick({
            dots: true,
            dotsClass: 'vk-nav-dots list-inline',
            prevArrow: '<button type="button" class="vk-btn vk-arrow vk-prev"><span><i class="fa fa-angle-left" aria-hidden="true"></i></span></button>',
            nextArrow: '<button type="button" class="vk-btn vk-arrow vk-next"><span><i class="fa fa-angle-right" aria-hidden="true"></i></span></button>',
        });

        //testimonial border slider
        if ($('.testimonial-construction').length > 0) {
            $('.vk-testimonial-border .slider').slick({
                slidesToShow: 2
                    , slidesToScroll: 1
                    , dots: false
                    , dotsClass: 'vk-nav-dots list-inline'
                    , prevArrow: ' <button type="button" class="vk-btn vk-arrow-construct vk-prev"><span><i class="fa fa-chevron-left" aria-hidden="true"></i></span></button>'
                    , nextArrow: ' <button type="button" class="vk-btn vk-arrow-construct vk-next"><span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></button>'
                    , responsive: [{
                        breakpoint: 992
                        , settings: {
                            slidesToShow: 1
                            , arrows: false
                        }
                    }]
            });
        } else {
            $('.vk-testimonial-border .slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                dotsClass: 'vk-nav-dots list-inline',
                prevArrow: ' <button type="button" class="vk-btn vk-arrow vk-prev"><span><i class="fa fa-chevron-left" aria-hidden="true"></i></span></button>',
                nextArrow: ' <button type="button" class="vk-btn vk-arrow vk-next"><span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></button>',
                responsive: [{

                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }

                }]
            });
        }
    };
    var OurTeamSlider = function () {
        //our team slider
        $('.vk-our-team-slider').slick({
            slidesToShow: 4,
            prevArrow: '<button type="button" class="vk-btn vk-arrow vk-prev"><span class="ti-angle-left"></span></button>',
            nextArrow: ' <button type="button" class="vk-btn vk-arrow vk-next"><span class="ti-angle-right"></span></button>',
            responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            }, {

                breakpoint: 900,
                settings: 'unslick',
            }]
        });
    };
    var BrandSlider = function () {
        //brand slider
        $('.vk-brand .slider').slick({
            slidesToShow: 5
           , arrows: false
           , responsive: [{
               breakpoint: 992
               , settings: "unslick" // destroys slick
           }]
        });
    };
    var BannerSlider = function () {
        $('.vk-banner .slider').slick({
            dots: true,
            arrows: false,
            dotsClass: 'vk-nav-dots list-inline',
        });
    };

    var _initInstances = function () {
        ShopSlider();
        PortfolioSlider();
        TestimonialSlider()
        OurTeamSlider();
        BrandSlider();
        BannerSlider();
    };

    //fix position of arrows
    var arrowsTestimonialBackground = function () {
        var numLi = $('.vk-testimonial-bg .vk-nav-dots li').size();
        var widthLi = parseInt($('.vk-testimonial-bg .vk-nav-dots li').css('width'));
        var stdDev = (widthLi * numLi + 5 * (numLi - 1)) / 2 + 20;
        //console.log(stdDev);
        $('.vk-testimonial-bg .vk-next').css('right', 'calc(50% - ' + stdDev + 'px)');
        $('.vk-testimonial-bg .vk-prev').css('left', 'calc(50% - ' + stdDev + 'px)')
    }

    return {
        init: function () {
            _initInstances();
            arrowsTestimonialBackground();
        }
    };
}();
// END: slider

// BEGIN: portfolio
var Portfolio = function () {
    var _initInstances = function () {
        var item = [
            '.vk-p-g4s1',
            '.vk-p-g4s2',
            '.vk-p-g3s1',
            '.vk-p-g3s2',
            '.vk-p-m4s1',
            '.vk-p-m4s2',
            '.vk-p-ms1',
            '.vk-p-ms2',
        ];
        var masonry_item = [
            '.vk-p-ms1',
            '.vk-p-ms2',

        ];
        var grid = item +','+ masonry_item;
        var buttonFilter = '.vk-filter-buttons';

        for (var i = 0; i < masonry_item.length; i++) {
            $(masonry_item[i]).isotope({
                // options...
                itemSelector: '.item',
                masonry: {
                    columnWidth: resizeMasonry(masonry_item[i])
                }
            });
        }

        //Filter portfolio
        if ($('.viki-home-consruction').length == 0) {
            for (var i = 0; i < item.length; i++) {
                if ($(item[i]).length > 0) {
                    $(item[i]).isotope({
                        itemSelector: '.item'
                    });
                }
            };
        }

        //filter items on button click
        $(buttonFilter).on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $(grid).isotope({
                filter: filterValue,
                
            });
        });
    };

    var resizeMasonry = function (selector) {
        var arrayWidth = new Array();
        var arrayHeight = new Array();
        var minHeight = 0;
        var padding = 0;
        var $item = $(selector).find('.item');

        $item.each(function (i, e) {
            arrayWidth[i] = (parseFloat($(this).css('width')) / parseFloat($(this).parent().css('width'))).toFixed(2) * parseFloat($(this).parent().css('width'));
            arrayHeight[i] = $(this).height();
        });
        minHeight = Math.min.apply(Math, arrayHeight);


        $item.each(function (i, e) {
            padding = parseFloat($(this).css('padding'));
            if (i == 3)
                $(this).find('.vk-img-frame').css('height', (minHeight + padding) * 2);
            else
                $(this).find('.vk-img-frame').css('height', minHeight);
        });
        return Math.min.apply(Math, arrayWidth);
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// BEGIN: portfolio

// BEGIN: google maps
var initMap = function () {
    var myCenter = new google.maps.LatLng(20.995497, 105.844357);
    var mapCanvas = document.getElementById("map");
    var mapOptions = { center: myCenter, zoom: 5 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);
};
// END: google maps

// BEGIN: Progress bar
var ProgressBarList = function () {
    var CycleProgress = function () {
        var cycleProgress = [
            '.vk-process-cycle-1',
            '.vk-process-cycle-2',
            '.vk-process-cycle-3',
            '.vk-process-cycle-4'
        ];

        var bar = new Array();
        for (var i = 0; i < cycleProgress.length; i++) {
            if ($(cycleProgress[i]).length > 0) {
                bar[i] = new ProgressBar.Circle(cycleProgress[i], {
                    color: '#df3838',
                    // This has to be the same size as the maximum width to
                    // prevent clipping
                    strokeWidth: 7,
                    trailWidth: 7,
                    trailColor: '#ebebeb',
                    easing: 'easeInOut',
                    duration: 2000,
                    text: {
                        className: 'valuenow',
                        autoStyleContainer: true
                    },
                    from: { color: '#df3838', width: 7 },
                    to: { color: '#df3838', width: 7 },
                    // Set default step function for all animate calls
                    step: function (state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);

                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('0%');
                        } else {
                            circle.setText(value + '%');
                        }

                    }
                });

                bar[i].animate((i + 1) / cycleProgress.length);
            }
            
        }
    };

    var AnimationLineProgress = function () {
        $('.vk-process').find('.vk-process-bar').css('width', 0);
        $('.vk-process').waypoint(function (direction) {
            var process = $(this).find('.vk-process-bar').attr('aria-valuenow');
            $(this).find('.vk-process-bar').delay(1000).css('width', process + '%');
        }, {
            offset: '100%'
            , triggerOnce: true
        });
    };

    var _initInstances = function () {
        CycleProgress();
        AnimationLineProgress();
    };

    return {
        init: function () {
            _initInstances();
        }
    };
}();
// END: Progress bar

$(window).load(function () {
    Portfolio.init();
});

$(document).ready(function () {
    PreLoader.init();
    AnimationScrollPage.init();
    CountTo.init();
    ParallaxBackground.init();
    StickyBar.init();
    Slider.init();
    ProgressBarList.init();
});
