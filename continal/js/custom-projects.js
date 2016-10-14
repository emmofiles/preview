(function($) { "use strict";

	
	//Header Scroll
	var $header = $("header"),
    $clone = $header.before($header.clone().addClass("clone"));
	function init() {
        window.addEventListener('scroll', function(e){
			
			var mq = window.matchMedia( "(min-width: 992px)" );
			
			if (mq.matches) {
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 200,
                header = document.querySelector("header.clone");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }

            }
			}

            
        });
    }
    window.onload = init();
	
	// Menu Mobile
	
	$('.btn-toggle').on('click',function(){

		var parent = $(this).parents('header');
		if(parent.find('nav').hasClass('menu-mobile')){
            parent.find('nav').removeClass('menu-mobile');
        }else{
            parent.find('nav').addClass('menu-mobile');
        }

        if(parent.find('.top-info').hasClass('menu-mobile')){
            parent.find('.top-info').removeClass('menu-mobile');
        }else{
            parent.find('.top-info').addClass('menu-mobile');
        }

	});
	
	$( '.arrow-parent' ).on( 'click', function() {

		if($(this).siblings('ul').hasClass('show')){
            $(this).siblings('ul').removeClass('show');
        }else{
            $(this).siblings('ul').addClass('show');
        }
		
	} );
  	
	// BACK TO TOP BUTTON

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 300) {
	      $('#back-to-top').fadeIn('slow');
	    } else {
	      $('#back-to-top').fadeOut('slow');
	    }
	  });
	$('#back-to-top').on( 'click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

	//Project Slider

	$(".project-slider").owlCarousel({
        navigation: true, 
        slideSpeed : 600,
        autoPlay : 6000,
        singleItem:true,
        pagination: false,
        navigationText: [
	      "<i class='fa fa-chevron-left'></i>",
	      "<i class='fa fa-chevron-right'></i>"
	    ],
    });

	//Colorbox Project

	$(".item-image").colorbox({rel:'item-image', maxWidth:'95%', maxHeight:'95%', transition: 'elastic'});
	
})(jQuery);