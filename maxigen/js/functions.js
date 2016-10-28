/*
	Project Name : 

	## Document Ready
		- Scrolling Navigation
		- Responsive Caret
		- Remove p empty tag for Shortcode

	## Window Load
		- Site Loader
*/

(function($) {

	"use strict"
	
	/* - Google-map-black & white */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'images/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom") ,10);
		var styles = [{"featureType":"landscape","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":" "},{"saturation":" "}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":" "},{"saturation":" "}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});	
	}
	
	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$(".header-main").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".header-main").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".header-main").removeClass("navbar-fixed-top animated fadeInDown");
		} // set sticky menu - end		

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {

		/* - Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$(".header-main").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".header-main").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".header-main").removeClass("navbar-fixed-top");
		} // set sticky menu - end
		
		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');

		/* Find all anchors */
		$("#navbar").find("a[href]").each(function(i,a) {

			var $a = $(a);
			var href = $a.attr("href");

			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+"#") == 0 ) {

				/* remove URI from href */
				href = href.replace(url,"");

				/* update anchors HREF with new one */
				$a.attr("href",href);
			}
		});

		/* Add Easing Effect on Section Scroll */
		$(".navbar-nav > li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])").on("click", function() {

			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {

					$("html, body").animate( { scrollTop: target.offset().top - 83 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});

		/* - Responsive Caret */
		$(".ddl-switch").on("click", function() {

			var li = $(this).parent();

			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* - Remove p empty tag for Shortcode */
		$( "p" ).each(function() {
			var $this = $( this );
				if( $this.html().replace(/\s|&nbsp;/g, '').length == 0) {
				$this.remove();
			}
		});
		
		/* - Tooltip */
		$('[data-toggle="tooltip"]').tooltip();
		
		/* - Photo Slider */
		var slider_count = 0;
		slider_count = $( "[id*='slider_shape-']" ).length;
		for(var i=1; i<=slider_count; i++)
		{
			$( "[id*='slider_shape-"+i+"']" ).css("clip-path","url('#slider-"+i+"')");
		}
		
		/* Intro Section */
		$(".intro-section .intro-shape").css('clip-path','url("#intro")');
		if($(".intro-carousel").length){
			$(".intro-carousel").owlCarousel({
				autoplay: true,
				touchDrag: true,
				mouseDrag: true,
				loop:true,
				margin:0,
				nav: true,
				dots: false,
				smartSpeed: 1000,
				responsive:{
					0:{
						items:1
					},
					560:{
						items:1
					},
					1000:{
						items:1
					},
					1200:{
						items:1
					}
				}
			})
		}
		
		if( $(".intro-section").length ){
			$(".intro-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".intro-section .quotes").addClass("animated fadeInLeft");
					$(".intro-section .content").addClass("animated fadeInRight");
				});
			});
		}
		
		/* - About Section */
		if( $(".about-section").length ){
			$(".about-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".about-section .col-md-3").addClass("animated flip");
				});
			});
		}
		
		/* - Team Section */
		var team_count = 0;
		team_count = $( "[id*='team_shape-']" ).length;
		for(var i=1; i<=team_count; i++)
		{
			$( "[id*='team_shape-"+i+"']" ).css("clip-path","url('#team-"+i+"')");
		}		
		if( $(".team-section").length ){
			$(".team-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".team-section .col-md-3").addClass("animated bounceIn");
				});
			});
		}
		
		/* - Blog */
		var triangle_shape_count = 0;
		triangle_shape_count = $( "[id*='triangle-']" ).length;
		for(var i=1; i<=triangle_shape_count; i++)
		{
			$( "[id*='triangle-"+i+"']" ).css("clip-path","url('#triangle_shape-"+i+"')");
		}
		if( $(".blog-section").length ){
			$(".blog-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".blog-section .col-md-4").addClass("animated fadeInUp");
				});
			});
		}
		
		/* - Banner Shape */
		$(".page-banner .page-banner-shape").css("clip-path",'url("#banner-shape")');
		
		/* - Contact Map */
		if($("#map-canvas-contact").length == 1){
			initialize("map-canvas-contact");
		}
		
		/* -- Gallery */
		if($("#gallery-single-map").length == 1){
			initialize("gallery-single-map");			
		}
		if( $(".gallery-section").length ){
			$(".gallery-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					$(".gallery-section .col-md-3").addClass("animated bounceIn");
				});
			});
		}
		/* -- Places Section */
		if( $("#places-section").length ){	
			if( width >= 768 )
			{
				var c_width = $("#places-section .carousel-caption").width();
				var control_width = (width - c_width) / 2;
				$(".places-section .carousel-control").css("width", control_width);
			}
			else {
				var c_width = $("#places-section .carousel-caption").width();
				var control_width = (width) / 2;
				$(".places-section .carousel-control").css("width", control_width);
			}
		}
		
		/* Cleint Section */
		if($(".client-section").length){
			$(".client-carousel").owlCarousel({
				autoplay: true,
				touchDrag: true,
				mouseDrag: true,
				loop:true,
				margin: 30,
				nav: false,
				dots: false,
				smartSpeed: 1000,
				responsive:{
					0:{
						items:1
					},
					400:{
						items:2
					},
					560:{
						items:3
					},
					1000:{
						items:4
					},
					1200:{
						items:6
					}
				}
			})
		}
		
		/* Gallery */		
		if( $(".gallery-single").length ){
			$(".gallery-single .img-box").magnificPopup({
				delegate: "a",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',				
				}
			});
		}
		
		if( $("#btn_submit").length ){
			/* - Contact Form */
			$( "#btn_submit" ).on( "click", function(event) {
				event.preventDefault();
				var mydata = $("form").serialize();

				$.ajax({
					type: "POST",
					dataType: "json",
					url: "contact.php",
					data: mydata,
					success: function(data) {

					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");     
						$("#input-name").val("");
						$("#input_email").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();    
					}    
					},
					error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
					}
				});
				return false;
				$('#contact-form').attr("action", "saveQuery").submit();
			});

			/* Quick Contact Form /- */
			document.addEventListener('DOMContentLoaded', function () {
				document.querySelector('main').className += 'loaded';
			});
		}
	});
	
	$( window ).resize(function() {
		var width =	$(window).width();
		var height = $(window).height();
		if( $("#places-section").length ){	
			if( width >= 768 )
			{
				var c_width = $("#places-section .carousel-caption").width();
				var control_width = (width - c_width) / 2;
				$(".places-section .carousel-control").css("width", control_width);
			}
			else {
				var c_width = $("#places-section .carousel-caption").width();
				var control_width = (width) / 2;
				$(".places-section .carousel-control").css("width", control_width);
			}
		}
	});

	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {

		/* - Site Loader */
		if ( !$('html').is('.ie6, .ie7, .ie8') ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css('display','none');
		}
	});

})(jQuery);

