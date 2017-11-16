$(function () {
	'use strict';

	// page transitions
	$(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    2000,
		outDuration           :    800,
		// linkElement           :   '.animsition-link',
		linkElement           :   'a:not([target="_blank"]):not([href^=#]):not([class*="gallery-item"])',
		loading               :    true,
		loadingParentElement  :   'body', //animsition wrapper element
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
		                          '-webkit-animation-duration',
		                          '-o-animation-duration'
		                        ],
		overlay               :   false,
		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	});	


	// if element visible
	// ---------------------------------
	$.fn.isVisible = function(){
		var st = $(window).scrollTop(),
			wh = $(window).height(),
			tt = $(this).offset().top,
			th = $(this).height(),
			r;
		if(st+wh>=tt && tt+th>=st){r = 1}else{r = 0}
		return r;
	};



	// smooth scroll
	// ---------------------------------
	$('.sscroll').click(function () {
		var ti = $(this).attr('href'),
			tt = $(ti).offset().top-100;
		$('html, body').animate({ scrollTop: tt }, 600);
		return false;
	});



	// scroll to top
	// ---------------------------------
	$(window).scroll(function () {
		var wh = $(window).height(),
			st = $(window).scrollTop();
		if( st >= wh*0.7 ){ $('.to-top').fadeIn(); }else{ $('.to-top').fadeOut() }
	});
	$('.to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 600);	
		return false;	
	});


	// parallax
	$.stellar({
		horizontalScrolling: false,
		responsive:true
	});


	// stellar fix - bg position on load
	if( $('[data-stellar-background-ratio]').length > 0 ){
		setTimeout(function () {
			var st = $(window).scrollTop();
			$(window).scrollTop(st+1);
			setTimeout(function(){
				$(window).scrollTop(st)
			}, 200)
		}, 200);
	};

	if( $('.hero-inner').length ){
		$(window).resize(function () {

			var hh = $('header').height();
			$('.hero-inner').css('top', hh);

			var hi = $('.hero-inner').height()/2;
			$('.side-link').css('top', hh+hi);

		}).resize();
	}


	// MOBILE NAVIGATION
	$('.mob-nav').click(function () {
		$(this).find('i').toggleClass('fa-bars fa-times');
		$('#topmenu').slideToggle();
		return false;
	});

	// side links
	$('.side-link').each(function(){
		var e = $(this);
		var h = Math.round( e.height() );
		if( (h%2)==1 ){
			e.css({ height: '+=1' })
		}
	});

	// map/info button
	$('.map-button').click(function () {
		var text = $(this).text();
		$(this).text( text == "info" ? "map" : "info" );
		$('.contact-info').fadeToggle();
	});



	// Hero slider
	// ---------------------------------
	if( $('.hero-slider').length ){
		$(window).resize(function () {
			$('.hero-slider .slide').height( $('.hero-inner').height() ).width( $('.hero-inner').width() );
		}).resize();

		$('.hero-slider').flexslider({
			animation: "slide",
			pauseOnAction: true,
			animationLoop: true,
			slideshow: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			controlNav: true,
			directionNav: false
		});
	}


	// YT Background
	// ---------------------------------
	$('.ytbg').YTPlayer({
		mute:true,
		showControls: false,
		showYTLogo:false
	});	


	// equal-height columns	
	$('.equal-height [class*="col-"]').matchHeight({
		byRow: false
	});

	// responsive videos
	// ---------------------------------
	$('.video-container').fitVids();

	// image slider
	// ---------------------------------
	$('.img-slider').flexslider({
		animation: "slide",
		smoothHeight: true,
		pauseOnAction: false,
		controlNav: false,
		directionNav: true,
		prevText: "<i class='pe pe-7s-angle-left'></i>",
		nextText: "<i class='pe pe-7s-angle-right'></i>"
	});
	$('.flex-direction-nav a').click(function (ev) {
		ev.stopPropagation();
	});


	// BLOG
	// ---------------------------------
	$(window).load(function(){
		$('.blog').imagesLoaded(function () {
			$('.blog').shuffle({
				"itemSelector": ".post"
			});
			// fix
			setTimeout(function () {
				$('.blog').shuffle('shuffle');
			}, 200);
		});
	});



	// PORTFOLIO
	// ---------------------------------
	$(window).load(function () {
		
		if( $('.portfolio.col-3').length ){
			$('.item').width( 100/3+'%' );
			$('.item.wide, .item.wide-tall').width( 100*2/3+'%' );
		}

		$('.portfolio').shuffle({
			"itemSelector": ".item",
			"delimeter": ','
		});

		// fix
		setTimeout(function () {
			$(window).resize();
		}, 200);

	});


	// spaces between items
	$('.portfolio[data-space]').each(function () {
		var space = $(this).data('space');
		$(this).find('.item-link').css({ 'margin': space });
		$('.portfolio').css({
			'margin-left': -space+'px',
			'margin-right': -space+'px'
		});
	});	

	// FILTER
	$('.filter ul li').click(function () {
		var filter = $(this).data('group');
		$('.portfolio').shuffle('shuffle', filter);
		$('.filter ul li').removeClass('active');
		$(this).addClass('active');
	});



	$(window).load(function () {

		// skills
		// ---------------------------------
		$(window).scroll(function () {
			$('.skill').each(function () {
				if( $(this).isVisible() && !$(this).hasClass('animated') ){
					var p = $(this).find('.skill-bar').data('perc');
					$(this).find('.skill-bar').delay(200).animate({ width: p+'%' });
					$(this).find('.skill-bar span').delay(2000).fadeIn('slow');
					$(this).addClass('animated');
				}
			});		
		});

		// counters
		// ---------------------------------
		$(window).scroll(function () {
			$('.counter-num').each(function () {
				if( $(this).isVisible() && $(this).html() == '' ){
					$(this).countTo({ speed: 2500 });						
				}
			});
		});

		// fix
		// ---------------------------------
		setTimeout(function () {
			$(window).scroll();	
		}, 300);

	});



	// tabs
	// ---------------------------------
	$('.tab-nav li').click(function () {

		if( !$(this).hasClass('active') ){
			var p = $(this).data('tabpanel');
			$(this).parents('.tabs').find('.tab-nav li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.tabs').find('.tab-panels > div').fadeOut(0).removeClass('active');
			$(this).parents('.tabs').find(p).fadeIn().addClass('active');
		}

	});



	// toggles
	// ---------------------------------
	$('.toggle .toggle-title').click(function () {
		$(this).next('.toggle-content').slideToggle(200);
		$(this).parent('.toggle').toggleClass('active');
		return false;
	});



	// IMAGE POPUP
	// ---------------------------------
	// single
	$('.popup-image').magnificPopup({ 
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 300,
		closeOnContentClick: true,
		fixedContentPos: false,
		fixedBgPos: false
	});
	// gallery mode
	$('.gallery-item').magnificPopup({
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		type: 'image'
	});		


	// YOUTUBE, VIMEO, GOOGLE MAPS POPUP
	// ---------------------------------
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		disableOn: 0,
		preloader: false,
		removalDelay: 300,
		fixedContentPos: false
	});

	// GALLERY POPUP
	// ---------------------------------
	// for portfolio
	$('.popup-gallery').magnificPopup({
		delegate: '.filtered a',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
		},
		fixedContentPos: false,
		type: 'image'
	});	
	// single gallery
	$('.popup-single-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			},
			fixedContentPos: false,
			type: 'image'
		});		
	});	



	// AJAX CONTACT FORM
	// ---------------------------------
	$('#contact form').submit(function () {
		var url = $(this).attr('action');
		// get information from contact form
		var name = $('[name=name]').val();
		var email = $('[name=email]').val();
		var message = $('[name=message]').val();

		// send information to contact.php
		$.ajax({
			type: "POST",
			url: url,
			data: { name: name, email: email, message: message },
			success: function (response) {
				// response from contact.php
				$('.contact-message').html(response).slideDown(500);
			},
			error: function () {
				// error message
				$('.contact-message').html('<p class="error">Something went wrong, try again!</p>').slideDown('slow');
			}
		});

		return false;
	});



	// GOOGLE MAP
	// ----------------------------------
	//set your google maps parameters
	$(window).load(function () {
		
		if( $('#google-map').length > 0 ){

			var latitude = 51.5255069,
				longitude = -0.0836207,
				map_zoom = 14;

			//google map custom marker icon 
			var marker_url = 'img/map-marker.png';

			//we define here the style of the map
			var style= [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
				
			//set google map options
			var map_options = {
				center: new google.maps.LatLng(latitude, longitude),
				zoom: map_zoom,
				panControl: false,
				zoomControl: true,
				mapTypeControl: false,
				streetViewControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				styles: style,
			}
			//inizialize the map
			var map = new google.maps.Map(document.getElementById('google-map'), map_options);
			//add a custom marker to the map				
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url,
			});
		}
	});



})
