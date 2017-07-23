/*****************************************
    Template Name: Smart Folio - HTML5 Portfolio Template
    Description: This is html5 Portfolio Template
    Author: WpOcean
    Version: 1.0
******************************************/
/******************************************
[  Table of contents  ]
*****************************************
    01. Tooltip
	02. Isotope Portfolio 
    03. Navigation switch
	04. Magnific Popup Image 
	05. Wow js 
	06. Counter Up
	07. OwlCarousel Testimonial
    08. ScrollUp
	09. smooth scrolling
	10. preloader
	11. Youtube Video BG 
	
	
 
*****************************************
[ End table content ]
******************************************/

(function ($) {
    "use strict";
    
    
    // 1. Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    // 2. Isotope Portfolio 
    $('.grid').imagesLoaded(function () {

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });



    });

    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // 3. Navigation switch

    $('.menu-switch').on('click', function (event) {
        $('.mainmenu').toggleClass('active');
        $(this).toggleClass('active');
        event.preventDefault();
    });


    // 4. Magnific Popup Image 
    $('.portfolio-popup').magnificPopup({
        type: 'image',
        removalDelay: 400
    });

    // 5. Wow js
    new WOW().init();

    // 6. Counter Up
    $('.counter').counterUp();

    // 7. OwlCarousel Testimonial
    $(".client-testimonial-list").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1 // In this configuration 1 is enabled from 0px up to 479px screen size 
            },

            480: {
                items: 1, // from 480 to 677 
            },

            678: {
                items: 1, // from this breakpoint 678 to 959
            },

            960: {
                items: 2, // from this breakpoint 960 to 1199
            }
        }
    });

    // 8. ScrollUp
    $.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // 9. smooth scrolling
    $(function () {
        $(".main-menu ul li a, .mainmenu ul li a").bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    //10. preloader
    $(window).on('load', function () {
        $('.preloader-wave-effect').fadeOut();
        $('#preloader-wrapper').delay(150).fadeOut('slow');
    });

    //11. Youtube Video BG
    $('#video-background').YTPlayer({
        videoId: 'jssO8-5qmag',
        fitToBackground: false,
        mute: true,
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            origin: window.location.origin
        }
    });
    
    

}(jQuery));