/* global google */

var tpj = jQuery;
var revapi4;
tpj(document).ready(function () {

    "use strict"; // Start of use strict

    if (tpj("#rev_slider_4_1").revolution === undefined) {
        revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
        revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "../revolution/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 4000,
            disableProgressBar: "on",
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                }
                ,
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 1024,
                    style: "uranus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 50,
                    space: 5,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }

    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //navber
    var menuTop = $('.navbar-default').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > menuTop) {
            $('.navbar-default').css({
                position: 'fixed',
                top: '0px'
            });
        } else {
            $('.navbar-default').css({
                position: 'static',
                top: '0px'
            });
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed',
        offset: 100
    });
// Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

//Date Picker
    $("#datepicker").datepicker();
    $("#datepicker2").datepicker();

//Doctor Carousel
    $("#owl-doctor").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        lazyLoad: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });

//Testimonial Carousel
    var owl = $("#owl-testimonial");
    owl.owlCarousel({
        navigation: false,
        singleItem: true,
        transitionStyle: "backSlide"
    });

//tab
    $("div.bhoechie-tab-menu>div.list-group>a").on('click', function (e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

//back to top
    $('body').append('<div id="toTop" class="btn btn-top"><span class="glyphicon glyphicon-chevron-up"></span></div>');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

//google map
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }

});

