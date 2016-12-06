/***************************************************************************************************************
||||||||||||||||||||||||        CUSTOM SCRIPT FOR INDUSTRY PRESS            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Revolution slider
02. Sticky header
03. Fact counter
04. accrodion
05. BrandCarousel
06. SelectDropdown
07. ScrollToTop 
08. Vertical slider 
09. Contact info Carousel
10. Project Layout
11. Cart Touch Spin
12. PriceFilter
13. Cart touch spin
14. Single product carousel 
15. Related project carousel
16. Fancybox activator
17. ContactFormValidation
18. Scoll to target

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/


"use strict";


// RevolutionSliderActiver
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1170,
			gridheight:580 
		});
	};
}


//  Main menu
function mainmenu() {
 //Submenu Dropdown Toggle
 if ($('.main-menu li.dropdown ul').length) {
  $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

  //Dropdown Button
  $('.main-menu li.dropdown .dropdown-btn').on('click', function() {
   $(this).prev('ul').slideToggle(500);
  });
 }

}


//  Fact counter
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}

}


// testimonial Slider
function testimonialSlider() {
    if ($('.testimonials-item').length) {
        $('.testimonials-item').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: true,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 1000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1001: {
                    items: 3
                }
            }
        })
    }
}


// Brand Carousel
function brandCarousel () {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop:true,
            margin:20,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });    		
    }
}



// Select menu 
function selectDropdown () {
  if($(".selectmenu").length) {
    $( ".selectmenu" ).selectmenu();
  };
}


//  Mainmenu Sticky
function stickyMainmenu() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}


//  scoll to Top
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}


//vertical slider 
function horizenl(){
    $('.bxslider').bxSlider({
	   mode: 'vertical',
	   slideMargin: 5
     
        
	});
}


//Accordion Box
function accordion() {
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.accord-btn', function() {

            if($(this).hasClass('active')!==true){
            $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);	
            }
        });	
    }
}


// Contact info Carousel
function contactInfo() {
    if ($('.contact-info-carousel').length) {
        $('.contact-info-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };
    
}


// Project
function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}




// Cart Touch Spin
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}



//  Price Filter
function priceFilter () {
	if($('.range-slider-price').length){

		var priceRange = document.getElementById('range-slider-price');

		noUiSlider.create(priceRange, {
			start: [ 60, 100 ],
			limit: 200,
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 30,
				'max': 200
			}
		});

		var limitFieldMin = document.getElementById('min-value-rangeslider');
		var limitFieldMax = document.getElementById('max-value-rangeslider');
		
		priceRange.noUiSlider.on('update', function( values, handle ){
			(handle ? limitFieldMax : limitFieldMin).value = values[handle];
		});
	};
}



// 17. single product carousel
function singleProduct () {
    
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });


}



// Related project 
function relproject () {
	if ($('.related-product-items').length) {
		$('.related-product-items').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplay: true,
		    autoplayTimeout: 5000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        },
		        1200:{
		            items:3
		        }
		    }
		});
	}
}



// ProjectWork fancybox activator 
function projectWork() {
    var galleryFcb = $('.fancybox');
    if (galleryFcb.length) {
        galleryFcb.fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }
}





// 7. contact form validation
function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				mail: {
					required: true,
					email: true
				},
				phnumber: {
					required: true
				},
				message: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$(form).parent('div').append(response);
					$(form).find('input[type="text"]').val('');
					$(form).find('input[type="email"]').val('');
					$(form).find('textarea').val('');
				});
				return false;
			}
		});
	}
}








// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        revolutionSliderActiver ();
        mainmenu ();
        CounterNumberChanger ();
        testimonialSlider ();
        brandCarousel ();
        selectDropdown ();
        scrollToTop ();
        horizenl ();
        accordion ();
        contactInfo ();
        cartTouchSpin ();
        priceFilter ();
        relproject ();
        projectWork ();
        contactFormValidation ();

        
	})(jQuery);
});



// window scroll event
jQuery(window).on('scroll', function() {   
  (function ($) {
    stickyMainmenu ();
      
      
  })(jQuery); 
});


// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        galleryMasonaryLayout();
        singleProduct();
        
    })(jQuery);
});



