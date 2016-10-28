// Supersized - FullScreen Background Slider
jQuery(function($){
	$.supersized({
	slide_interval          :   3000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	700,		// Speed of transition
	slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 					:  	[			// Slideshow Images
										{image : 'images/slider/1.jpg'},
										{image : 'images/slider/2.jpg'},
										{image : 'images/slider/3.jpg'}

		]
	});
});
