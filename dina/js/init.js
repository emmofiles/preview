/*
 * Dina - Restaurant, Bar, Cafe, Food HTML Template
 *
 * Author: www.matchthemes.com
 *
 */
 
(function($) {
    "use strict";
	
	//home slider
	
	$('.home-slider').vegas({
		timer:false, 
		delay:4000,
		transition:'fade',
        slides: [{src:'images/slider/slider-1.jpg'},{src:'images/slider/slider-2.jpg'},{src:'images/slider/slider-3.jpg'},]
    });
	
	//end home slider
	
	
	//hamburger menu
	$('.nav-button-holder').on('click', function(e){
			
			e.preventDefault();
			
			if($(this).is('.inactive')) {
				
				$(this).toggleClass('inactive active');
				$('body').addClass('has-active-menu');
				$('.nav-button').addClass('active');
				$('.mask-nav-2, #header-2').addClass('is-active');
				
				}
			
			else if($(this).is('.active')) {
				
				$(this).toggleClass('inactive active');
				$('body').removeClass('has-active-menu');
				$('.nav-button').removeClass('active');
     			$('.mask-nav-2, #header-2').removeClass('is-active');
				
			}
																	  
			});
	
	$('.menu-nav-2 > li.menu-item-has-children > a').on('click', function(e){
			
			e.preventDefault();
			e.stopPropagation();
			
			if ( $(this).parent().hasClass('menu-open') )
			
			$(this).parent().removeClass('menu-open');
			
			else {
			
			$('.menu-nav-2').find('.menu-item-has-children').removeClass('menu-open');
			
			$(this).parent().addClass('menu-open');
			
			}
																  
			});
	
	// end hamburger menu
	
// accordion menu

$('.menu-section').hide();

$('h4.menu-title-section').on('click',function(){

  if( $(this).next().is(':hidden') ) {
  $('h4.menu-title-section').removeClass('active').next().slideUp(); 
$(this).toggleClass('active').next().slideDown();
  } else {
   $('h4.menu-title-section').removeClass('active').next().slideUp();
 }
  return false; 
 });

// end accordion menu

//fluid width videos

  $(".single-post-content, .custom-page-template, .post-video").fitVids({customSelector: "iframe[src^='https://w.soundcloud.com']"});
  
  $(".menu-post-img a[rel^='prettyPhoto'], .gallery-post a[rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: false,
						slideshow: 5000
					});
   $(".gallery-post a[rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: true,
						slideshow: 5000
					});
  
  $(".scrollup").hide();
     $(window).on('scroll', function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });

$("a.scrolltop[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').stop().animate({scrollTop:0}, 1000, 'easeOutExpo');

});
  
})(jQuery);