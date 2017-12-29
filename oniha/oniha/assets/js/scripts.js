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
			var $portfolio = $('.portfolio-project').isotope({
			});
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
	  					For Wow Initial
	  	-------------------------------------------------------------------*/
        new WOW().init();

        /*-------------------------------------------------------------------
	  					For Owl Carousel
	  	-------------------------------------------------------------------*/
	    /*-----------About Author Slider-----------*/
        var about = $('.about-author');
	    about.owlCarousel({
	        items: 1,
	        margin: 15,
	        loop: true,
	        autoplay: true,
	        stagePadding: 0,
	        dots: true,
	        smartSpeed: 700
	    });

	    /*-----------Testimonial Slider-----------*/
        var client = $('.client-say');
	    client.owlCarousel({
	        items: 1,
	        margin: 15,
	        loop: true,
	        autoplay: true,
	        stagePadding: 0,
	        dots: true,
	        smartSpeed: 700
	    });
	    
	    /*-------------------------------------------------------------------
	  					For Vegas BG
	  	-------------------------------------------------------------------*/
	    $(document).on('ready', function() {
            $('.zoom-slider-bg').vegas({
                slides: [{
                        src: 'assets/images/banner.jpg'
                    },
                    {
                        src: 'assets/images/banner2.jpg'
                    },
                    {
                        src: 'assets/images/banner3.jpg'
                    }
                ],
                transition: 'fade',
                animation: 'random',
                transitionDuration: 6000,
                delay: 5000,
                timer: false
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
	    $('.scroll-top').on('click',function (event){
	        $('html,body').animate({
	            scrollTop:0
	        },1000);
	    });

	    /*-------------------------------------------------------------------
	  					For Preloader js
	  	-------------------------------------------------------------------*/
	  	$('.preloader').fadeOut('slow');
	   
})(jQuery);