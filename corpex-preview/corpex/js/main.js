/*

  Template Name: Corpex - Corporate HTML Template 
  Template URI: http://hastech.com
  Description: This is Corporate template
  Author: hastech
  Author URI: http://hastech.com
  Version: 1.0
  NOTE: If you have any note put here. 

*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky
	02. MeanMenu 
	03. Wow 
	04. scrollUp 
	05.	Portfolio  masonry
	06. CounterUp
	07. Owl testimonial
	08. Cx-brand-wrap
	09. Slider-owl-active
	10. Video
	11. Smoth Scroll
	12. Mobile menu
	13. Parallax
	15. Background Toutube Video
	16. Testimonial area
    
    ---------------------------------------
    [ End table content ]
   --------------------------------------*/
    (function($) {
        'use strict';

    /*-------------------------------------------
    01. Sticky
    --------------------------------------------- */    
    $('#header').headroom()

    /*-------------------------------------------
    02. MeanMenu 
    --------------------------------------------- */
    $('nav#dropdown').meanmenu();

    /*-------------------------------------------
    03. Wow 
    --------------------------------------------- */
    new WOW().init();
    /*-------------------------------------------
    04.	scrollUp
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*-------------------------------------------
    05.	Portfolio  masonry 
    --------------------------------------------- */ 
    var $container = $('.cx-portfolio-inner');
      $('.cx-portfolio-wrap').imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.pro-item',
            filter: '*',
            transitionDuration: '0.7s',
            masonry: {
                columnWidth: '.pro-item:not(.wide)'
            }
          });
      });
      // filter items on button click
      $('#cx-filters').on('click', 'li', function () {
          var filterValue = $(this).attr('data-filter');
          $container.isotope({ filter: filterValue });
      });
      
      // change is-checked class on buttons
      $('#cx-filters li').on('click', function () {
          $('#cx-filters li').removeClass('is-checked');
          $(this).addClass('is-checked');
          var selector = $(this).attr('data-filter');
          $container.isotope({ filter: selector });
          return false;
      });
    /*-----------------------------
    06. CounterUp
    -----------------------------*/
      $('.count').counterUp({
        delay: 60,
        time: 3000
      });
    /*-----------------------------
    07. Owl testimonial
    -----------------------------*/
      $('.testimonial-wrap').owlCarousel({
        items : 1,
        loop:true
      });
    /*-----------------------------
    08. Cx-brand-wrap
    -----------------------------*/
      $('.cx-brand-wrap').owlCarousel({
        items : 5,
        loop:true,
        dots:false,
        responsive : {
        0 : {
            items:1,
        },
        480 : {
            items:2,
        },
        768 : {
            items:3,
        },
        992 : {
            items:4,
        },
        1167 : {
            items:5,
        },
        1366 : {
            items:5,
        },
        1400 : {
            items:5,
        }
    }
      });
    /*-----------------------------
    09. Slider-owl-active
    -----------------------------*/
      $('.slider-owl-active').owlCarousel({
        items : 1,
        loop:true,
        dots:true,
        nav:true,
        navText: ['<i class="icofont icofont-long-arrow-left"></i>','<i class="icofont icofont-long-arrow-right"></i>'],
      });

    /*-----------------------------
    10. Video
    -----------------------------*/
      $('.play-1').yu2fvl();

    /*-----------------------------
    11. Smoth Scroll
    -----------------------------*/
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
      
    /*-----------------------------
    12. Mobile menu
    -----------------------------*/
    $('.mobile-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu-area',
      meanScreenWidth: "767",
      meanRevealPosition: "right",
    });
    
    /*-----------------------------
    13. Parallax
    -----------------------------*/
    $('#cx-test-paralax').parallax("50%", 0.4);
    $('.cx-paralax').parallax("50%", 0.8);
    
  	/*----------------------------
    14. Back-top
    ------------------------------ */ 
    // hide #back-top first
    $('#back-top').on('hide', function(){});
    // fade in #back-top
    $(function () {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
          $('#back-top').fadeIn();
        } else {
          $('#back-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-top').on('click', function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });

    /*---------------------------------
    15. Background Toutube Video 
    ------------------------------------*/
     $('.youtube-bg').YTPlayer({
     });
    
    /*---------------------------------
    16. Testimonial area
    ------------------------------------*/    
    $('.testimonial-area').stellar({
      scrollProperty: 'transform'
    });


})(jQuery);
