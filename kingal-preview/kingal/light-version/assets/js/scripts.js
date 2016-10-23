/*
Author       : Syed Ekram.
Template Name: Kingal - Responsive Business Template.
Version      : 1.0
*/

(function($) {
	"use strict";
	
	jQuery(document).ready(function($){
	
		/*preloader js*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*End preloader js*/

		/*Menu js*/
			$('a[href*=#]').bind("click", function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
		/*End Menu js*/
	
		/*progress-bar*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*End progress-bar*/
		
		/* Countdown js*/
		$('#counter_timer').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* End Countdown js */

		/*testimonial carousel js*/
		$('.carousel').carousel({
			interval:5000,
			pause:"false",
		});
		/*End testimonial carousel js*/
		
		/*Contact Map*/
		var contact = {"lat":"40.7127837", "lon":"-74.00594130000002"}; //Change a map coordinate here!
		try {
			$('.map').gmap3({
				action: 'addMarker',
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 5
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);
		} catch(err) {

		}
	   /*End Contact Map*/
	});	
	
	/*wow animation js*/
	    new WOW().init();	
	  /*End wow animation js*/
	  
})(jQuery);

