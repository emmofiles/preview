"use strict";
/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
$(document).ready(function() {
	/* -------------------------------------
			HOME SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-home-slider', {
		grabCursor: true,
		//autoplay: 4000,
		slidesPerView: 1,
		//effect: 'fade',
		direction: 'vertical',
		watchSlidesProgress: true,
		loop: true,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
	});
	/* -------------------------------------
			BRAND SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-brands-slider', {
		loop: true,
		autoplay: false,
		grabCursor: true,
		slidesPerView: 5,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
		// Responsive breakpoints
		breakpoints: {
			// when window width is <= 568px
			568: {slidesPerView: 1,},
			// when window width is <= 991px
			991: {slidesPerView: 5,},
			// when window width is <= 1360px
			1360: {slidesPerView: 4,}
		}
	});
	/* -------------------------------------
			BLOG SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-blog-slider', {
		autoplay: false,
		grabCursor: true,
		slidesPerView: 3,
		spaceBetween:30,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
		// Responsive breakpoints
		breakpoints: {
			// when window width is <= 568px
			640: {slidesPerView: 1,},
			// when window width is <= 991px
			991: {slidesPerView: 2,},
		}
	});
	/* -------------------------------------
			DASHBOARD  SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-dashboardlist-slider', {
		slidesPerView: 8,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
		// Responsive breakpoints
		breakpoints: {
			// when window width is <= 568px
			568: {slidesPerView: 1,},
			// when window width is <= 767px
			767: {slidesPerView: 3,},
			// when window width is <= 991px
			991: {slidesPerView: 4,},
			// when window width is <= 1199px
			1199: {slidesPerView: 5,},
			// when window width is <= 1199px
			1280: {slidesPerView: 6,}
		}
	});
	/* -------------------------------------
			MILEAGE RANGE SLIDER
	-------------------------------------- */
	$(function() {
		$( "#tg-mileage-slider" ).slider({
			range: "min",
			value: 230000,
			min: 1,
			max: 280000,
			slide: function( event, ui ) {
				$( "#tg-mileage" ).val(ui.value);
			}
		});
		$( "#tg-mileage" ).val($( "#tg-mileage-slider" ).slider( "value" ) );
	});
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-testimonial-slider', {
		loop: true,
		autoplay: 4000,
		grabCursor: true,
		slidesPerView: 2,
		spaceBetween: 28,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
		paginationClickable: true,
		pagination: '.tg-pagination',
		// Responsive breakpoints
		breakpoints: {
			// when window width is <= 767px
			767: {slidesPerView: 1,},
		}
	});
	/* -------------------------------------
			HOME SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-compare-slider', {
		grabCursor: false,
        paginationClickable: true,
		autoplay: 4000,
		slidesPerView: 1,
		effect: 'fade',
		//loop: true,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
		pagination: '.tg-pagination',
		
	});
	/* -------------------------------------
			BRAND SLIDER
	-------------------------------------- */
	var swiper = new Swiper('#tg-sidebar-brands-slider', {
		loop: true,
		autoplay: 4000,
		grabCursor: true,
		slidesPerView: 3,
		prevButton: '.tg-prev',
		nextButton: '.tg-next',
		// Responsive breakpoints
			breakpoints: {
				// when window width is <= 568px
				400: {slidesPerView: 2,},
				// when window width is <= 568px
				568: {slidesPerView: 3,},
				// when window width is <= 767px
				767: {slidesPerView: 4,},
				// when window width is <= 991px
				890: {slidesPerView: 5,},
				// when window width is <= 991px
				991: {slidesPerView: 2,},
				// when window width is <= 1199px
				1199: {slidesPerView: 2,},
			}
	});
	/* -------------------------------------
			SEARCH DETAIL SLIDER
	-------------------------------------- */
	var galleryTop = new Swiper('.gallery-top', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			767: {
				slidesPerView: 1
			}
		}
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		centeredSlides: true,
		direction: 'vertical',
		touchRatio: 0.2,
		slideToClickedSlide: true,
		slidesPerView: 3
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
	/*-------------------------------------
			LINE CHART
	-------------------------------------*/
	window.onload = function () {
		var chart = new CanvasJS.Chart("tg-performancechartone",
		{
			width:800,
			height:350,
			animationEnabled: true, 
			animationDuration: 2000,
			backgroundColor: "#f7f7f7",
			toolTip:{
				enabled: false,
			},
			axisX:{
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 8,
				tickColor: "#f7f7f7",
				gridDashType: "solid",
				gridThickness: 1,
			},
			axisY:{
				title: "HITS",
				titleFontColor: "#373542",
				titleFontFamily: "Montserrat",
				titleFontSize: 14,
				titleFontWeight: "normal",
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 0,
				gridThickness: 0,
			},
			data: [
				{
					markerType: "circle",
					markerSize: 16,
					markerBorderColor: "#e7e7e6",
					markerBorderThickness: 4,
					markerColor: "#373542",
					legendMarkerType: "circle",
					type: "line",
					color: "#373542",
					lineThickness:1,
					lineColor: "#373542",
					axisYType:"primary",
					dataPoints: [
						{ y: 10, label: "MON"},
						{ y: 20, label: "TUE"},
						{ y: 15, label: "WED"},
						{ y: 5, label: "THU"},
						{ y: 12, label: "FRI"},
						{ y: 22, label: "SAT"},
						{ y: 10, label: "SUN"}
					]
				},
				
				
				
			],
			legend: {
				maxWidth: 750,
				itemWidth: 170,
				maxHeight: 300,
				itemWrap: false,
				fontSize: 14,
				
				fontFamily: "Open Sans",
				fontColor: "#373542",
				cursor:"pointer",
				horizontalAlign: "right",  // "center" , "left"
				itemclick : function(e) {
					if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
						e.dataSeries.visible = false;
					}else {
						e.dataSeries.visible = true;
					}
					chart.render();
				}
			}
		});
		chart.render();

		var charttwo = new CanvasJS.Chart("tg-performancecharttwo",
		{
			width:800,
			height:350,
			animationEnabled: true, 
			animationDuration: 2000,
			backgroundColor: "#f7f7f7",
			toolTip:{
				enabled: false,
			},
			axisX:{
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 8,
				tickColor: "#f7f7f7",
				gridDashType: "solid",
				gridThickness: 1,
			},
			axisY:{
				title: "HITS",
				titleFontColor: "#373542",
				titleFontFamily: "Montserrat",
				titleFontSize: 14,
				titleFontWeight: "normal",
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 0,
				gridThickness: 0,
			},
			data: [
				{
					markerType: "circle",
					markerSize: 16,
					markerBorderColor: "#e7e7e6",
					markerBorderThickness: 4,
					markerColor: "#373542",
					legendMarkerType: "circle",
					type: "line",
					color: "#373542",
					lineThickness:1,
					lineColor: "#373542",
					axisYType:"primary",
					dataPoints: [
						{ y: 10, label: "MON"},
						{ y: 20, label: "TUE"},
						{ y: 15, label: "WED"},
						{ y: 5, label: "THU"},
						{ y: 12, label: "FRI"},
						{ y: 22, label: "SAT"},
						{ y: 10, label: "SUN"}
					]
				},
			],
			legend: {
				maxWidth: 750,
				itemWidth: 170,
				maxHeight: 300,
				itemWrap: false,
				fontSize: 14,
				fontFamily: "Open Sans",
				fontColor: "#373542",
				cursor:"pointer",
				horizontalAlign: "right",  // "center" , "left"
				itemclick : function(e) {
					if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
						e.dataSeries.visible = false;
					}else {
						e.dataSeries.visible = true;
					}
					charttwo.render();
				}
			}
		});
		charttwo.render();

		var chartthree = new CanvasJS.Chart("tg-performancechartthree",
		{
			width:800,
			height:350,
			animationEnabled: true, 
			animationDuration: 2000,
			backgroundColor: "#f7f7f7",
			toolTip:{
				enabled: false,
			},
			axisX:{
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 8,
				tickColor: "#f7f7f7",
				gridDashType: "solid",
				gridThickness: 1,
			},
			axisY:{
				title: "HITS",
				titleFontColor: "#373542",
				titleFontFamily: "Montserrat",
				titleFontSize: 14,
				titleFontWeight: "normal",
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 0,
				gridThickness: 0,
			},
			data: [
				{
					markerType: "circle",
					markerSize: 16,
					markerBorderColor: "#e7e7e6",
					markerBorderThickness: 4,
					markerColor: "#373542",
					legendMarkerType: "circle",
					type: "line",
					color: "#373542",
					lineThickness:1,
					lineColor: "#373542",
					axisYType:"primary",
					dataPoints: [
						{ y: 10, label: "MON"},
						{ y: 20, label: "TUE"},
						{ y: 15, label: "WED"},
						{ y: 5, label: "THU"},
						{ y: 12, label: "FRI"},
						{ y: 22, label: "SAT"},
						{ y: 10, label: "SUN"}
					]
				},
			],
			legend: {
				maxWidth: 750,
				itemWidth: 170,
				maxHeight: 300,
				itemWrap: false,
				fontSize: 14,
				fontFamily: "Open Sans",
				fontColor: "#373542",
				cursor:"pointer",
				horizontalAlign: "right",  // "center" , "left"
				itemclick : function(e) {
					if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
						e.dataSeries.visible = false;
					}else {
						e.dataSeries.visible = true;
					}
					chartthree.render();
				}
			}
		});
		chartthree.render();

		var chartfour = new CanvasJS.Chart("tg-performancechartfour",
		{
			width:800,
			height:350,
			animationEnabled: true, 
			animationDuration: 2000,
			backgroundColor: "#f7f7f7",
			toolTip:{
				enabled: false,
			},
			axisX:{
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 8,
				tickColor: "#f7f7f7",
				gridDashType: "solid",
				gridThickness: 1,
			},
			axisY:{
				title: "HITS",
				titleFontColor: "#373542",
				titleFontFamily: "Montserrat",
				titleFontSize: 14,
				titleFontWeight: "normal",
				labelFontFamily: "Montserrat",
				labelFontColor: "#373542",
				labelFontSize: 14,
				labelFontWeight: "normal",
				lineThickness: 2,
				tickLength: 0,
				gridThickness: 0,
			},
			data: [
				{
					markerType: "circle",
					markerSize: 16,
					markerBorderColor: "#e7e7e6",
					markerBorderThickness: 4,
					markerColor: "#373542",
					legendMarkerType: "circle",
					type: "line",
					color: "#373542",
					lineThickness:1,
					lineColor: "#373542",
					axisYType:"primary",
					dataPoints: [
						{ y: 10, label: "MON"},
						{ y: 20, label: "TUE"},
						{ y: 15, label: "WED"},
						{ y: 5, label: "THU"},
						{ y: 12, label: "FRI"},
						{ y: 22, label: "SAT"},
						{ y: 10, label: "SUN"}
					]
				},
			],
			legend: {
				maxWidth: 750,
				itemWidth: 170,
				maxHeight: 300,
				itemWrap: false,
				fontSize: 14,
				fontFamily: "Open Sans",
				fontColor: "#373542",
				cursor:"pointer",
				horizontalAlign: "right",  // "center" , "left"
				itemclick : function(e) {
					if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
						e.dataSeries.visible = false;
					}else {
						e.dataSeries.visible = true;
					}
					chartfour.render();
				}
			}
		});
		chartfour.render();
	};

	/*-------------------------------------
				WINDOW HEIGHT TO DIV
		-------------------------------------*/
		function setHeight() {
			var vph = $(window).height();
			$('#tg-main.tg-searchlist-v2 .tg-map, #tg-main.tg-searchlist-v2 .tg-search-result').css('height', vph);
		}
		setHeight();
		$(window).resize(function() {
			setHeight();
		});
		/*-------------------------------------
				SEARCH LIST SCROLL
		-------------------------------------*/
		$("#tg-searchlist-scrol").niceScroll({
			cursorcolor:"#ffba00",
			cursorborderradius: "0",
			cursorwidth: "5px",
			cursorborder: "0",
			background: "#f7f7f7",
			autohidemode: false,
			smoothscroll: true,
			bouncescroll: true,
		});
	/*-------------------------------------
				DATE PICKER RANGE
	-------------------------------------*/
		(function(){
		var startDate = new Date('01/01/2012');
		var FromEndDate = new Date();
		var ToEndDate = new Date();
		ToEndDate.setDate(ToEndDate.getDate()+365);
		$('.from_date').datepicker({
			weekStart: 1,
			startDate: '01/01/2012',
			endDate: FromEndDate, 
			autoclose: true
		})
			.on('changeDate', function(selected){
				startDate = new Date(selected.date.valueOf());
				startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
				$('.to_date').datepicker('setStartDate', startDate);
			}); 
		$('.to_date')
			.datepicker({
				weekStart: 1,
				startDate: startDate,
				endDate: ToEndDate,
				autoclose: true
			})
			.on('changeDate', function(selected){
				FromEndDate = new Date(selected.date.valueOf());
				FromEndDate.setDate(FromEndDate.getDate(new Date(selected.date.valueOf())));
				$('.from_date').datepicker('setEndDate', FromEndDate);
			});
		})();
	/*-------------------------------------
			SUBSCRIPTION COUNTER
	-------------------------------------*/
		jQuery('#tg-subscription-counter').countdown({
			date: '10/5/2017 13:41:59',
			offset: -100,
		}, function () {
			alert('Done!');
		});
	/* -------------------------------------
			PRETTY PHOTO GALLERY
	-------------------------------------- */
	/*$("a[data-rel]").each(function () {
		$(this).attr("rel", $(this).data("rel"));
	});
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});*/
	/* -------------------------------------
			PROGRESS BAR
	-------------------------------------- */
	/*try {
		$('#tg-ourskill').appear(function () {
			jQuery('.skill-holder').each(function () {
				jQuery(this).find('.skill-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	} catch (err) {}*/
	/* -------------------------------------
			COUNTER
	-------------------------------------- */
	/*try {
		$('.tg-counters').appear(function () {
			$('.tg-timer').countTo()
		});
	} catch (err) {}*/
	/* -------------------------------------
			THEME ACCORDION
	-------------------------------------- */
	/*$('#accordion .panel-heading').on('click',function () {
		$('.panel-heading').removeClass('active');
		$(this).parents('.panel-heading').addClass('active');
		$('.panel').removeClass('active');
		$(this).parent().addClass('active');
	});*/
	
});