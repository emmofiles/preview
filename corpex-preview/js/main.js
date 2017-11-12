/*

Template:  Avon - Creative agency template
Author: 3star
Version: 1
Design and Developed by: BM Rafiq 
NOTE: If you have any note put here. 

*/
/*================================================
[  Table of contents  ]
================================================
  01. jQuery MeanMenu
  02. wow js active
  03. scrollUp jquery active 

 
======================================
[ End table content ]
======================================*/


(function($) {
    'use strict';



    /*-------------------------------------------
      01. Responsive menu
    --------------------------------------------- */

    $('.navbar-toggle').on('click', function() {
        $('body').addClass('mobil-menu-activted');
    });
    $('ul#ns-res-nav li a').on('click', function() {
        $('.navbar-collapse').removeClass('in');
    });

    /*-------------------------------------------
      02. wow js active
    --------------------------------------------- */
    new WOW().init();


    /*-------------------------------------------
      03. scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });



  /*--------------------------
    jQuery smooth scroll
  ---------------------------- */ 
  $('li.smoot-menu a').on('click', function (event) {
    var $anchor = $(this);
    var headerH = '75';
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1200, 'easeInOutExpo');

    event.preventDefault();
  });

/*--------------------------
  jQuery scroll Nav
---------------------------- */
  var top_offset = $('.header-area').height() - 0;  // get height of fixed navbar

  $('.primary-menu').onePageNav({
      scrollOffset: 75
  }); 
  
/*--------------------------
  jQuery sticky
---------------------------- */
  $('.header-sticky').sticky({
    topSpacing: 0
  });




    $('.tlt').textillate({ 
      in: { effect: 'rollIn' },
      selector: '.texts',
      loop: true,

    });


})(jQuery);
