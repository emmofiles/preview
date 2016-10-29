jQuery(document).ready(function ($) {
    'use strict';

    /* =============== Ajax Contact Form ===================== */
    $('form#contactform button').on('click', function () {
	var action = $(this).attr('action');
	var data = 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&comments=' + $('#comments').val() + '&verify=' + $('#verify').val();
	$.ajax({
	    type: 'POST',
	    url: action,
	    data: data,
	    beforeSend: function () {
		$('#submit').attr('disabled', true);
		$('img.loader').fadeIn('slow');
	    },
	    success: function (data) {
		$('#submit').attr('disabled', false);
		$('img.loader').fadeOut('slow');
		$('#message').empty();
		$('#message').html(data);
		$('#message').slideDown('slow');
		if (data.indexOf('success') > 0) {
		    $('#contactform').slideUp('slow');
		}
	    }
	});
	return false;
    });


    /*=================== Responsive Menu ===================*/
    $('.responsive-menu > span.open-menu').on('click', function () {
	$(this).parent().find('.menu-links').toggleClass('slide');
	$('body').toggleClass('move');
	$('.responsive-menu .menu-links > ul li.menu-item-has-children ul').slideUp();
	return false;
    });
    $('.responsive-menu .menu-links > ul li.menu-item-has-children > a').on('click', function () {
	$(this).next('ul').slideToggle();
	return false;
    });
    
    $('.responsive-menu > span.open-menu,.responsive-menu .menu-links > ul li.menu-item-has-children a').on('click', function (e) {
	e.stopPropagation();
	return false;
    });

    /*=================== STICKY HEADER ===================*/
    var header_height = $('header.stick').innerHeight();
    $('.theme-layout').css({
	'margin-top': header_height
    });
    $(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 70) {
	    $('.stick').addClass('sticky');
	} else {
	    $('.stick').removeClass('sticky');
	}
    });




    /*=================== Fixed and Sticky Header ===================*/
    $('.sticky-header').on('click', function () {
	var header_height = $('header').innerHeight();
	$('.theme-layout').css({
	    'margin-top': header_height
	});
	$('header').addClass('stick sticky');
	$('.header-pos a').removeClass('applied');
	$(this).addClass('applied');
	return false;
    });
    $('.fixed-header').on('click', function () {
	$('.theme-layout').css({
	    'margin-top': 0
	});
	$('header').removeClass('stick sticky');
	$('.header-pos a').removeClass('applied');
	$(this).addClass('applied');
	return false;
    });

    /*=================== Wide & Boxed Layout ===================*/
    $('.boxed').on('click', function () {
	$('.theme-layout').addClass('boxed');
	$('body').css('background-image', 'url(images/pattern9.png)');
	$('.layout a').removeClass('applied');
	$(this).addClass('applied');
	return false;
    });
    $('.wide').on('click', function () {
	$('.theme-layout').removeClass('boxed');
	$('body').css('background-image', 'none');
	$('.layout a').removeClass('applied');
	$(this).addClass('applied');
	return false;
    });


    $('.patterns a').on('click', function () {
	$('.theme-layout').addClass('boxed');
	$('.patterns a').removeClass('applied');
	$('.boxed').addClass('applied');
	$('.wide').removeClass('applied');
	$(this).addClass('applied');
	return false;
    });

    $('.bg1').on('click', function () {
	$('.theme-layout').addClass('boxed');
	$('body').css('background-image', 'url(images/pattern1.png)');
	return false;
    });
    $('.bg2').on('click', function () {
	$('body').css('background-image', 'url(images/pattern2.png)');
	return false;
    });
    $('.bg3').on('click', function () {
	$('body').css('background-image', 'url(images/pattern3.png)');
	return false;
    });
    $('.bg4').on('click', function () {
	$('body').css('background-image', 'url(images/pattern4.png)');
	return false;
    });
    $('.bg5').on('click', function () {
	$('body').css('background-image', 'url(images/pattern5.png)');
	return false;
    });


    $('.sidepanel > span').on('click', function () {
	$(this).parent().toggleClass('show');
	return false;
    });


    $('#cp4').colorpicker().on('changeColor', function (ev) {
	jQuery.ajax({
	    url: 'http://wpdigger.com/html/shineblog/css/color/color.css',
	    dataType: 'text',
	    success: function (cssText) {
		jQuery('<style></style>').appendTo('head').html(cssText.replace(/#e23a3e/g, ev.color.toHex()));
	    }
	});
    });
	
	if ($.isFunction($.fn.select2)) {
		$("select").select2();
	}
	if ($.isFunction($.fn.bootstrapNumber)) {
	    $('.products-counter').bootstrapNumber();
	    $('.products-counter2').bootstrapNumber();
	}
	if ($.isFunction($.fn.revolution)) {
		var revapi;
	    revapi = jQuery('.tp-banner').revolution({
			delay: 9000,
			startwidth: 1170,
			startheight: 750,
			hideThumbs: 10,
			fullWidth: "on",
			forceFullWidth: "off"
		    });
	}
	
	if ($.isFunction($.fn.owlCarousel)) {
	 /*=== POST SLIDER ===*/
	    $('.post-slider').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		singleItem: true,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		margin: 0,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	    });

	    /*=== Blog Author Carousel ===*/
	    $('.authors-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		singleItem: true,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: true,
		nav: false,
		margin: 0,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	    });


	    /*=== Instagram Widget ===*/
	    $('.instagram-widget').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		singleItem: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: true,
		nav: false,
		margin: 0,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	    });


	    /*=== Recent Posts Carousel ===*/
	    $('.recent-posts-carousel').owlCarousel({
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: false,
		margin: 0,
		items: 4,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		responsive: {
		    0: {items: 1},
		    480: {items: 2},
		    768: {items: 3},
		    1200: {items: 4},
		}
	    });
		
		/*=== Fancy Post Carousel ===*/
	    $('.fancy-post-carousel').owlCarousel({
		items: 3,
		loop: true,
		smartSpeed: 1000,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		margin: 0,
		autoplayHoverPause: true,
		responsive: {
		    0: {items: 1},
		    480: {items: 2},
		    980: {items: 2},
		    1200: {items: 3}
		}
	    });


	    /*=== Fancy Post Carousel ===*/
	    $('.instagram-carousel').owlCarousel({
		items: 4,
		loop: true,
		smartSpeed: 1000,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: true,
		nav: false,
		margin: 30,
		autoplayHoverPause: true,
		responsive: {
		    0: {items: 1},
		    480: {items: 2},
		    980: {items: 3},
		    1200: {items: 4}
		}
	    });



	    /*=== Blog Author Carousel ===*/
	    $('.authors-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		singleItem: true,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: true,
		nav: false,
		margin: 0,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	    });
		
		/*=== Recent Posts Carousel ===*/
	    $('.latest-news-carousel').owlCarousel({
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		margin: 30,
		items: 3,
		autoplayHoverPause: true,
		responsive: {
		    0: {items: 1},
		    480: {items: 2},
		    767: {items: 2},
		    980: {items: 3},
		    1200: {items: 3}
		}
	    });


	    /*=== Products Carousel ===*/
	    $('.products-carousel').owlCarousel({
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		margin: 30,
		items: 3,
		autoplayHoverPause: true,
		responsive: {
		    0: {items: 1},
		    480: {items: 2},
		    767: {items: 2},
		    980: {items: 3},
		    1200: {items: 3}
		}
	    });

	    /*=== Fashion Models Carousel ===*/
	    $('.models-carousel').owlCarousel({
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: true,
		nav: false,
		margin: 0,
		items: 4,
		autoplayHoverPause: true,
		responsive: {
		    0: {items: 1},
		    480: {items: 2},
		    767: {items: 2},
		    980: {items: 3},
		    1200: {items: 4}
		}
	    });
	}
	
	
});