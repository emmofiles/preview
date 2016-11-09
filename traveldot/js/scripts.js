jQuery(document).ready(function ($) {
	"use strict";
		// Maplace Destination Markers
	var LocsUS = [
		{
			lat: 32.318231,
			lon: -86.902298,
			title: 'Albama'
		},
		{
			lat: 64.200841,
			lon: -149.493673,
			title: 'Alaska'
		},
		{
			lat: 34.048928,
			lon: -111.093731,
			title: 'Arizona'
		},
		{
			lat: 35.201050,
			lon: -91.831833,
			title: 'Arkansas'
		},
		{
			lat: 36.778261,
			lon: -119.417932,
			title: 'California'
		},
		{
			lat: 39.550051,
			lon: -105.782067,
			title: 'Colorado'
		},
		{
			lat: 41.603221,
			lon: -73.087749,
			title: 'Connecticut'
		},
		{
			lat: 38.910832,
			lon: -75.527670,
			title: 'Delaware'
		},
		{
			lat: 27.664827,
			lon: -81.515754,
			title: 'Florida'
		},
		{
			lat: 32.165622,
			lon: -82.900075,
			title: 'Georgia'
		},
		{
			lat: 19.896766,
			lon: -155.582782,
			title: 'Hawaii'
		},
		{
			lat: 44.068202,
			lon: -114.742041,
			title: 'Idaho'
		},
		{
			lat: 40.633125,
			lon: -89.398528,
			title: 'Illinois'
		},
		{
			lat: 40.267194,
			lon: -86.134902,
			title: 'Indiana'
		},
		{
			lat: 41.878003,
			lon: -93.097702,
			title: 'Iowa'
		},
		{
			lat: 39.011902,
			lon: -98.484246,
			title: 'Kansas'
		},
		{
			lat: 37.839333,
			lon: -84.270018,
			title: ' Kentucky'
		},
		{
			lat: 30.984298,
			lon: -91.962333,
			title: 'Louisiana'
		},
		{
			lat: 45.253783,
			lon: -69.445469,
			title: 'Maine'
		},
		{
			lat: 39.045755,
			lon: -76.641271,
			title: 'Maryland'
		},
		{
			lat: 42.407211,
			lon: -71.382437,
			title: ' Massachusetts'
		},
		{
			lat: 44.314844,
			lon: -85.602364,
			title: 'Michigan'
		},
		{
			lat: 46.729553,
			lon: -94.685900,
			title: 'Minnesota'
		},
		{
			lat: 32.354668,
			lon: -89.398528,
			title: 'Mississippi'
		},
		{
			lat: 37.964253,
			lon: -91.831833,
			title: 'Missouri'
		},
		{
			lat: 46.879682,
			lon: -110.362566,
			title: 'Montana'
		},
		{
			lat: 41.492537,
			lon: -99.901813,
			title: 'Nebraska'
		},
		{
			lat: 38.802610,
			lon: -116.419389,
			title: 'Nevada'
		},
		{
			lat: 43.193852,
			lon: -71.572395,
			title: 'New Hampshire'
		},
		{
			lat: 40.058324,
			lon: -74.405661,
			title: 'New Jersey'
		},
		{
			lat: 34.519940,
			lon: -105.870090,
			title: 'New Mexico'
		},
		{
			lat: 40.712784,
			lon: -74.005941,
			title: 'New York'
		},
		{
			lat: 35.759573,
			lon: -79.019300,
			title: 'North Carolina'
		},
		{
			lat: 47.551493,
			lon: -101.002012,
			title: 'North Dakota'
		},
		{
			lat: 40.417287,
			lon: -82.907123,
			title: 'Ohio'
		},
		{
			lat: 35.007752,
			lon: -97.092877,
			title: 'Oklahoma'
		},
		{
			lat: 43.804133,
			lon: -120.554201,
			title: 'Oregon'
		},
		{
			lat: 41.203322,
			lon: -77.194525,
			title: ' Pennsylvania'
		},
		{
			lat: 41.580095,
			lon: -71.477429,
			title: ' Rhode Island'
		},
		{
			lat: 33.836081,
			lon: -81.163725,
			title: ' South Carolina'
		},
		{
			lat: 43.969515,
			lon: -99.901813,
			title: 'South Dakota'
		},
		{
			lat: 35.517491,
			lon: -86.580447,
			title: 'Tennessee'
		},
		{
			lat: 31.968599,
			lon: -99.901813,
			title: 'Texas'
		},
		{
			lat: 39.320980,
			lon: -111.093731,
			title: 'Utah'
		},
		{
			lat: 44.558803,
			lon: -72.577841,
			title: 'Vermont'
		},
		{
			lat: 37.431573,
			lon: -78.656894,
			title: ' Virginia'
		},
		{
			lat: 38.907192,
			lon: -77.036871,
			title: 'Washington'
		},
		{
			lat: 38.597626,
			lon: -80.454903,
			title: 'West Virginia'
		},
		{
			lat: 43.784440,
			lon: -88.787868,
			title: 'Wisconsin'
		},
		{
			lat: 43.075968,
			lon: -107.290284,
			title: 'Wyoming'
		}
	];
	var LocsRoute = [
		{
			lat: 45.4654,
			lon: 9.1866,
			title: 'Milan, Italy',
			html: '<h3>Milan, Italy</h3>'
		},
		{
			lat: 47.36854,
			lon: 8.53910,
			title: 'Zurich, Switzerland',
			html: '<h3>Zurich, Switzerland</h3>',
			visible: false
		},
		{
			lat: 48.892,
			lon: 2.359,
			title: 'Paris, France',
			html: '<h3>Paris, France</h3>',
			stopover: true
		},
		{
			lat: 48.13654,
			lon: 11.57706,
			title: 'Munich, Germany',
			html: '<h3>Munich, Germany</h3>'
		}
	];
	if ('undefined' !== typeof Maplace && $('.td-gmap').length ) {
		$('a[href="#destinations-map"]').on('shown.bs.tab', function () {
			var map = new Maplace({
				map_div: '.td-gmap',
				controls_title: 'Choose a location:',
				locations: LocsUS,
				map_options: {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					set_center: [39.603761, -103.639344],
					zoom: 6
				}
			}).Load();
    		google.maps.event.trigger(map, 'resize');
		});
	}

	if ('undefined' !== typeof Maplace && $('#gmap-route').length ) {
		// Maplace Route Map
		new Maplace({
			locations: LocsRoute,
			map_div: '#gmap-route',
			generate_controls: false,
			show_markers: false,
			type: 'directions',
			draggable: false
		}).Load();
	}

	// Search Filter
	$('#searchFilter').on('keyup', function(event) {

		var target = $(this),
			targetValue = $.trim(target.val().toLowerCase()),
			targetFilter = $('#td-search-filter-list li'),
			hasitems = false;

		$('#td-search-filter-list').hide();

		targetFilter.each( function() {

			var item = $(this),
				link = item.children('a'),
				linkText = $.trim(link.text().toLowerCase());
			if (!targetValue.length || linkText.substring(0, targetValue.length) !== targetValue ) {
				return item.hide();
			}
			item.show();
			hasitems = true;
		});
		if(hasitems) {
			$('#td-search-filter-list').show();
		}
	});

	// Bootstrap Dropdown Fix
	$('.dropdown-menu').on ('click', function(e) {
		var target = $( e.target );
		if ( target.is('a') ) {
			if ( target.filter(":not([data-toggle])").length ) {
				return;
			}
			var tabID = target.attr('href'),
				parent = target.parent();

			parent.siblings().find('a.active').removeClass('active');
			target.addClass('active');

			$( tabID ).addClass('active');
			$( tabID ).siblings().removeClass('active');
		}
		e.stopPropagation();
		e.preventDefault();
	});

	// UI Dropdowns
	$('#selectAdults').selectmenu();
	$('#selectChildren').selectmenu();
	$('#selectInfants').selectmenu();

	// Date Range Picker
	var dateFormat = "mm/dd/yy",
		from = $( "#from" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true
		}).on( "change", function() {
			to.datepicker( "option", "minDate", getDate( this ) );
		}),
		to = $( "#to" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true
		}).on( "change", function() {
			from.datepicker( "option", "maxDate", getDate( this ) );
		});

	function getDate( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( dateFormat, element.value );
		} catch( error ) {
			date = null;
		}
		return date;
	}

	// Footer Map Parallax Scrolling
	var getmapheight = $(".footer-map").height();
	$(".wrapper").css({ "margin-bottom": getmapheight});

	// Filterizr
	if ( "function" === typeof $.fn.filterizr && $('.filtr-container').length ) {
		$('.filtr-container').filterizr();
	}

	$('.td-nav-filter .nav-item').on('click', '.nav-link', function(){
		var self = $(this),
			parent = self.parent();
		parent.siblings().find('.nav-link.active').removeClass('active');
		self.addClass('active');
	});

}); //Document Ready