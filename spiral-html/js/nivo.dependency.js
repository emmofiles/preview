//Nivo slider dependency

jQuery(document).ready(function($) {
    "use strict";

	$(window).load(function() {

	    $('#portfolio_gallery_slider').nivoSlider({
			effect: 'fade', //Specify sets like: 'fold,fade,sliceDown'
			pauseTime: 3000, //How long each slide will show
			directionNav: true, //Next & Prev navigation
			controlNav: true,
			controlNavThumbs: true,
			controlNavThumbsFromRel: false,
			manualAdvance: false,
			prevText: '<span class="nivo_prev"></span>',
    		nextText: '<span class="nivo_next"></span>',
    	});
	});

});