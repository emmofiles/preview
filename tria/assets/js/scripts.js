(function ($, window, document, undefined) {
    'use strict';

    //window width
    var winWidth = $(window).width();

    //window height
    var winHeight = $(window).height();

    //content height
    var contentHeight = winHeight * 0.7;

    //init ui
    function initUI(){
	    winWidth = $(window).width();
	    winHeight = $(window).height();

	    if (winWidth <= 991){
	    	return false;
	    }

	    $(window).load(function(){

		    contentHeight = winHeight;
		    $(".main_image").css("height", contentHeight);
	    	$(".navigation ul li").css("height", contentHeight / $(".navigation ul li").length);
	    	$("#wrapper").addClass("visible");

			if( !isMobile.any() ){

				//backstretch
				$("#wrapper").backstretch([
					"assets/img/bg/bg.jpg"
					, "assets/img/bg/bg2.jpg"
					, "assets/img/bg/bg3.jpg"
				], {duration: 6000, fade: 750});

			}

		    setTimeout(function(){
		    	$("#loading_screen").fadeOut(400);
		    }, 300);
	    });
	}

	var in_transition = false;
	var current_page = $(".navigation ul li.active a").attr("href").split("#")[1];

	$(".mobile_nav_toggle").on("click", function(){

		var nav = $(".navigation");

		if (nav.hasClass("visible")){
			nav.removeClass("visible");
		}else{
			nav.addClass("visible");
		}

	});

	//do desktop navigation
	function handleDesktopNav(item){

		var page_id = item.attr("href").split("#")[1];

		//its not a normal link like "blog.html"
		goto_page(page_id);

	}

	//go to a specific page
	function goto_page(page_id){

		if (page_id != undefined){

			if (page_id == current_page){
				return false;
			}else{
				current_page = page_id;

				//navigation classes swap
				$(".navigation li.active").removeClass("active");
				$('.navigation li a[href="#'+page_id+'"').parent().addClass("active");

				//if we are trying to go to home
				if (page_id == "home"){

					$(".landing .linner").removeClass("nomargin");
					$(".main_image").removeClass("page_active");

					$(".page_content").removeClass("active");

					setTimeout(function(){
						$(".page_content .page.active").removeClass("active");

						var home_bg_image = $(".home_bg_image").val();
						$(".main_image").css("background-image", "url("+home_bg_image+")");
					}, 300);

				}else{//or any other page
					$(".landing .linner").addClass("nomargin");

					$(".main_image").addClass("page_active");
					setTimeout(function(){
						$(".page_content").addClass("active");

						if ($(".page_content .page.active").length){//an active page already exist
							$(".page_content .page.active").removeClass("active");
							$('.page_content .page[id="'+page_id+'"]').addClass("active");


							var page_bg_image = $('.page_content .page[id="'+page_id+'"]').attr("data-bg-image");
							if (page_bg_image != undefined){
								$(".main_image").css("background-image", "url("+page_bg_image+")");
							}
						}else{//no active page exists
							$('.page_content .page[id="'+page_id+'"]').addClass("active");

							var page_bg_image = $('.page_content .page[id="'+page_id+'"]').attr("data-bg-image");
							if (page_bg_image != undefined){
								$(".main_image").css("background-image", "url("+page_bg_image+")");
							}
						}

					}, 50);

				}
		
				initAnimations('.page_content .page[id="'+page_id+'"]');

			}

		}
	}


	//scroll to top
	$(".scroll_to_top").on("click", function(){

		$('body').animate({scrollTop:0}, 750);

	});

	//do desktop mobile navigation
	function handleMobileNav_desktop(item){

		var page_prev = item.attr("href").split("#")[0];
		var page_id = item.attr("href").split("#")[1];

		//its not a normal link like "blog.html"
		if (page_id != undefined && (page_prev == undefined || page_prev == "")){

			if (page_id != 'home'){
				$('body').animate({scrollTop:$('.page#' + page_id).offset().top}, 750);
			}else{
				$('body').animate({scrollTop:0}, 750);
			}

			//navigation classes swap
			$(".navigation li.active").removeClass("active");
			$('.navigation li a[href="#'+page_id+'"').parent().addClass("active");


			return false;
		}

	}

	//handle mobile navigation
	function handleMobileNav(){

		$(".navigation li a").on("click", function(){

			var page_prev = $(this).attr("href").split("#")[0];
			var page_id = $(this).attr("href").split("#")[1];

			//its not a normal link like "blog.html"
			if (page_id != undefined && (page_prev == undefined || page_prev == "")){

				if (page_id != 'home'){
					$('body').animate({scrollTop:$('.page#' + page_id).offset().top}, 750);
				}else{
					$('body').animate({scrollTop:0}, 750);
				}

				//navigation classes swap
				$(".navigation li.active").removeClass("active");
				$('.navigation li a[href="#'+page_id+'"').parent().addClass("active");

				return false;
			}

		});


	}

	//initialize the navigation
	function initNavHandle(){

		$(".navigation li a").on("click", function(){

			if (in_transition == true){
				return false;
			}
			in_transition = true;

			var page_prev = $(this).attr("href").split("#")[0];
			var page_id = $(this).attr("href").split("#")[1];

			if (page_id != undefined && (page_prev == undefined || page_prev == "")){

				if (winWidth > 991){
					handleDesktopNav($(this));
				}else{
					handleMobileNav_desktop($(this));
				}

				in_transition = false;

				return false;

			}

		});

	}

	//go to a page via button
	$(".goto_page").on("click", function(){

		var page_id = $(this).attr("data-page");

		if (winWidth > 991){
			goto_page(page_id);
		}else{

			if (page_id != 'home'){
				$('body').animate({scrollTop:$('.page#' + page_id).offset().top}, 750);
			}else{
				$('body').animate({scrollTop:0}, 750);
			}
			
			//navigation classes swap
			$(".navigation li.active").removeClass("active");
			$('.navigation li a[href="#'+page_id+'"').parent().addClass("active");

		}

	});

	//check for page to navigate
	function checkPage(){

		var page_id = $(".navigation ul li.active a").attr("href").split("#")[1];

		goto_page(page_id);

	}

	//portfolio filter
	$(".portfolio_filter li a").on("click", function(e){
		e.preventDefault();

		$(".portfolio_filter li a.active").removeClass("active");

		$(this).addClass("active");

		var category = $(this).attr("data-cat");

		$(".portfolio_grid .grid_item.not_active").removeClass("not_active");

		if (category != "*"){
			$(".portfolio_grid .grid_item:not(." + category + ")").addClass("not_active");
		}

		return false;

	});

	//google maps
	if ($("#gmap").length){

		var marker;
	    $("#gmap").appear();
	    $("body").on("appear", "#gmap", function(event, $all_appeared_elements){

	    	if (!$(this).hasClass("done")){

				//Google map
				var theme_array = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];

			    var map = new google.maps.Map(document.getElementById('gmap'), {
				    zoom: 15,
					center: {lat: -37.814812, lng: 144.963055},//latitude and longitude
			        styles: theme_array,
					scrollwheel: false
				});

				var contentString = '<p>Google Maps Marker</p>';

				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});

				marker = new google.maps.Marker({
					map: map,
					draggable: true,
					animation: google.maps.Animation.DROP,
					position: {lat: -37.814812, lng: 144.963055},//latitude and longitude
					title: 'Marker Title'
				});
				marker.addListener('click', function(){
					infowindow.open(map, marker);
				});

				$(this).addClass("done");
		    }

	    });
	}

	//check for mobile
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	//os name
	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
	else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
	else if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
	else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

	//check for desktop version or mobile and
	//add nomargin or remove it depending on state
	//desktop requires nomargin to have fullscreen effect
	//mobile doesn't need it so we remove it
	function checkMargin(){
		if (winWidth <= 991){
			if ($(".linner").hasClass("nomargin")){
				$(".linner").removeClass("nomargin");
			}

		}else{
			if (!$(".linner").hasClass("nomargin") && $(".linner .main_image").hasClass("page_active")){
				$(".linner").addClass("nomargin");
			}
		}
	}

	//if not mobile
	if( !isMobile.any() ){

		initUI();

		if (winWidth <= 991){
			new WOW().init();
		}

		$("body").addClass("desktop_view");

		checkMargin();

		$(window).resize(function(){
			initUI();

			if (!$("body").hasClass("desktop_view")){
				$("body").removeClass("mobile_view");
				$("body").addClass("desktop_view");
			}

			checkPage();

			checkMargin();
		});

		$(window).load(function(){

			initNavHandle();
		});

	    //counter up
		var scrollable = $('.page');
		scrollable.on('scroll.counter_up', function(){
		    scrollable.find('.counter_up:not(.animated):in-viewport').counterUp({
				delay: 10,
				time: 1000
			}).addClass('animated');
		});

	}else{
		//when on mobile device

		$("body").removeClass("desktop_view");
		$("body").addClass("mobile_view");

		$("#loading_screen").fadeOut(300);

		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();

			if (scrollTop > 150){
				$(".scroll_to_top").addClass("visible");
			}else{
				$(".scroll_to_top").removeClass("visible");
			}
		});

		new WOW().init({
			mobile: false
		});

		handleMobileNav();
	}

	//single item slideshow
  	$(".single_slideshow").owlCarousel({
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
		        dots: true
	        },
	        767:{
	            items:1,
		        dots: true
	        },
	        1000:{
	            items:1,
		        dots: true
	        }
	    }
  	});

	//contact form
	$("body").on("click", ".contact_button", function(){
		var name = $(this).parents(".form").find(".contact_name");
		var email = $(this).parents(".form").find(".contact_email");
		var message = $(this).parents(".form").find(".contact_message");

		var val = $(this).val();

		$(this).val("Loading...");

		$.ajax({
			type: 'POST',
			url: 'ajax/ajax.php',
			data: {
				'name' : name.val(),
				'email' : email.val(),
				'message' : message.val()
			},
			dataType: 'json',
			success: $.proxy(function(data) {

				if (data.error == false){
					name.val('');
					email.val('');
					message.val('');
					$(".contact_form .inputfield").removeClass("contains_error");
				}else{
					$(".contact_form .inputfield").removeClass("contains_error");
					for (var i = 0; i < data.error_fields.length; i++) {
						$(".contact_form .contact_"+data.error_fields[i]).addClass("contains_error");
					};
				}

				$(".contact_form .messages").html(data.response).addClass("visible");

				$(this).val(val);

			}, this)
		});

		return false;

	});
	
	//init animations within pages for desktop
	function initAnimations(container){

		var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: container // optional scroll container selector, otherwise use window
		}
		);
		wow.init();
	}

	//hash change
	//hash url page changer
	if (jQuery().hashchange){
		jQuery(window).hashchange( function(e) {
			var hash = location.hash;
			if (hash == "")
				return false;

			var split = hash.split("#");


			var page_id = split[1];

			if ($(".page#" + page_id).length){
				if (!$("body").hasClass("mobile_view")){
					handleDesktopNav($('.navigation ul li a[href="#'+page_id+'"]'));
				}else{
					$('body').animate({scrollTop:$('.page#' + page_id).offset().top}, 750);
				}
			}

			return false;

		});

		$(window).hashchange();
	}


	$('body').prepend('<div class="theme_configs hidden visible">'+
        '<div class="body">'+
            '<div class="head_title">Style Selector</div>'+
            '<div class="title">Themes</div>'+
            '<div class="box themes">'+
                '<div class="theme1 active">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme2">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme3">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme4">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme5">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme6">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme7">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme8">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme9">'+
                    '<span class="color"></span>'+
                '</div>'+
                '<div class="theme10">'+
                    '<span class="color"></span>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="fa fa-angle-right btn"></div>'+
    '</div>');

	$(".theme_configs .btn").click(function(){
		var box = $(this).parent();
		if (box.hasClass("hidden")){
			box.animate({
				"left" : "0"
			}, 300);
			box.removeClass("hidden");
			$(this).removeClass("fa-angle-right").addClass("fa-angle-left");
		}else{
			box.animate({
				"left" : "-158px"
			}, 300);
			box.addClass("hidden");
			$(this).removeClass("fa-angle-left").addClass("fa-angle-right");
		}
	});

	$(".theme_configs .box.themes > div").click(function(){
		var current_theme = $("body").attr("class");

		var selected_theme = $(this).attr("class");

		if (current_theme == selected_theme){
			return false;
		}

		if ($("body").hasClass("onepage")){
			selected_theme += " onepage";
		}

		$(".theme_configs .box.themes > div.active").removeClass("active");
		$("body").attr("class", selected_theme);
		$(this).addClass("active");

	});

})(jQuery, window, document);