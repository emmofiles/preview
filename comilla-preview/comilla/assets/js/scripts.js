/*
Author       : Syed Ekram.
Template Name: Comilla - Digital Agency One Page Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	
		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
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
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

		/*START MIXITUP JS*/
		  $('.work_all_item').mixItUp();
		  // jQuery Lightbox
		     $('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		    });	
		/*END MIXITUP JS*/
		
		/*START SLIDER JS*/
		$('.carousel').carousel({
			interval:5000,
			pause:'false',
		});
		/*END SLIDER JS*/
		
		/*START TESTIMONIAL JS*/
			$('.testi-slider').flexslider({
				animation: "slide",
				direction: "fade",
				prevText: "<i class='fa fa-long-arrow-left'></i>",
				nextText: "<i class='fa fa-long-arrow-right'></i>"
			});
		/*END TESTIMONIAL JS*/

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/		

		/*START GOOGLE MAP*/
		 function initialize() {
		  var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(40.7127837, -74.00594130000002)
		  };
		  var map = new google.maps.Map(document.getElementById('map'),
			  mapOptions);
		  var marker = new google.maps.Marker({
			position: map.getCenter(),
			icon: 'assets/img/map_pin.png',
			map: map
		  });
		}
		google.maps.event.addDomListener(window, 'load', initialize); 
		/*END GOOGLE MAP*/
	}); 	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

