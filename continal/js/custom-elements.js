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

	//Skills Counter 
	
	jQuery(document).ready(function($){
        $('.counter-skills').counterUp({
            delay: 100,
            time: 3000
        });
    });

    //Accordion

    $(".accordion").smk_Accordion({
        closeAble: true 
    });

    //Responsive Tabs

    $('#continal-tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('#continal-tabs2').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('#continal-tabs3').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('#continal-tabs4').responsiveTabs({
        startCollapsed: 'accordion'
    });
	
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

})(jQuery);