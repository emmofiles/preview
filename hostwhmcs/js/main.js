/*

[MatRoz Core Stylesheet]

Project: MatRoz - Material Design Agency and Business Template
Version: 1.1
Author : themelooks.com

*/

(function ($) {
	"use strict"; // this function is executed in strict mode
	
	$(document).ready(function () {
		/* ------------------------------------------------------------------------- *
		 * SCOPE VARIABLES
		 * ------------------------------------------------------------------------- */
		var wn = $(window);

		/* ------------------------------------------------------------------------- *
		 * CUSTOM BACKGROUND IMAGE
		 * ------------------------------------------------------------------------- */
        $('[data-bg-path]').each(function () {
            var imgValue = $(this).data('bg-path');
            $(this).css('background-image', 'url(' + imgValue + ')');
        });
		
        /* ------------------------------------------------------------------------- *
         * BACKGROUND IMAGE
         * ------------------------------------------------------------------------- */
        var $bgImg = $('[data-bg-img]'),
            $bgImgT;
        
        $bgImg.each(function () {
            $bgImgT = $(this);
            $bgImgT.css('background-image', 'url('+ $bgImgT.data('bg-img') +')').removeAttr('data-bg-img').addClass('bg--img');
        });

        /* ------------------------------------------------------------------------- *
         * BUTTON RIPPLE EFFECT
         * ------------------------------------------------------------------------- */
        var $btnRipple = $('.btn--ripple'),
            $btnRippleInk, btnRippleH, btnRippleX, btnRippleY;

        $btnRipple.on('mouseenter', function (e) {
            var $t = $(this);

            if( $t.find(".btn--ripple-ink").length === 0) {
                $t.prepend("<span class='btn--ripple-ink'></span>");
            }
                 
            $btnRippleInk = $t.find(".btn--ripple-ink");
            $btnRippleInk.removeClass("btn--ripple-animate");
             
            if( !$btnRippleInk.height() && !$btnRippleInk.width() ) {
                btnRippleH = Math.max($t.outerWidth(), $t.outerHeight());
                $btnRippleInk.css({height: btnRippleH, width: btnRippleH});
            }
             
            btnRippleX = e.pageX - $t.offset().left - $btnRippleInk.width() / 2;
            btnRippleY = e.pageY - $t.offset().top - $btnRippleInk.height() / 2;
             
            $btnRippleInk.css({top: btnRippleY + 'px', left: btnRippleX + 'px'}).addClass("btn--ripple-animate");
        });
        
        /* ------------------------------------------------------------------------- *
         * TOGGLE CLASS ON SCROLL
         * ------------------------------------------------------------------------- */
        var tClass = function (pos, $el, value) {
            return wn.scrollTop() > pos ? $el.addClass(value) : $el.removeClass(value);
        };
        
        /* ------------------------------------------------------------------------- *
         * SCROLL EVENTS
         * ------------------------------------------------------------------------- */
        wn.on('scroll', function () {
            /* HEADER STICKY */
            tClass(0, $hEl, 'sticky'); // TOGGLE CLASS ON SCROLL
        });
        
        /* ------------------------------------------------------------------------- *
         * HEADER STICKY
         * ------------------------------------------------------------------------- */
        var $hEl = $('#header');
        
        tClass(0, $hEl, 'sticky');

		/* ------------------------------------------------------------------------- *
		 * BACK TO TOP BUTTON
		 * ------------------------------------------------------------------------- */
        var backToTop = $('#backToTop')
        ,   backToTopBtn = $('#backToTop button')
        ,   backToTopShow = function () {
                if ( wn.scrollTop() > 1 ) {
                    backToTop.addClass('show');
                } else {
                    backToTop.removeClass('show');
                }
            };
        
        backToTopBtn.on('click', function() {
            $("html, body").animate({scrollTop: 0}, 500);
        });
		
		/* ------------------------------------------------------------------------- *
		 * EXECUTE FUNCTIONS ON SCROLL
		 * ------------------------------------------------------------------------- */
        wn.on('scroll', function () {
            /* BACK TO TOP BUTTON */
            backToTopShow();
        });
		
		/* ------------------------------------------------------------------------- *
		 * SCROLL TO
		 * ------------------------------------------------------------------------- */
		var $scrollToEl = $('.ScrollTo');
		
		$scrollToEl.on('click', function () {
			var attr = $(this).attr('href');
			
			$('html,body').animate({
                scrollTop: $(attr).offset().top
            }, 700);

			return false;
		});
        
        /* ------------------------------------------------------------------------- *
		 * FORM VALIDATION
		 * ------------------------------------------------------------------------- */
		if ( $('#subscribeForm').length ) {
			$('#subscribeForm').validate({
				rules: {
					EMAIL: {
						required: true,
						email: true
					}
				},
				errorPlacement: function (error, element) {
					return true;
				}
			});
		}
        
		if ( $('#contactForm').length ) {
			$('#contactForm').validate({
				rules: {
					contactName: "required",
					contactEmail: {
						required: true,
						email: true
					},
					contactMessage: "required"
				},
				errorPlacement: function (error, element) {
					return true;
				},
				submitHandler: function () {
					$('.contact-form-status').show().html('<div class="alert alert-success"  role="alert">Thanks! Your message has been sent.</div>').delay(1000).fadeOut("slow");
				}
			});
		}
        
        var postCommentForm = $('#postCommentForm');
        if ( postCommentForm.length ) {
            postCommentForm.validate({
				rules: {
                    commenterName: "required",
                    commenterComments: "required",
					commenterEmail: {
						required: true,
						email: true
					}
				},
				errorPlacement: function (error, element) {
					return true;
				}
			});
        }
	
        /* ------------------------------------------------------------------------- *
         * MAP
         * ------------------------------------------------------------------------- */
        var map, marker, myLatLng;

        function initMap() {
            myLatLng = {lat: 23.790546, lng: 90.375583};

            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 16,
                scrollwheel: false,
                disableDefaultUI: true,
                zoomControl: true
            });

            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true
            });
        }

        if ( $("#map").length ) {
			initMap();
        }

        $('.map-toggle-btn').on('click', function () {
            var $this = $(this);

            $this.toggleClass('opened');
        });
		
		/* ------------------------------------------------------------------------- *
		 * TWITTER FEED
		 * ------------------------------------------------------------------------- */
        var tweetsContainer = $('#tweets');
        if ( tweetsContainer.length ) {
            var config1 = {
                "id": tweetsContainer.data('twitter-id'),
                "domId": 'tweets',
                "maxTweets": 1,
                showTime: false,
                showUser: false,
                "showInteraction": false
            };
            
            twitterFetcher.fetch(config1);
        }
        
        var tweets2Container = $('#tweets2');
        if ( tweets2Container.length ) {
            var config2 = {
                "id": tweetsContainer.data('twitter-id'),
                "domId": 'tweets2',
                "maxTweets": 3,
                showTime: false,
                showUser: false,
                "showInteraction": false
            };
            
            twitterFetcher.fetch(config2);
        }
        
        /* ------------------------------------------------------------------------- *
         * BANNER
         * ------------------------------------------------------------------------- */
        var $banner = $('#banner');

        $banner.css('padding-top', $hEl.children('.header--navbar').height() / 2);

        var $bSlider = $('.BannerSlider');

        if ( $bSlider.length ) {
            $bSlider.bxSlider();
        }
	});
    
    $(window).load(function () {
		/* ------------------------------------------------------------------------- *
		 * PRE-LOADER
		 * ------------------------------------------------------------------------- */
        var $bBgAnimate = $('.banner--bg-animate');

		$("#preloader").fadeOut('slow', function () {
            $bBgAnimate.animate({
                'top': 0
            }, 500);
        });
    });
})(jQuery);