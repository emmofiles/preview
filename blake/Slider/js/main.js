
(function($) { "use strict" ;
              
              
/*=========================================================================
        Preloader
=========================================================================*/
$(window).on('load', function() {
    $('body').addClass('loaded');
});
              

/*=========================================================================
        Sticky Header Animation & Scroll To Top
=========================================================================*/
     
        
    $(window).on('scroll', function() {
        
        //var currentScrollPosition = $(window).scrollTop();

        if ($(window).scrollTop() > 50 ) {

            $('body').addClass('scrollActive');

        } else {
            $('body').removeClass('scrollActive');
        }
        
        
        //Scroll To Top
        if ($('body').scrollTop() >= 50) {
            
			// If page is scrolled more than 50px
			$('.scroll-to-top').fadeIn(200);    // Fade in the arrow
            
		} else {
            
			$('.scroll-to-top').fadeOut(200);   // Else fade out the arrow
            
		}
    });
              
 /*=========================================================================
        Scroll Spy
=========================================================================*/
    $('body').scrollspy({
        
        target: '#navbar',
        offset: 80
        
    });

/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
    smoothScroll.init({
		offset: 80
	});
             
/*=========================================================================
        Main Slider
=========================================================================*/
             
    
    $('#main-slider').owlCarousel({
        loop:true,
        autoplay: true,
        animateOut: 'lightSpeedOut',
        animateIn: 'lightSpeedIn',
        items:1,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        nav: true,
        dots: false,
        navText: [ '<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>' ] 
    });
             
/*=========================================================================
        Photo Gallery Carousel
=========================================================================*/
             
    
    $('#photo_gallery').owlCarousel({
        loop:true,
        autoplay: true,
        items:1,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        navText: [ '<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>' ] 
    });
              
             
/*=========================================================================
        Photo Gallery Carousel
=========================================================================*/
             
    
    $('#testimonial_carousel').owlCarousel({
        loop:true,
        autoplay: false,
        items:1,
        smartSpeed: 1000,
        dots: true
    });


/*=========================================================================
        Filter Menu Control
=========================================================================*/
    $('.filter_menu li').on('click', function() {
        
        $('.filter_menu li').removeClass('active');
        $(this).addClass('active');
        
    });
  
       

/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img_popup').venobox(); 
              
              
/*=========================================================================
       AjaxChimp
=========================================================================*/
              
              
        // mailchimp start
    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
              
/*=========================================================================
        Images Loaded & Filterizr Active
=========================================================================*/
    var $container = $('.portfolio_items');
    $container.imagesLoaded( function() {
        $container.filterizr({
            selector: '.portfolio_items'

        });
    });
              
/*=========================================================================
        textrotator
=========================================================================*/
    $(".rotate").textrotator({
      animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 2000 // How many milliseconds until the next word show.
    });
              
/*=========================================================================
       AOS Active
=========================================================================*/
             
    AOS.init({
        easing: 'ease-out-back',
        disable: 'mobile',
        offset: 200,
        duration: 1200,
        delay: 100,
		once: true
    });  
	
/*=========================================================================
        Google Map Settings
=========================================================================*/
    $('#gmap').gmap3({
        
        center:[48.8620722, 2.352047],
        zoom: 4,
        scrollwheel: false
        
      }).marker([
        
        {position:[48.8620722, 2.352047]},
        {address:"86000 Poitiers, France"},
        {address:"66000 Perpignan, France", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
        
      ]).on('click', function (marker) {
        
        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
        
      });
              
/*=========================================================================
         Color Switcher Settings
=========================================================================*/
	  var colorSheets = [
            {
                color: "#eb2226",
                title: "Color Default",
                href: "./css/colors/default.css"
            },
            {
                color: "#a0ce4e",
                title: "Color 2",
                href: "./css/colors/color-2.css"
            },
            {
                color: "#1abc9c",
                title: "Color 3",
                href: "./css/colors/color-3.css"
            },
            {
                color: "#0095eb",
                title: "Color 4",
                href: "./css/colors/color-4.css"
            },
            {
                color: "#ff6600",
                title: "Color 5",
                href: "./css/colors/color-5.css"
            }
        ];

        ColorSwitcher.init(colorSheets);


})(jQuery);
