jQuery(window).load(function() {
	prettyPhoto();
	initIsotopeGrid();
	preload();
});	
var rtime;
var timeout = false;
var delta = 200;
jQuery(window).resize(function() {
	rtime = new Date();
	if (timeout === false) {
		timeout = true;
		setTimeout(resizeend, delta);
	}
});
jQuery(document).ready(function($) {
	mMenu();
	sticky();
	navMenu();
	fullscreen();
	toggleDropdown();
	numberCounter();
	bgImage();
	colEqheight();
	parallaxBg();
	dataAnimations();
	bootstrapForm();
	subscribeForm();
	careerForm();
	backgroundVideo();
	progressBar();
	allCharts();
	toggleIcon();
	headerHeight();
	owlSlider();
	stickyAft();
});
function resizeend() {
	if (new Date() - rtime < delta) {
		setTimeout(resizeend, delta);
	} else {
		timeout = false;
		mMenu();
		initIsotopeGrid();
		colEqheight();
	} 
}
/* -------------------------------	
		PRE LOADER
/* ----------------------------- */
function preload(){
	$(".loader-inner").delay(700).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow")
}

/* -------------------------------	
		MMENU
/* ----------------------------- */
function mMenu() {
	if ($(window).width() < 991) {
		$('#nav-menu').mmenu({
			counters	: true,
		});
	}
}
/* -------------------------------	
		STICKY
/* ----------------------------- */
function sticky() {
	if ($('#sticker').length) {
		$("#sticker").sticky({
			topSpacing:0
		});
	 }
}
/* -------------------------------	
		STICKY AFTER SECTION
/* ----------------------------- */
function stickyAft() {
	var stickyAftSec = jQuery('.sticky-aft-section').height(); 
	if ($('#sticker-aft').length) {
		$(window).scroll(function () {
			if ( $(this).scrollTop() > stickyAftSec ) {					   	
				$('#sticker-aft').addClass('is-sticky').css({
				   'position' : 'fixed',
				   'top' : '0'
				});
			}else if ( $(this).scrollTop() <= stickyAftSec ) {
				$('#sticker-aft').removeClass('is-sticky').css({
				   'position' : 'static',
				   'top' : 'auto'
				});
			}
	 	});
	}
}
/* -------------------------------	
		FULL SCREEN
/* ----------------------------- */
function fullscreen() {
	"use strict";
	if ($(window).width() > 680) {
		$('.full-screen,.full-screen .item').css({ 'height': $(window).height() });
			$(window).on('resize', function() {
			$('.full-screen,.full-screen .item').css({ 'height': $(window).height() });
		});
	}
}
/* -------------------------------	
		TOGGLE DROPDOWN
/* ----------------------------- */
function toggleDropdown() {
	$('.hover-dropdown .dropdown-toggle').on('click', function(event) {
		window.location.href = link.attr("href");
	});
	$('.dropdown-toggle').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
}
/* --------------------------------------------
		SCROLL NAVIGATION
-------------------------------------------- */	
function navMenu(){	 
	jQuery('.scroll li a').bind('click', function(event) {
		var $anchor = jQuery(this);
		var headerH = jQuery('#sticker').innerHeight();
			jQuery('html, body').stop().animate({					
				scrollTop : jQuery($anchor.attr('href')).offset().top  - headerH + "px"
			}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});
	/* Active When Scroll */
	jQuery('body').scrollspy({ 
		target: '#nav-menu',
		offset: 95
	})
	/* Responsive Auto Close */
	$('.one-page .nav li a').click(function () {
		 $('.navbar-collapse').removeClass('in');
	});
	/* Smooth Scroll Links */
	jQuery('.page-scroll a')
		.bind('click', function(event) {
			var $anchor = jQuery(this);
			jQuery('html, body')
				.stop()
				.animate({
					scrollTop: jQuery($anchor.attr('href'))
						.offset()
						.top
				}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		/* Display only scroll on Top */
		/* 
		var iScrollPos = 0;

		$(window).scroll(function () {
			var iCurScrollPos = $(this).scrollTop();
			if (iCurScrollPos > iScrollPos) {
				//Scrolling Down
				 $('#sticker-aft').removeClass('is-sticky').css({
				   'position' : 'static',
				   'top' : 'auto'
				});
			} else {
			   //Scrolling Up
				$('#sticker-aft').addClass('is-sticky').css({
					   'position' : 'fixed',
					   'top' : '0'
				});
			  
			}
			iScrollPos = iCurScrollPos;
		}); */
	}
/* -------------------------------	
		BACKGROUND IMAGE
/* ----------------------------- */
function bgImage(){		
	var pageSection = $('[data-background]');
	pageSection.each(function(indx){
		if ($(this).attr("data-background")){
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	$('[data-bgcolor]').css('background', function () {
		return $(this).data('bgcolor')
	});
}
function parallaxBg(){		
	if($('.parallax-bg').length != 0 && !navigator.userAgent.match(/iPad|iPhone|Android/i)){	
			$.stellar({
				horizontalScrolling: true,
				verticalOffset: 0,
				horizontalOffset: 0,
				responsive: true,
				scrollProperty: 'scroll',
				parallaxElements: false,
		  });
		}
}
function toggleIcon() {
	$(document).on( 'click', '#header-top-bar .search-icon', function( e ) {	
		e.preventDefault();																  	
		$("#header-top-bar .toggle-search").toggleClass("show-form");
		$("#header-top-bar .search-icon span").toggleClass("fa-times");
		$("#search-form").focus();
	});
	$(document).on( 'click', '.header-main .search-icon', function( e ) {	
		e.preventDefault();													   
		$(".header-main .toggle-search").toggleClass("show-form");
		$(".header-main .search-icon span").toggleClass("fa-times");
	});
	$(document).on( 'click', '.navbar-toggle', function( e ) {
		e.preventDefault();													
		$(this).toggleClass('toggle-close-btn');
	});
	$(document).on( 'click', '#menu-toggle,.close-toggle', function( e ) {
		e.preventDefault();												  	
		$("#page-wrapper").toggleClass("toggled");
	});
	/* TOGGLE EXTRA NAV */
	$(document).on( 'click', '.header-toggle-icon', function( e ) {
		e.preventDefault();													
		var id = $(this).attr( "id" );
		var res = id.split("-"); 
		var id1='#extra-'+res[1]+'-'+res[0];
		$(id1).toggleClass("toggled");
		$("#search-form").focus();
		$('.sticky-navigation .navbar').fadeIn().addClass('top-search-open');
	});
	/*CLOSE*/
	$(document).on( 'click', '.toggle-close', function( e ) {
		e.preventDefault();											   
		var id = $(this).attr( "id" );
		var res = id.replace("close-",''); 
		var id1='#extra-'+res;
		$(id1).toggleClass("toggled");
		$('.sticky-navigation .navbar').fadeIn().removeClass('top-search-open');
	});
}

/* ------------------------------------------	
		HEADER HEIGHT ON DATA-ATTRIBUTES
/* ----------------------------------------- */
function headerHeight() {
	var hdr = $("header").attr('data-height');
	$(".header-main .navbar-brand ,.header-main .navbar-nav > li > a,.header-main .navbar-nav > li .extra-menu-item,.header-toggle-content,.header-main .navbar-toggle ").css({'line-height': hdr, 'height': hdr});
}
/* -------------------------------	
		TOGGLE MENU ICONS
/* ----------------------------- */
var iScrollPos = 0;
 $(window).scroll(function () {
     var iCurScrollPos = $(this).scrollTop();
     if (iCurScrollPos > iScrollPos) {
         if($("#sticker-sticky-wrapper").hasClass("is-sticky")){
			var shdr = $("header").attr('data-sheight');
			$(".is-sticky .navbar-brand ,.is-sticky .navbar-nav > li > a,.is-sticky .navbar-nav > li .extra-menu-item,.is-sticky .header-toggle-content,.is-sticky .header-main .navbar-toggle").css({'line-height': shdr, 'height': shdr});
		}
     } else {
        var hdr = $("header").attr('data-height');
		$(".header-main .navbar-brand ,.header-main .navbar-nav > li > a,.header-main .navbar-nav > li .extra-menu-item,.header-toggle-content,.header-main .navbar-toggle ").css({'line-height': hdr, 'height': hdr});
     }
     iScrollPos = iCurScrollPos;
 });
 function prettyPhoto() {
	"use strict";
	if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
	 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', social_tools: false, deeplinking: false});
	}
 }

function progressBar() {		
	if ($('.progress-bar').length) {
		$('.progress-bar').each(function() {
			$(this).appear(function(){
			 var datavl = $(this).attr('data-percentage');
			 $(this).animate({ "width" : datavl + "%"}, '1200');
			 $(this).find('span').fadeIn(4000);
			 $(this).css('background', $(this).attr('data-bg'));
			})
		});
		$('.progress').each(function() {
			var dathgt = $(this).attr('data-height');
			$(this).css({'line-height': dathgt + "px", 'height': dathgt});
		});
	}
}
/* ---------------------	
		Animation
/* --------------------- */	
function dataAnimations() {
  $('[data-animation]').each(function() {
		var element = $(this);
		element.addClass('animated');
		element.appear(function() {
			var delay = ( element.data('delay') ? element.data('delay') : 1 );
			if( delay > 1 ) element.css('animation-delay', delay + 'ms');				
			element.addClass( element.data('animation') );
			setTimeout(function() {
				element.addClass('visible');
			}, delay);
		});
  });
}
 /* -------------------------------	
		COLUMN MATCH HEIGHT
/* ----------------------------- */
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		$(this).css("height", "");
		var thisHeight = $(this).outerHeight();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.css("height", tallest);
}
function colEqheight() {
	equalHeight($(".row > .col-eq-height"));
} 

 /* -------------------------------	
		NUMBER COUNTER
/* ----------------------------- */	
function numberCounter(){	
	(function($){
		if ($('.number-counter').length) {
			$(".number-counter").appear(function(){
				$(this).each(function(){
					datacount = $(this).attr('data-count');
					$(this).delay(6000).countTo({
						from: 10,
						to: datacount,
						speed: 3000,
						refreshInterval: 50,
					});
				});
			});
		}	
	})(jQuery);
}

 /* -------------------------------	
		OWL SLIDER
/* ----------------------------- */
 function owlSlider() {
	(function($) {
		"use strict";
		if ($('.owl-carousel').length) {		    
			  $(".owl-carousel").each(function (index) {
				var autoplay = $(this).data('autoplay');
				var timeout = $(this).data('delay');
				var slidemargin = $(this).data('margin');
				var slidepadding = $(this).data('stagepadding');
				var items = $(this).data('items');
				var animationin = $(this).data('animatein');
				var animationout = $(this).data('animateout');
				var itemheight = $(this).data('autoheight');
				var itemwidth = $(this).data('autowidth');
				var itemmerge = $(this).data('merge');
				var navigation = $(this).data('nav');
				var pagination = $(this).data('dots');
				var infinateloop = $(this).data('loop');
				var itemsdesktop = $(this).data('desktop');
				var itemsdesktopsmall = $(this).data('desktopsmall');
				var itemstablet = $(this).data('tablet');
				var itemsmobile = $(this).data('mobile');
				$(this).on('initialized.owl.carousel changed.owl.carousel',function(property){
					var current = property.item.index;
					$(property.target).find(".owl-item").eq(current).find(".animated").each(function(){
						var elem = $(this);
						var animation = elem.data('animate');
						if ( elem.hasClass('visible') ) {
							elem.removeClass( animation + ' visible');
						}
						if ( !elem.hasClass('visible') ) {
							var animationDelay = elem.data('animation-delay');
							if ( animationDelay ) {			
								setTimeout(function(){
								 elem.addClass( animation + " visible" );
								}, animationDelay);				
							} else {
								elem.addClass( animation + " visible" );
							}
						}
					});					
				}).owlCarousel({ 
					autoplay: autoplay,
					autoplayTimeout:timeout,
					items : items,
					margin:slidemargin,
					autoHeight:itemheight,
					animateIn: animationin,
					animateOut: animationout,
					autoWidth:itemwidth,
					stagePadding:slidepadding,
					merge:itemmerge,
					nav:navigation,
					dots:pagination,
					loop:infinateloop,
					responsive:{
						479:{
							items:itemsmobile,
						},
						768:{
							items:itemstablet,
						},
						980:{
							items:itemsdesktopsmall,
						},
						1199:{
							items:itemsdesktop,
						}
					}
				});
			});
		}  
	})(jQuery);
}
/* ---------------------	
		Background Video 
/* --------------------- */
function backgroundVideo(){
	if (typeof $.fn.mb_YTPlayer != 'undefined' && $.isFunction($.fn
		.mb_YTPlayer)) {
		var m = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
			navigator.userAgent)) {
			m = true
		}
		var v = $('.player');
		if (m == false) {
			v.mb_YTPlayer();
			$('#video-controls a')
				.each(function() {
					var t = $(this);
					t.on('click', (function(e) {
						e.preventDefault();
						if (t.hasClass(
							'fa-volume-off')) {
							t.removeClass(
									'fa-volume-off'
								)
								.addClass(
									'fa-volume-down'
								);
							v.unmuteYTPVolume();
							return false
						}
						if (t.hasClass(
							'fa-volume-down')) {
							t.removeClass(
									'fa-volume-down'
								)
								.addClass(
									'fa-volume-off'
								);
							v.muteYTPVolume();
							return false
						}
						if (t.hasClass('fa-pause')) {
							t.removeClass(
									'fa-pause')
								.addClass('fa-play');
							v.pauseYTP();
							return false
						}
						if (t.hasClass('fa-play')) {
							t.removeClass('fa-play')
								.addClass(
									'fa-pause');
							v.playYTP();
							return false
						}
					}));
				});
			$('#video-controls')
				.show();
		}
	}
}
 /* -------------------------------	
		ISOTOPE GRID
/* ----------------------------- */
function initIsotopeGrid() {
  $('.isotope-grid').each(function(){  
	   var $port_container = $(this);  
		$containerProxy = $port_container;
		var filter_selector = $port_container.parent().find('.isotope-filters a.active').data('filter');  
		var gutterSize = $port_container.data('gutter');  
		var columns = $port_container.data('columns');
		 
		if ($(window).width() > 1025) {
			$port_container.imagesLoaded(function(){
				if( columns == 2 ) {
					var masonryGutter = gutterSize / columns;					
				} else if( columns == 3 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 3 );					
				} else if( columns == 4 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 2 );					
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $containerProxy.width() / columns );
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$port_container.find('.item').css('width', masonryWidth);
				$port_container.find('.item').css('margin-bottom', gutterSize);
		
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: gutterSize
					},
				});
				
				jQuery( window ).bind( 'load resize', function() {
					var colWidth = Math.floor( $containerProxy.width() / columns );
					var masonryWidth = Math.floor( colWidth - masonryGutter );
					$port_container.find('.item').css('width', masonryWidth);
					
					$port_container.isotope({
						masonry: {
							columnWidth: masonryWidth,
							gutter: gutterSize
						},
					});
				});
			});					
		}
		if ($(window).width() > 992 && $(window).width() < 1024) {
			$port_container.imagesLoaded(function(){
				if( columns == 4 ) {
					columns = 3;
				}
				
				if( columns == 2 ) {
					var masonryGutter = gutterSize / columns;					
				} else if( columns == 3 || columns == 4 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 3 );					
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $containerProxy.width() / columns );
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$port_container.find('.item').css('width', masonryWidth);
				$port_container.find('.item').css('margin-bottom', gutterSize);
		
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: gutterSize
					},
				});
				
				jQuery( window ).bind( 'load resize', function() {
					var colWidth = Math.floor( $containerProxy.width() / columns );
					var masonryWidth = Math.floor( colWidth - masonryGutter );
					$port_container.find('.item').css('width', masonryWidth);
					
					$port_container.isotope({
						masonry: {
							columnWidth: masonryWidth,
							gutter: gutterSize
						},
					});
				});
			});	
		}
		if ($(window).width() > 768 && $(window).width() < 991) {
			$port_container.imagesLoaded(function(){
				if( columns == 3 || columns == 4 ) {
					columns = 2;
				}
				
				if( columns == 2 ) {
					var masonryGutter = gutterSize / columns;					
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $containerProxy.width() / columns );
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$port_container.find('.item').css('width', masonryWidth);
				$port_container.find('.item').css('margin-bottom', gutterSize);
		
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: gutterSize
					},
				});
				
				jQuery( window ).bind( 'load resize', function() {
					var colWidth = Math.floor( $containerProxy.width() / columns );
					var masonryWidth = Math.floor( colWidth - masonryGutter );
					$port_container.find('.item').css('width', masonryWidth);
					
					$port_container.isotope({
						masonry: {
							columnWidth: masonryWidth,
							gutter: gutterSize
						},
					});
				});
			});
		}
		if ($(window).width() < 767) {
			$port_container.imagesLoaded(function(){
				var gutterSize = Math.floor( $port_container.closest('.isotope-grid').attr('data-gutter') );
				$port_container.find('.item').css('width', '100%');
				$port_container.find('.item').css('margin-bottom', gutterSize);
				
				var selector = $port_container.parent().find('.isotope-filters a.active').data('filter');
				
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
				 	animationEngine: "css",
					masonry: {
						columnWidth: '.item',
						gutter: 0
					},
				});
				
				jQuery( window ).bind( 'load resize', function() {
					$port_container.isotope( "layout" );
				});
			});
		}

  
		// ISOTOPE FILTER
		$('.isotope-filters a').click(function(){
		
			$(this).parent().parent().find('a.active').removeClass('active');    
			$(this).addClass('active');
			var selector = $(this).parent().parent().find('a.active').attr('data-filter');  
			$(this).parents().find('.isotope-grid').isotope({ filter: selector, animationEngine : "css" });
		
			return false; 
		});
		
		$port_container.isotope('layout');
	});
}

function allCharts() {
		
	jQuery(window).load( function(){
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "#1ABC9C",
					pointStrokeColor : "#fff",
					data : [10,20,40,70,100,90,40]
				},
				{
					fillColor : "rgba(52, 73, 94,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [70,30,60,40,50,30,60]
				},
				{
					fillColor : "rgba(26, 188, 156,0.5)",
					strokeColor : "#1ABC9C",
					pointColor : "#fff",
					pointStrokeColor : "#333",
					data : [10,40,100,70,30,80,50]
				}
			]
		};

		var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(26, 188, 156,0.5)",
					strokeColor : "#1ABC9C",
					data : [50,70,90,60,70,40,50]
				}
			]

		};

		var radarChartData = {
			labels : ["Html5","Css3","Jquery","Wordpress","Joomla","Drupal","Design"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(26, 188, 156,0.5)",
					strokeColor : "#1ABC9C",
					pointColor : "#1ABC9C",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]

		};

		var pieChartData = [
			{
				value: 90,
				color:"#1ABC9C"
			},
			{
				value : 30,
				color : "#333"
			},
			{
				value : 60,
				color : "#E74C3C"
			},
			{
				value : 100,
				color : "#E67E22"
			},
			{
				value : 20,
				color : "#16B6EA"
			}

		];

		var polarAreaChartData = [
			{
				value : 60,
				color: "#1ABC9C"
			},
			{
				value : 70,
				color: "#f5f5f5"
			},
			{
				value : 60,
				color: "#E74C3C"
			},
			{
				value : 30,
				color: "#E67E22"
			},
			{
				value : 50,
				color: "#16B6EA"
			},
			{
				value : 20,
				color: "#333"
			}
		];

		var doughnutChartData = [
			{
				value: 30,
				color:"#1ABC9C"
			},
			{
				value : 50,
				color : "#f5f5f5"
			},
			{
				value : 100,
				color : "#E74C3C"
			},
			{
				value : 40,
				color : "#E67E22"
			},
			{
				value : 120,
				color : "#16B6EA"
			}
		];

		function showLineChart(){
			var ctx = document.getElementById("lineChartmist").getContext("2d");
			 new Chart(ctx).Line(lineChartData, {	responsive: true	});
		}

		function showBarChart(){
			var ctx = document.getElementById("barChartmist").getContext("2d");
			new Chart(ctx).Bar(barChartData, {	responsive: true	});
		}

		function showRadarChart(){
			var ctx = document.getElementById("radarChartmist").getContext("2d");
			new Chart(ctx).Radar(radarChartData, {	responsive: true	});
		}

		function showPolarAreaChart(){
			var ctx = document.getElementById("polarAreaChartmist").getContext("2d");
			new Chart(ctx).PolarArea(polarAreaChartData, {	responsive: true	});
		}

		function showPieChart(){
			var ctx = document.getElementById("pieChartmist").getContext("2d");
			new Chart(ctx).Pie(pieChartData,{	responsive: true	});
		}
		function showDoughnutChart(){
			var ctx = document.getElementById("doughnutChartmist").getContext("2d");
			new Chart(ctx).Doughnut(doughnutChartData,{	responsive: true	});
		}

		$('#lineChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showLineChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#barChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showBarChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#radarChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showRadarChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#polarAreaChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPolarAreaChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#doughnutChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showDoughnutChart,300); },{accX: 0, accY: -155},'easeInCubic');

	});

}
/* --------------------------------------------
				GOOGLE MAP
-------------------------------------------- */	
window.onload = MapLoadScript;
function GmapInit() {
	  Gmap = jQuery('.map-canvas');
	  Gmap.each(function() {
		var $this           = $(this),
			lat             = -35.2835,
			lng             = 149.128,
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataLat         = $this.data('lat'),
			dataLng         = $this.data('lng'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataSaturation  = $this.data('saturation'),
			dataLightness   = $this.data('lightness'),
			dataTitle       = $this.data('title'),
			dataContent     = $this.data('content');
			
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataLat !== undefined && dataLat !== false ) {
			lat = parseFloat(dataLat);
		}
		if( dataLng !== undefined && dataLng !== false ) {
			lng = parseFloat(dataLng);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		if( dataTitle !== undefined && dataTitle !== false ) {
			title = dataTitle;
		}
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var image = 'images/base/map-marker.png';
		if( dataContent !== undefined && dataContent !== false ) {
			contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
		}
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		var marker = new google.maps.Marker({
		  position : new google.maps.LatLng(lat, lng),
		  map      : map,
		  icon     : image,
		  title    : title
		});
		if( dataContent !== undefined && dataContent !== false ) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
		if( dataHue !== undefined && dataHue !== false ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: dataSaturation },
				{ lightness: dataLightness }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });	 
}

function MapLoadScript() {
	
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=GmapInit';
	document.body.appendChild(script);
}

function bootstrapForm(){	
	if ( $( "#bootstrap-form" ).length !== 0 ) {
		$('#bootstrap-form').bootstrapValidator({
			container: 'tooltip',
			feedbackIcons: {
				valid: 'fa fa-check',
				warning: 'fa fa-user',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: { 
				contact_name: {
					validators: {
						notEmpty: {
							message: ''
						}
					}
				},
				contact_email: {
					validators: {
						notEmpty: {
							message: ''
						},
						emailAddress: {
							message: ''
						}
					}
				},
				contact_phone: {
					validators: {
						notEmpty: {
							message: ''
						}
					}
				},
				contact_message: {
					validators: {
						notEmpty: {
							message: ''
						}
					}
				},
			}
		})	
		.on('success.form.bv', function(e) {
			e.preventDefault();
			var $form        = $(e.target),
			validator    = $form.data('bootstrapValidator'),
			submitButton = validator.getSubmitButton();
			var form_data = $('#bootstrap-form').serialize();
			$.ajax({
					type: "POST",
					dataType: 'json',
					url: "php/contact-form.php",					
					data: form_data,
					success: function(msg){						
						$('.form-message').html(msg.data);
						$('.form-message').show();
						submitButton.removeAttr("disabled");
						resetForm($('#bootstrap-form'));						
					},
					error: function(msg){}
			 });
			return false;
		});
	}
	function resetForm($form) {

		$form.find(
				'input:text, input:password, input, input:file, select, textarea'
			)
			.val('');

		$form.find('input:radio, input:checkbox')
			.removeAttr('checked')
			.removeAttr('selected');
		$form.find('button[type=submit]')
			.attr("disabled", "disabled");	

	}
}

function subscribeForm(){	 
	if ( $( "#subscribe-form" ).length !== 0 ) {
		$('#subscribe-form').bootstrapValidator({
			container: 'tooltip',
			feedbackIcons: {
				valid: 'fa fa-check',
				warning: 'fa fa-user',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: { 
				subscribe_email: {
					validators: {
						notEmpty: {
							message: 'Email is required. Please enter email.'
						},
						emailAddress: {
							message: 'Please enter a correct email address.'
						}
					}
				},	
			}
		})	
		.on('success.form.bv', function(e) {
			e.preventDefault();
			var $form        = $(e.target),
			validator    = $form.data('bootstrapValidator'),
			submitButton = validator.getSubmitButton();
			var form_data = $('#subscribe-form').serialize();
			$.ajax({
					type: "POST",
					dataType: 'json',
					url: "php/subscription.php",					
					data: form_data,
					success: function(msg){						
						$('.form-message1').html(msg.data);
						$('.form-message1').show();
						submitButton.removeAttr("disabled");
						resetForm($('#subscribe-form'));						
					},
					error: function(msg){}
			 });
			return false;
		});
	}
	function resetForm($form) {

		$form.find(
				'input:text, input:password, input, input:file, select, textarea'
			)
			.val('');

		$form.find('input:radio, input:checkbox')
			.removeAttr('checked')
			.removeAttr('selected');
		$form.find('button[type=submit]')
			.attr("disabled", "disabled");

	}
}

/* --------------------------------------------
	Career Form
	-------------------------------------------- */	
	function careerForm(){	
		if ( $( "#careerform" ).length !== 0 ) {
		$('#careerform').bootstrapValidator({
				container: 'tooltip',
				feedbackIcons: {
					valid: 'fa fa-check',
					warning: 'fa fa-user',
					invalid: 'fa fa-times',
					validating: 'fa fa-refresh'
				},
				fields: {
                    career_name: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
                    femail: {
                        validators: {
                            notEmpty: {
                                message: ''
                            },
                            emailAddress: {
                                message: ''
                            },
							regexp: {
									regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
									message: 'The value is not a valid email address'
							}
                        }
                    },
					career_phone: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
                    careerfile: {
						validators: {
							notEmpty: {
                                message: 'Please Upload pdf or doc or docx file'
                            },
							file: {
								extension: 'pdf,doc,docx',
								type: 'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword',
								message: 'The selected file is not valid!'
							}
						}
					},
                }
			})	
			.on('success.form.bv', function(e) {
				e.preventDefault();
				
				var $form       = $(e.target);
				validator    	= $form.data('bootstrapValidator'),
				submitButton 	= validator.getSubmitButton();
				
				var formData = new FormData(),
				params   = $form.serializeArray(),
				files    = $form.find('[name="careerfile"]')[0].files;
				
				$.each(files, function(i, file) {
					// Prefix the name of uploaded files with "uploadedFiles-"
					// Of course, you can change it to any string
					formData.append('careerfile-' + i, file);
				});
	
				$.each(params, function(i, val) {
					formData.append(val.name, val.value);
				});
				
				$.ajax({
						type: "POST",
						dataType: 'json',
						url: "php/career.php",					
						data: formData,
						cache: false,
						contentType: false,
						processData: false,
						success: function(msg){						
							$('.form-message2').html(msg.data);
							$('.form-message2').show();
							submitButton.removeAttr("disabled");
							resetForm($('#careerform'));						
						},
						error: function(msg){}
				 });
				return false;
			});
		}
		function resetForm($form) {

            $form.find('input:text, input:password, input, input:file, select, textarea').val('');
            $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
			$form.find('input:text, input:password, input, input:file, select, textarea, input:radio, input:checkbox').parent().find('.form-control-feedback').hide();
			
        }
	}	