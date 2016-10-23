/* ---------------------
	CUSTOM JS DOCUMENT 
--------------------- 


	TABLE OF CONTENTS
	---------------------------
	 01. Page Loader 
	 02. Goto Top
     03. Navigation
     04. Menu Toggle
	 05. Testimonial
	 06. Our Team
	 07. Clients
     08. App Screenshots
     09. join Us Content Slide
	 10. CounterUp
	 11. Animation WOW JS
	 12. Skills Chart

*/
( function($) {
  'use strict';

/*------------------------------------------*/
/*           /* 01.Page Loader /*
/*------------------------------------------*/    

    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
    });
    
/*------------------------------------------*/
/*           /* 02. Goto Top /*
/*------------------------------------------*/

$(document).ready(function() {
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 900);
    });
}
 });

/*------------------------------------------*/
/*           /* 03. Navigation /*
/*------------------------------------------*/    

   // jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 0) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// page scroll//

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    
/*------------------------------------------*/
/*           /* 04. Menu Mobile Toggle /*
/*------------------------------------------*/

    $(document).ready(function() {    
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
    });   
 });
    
// -------------------   Owl Slide  ------------------
    
/*------------------------------------------*/
/*           /* 05. Testimonial /*
/*------------------------------------------*/    

     $(document).ready(function() {                                
      $("#Testimonial").owlCarousel({
        navigation : true,
        singleItem : true,
        autoPlay: true,
        pagination:false
       });   
    });

/*------------------------------------------*/
/*           /* 06. Our Team /*
/*------------------------------------------*/    

    $(document).ready(function() {
      $("#our-teams").owlCarousel({    
        autoPlay: true,
        items :3,
        itemsDesktop : [1200,3],
        itemsDesktopSmall : [991,3],
        itemsTablet: [768,2],
        itemsMobile : [480,1],
        slideSpeed : 900,
        navigation:true,
        pagination:false,
      });
    });
    
    
    
/*------------------------------------------*/
/*           /* 07. Clients /*
/*------------------------------------------*/        

   $(document).ready(function() {
      $("#clients").owlCarousel({
        autoPlay: 3000,
        items :5,
        itemsDesktop : [1200,4],
        itemsDesktopSmall : [991,3],
        itemsTablet: [768,2],
        itemsMobile : [480,1],
        slideSpeed : 900,
        navigation:true,
        pagination:false,            
      });
    });
   
/*------------------------------------------*/
/*           /* 08. App Screenshots /*
/*------------------------------------------*/           

    $(document).ready(function() {
      $("#owl-screenshots").owlCarousel({                                 
        autoPlay: 3000,
        items :3,
        itemsDesktop : [1200,3],
        itemsDesktopSmall : [991,3],
        itemsTablet: [768,2],
        itemsMobile : [480,1],
        slideSpeed : 900,
        navigation:true,
        pagination: false,
        navigationText : true        
      });
    });

        
/*------------------------------------------*/
/*           /* 09. join Us Content Slide  /*
/*------------------------------------------*/    

   $(document).ready(function() {
   $('.join-us .carousel').carousel({
      navigation : true,
      singleItem : true,
        autoPlay: true,
        pagination:false
     
    });
 });

/*------------------------------------------*/
/*           /* 10. CounterUp  /*
/*------------------------------------------*/

$(document).ready(function( $ ) {
        if($("span.count").length > 0){    
            $('span.count').counterUp({
             delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });
        }
    });

/*------------------------------------------*/
/*           /* 11. Animation WOW JS  /*
/*------------------------------------------*/
    
new WOW().init();

/*------------------------------------------*/
/*           /* 12. Skills Chart  /*
/*------------------------------------------*/

    $(document).ready(function($) {
    //var windowBottom = $(window).height();
    var index=0;
    $(document).scroll(function(){
        var top = $('#skills').height()-$(window).scrollTop();
        console.log(top);
        if(top<-800){
            if(index===0){                
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
                }
        index++;
        }
    });
    //console.log(nagativeValue)
    });

})(jQuery);// JavaScript Document