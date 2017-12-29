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
	  					For Owl-Carousel js
	  	-------------------------------------------------------------------*/
	  	/*-----------Team Slider-----------*/
	    var team = $('.team-slider');
		    team.owlCarousel({
		    loop:true,
		    margin: 20,
		    dots:true,
		    autoplay:true,
		    smartSpeed:1000,
		    autoplayTimeout:4000,
		     responsive:{
				 0:{
		            items:1
		        },
		        480:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        992:{
		            items:3
		        },
		       1100:{
		            items:3
		        }
		    }
    	});

	    /*-----------Partner Slider-----------*/
    	var partner = $('.partner-slider');
	    partner.owlCarousel({
	        items: 6,
	        margin: 30,
	        loop: true,
	        autoplay: true,
	        stagePadding: 0,
	        dots: true,
	        smartSpeed: 800,
	             responsive:{
				 0:{
		            items:2
		        },
		        480:{
		            items:2
		        },
		        768:{
		            items:6
		        },
		        992:{
		            items:6
		        },
		       1100:{
		            items:6
	        }
	    }
	    });

	    /*-----------Testimonial Slider-----------*/
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
	    var client = $('.client-image');
	    client.owlCarousel({
	        center: true,
	        items: 3,
	        loop: true,
	        autoplay: true,
	        dots: true,
	        margin: 15,
	        smartSpeed: 700,
	        responsive: {
	            600: {
	                items: 3
	            }
	        }
	    });
	    testmonials.on(' translate.owl.carousel', function (property) {
	        client.find('.owl-dot:eq(' + property.page.index + ')').click();
	    });
	    client.on(' translate.owl.carousel', function (property) {
	        testmonials.find('.owl-dot:eq(' + property.page.index + ')').click();
	    });

	    /*-------------------------------------------------------------------
	  					For Counter up
	  	-------------------------------------------------------------------*/ 
	    $('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});

	    /*-------------------------------------------------------------------
	  					For Image Pop Up
	  	-------------------------------------------------------------------*/ 
	    var magnifPopup = function () {
            $('.image-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();
	    
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
	  					For Preloader js
	  	-------------------------------------------------------------------*/
	  	$('.preloader').fadeOut('slow');
	   
})(jQuery);