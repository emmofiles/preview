(function($) { "use strict";

	//Video Responsive
	$('.container').fitVids();

	//Header Scroll
	var $header = $("header"),
    $clone = $header.before($header.clone().addClass("clone"));
	function init() {
        window.addEventListener('scroll', function(e){
			
			var mq = window.matchMedia( "(min-width: 992px)" );
			
			if (mq.matches) {
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 200,
                header = document.querySelector("header.clone");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }

            }
			}

            
        });
    }
    window.onload = init();

	//Testimonial Slider    

	$(document).ready(function() {

		$("#client-logo").owlCarousel({
	        navigation: false, 
	        slideSpeed : 600,
	        autoPlay : 5000,
	        items : 8,
			itemsDesktop      : [1199,8],
			itemsDesktopSmall     : [979,6],
			itemsTablet       : [768,4],
			itemsMobile       : [479,2],
	        pagination: false
	    });

		$("#latest-post").owlCarousel({
	        navigation: true, 
	        slideSpeed : 600,
	        autoPlay : false,
	        items : 3,
			itemsDesktop      : [1199,3],
			itemsDesktopSmall     : [979,2],
			itemsTablet       : [768,2],
			itemsMobile       : [479,1],
	        pagination: false,
	        navigationText: [
		      "<i class='fa fa-chevron-left'></i>",
		      "<i class='fa fa-chevron-right'></i>"
		    ],
	    });
	 
		var sync1 = $("#sync-3");
		var sync2 = $("#sync-4");

		sync1.owlCarousel({
		singleItem : true,
		autoPlay: 6000,
		transitionStyle : "fade",
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
		});


		sync2.owlCarousel({
		items : 6,
		itemsDesktop      : [1199,6],
		itemsDesktopSmall     : [979,6],
		itemsTablet       : [768,6],
		itemsMobile       : [479,3],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
		});

		function syncPosition(el){
		var current = this.currentItem;
		$("#sync-4")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync-4").data("owlCarousel") !== undefined){
		  center(current)
		}
		}

		$("#sync-4").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
		});

		function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}

		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}

		}

	});

	//Responsive Tabs

	$('#continal-tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('#continal-tabs2').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('#continal-tabs3').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('#continal-tabs4').responsiveTabs({
        startCollapsed: 'accordion'
    });

	//Skills Counter 
	
	jQuery(document).ready(function($){
        $('.counter-skills').counterUp({
            delay: 100,
            time: 3000
        });
    });	

	//Project Slider

	$(".project-slider").owlCarousel({
        navigation: true, 
        slideSpeed : 600,
        autoPlay : 6000,
        singleItem:true,
        pagination: false,
        navigationText: [
	      "<i class='fa fa-chevron-left'></i>",
	      "<i class='fa fa-chevron-right'></i>"
	    ],
    });

	// Menu Mobile
	
	$('.btn-toggle').on('click',function(){

		var parent = $(this).parents('header');
		if(parent.find('nav').hasClass('menu-mobile')){
            parent.find('nav').removeClass('menu-mobile');
        }else{
            parent.find('nav').addClass('menu-mobile');
        }

        if(parent.find('.top-info').hasClass('menu-mobile')){
            parent.find('.top-info').removeClass('menu-mobile');
        }else{
            parent.find('.top-info').addClass('menu-mobile');
        }

	});
	
	$( '.arrow-parent' ).on( 'click', function() {

		if($(this).siblings('ul').hasClass('show')){
            $(this).siblings('ul').removeClass('show');
        }else{
            $(this).siblings('ul').addClass('show');
        }
		
	} );

	//Isotop Projects

	window.onresize = function(event) {
		$('#gallery').isotope('reLayout');
  	};

  	$(window).load(function() {
		// --------------------------------------------------
		// filtering gallery
		// --------------------------------------------------
		var $container = $('#gallery');
		$container.isotope({
			itemSelector: '.item',
			filter: '*'
		});

		$('#filter a').on( 'click', function() {
			var $this = $(this);
			if ( $this.hasClass('current') ) {
				return false;
				}
			var $optionSet = $this.parents();
			$optionSet.find('.current').removeClass('current');
			$this.addClass('current');
					
			var selector = $(this).attr('data-filter');
			$container.isotope({ 
				filter: selector,
			});
			return false;
		});

	});



  	$(document).ready(function($){

  		//Accordion

		$(".accordion").smk_Accordion({
			closeAble: true 
		});

		//Colorbox Project

		$(".item-image").colorbox({rel:'item-image', maxWidth:'95%', maxHeight:'95%', transition: 'elastic'});

	});

	// BACK TO TOP BUTTON

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 300) {
	      $('#back-to-top').fadeIn('slow');
	    } else {
	      $('#back-to-top').fadeOut('slow');
	    }
	  });
	$('#back-to-top').on( 'click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


	//Count Down

	jQuery(document).ready(function() {		
		
    
	/**
	 * downCount: Simple Countdown clock with offset
	 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
	 */

	
		$.fn.downCount = function (options, callback) {
			var settings = $.extend({
					date: null,
					offset: null
				}, options);

			// Throw error if date is not set
			if (!settings.date) {
				$.error('Date is not defined.');
			}

			// Throw error if date is set incorectly
			if (!Date.parse(settings.date)) {
				$.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
			}

			// Save container
			var container = this;

			/**
			 * Change client's local date to match offset timezone
			 * @return {Object} Fixed Date object.
			 */
			var currentDate = function () {
				// get client's current date
				var date = new Date();

				// turn date to utc
				var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

				// set new Date object
				var new_date = new Date(utc + (3600000*settings.offset))

				return new_date;
			};

			/**
			 * Main downCount function that calculates everything
			 */
			function countdown () {
				var target_date = new Date(settings.date), // set target date
					current_date = currentDate(); // get fixed current date

				// difference of dates
				var difference = target_date - current_date;

				// if difference is negative than it's pass the target date
				if (difference < 0) {
					// stop timer
					clearInterval(interval);

					if (callback && typeof callback === 'function') callback();

					return;
				}

				// basic math variables
				var _second = 1000,
					_minute = _second * 60,
					_hour = _minute * 60,
					_day = _hour * 24;

				// calculate dates
				var days = Math.floor(difference / _day),
					hours = Math.floor((difference % _day) / _hour),
					minutes = Math.floor((difference % _hour) / _minute),
					seconds = Math.floor((difference % _minute) / _second);

					// fix dates so that it will show two digets
					days = (String(days).length >= 2) ? days : '0' + days;
					hours = (String(hours).length >= 2) ? hours : '0' + hours;
					minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
					seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

				// based on the date change the refrence wording
				var ref_days = (days === 1) ? 'day' : 'days',
					ref_hours = (hours === 1) ? 'hour' : 'hours',
					ref_minutes = (minutes === 1) ? 'minute' : 'minutes',
					ref_seconds = (seconds === 1) ? 'second' : 'seconds';
					

				// set to DOM
				container.find('.days').text(days);
				container.find('.hours').text(hours);
				container.find('.minutes').text(minutes);
				container.find('.seconds').text(seconds);

				container.find('.days_ref').text(ref_days);
				container.find('.hours_ref').text(ref_hours);
				container.find('.minutes_ref').text(ref_minutes);
				container.find('.seconds_ref').text(ref_seconds);
			};
			
			// start
			var interval = setInterval(countdown, 1000);
		};
	
	
		$('.countdown').downCount({
		  date: '12/30/2016 12:00:00',
		  offset: +10
		}, function () {
		  alert('WOOT WOOT, done!');
		});
	
	});

})(jQuery);