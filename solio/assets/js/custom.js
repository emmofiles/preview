$(function($){
	
	"use strict";


	if ( matchMedia( 'only screen and (min-width: 1024px)').matches ){
			$(window).on('load', function() {
				$(".spinner").fadeOut();
				$(".preloader").delay(300).fadeOut("slow");
			})
	}


/*-------------------------------------------
	Screen Fit Initilize
-------------------------------------------*/

	if ( matchMedia( 'only screen and (min-width: 1024px)').matches ){
		function autoResizeDiv(){
			var section = $('.screen-feat-section');
			section.css({"height":window.innerHeight+"px","position":"relative","overflow":"hidden"});
			var verticalAlign =$('.content-center-vertical');
			verticalAlign.css({"height":window.innerHeight+"px","position":"relative"});
		}
		window.onresize = autoResizeDiv;
		autoResizeDiv();
	}

/*-------------------------------------------
		Responsive Expandable Navigation
-------------------------------------------*/
	
	$( ".has-sub-menu" ).append("<button class='plus'>+</button><button class='minus'>-</button>");
	$( ".has-sub-menu > .minus" ).hide();
	if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
		$( ".has-sub-menu > .sub-menu" ).hide();
	}
	
	$('.has-sub-menu > .plus').each(function() {
		$(this).click(function() {
			$(this).parent().children(".sub-menu").slideToggle( "slow", function() {
				$(this).parent().children( ".plus" ).hide();
				$(this).parent().children( ".minus" ).show();
			});
		});
	});
	
	$('.has-sub-menu > .minus').each(function() { 
		$(this).click(function() {
			$(this).parent().children(".sub-menu").slideToggle( "slow", function() {
				$(this).parent().children( ".minus" ).hide();
				$(this).parent().children( ".plus" ).show();
			});
		});
	});
/*-------------------------------------------
		Onpage-nav Initilize
-------------------------------------------*/
	$(".right-menu-list > ul > li > a").on('click', function() {
		$(this).parent().addClass("active");
		$(".right-menu-list > ul > li > a").not(this).parent().removeClass("active");
		var TargetId = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(TargetId).offset().top - 0
		}, 1000, 'swing');
		return false;
	});
/*-------------------------------------------
		Onpage-nav Initilize
-------------------------------------------*/	
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 500) {
			if (!$('#hamburger-menu').hasClass('expand')) {
				$('#hamburger-menu').addClass('expand');
			}
		} else {
			if ($('#hamburger-menu').hasClass('expand')) {
				$('#hamburger-menu').removeClass('expand');
			}
		}
	});
/*-------------------------------------------
		Slide-menu Initilize
-------------------------------------------*/
    $('#nav-toogle').on('click', function() {
        $('.right-full-menu').toggleClass('menu_show');
        return false;
    });
    var McButton = $("#hamburger-menu");
    var McBar1 = McButton.find("b:nth-child(1)");
    var McBar2 = McButton.find("b:nth-child(2)");
    var McBar3 = McButton.find("b:nth-child(3)");
    McButton.on('click',function(){
		$(this).toggleClass("active");

        if (McButton.hasClass("active")) {
            McBar1.velocity({
                top: "50%"
            }, {
                duration: 200,
                easing: "swing"
            });
            McBar3.velocity({
                    top: "50%"
                }, {
                    duration: 200,
                    easing: "swing"
                })
                .velocity({
                    rotateZ: "90deg"
                }, {
                    duration: 800,
                    delay: 200,
                    easing: [500, 20]
                });
            McButton.velocity({
                rotateZ: "135deg"
            }, {
                duration: 800,
                delay: 200,
                easing: [500, 20]
            });
        } else {
            McButton.velocity("reverse");
            McBar3.velocity({
                    rotateZ: "0deg"
                }, {
                    duration: 800,
                    easing: [500, 20]
                })
                .velocity({
                    top: "100%"
                }, {
                    duration: 200,
                    easing: "swing"
                });
            McBar1.velocity("reverse", {
                delay: 800
            });
        }
	});	
	
/*-----------------------------------------------------------
		Fullscreen search Initilize
--------------------------------------------------------------*/	

	$(function () {
		$('#search-icon').on('click', function(event) {
			event.preventDefault();
			$('.search-area').addClass('open');
			$('.search-area > form > input[type="search"]').focus();
		});

		$('.search-area, .search-area button.close').on('click keyup', function(event) {
			if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
				$(this).removeClass('open');
			}
		});

		$('form').submit(function(event) {
			event.preventDefault();
			return false;
		})
	});
/*-----------------------------------------------------------
		Revolution Initilize(1)
--------------------------------------------------------------*/	
	var revapi;	
	revapi = $("#rev_slider_1").revolution({
		sliderType:"standard",
		sliderLayout:"fullscreen",
		
		responsiveLevels:[4096,1280,770,480],
		delay:9000,
		navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:1024,
					style:"uranus",
					hide_onleave:false,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:30,
					v_offset:0,
					space:5,
					tmp:'<span class="tp-bullet-inner"></span>'
				}
			},	
		gridwidth:[1140,930,500,350],
		gridheight:[504,504,500,400]		
	});
	
/*-----------------------------------------------------------
		Revolution Initilize(2)
--------------------------------------------------------------*/	
	var revapi;	
	revapi = $("#rev_slider_2").revolution({
		sliderType:"standard",
		fullScreenOffsetContainer:"#topbar",
		responsiveLevels:[4096,1280,770,480],
		delay:9000,
		navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:1024,
					style:"uranus",
					hide_onleave:false,
					direction:"vertical",
					h_align:"left",
					v_align:"center",
					h_offset:30,
					v_offset:0,
					space:5,
					tmp:'<span class="tp-bullet-inner"></span>'
				}
			},	
		gridwidth:[1140,930,500,300],
		gridheight:[600,504,550,400]		
	});
/*-----------------------------------------------------------
		Revolution Initilize(3)
--------------------------------------------------------------*/	
	var revapi;	
	revapi = $("#rev_slider_3").revolution({
		sliderType:"standard",
		sliderLayout:"fullscreen",
		fullScreenOffsetContainer:"#topbar",
		responsiveLevels:[4096,1280,770,480],
		delay:9000,
		navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:1024,
					style:"uranus",
					hide_onleave:false,
					direction:"vertical",
					h_align:"left",
					v_align:"center",
					h_offset:30,
					v_offset:0,
					space:5,
					tmp:'<span class="tp-bullet-inner"></span>'
				}
			},	
		gridwidth:[1140,930,500,300],
		gridheight:[504,504,550,400]		
	});
	
/*-----------------------------------------------------------
	MagnificPopup Initilize
--------------------------------------------------------------*/
	$('.play-btn').magnificPopup({
		type: 'iframe'
	});
	$.extend(true, $.magnificPopup.defaults, {
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }
        }
    }
	});	
/*-----------------------------------------------------------
		product increment-decremnet Settings
--------------------------------------------------------------*/	
	$(".increase").on('click',function(){
		var qty = parseInt($('#quantity').val());
		qty = qty + 1;
		$('#quantity').val(qty);
	});
	$("#decrease").on('click',function(){
		var qty = parseInt($('#quantity').val());
		if(qty > 1) {
			qty = qty - 1;
		}
		$('#quantity').val(qty);
	});
}(jQuery));