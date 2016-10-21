window.onload=function(){
	/* $('.circleGraphic1').circleGraphic();
	$('.circleGraphic2').circleGraphic({'color':'#E53238'});
	$('.circleGraphic3').circleGraphic({'color':'#c1fc2f'}); */

	/* $('.circleGraphic1').circleGraphic({'color':'#00bcd4'});
	$('.circleGraphic2').circleGraphic({'color':'#00bcd4'});
	$('.circleGraphic3').circleGraphic({'color':'#00bcd4'});
	$('.circleGraphic4').circleGraphic({'color':'#00bcd4'}); */

}
jQuery(document).ready(function () {
    
	"use strict";
    
     $(".button-collapse").sideNav();
		//Flat Button Active Class
	$(".flat-single-button a").click(function(){
	  $(".flat-single-button a").removeClass("flat-button-active");
	  $(".flat-single-button a").removeClass("hover");
	  $(this).addClass("flat-button-active");
	 
   });	
   //Flatting Button Active Class
	$(".flatting-button ul li a i").click(function(){
	  $(".flatting-button ul li a i").removeClass("flatting-button-active");
	  $(".flatting-button ul li a i").removeClass("hover");
	  $(this).addClass("flatting-button-active");
	 
   });
   //Material Select Input
    $('select').material_select();
	//Owl Carousel one
    $('.textimonial-one').owlCarousel({
        autoPlay: false,
        pagination: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
    });
	//Owl Carousel Service Two
    $('.service-test-two').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
        items: 2,
        itemsDesktop: [1024, 2],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	
	//Owl Home Three Textimonial
    $('.home-three-textimonial .testimonial-two').owlCarousel({
        autoPlay: false,
        pagination: true,
        items: 2,
        itemsDesktop: [1024, 2],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	//Owl Home Three Textimonial
    $('.home-five-tetimonial .testimonial-two').owlCarousel({
        autoPlay: false,
        pagination: true,
        items: 2,
        itemsDesktop: [1024, 2],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	//Owl Carousel two
    $('.testimonial-two').owlCarousel({
        autoPlay: false,
        pagination: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	//Owl Carousel Three
    $('.testimonial-three').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Three
    $('.home-four-testimonial .testimonial-two').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1
		
    });
	//Owl Carousel Three
    $('.home-four-twitter-feed .single-twite').owlCarousel({
        autoPlay: true,
        pagination: false,
		navigation: false,
		items:1,
		 itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1
		
    });
	//Owl Carousel Three
    $('.testimonial-four').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	
	//Owl Carousel Team One
    $('.team-one').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: false,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1,

		
    });
	//Owl Carousel Team One
    $('.home-six-creator .team-two').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: false,
        items: 3,
        itemsDesktop: [1024, 3],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
		
    }); 
	$('.team-two').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 3,
        itemsDesktop: [1024, 3],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
		
    });
	
	//Owl Carousel Team Three
    $('.team-three').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
        items: 4,
        itemsDesktop: [1024, 3],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	//Owl Carousel Banner One
    $('.banner-one').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	
	
	//Owl Carousel Banner One
    $('.banner-four').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-long-arrow-left'></i>",
		"<i class='fa fa-long-arrow-right'></i>"
		]
    });
	
		// Accordion One
		/* $('.collapsible-header').on('click', function(event){
    	event.preventDefault();
    	
    	var accordion = $(this);
    	var accordionContent = accordion.next('.collapsible-body');
    	var accordionToggleIcon = $(this);
    	
    	
    	accordion.toggleClass("open");
    
    	accordionContent.slideToggle(500);
    	

    	if (accordion.hasClass("open")) {
    		accordionToggleIcon.html("<i class='fa fa-angle-down'></i>");
    	} else {
    		accordionToggleIcon.html("<i class='fa fa-angle-up'></i>");
    	}
    }); */
	//Owl Carousel Client One
    $('.home-three-client .client-one').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
		slideBy: 1,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 2],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });

	//Owl Carousel Client One
    $('.client-one').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
		slideBy: 1,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	//Owl Carousel Client Three
    $('.client-three').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Client Three
    $('.client-four').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 5,
        itemsDesktop: [1024, 5],
        itemsDesktopSmall: [768, 3],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Slider One
    $('.slider-one').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Slider Two
    $('.slider-two').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Slider four
    $('.slider-four').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Slider Five
    $('.slider-five').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Slider six
    $('.slider-six').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Slider six
    $('.blog-mationary-slider').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });	
	//Portfolio Slider
    $('.protfolio-one-carosel').owlCarousel({
        autoPlay: true,
        pagination: false,
		navigation: false,
        items: 2,
        itemsDesktop: [1024, 2],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Portfolio Slider
    $('.portfolio-slider-two').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
        items: 2,
        itemsDesktop: [1024, 2],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Portfolio Slider
    $('.portfolio-area .testimonial').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Portfolio Slider
    $('.protfolio-three-top-image').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Team One
    $('.team-about-carousel').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
		
    });


	//Owl Carousel Product Thumbs
    $('.shop-detailed-body .next-item').owlCarousel({
        autoPlay: true,
        pagination: false,
		navigation: false,
        items: 3,
        itemsDesktop: [1024, 3],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1
    });
	
	//Owl Carousel App Benefit
    $('.home-one-banner .banner-three').owlCarousel({
        autoPlay: false,
        pagination: true,
		navigation: false,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1
		
    });
	//Owl Carousel App Benefit
    $('.home-six-banner .banner-three').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
		
    });
	//Owl Carousel App Benefit
    $('.app-benefit').owlCarousel({
        autoPlay: true,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	//Owl Carousel Screen Short
    $('.home-one-screenshort .all-shreenshort').owlCarousel({
        autoPlay: true,
        pagination: true,
		navigation: false,
        items: 4,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [768, 3],
        itemsTablet: [650, 2],
        itemsMobile: 1
    });	
	//Owl Carousel Screen Short
    $('.home-one-blog .blog-slide').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		]
    });
	
	
	
	/* $('#portfolio-product-grid').mixItUp(); */
	
	
	
	if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".img-effect-portfolio").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img-effect-portfolio").hasClass("hover")) {
                    $(this).closest(".img-effect-portfolio").removeClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".img-effect-portfolio").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }
		 /* $(".home-seven-accordion .toggle-two .collapsible-header").click(function(){
			 $(".home-seven-accordion .toggle-two li.active .collapsible-body").css({"transform":"scale(1.1)"})
		 }) */
	
	
	// Home Seven Progress bar
	/* var myCircle = Circles.create({
	  id:                  'circles-1',
	  radius:              106,
	  value:               85,
	  maxValue:            100,
	  width:               2,
	  text:                function(value){return value + '%';},
	  colors:              ['#bdbdbd', '#00bcd4'],
	  duration:            800,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});		
	var myCircle = Circles.create({
	  id:                  'circles-2',
	  radius:              106,
	  value:               70,
	  maxValue:            100,
	  width:               2,
	  text:                function(value){return value + '%';},
	  colors:              ['#bdbdbd', '#00bcd4'],
	  duration:            800,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});
	var myCircle = Circles.create({
	  id:                  'circles-3',
	  radius:              106,
	  value:               95,
	  maxValue:            100,
	  width:               2,
	  text:                function(value){return value + '%';},
	  colors:              ['#bdbdbd', '#00bcd4'],
	  duration:            800,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});
	var myCircle = Circles.create({
	  id:                  'circles-4',
	  radius:              106,
	  value:               90,
	  maxValue:            100,
	  width:               2,
	  text:                function(value){return value + '%';},
	  colors:              ['#bdbdbd', '#00bcd4'],
	  duration:            800,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});
 */

	
	
	
}); //Document Ready Function End

	
(function($){
	//Accordion Toggle
	
	//Accordion One
	$('.accordion-one .collapsible .collapsible-header').on('click',function(){
		$(this).find('.fa').toggleClass('fa-angle-up fa-angle-down');
	});
	//Accordion Two
	$('.accordion-two .collapsible .collapsible-header').on('click',function(){
		$(this).find('.icon-right').toggleClass('fa-minus-circle fa-plus-circle');
	});
	//Accordion Three
	$('.accordion-three .collapsible .collapsible-header').on('click',function(){
		$(this).find('.fa').toggleClass('fa-minus-circle fa-plus-circle');
	});
	//Toggle One
	$('.toggle-one .collapsible .collapsible-header').on('click',function(){
		$(this).find('.fa').toggleClass('fa-angle-up fa-angle-down');
	});
	//Toggle Two
	$('.toggle-two .collapsible .collapsible-header').on('click',function(){
		$(this).find('.icon-right').toggleClass('fa-angle-up fa-angle-down');
	});
	//Togle Three
	
	/* $('.toggle-three .collapsible .collapsible-header').on('click',function(){
		
		$(this).find('.fa-plus-circle').addClass('fa-minus-circle').removeClass('fa-plus-circle');
		
	}); */
	$('.toggle-three .collapsible .collapsible-header').find('.fa').removeClass('fa-minus-circle');
	$('.toggle-three .collapsible .collapsible-header.active').find('.fa').addClass('fa-minus-circle').removeClass('fa-plus-circle');
	
	/* $('.toggle-three .collapsible .collapsible-header').on('click',function(){
		$(this).find('.fa').toggleClass('fa-minus-circle fa-plus-circle');
	}); */

	//Shop Accordion Faq
	/* $('.shop-faq-body .toggle-two .collapsible .collapsible-header').on('click',function(){
		$(this).find('i.icon-right').toggleClass('fa-minus fa-plus');
		$(this).find('i.icon-right').removeClass('fa-angle-up');
		$(this).find('i.icon-right').removeClass('fa-angle-down');
	}); */
	//Parallax
    $('.parallax').parallax();
		//	Shop List sort categories
	/* $(".shop-serch-categories .list-view a i").click(function(){
		 $(".shop-serch-categories .list-view a i").removeClass("active");
		 $(this).addClass("active");
				 
	}); */
   // end of document ready
   //prallax Page Video
   /*  $('#prallax-play-botton').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=124qhYkJG2w'
        },
        type: 'iframe'
    }); */
	
})(jQuery); // end of jQuery name space
 