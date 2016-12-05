/*=======================================================================================
									CUSTOM THEME JS
==========================================================================================*/		



/* =================== Load Function =================== */
$(window).load(function() {
	"use strict";
	/* ----------- Page Loader ----------- */
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1000).animate({ top: '-100%' }, "slow");
});
/* =================== Load Function Ends =================== */


/* =================== Ready Function =================== */
$(document).ready(function() {
		 
 /* ----------- Scroll Navigation ----------- */
$(function() {
	"use strict";
	$('.scroll').bind('click', function(event) {
		var $anchor = $(this);
		var headerH = $('#navigation-menu').outerHeight();
			$('html, body').stop().animate({					
				scrollTop : $($anchor.attr('href')).offset().top  + 1 + "px"
			}, 1200, 'easeInOutExpo');		
		event.preventDefault();
	});
	/* ========== Background image height equal to the browser height.==========*/
	$('header').css({ 'height': $(window).height() });
  	 $(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
	});
});
	 /* ----------- Animation ----------- */
	$(function() {
		"use strict";
		$('.animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');
			if ( !elem.hasClass('visible') ) {
				var animationDelay = elem.data('animation-delay');
				if ( animationDelay ) {			
					setTimeout(function(){
					 elem.addClass( animation + " visible" );
					}, animationDelay);				
				} else {
					elem.addClass( animation + " visible" );
				}
			}
		});
	});
	 
});

