(function ($) {
    "use strict";

	  	/*-------------------------------------------------------------------
	  					For Sticky Menu
	  	-------------------------------------------------------------------*/
	  	$(window).on('scroll',function(){
		   if($(this).scrollTop() > 100){
		   $('header').addClass('sticky');
		}
		else{
		   $('header').removeClass('sticky');
		}
		});
		$(document).on('click', '.navbar-collapse.in', function (e) {
	        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
	            $(this).collapse('hide');
	        }
	    });

	  	/*-------------------------------------------------------------------
	  					For Parallax Js
	  	-------------------------------------------------------------------*/
	  	$('.banner-area').parallax('50%','.3');

	    /*-------------------------------------------------------------------
	  					For Scroll Spy
	  	-------------------------------------------------------------------*/
		$("a").on('click', function(event) {
	      if (this.hash !== "") {
	        event.preventDefault();
	        var hash = this.hash;$('html, body').animate({
	          scrollTop: $(hash).offset().top
	        }, 1000, function(){
	          window.location.hash = hash;
	        });
	      }
	    });

		/*-------------------------------------------------------------------
	  					For Isotope Sorting Js
	  	-------------------------------------------------------------------*/
	  	$(window).on('load', function() {
			var $portfolio = $('.portfolio-project').isotope({});
			$('.portfolio-menu').on('click', 'li', function () {
	            var filterValue = $(this).attr('data-filter');
	            $portfolio.isotope({
	                filter: filterValue
	            });
	        });
	    });

		$('.portfolio-menu li').on('click', function () {
	        $(this).siblings('li').removeClass('active');
	        $(this).addClass('active');
	        event.preventDefault();
    	});

        /*-------------------------------------------------------------------
	  					For Counter up
	  	-------------------------------------------------------------------*/ 
	    $('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});

        /*-------------------------------------------------------------------
	  					For Wow Initial
	  	-------------------------------------------------------------------*/
        new WOW().init();

	    /*--------------Client Slider--------------------------------------*/
        var testmonials = $('.client-say');
	    testmonials.owlCarousel({
	        items: 1,
	        margin: 15,
	        loop: true,
	        autoplay: true,
	        stagePadding: 0,
	        dots: true,
	        smartSpeed: 700
	    });

	    /*-------------------------------------------------------------------
	  					For Video Background
	  	-------------------------------------------------------------------*/
	    var bgVideo = $('.background-video'),
	        videoId = bgVideo.attr('data-video');
	    	bgVideo.each(function () {
	        $(this).YTPlayer({
	            fitToBackground: true,
	            videoId: videoId,
	            pauseOnScroll: false
	        });
	    });

	    /*-------------------------------------------------------------------
	  					For Scroll Top
	  	-------------------------------------------------------------------*/
	  	$(window).on('scroll',function(){
	    if($(this).scrollTop() > 600){
	        $('.scroll-top').removeClass('not-visible');
	    }
	    else{
	        $('.scroll-top').addClass('not-visible');
	    }
		});
	    $('.scroll-top').on('click',function(event){
	        $('html,body').animate({
	            scrollTop:0
	        },1000);
	    });

	    /*-------------------------------------------------------------------
	  					For Preloader js
	  	-------------------------------------------------------------------*/
	  	$('.preloader').fadeOut('slow');
	   
})(jQuery);