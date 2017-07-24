'use strict'; 

 $(window).on('load', function() {

    /*---------------------
      Preloader
    --------------------- */
 $('#preloader').delay(350).fadeOut('slow');


  /*--------------------------
 MixItUp
---------------------------- */

 $('.portfolio').mixItUp({  
      animation: {
      effects: 'fade translateZ(-100px)',
      duration: 1000,
    }
  });



 });


    
$(document).ready( function() { 

  /*--------------------------
 One Page Nav
---------------------------- */

 $('a.smoothScroll').on('click', function(event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
             scrollTop: ($($anchor.attr('href')).offset().top - 40)
         },1200, 'easeInOutExpo');
         event.preventDefault();
     });


  /*--------------------------
Responsive Mobile Menu
---------------------------- */
$('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });
    

  /*--------------------------
Sticky Menu
---------------------------- */
    
$(window).scroll(function() {
    if ($(document).scrollTop() > 400) {
        $('nav').addClass('sticky');
        $("nav").slideDown(300);
    } else {
        $('nav').removeClass('sticky');
    }
});
 

   jQuery(window).resize(function() {
    var viewportWidth = jQuery(window).width();
    if (viewportWidth > 767) {
        jQuery('nav ul.nav-menu').show();
    };
    
  });

  /*--------------------------
HOME PAGE HEIGHT
---------------------------- */
   
  function Init() {
        $('.home').css({"height": $(window).height() + "px"});
    }
      Init(); $(window).resize(Init);

    

/*--------------------------
 scrollUp
---------------------------- */ 
  $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
  


/*--------------------------
 JParticles
---------------------------- */

new JParticles.particle('#particles-js',{
    range: 0,
    num: 18,
    maxR: 20,
    minR: 10,
    maxSpeed: 3
});

	 
/*--------------------------
 Wow Animation
---------------------------- */

  new WOW({ mobile: false }).init();

/*--------------------------
 CounterUp
---------------------------- */

  $('.counter').counterUp({
                delay: 10,
                time: 1000
            });  
    
}); 

// document ready end 


/*--------------------------
 Contact-form
---------------------------- */


(function ($) {
 "use strict";
 
  $('.contact-form').on('submit',function(event){
          event.preventDefault();
        $("#submit").val('SENDING...');
         var that = $(this),
         contents = that.serialize();
         console.log(contents);
         $.ajax({
           url: 'mail.php',
           dataType: 'json',
           type: 'post',
           data: contents,
           success:function(data){
                if(data.success){

				           $("#submit").val('DONE');
                }else{
                  $("#submit").val('FALIED');
                }
           }
         });

    return false;});
  
  })(jQuery); 