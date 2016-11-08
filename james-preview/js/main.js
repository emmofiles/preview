(function ($) {
 "use strict";
	
/*--------------------------
     preloader
---------------------------- */	
$(window).on('load',function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});		
	
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	
/*----------------------------
Page Scroll
------------------------------ */

	jQuery('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top - 55
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	}); 
	
/*---------------------
 TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
	


})(jQuery); 