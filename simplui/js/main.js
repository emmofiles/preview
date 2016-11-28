(function($) {
    "use strict";
    /*=================== home slider ===================*/
    $('#home-slider-one').sliderPro({
        autoplayDelay: 7000,
        autoplayOnHover: 'none',
        width: 2000,
        height: 700,
        fade: true,
        arrows: true,
        aspectRatio: -1,
        fullScreen: true,
        shuffle: false,
        smallSize: 500,
        mediumSize: 1000,
        largeSize: 2000,
        autoplay: true,
        buttons: true,
		autoScaleLayers: false,		
        forceSize: 'fullWidth',
		autoHeight: false,
		imageScaleMode: 'cover',
		breakpoints: {
				1024: {
					aspectRatio: 1.5				 
				},
				900: {
					aspectRatio: 1.5				 
				},
				650: {
					aspectRatio: 1				 
				}
			}
    });
    
    
    /*=================== Bootstrap native tool tip(must be at the top-near position) ===================*/
    $('[data-toggle="tooltip"]').tooltip();
    /*=================== magnific pop portfolio home ===================*/
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
    /*=================== Responsive Main Top Menu ===================*/
    $(document).on('click', '.rett .dropdown-menu', function(e) {
        e.stopPropagation();
    });
	
    // on hover dropdown	
	if ($(window).width() > 760) {
        $('ul.nav li.dropdown', this).on("mouseenter", function() {			
            $('.dropdown-menu', this).stop(true, true).fadeIn(500);			
        });
		$('ul.nav li.dropdown', this).on("mouseleave", function() {           
			$('.dropdown-menu', this).stop(true, true).fadeOut(500);
        });
    }	
	
    /*=================== owlCarousel ===================*/    
    $(".testimonials-slider").owlCarousel({
        autoPlay: true,
        singleItem: true,
        navigation: true,
        navigationText: ["<span><i class=\"lnr lnr-chevron-left\"></i></span>", "<span><i class=\"lnr lnr-chevron-right\"></i></span>"]
    });
    $(".core-features-slider").owlCarousel({
        autoPlay: 2000, //Set AutoPlay to 2 seconds
        singleItem: true,
        navigation: false,
        navigationText: ["<span><i class=\"lnr lnr-chevron-left\"></i></span>", "<span><i class=\"lnr lnr-chevron-right\"></i></span>"]
    });    
    /*=================== scroll to top ===================*/
     $(".scrollToTop").hide();
	 $(window).on("scroll", function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $(".scrollToTop").on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
	
	/*=================== on scroll element animation // will not work when window width is less than 400px ===================*/
	    if ($( window ).width() < 990) {			
			var $foo = $('#css3-animate-it-css');
			$foo.attr("href","");
			var $foop = $('#css3-animate-it-js'); 
			$foop.attr("src","");		
    }

	/*=================== preloader ===================*/
    //<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
        // $('body').delay(150).css({'overflow':'visible'});
    });
    //]]>
    /*=================== auto counter up ===================*/		
    $(document).ready(function($) {
        $('.counter').counterUp({
            delay: 20,
            time: 3000
        });
    });  	
})(jQuery);