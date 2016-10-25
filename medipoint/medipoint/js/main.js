(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();

/*----------------------------
 Product Items added
------------------------------ */
$('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  }); 
/*----------------------------
 owl active
------------------------------ */  
  $("#service").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [992,2],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
Doctor Section
----------------------------*/
  $(".doctor-section").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [768,2],
	  itemsMobile : [480,1],
  });
/*----------------------------
Related product
----------------------------*/
  $(".related-product").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,3],
	  itemsMobile : [479,1],
  });
 /*---------------------------
 Patient Testimonail
 ----------------------------*/
   $(".patient-testmonial").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  //navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 /*---------------------------
 Online Store
 ----------------------------*/
   $(".online-store").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [992,3],
	  itemsTablet: [768,2],
	  itemsMobile : [480,1],
  });
 /*---------------------------
Client Logo
 ----------------------------*/
   $(".client-logo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
 /*---------------------------
Service Sections
 ----------------------------*/
   $(".service-section").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
 /*---------------------------
About Slider Area
 ----------------------------*/
   $(".about-us-featured-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  

/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
/*--------------------------------
Product Tooltip
--------------------------------*/
$('[data-toggle="tooltip"]').tooltip();

/*-------------------------------
about-counter
---------------------------------*/		  
	$('.about-counter').counterUp({
		delay: 50,
		time: 3000
	});
/*-------------------------------
Activation Parcircle
---------------------------------*/		

	$(".single-skill-circle").percircle();
	
/* Pricing Filtering  */
	$( "#product-range" ).slider({
		range: true,
		min: 0,
		max: 100,
		values: [ 0, 1000 ],
		slide: function( event, ui ) {
		$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "" + $( "#product-range" ).slider( "values", 0 ) +
	" - " + $( "#product-range" ).slider( "values", 1 ) );
	$('#card_form').on('click', function(){
		$('.credit-card-form').slideToggle();
	});
	
/*---------------------
   fancybox
--------------------- */	
	$('.fancybox').fancybox();	
/*---------------------
	accordion
--------------------- */	

	$('#accordion').children('.panel').children('.panel-collapse').each(function(){
		if($(this).hasClass('in')){
			$(this).parent('.panel').children('.panel-heading').addClass('active');
		}
	});
	$('#accordion')
	  .on('show.bs.collapse', function(e) {
		$(e.target).prev('.panel-heading').addClass('active');
	  })
	  .on('hide.bs.collapse', function(e) {
		$(e.target).prev('.panel-heading').removeClass('active');
	  });
	  

/*-------------------------------------
Jquery Fixed Header Menu 
-----------------------------------*/
var s = $("#sticker");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });	  
/* --------------------------------------------------------
FAQ-accordion
* -------------------------------------------------------*/ 
/* $('.panel-heading a').on('click', function() {
$('.panel-default').removeClass('active');
$(this).parents('.panel-default').addClass('active');
}); */

})(jQuery); 