//jQuery(document).ready(function () {
//	"use strict"
//
//	/*Menu
//	---------*/
//
//	jQuery("#menuzord").menuzord({
//		align: "right",
//		effect: "fade",
//		animation: "none"
//	});
//
//	$(".testimonial-slider").owlCarousel({
//		items: 1,
//		pagination: false,
//		navigation: false,
//		rewindNav: true,
//		slideSpeed: 800,
//		paginationSpeed: 1600,
//		rewindSpeed: 400,
//	});
//
//
//
//
//
//
//
//
//});
//
//




jQuery(document).ready(function () {
	jQuery("#slider1").revolution({
		sliderType: "standard",
		sliderLayout: "auto",
		delay: 9000,
		navigation: {
			keyboardNavigation: "off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			mouseScrollReverse: "default",
			onHoverStop: "off",
			touch: {
				touchenabled: "on",
				swipe_threshold: 75,
				swipe_min_touches: 50,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:1024,
						style:"uranus",
						hide_onleave:false,
						direction:"vertical",
						h_align:"right",
						v_align:"center",
						h_offset:30,
						v_offset:0,
						space:5,
						tmp:'<span class="tp-bullet-inner"></span>'
					}
		},
		width: 1230,
		gridheight: 960
	});
	
});

