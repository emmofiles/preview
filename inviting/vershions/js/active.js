jQuery(document).ready(function ($) {


	//countdown timer

	$('.count_down').countdown('2017/01/01', function (event) {
		$(this).html(event.strftime('<div class="single_count"><h1>%D</h1><p>Days</p></div><div class="single_count"><h1>%H</h1><p>Hour</p></div><div class="single_count"><h1>%M</h1><p>Minute</p></div><div class="single_count"><h1>%S</h1><p>Secound</p></div>'));
	});
	
    
    // 404 page header height
    
    var eFooter = $('.error footer').height();
    var windowHeight = $(window).height();
    var eHeaderHeight = (windowHeight - eFooter);
    $('.error header').css('height', eHeaderHeight);
    
    
    
    
    // venobox 
    
	if ($.fn.venobox) {
        $('.venobox').venobox({
            framewidth: '800px'
        });
	}
    
    
	//home content padding

	var header = $('header').height();
	var homeArea = $('.home_area').height();
	var paddingHomeContent = (header - homeArea) / 2;

	$('.home_area').css({
		paddingTop: paddingHomeContent + 'px',
		paddingBottom: paddingHomeContent + 'px'
	});
  
	//search box
	
	$('.search_wrep').click(function () {
		$('.search_wrep').toggleClass('active');
		$('.search_fomr').toggleClass('active');
		$('.search_fomr form span').toggleClass('active');
	});
	$('.search_fomr form span').click(function () {
		$('#nav > li > i').toggleClass('active');
		$('.search_fomr').toggleClass('active');
		$('.search_fomr form span').toggleClass('active');
	});


	//speaker slider
	
	$('.speaker_slider').owlCarousel({
		margin: 75,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></>', '<i class="fa fa-angle-right"></>'],
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			768: {
				items: 2,
				margin: 75
			},
			991: {
				items: 3,
				margin: 30
			},
			1201: {
				items: 3,
				margin: 75
			}
		}
	});
	
	
	//testimonial slider

	$('.testimonial_slider').owlCarousel({
		items: 2,
		margin: 30,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></>', '<i class="fa fa-angle-right"></>'],
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			991: {
				items: 2
			}
		}
	});

	
	//faq collapse/accordion
	
	var dd = $('dd');
	dd.filter(':nth-child(n+4)').hide();
	$('dl.accordion').on('click', 'dt', function () {
		$(this)
			.addClass('active')
			.siblings('dt')
			.removeClass('active');

		$(this)
			.next()
			.slideDown(200)
			.siblings('dd')
			.slideUp(300);

	});
    
    
	//counter up

	if ($.fn.counterUp) {

		$('.counter').counterUp();

	}

	
	//speaker page slider (speaker slider 2 & 3)
	
	$('.speaker_slider2').slick({
		prevArrow: '<i class="speaker_prev fa fa-angle-left"> <i>',
		nextArrow: '<i class="speaker_next fa fa-angle-right"> <i>',
		asNavFor: '.speaker_slider3',

		slidesToShow: 1,
		slidesToScroll: 1,
	});


	$('.speaker_slider3').slick({
		prevArrow: '<i class="speaker_prev two fa fa-angle-left"> <i>',
		nextArrow: '<i class="speaker_next two fa fa-angle-right"> <i>',
		slidesToShow: 6,
		asNavFor: '.speaker_slider2',
		slidesToScroll: 1,
		focusOnSelect: true,
		variableWidth: true,
	});



	//speaker content padding
	
	var singleSpeakerImg = $('.single_speaker_img').height();
	var speakerContent = $('.speaker_content').height();
	var paddingSpeakerContent = (singleSpeakerImg - speakerContent) / 2;

	$('.speaker_content').css({
		paddingTop: paddingSpeakerContent + 'px',
		paddingBottom: paddingSpeakerContent + 'px'
	});



	//owl-carouserl

	var slider = $(".about_slider");
	slider.on('initialized.owl.carousel', function (e) {
		idx = e.item.index;
		$('.owl-item').eq(idx + 1).addClass('middle');
		$('.owl-item').eq(idx).addClass('left');
		$('.owl-item').eq(idx + 2).addClass('right');
	});
	slider.owlCarousel({
		loop: true,
        smartSpeed: 450,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0 : {
				items: 1,
                autoplay: true
			},
			992 : {
				items : 3
			}
		}
	});
	slider.on('translate.owl.carousel', function (e) {
		idx = e.item.index;
		$('.owl-item.middle').removeClass('middle');
		$('.owl-item.left').removeClass('left');
		$('.owl-item.right').removeClass('right');
		$('.owl-item').eq(idx + 1).addClass('middle');
		$('.owl-item').eq(idx).addClass('left');
		$('.owl-item').eq(idx + 2).addClass('right');
	});
    
    

    
	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('.loader_wrep').fadeOut('slow', function(){
			$(this).remove();
		});
        
        //gellary masonry

        $('.galler-items-wrap').masonry({
            itemSelector: '.gallery-item'
        });

        //gellary masonry small

        $('.small_gellary_wrep').masonry({
            itemSelector: '.small_gellary_item'
        });
        
	});


});



$(window).scroll(function () {
	
	
	// stick menu

	if ($(window).scrollTop() > 10) {
		$('.top_menu_area').addClass('sticky');
	} else {
		$('.top_menu_area').removeClass('sticky');
	}

});