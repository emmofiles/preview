/*-----------------------------------------------------------------------------------------------------

This is main JS file that contains custom Javascript rules used in this template
---------------------------------------------------------------------------------------------------------------------------------
Template Name: "Ruleer"
Version: 1.0 Initial Release
Author: Themesfolio
Copyright: (C) 2018
----------------------------------------------------------------------------------------------------*/
$(function($) {
"use strict";	

$(window).on('scroll load', function() { 

// Preloader
	$(".loader").fadeOut("slow");

// header shrink 
	var header = $('.main_header');
	if ($(this).scrollTop() > 70) {
		header.addClass("fixed");
	}
	else {
		header.removeClass("fixed");
	}

});

// Slider
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 0,
		speed: 500,
		loop: true,
		effect: 'slide',
		autoplay: 5000,
		autoplayDisableOnInteraction: false
	});

// Menu Popup
	$('.toggle').on('click', function() {
		$('.full_popup').toggleClass('active');
	});

	$('.full_popup').on('click', function() {
		$('.full_popup').removeClass('active');
	});

// Text slide //
$("#text_slide").ghosttyper({
	messages: ['initiator','smart'],
	timeWrite: 250,
	timeDelete: 50,
	timePause: 1000
});

//Team Slider
	var owl = $('.team_slider .owl-carousel');
		owl.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 10,
		autoplay:false,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  960: {
			items: 3
		  },
		  1200: {
			items: 3
		  }
		}
	});
	
		
// Portfolio Gallery 
	 $(".fil-btn").on('click', function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

	$('.filter_menu li a').on('click', function(){
    	$('li a.active').removeClass('active');
    	$(this).addClass('active');
	});
    
	
// Magnific Popup
	$('.project_gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
		delegate: 'a', // the selector for gallery item
		type: 'image',
		gallery: {
		  enabled:true
		}
		});
	});

// Reviews Slider
	$('.reviews_slider .owl-carousel').owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		nav: false,
		dots: true,
		autoHeight: true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
	});


//Single Page Nav 
	$('.smooth_scroll').singlePageNav({
		offset: 80,
	});

	
});