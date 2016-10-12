jQuery(document).ready(function () {
	"use strict";
 $('.all-partner').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: false,
        items: 6,
        itemsDesktop: [1024, 6],
        itemsDesktopSmall: [768, 4],
        itemsTablet: [650, 2],
        itemsMobile: 1
    });

	$('.related-shop-item').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 3,
        itemsDesktop: [1024, 3],
        itemsDesktopSmall: [768, 2],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='ion-chevron-left'></i>",
		"<i class='ion-chevron-right'></i>"
		]
    })
	;$('.agent-full-detailed').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='ion-chevron-left'></i>",
		"<i class='ion-chevron-right'></i>"
		]
    });


	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	$('.slider-panel').owlCarousel({
        autoPlay: false,
        pagination: false,
		navigation: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsMobile: 1,
		navigationText: [
		"<i class='ion-chevron-left'></i>",
		"<i class='ion-chevron-right'></i>"
		]
    });
	$('.testimonial-box').owlCarousel({
        autoPlay: false,
        pagination: true,
        navigation: false,
        navigationText: [
		"<i class='ion-ios-arrow-thin-left'></i>",
		"<i class='ion-ios-arrow-thin-right'></i>"
        ],
       items: 3,
       itemsDesktop: [1024, 3],
       itemsDesktopSmall: [992, 3],
       itemsDesktopSmall: [768, 3],
       itemsTablet: [650, 1],
       itemsMobile: 1
    });
    $('.agent-inner').owlCarousel({
		autoPlay: false,
		pagination: true,
		navigation: false,
        navigationText: [
		"<i class='ion-ios-arrow-thin-left'></i>",
		"<i class='ion-ios-arrow-thin-right'></i>"
        ],
       items: 4,
       itemsDesktop: [1024, 4],
       itemsDesktopSmall: [768, 3],
       itemsTablet: [667, 2],
       itemsTablet: [650, 1],
       itemsMobile: 1
    });
    $('.rectangle-section').owlCarousel({
        autoPlay: false,
        pagination: true,
        navigation: false,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [768, 1],
        itemsTablet: [650, 1],
        itemsTablet: [320, 1],
        itemsMobile: 1
    });
    $('.home-two-slider #home-slider .slider-inner').owlCarousel({
        autoPlay: false,
        pagination: true,
        navigation: true,
        navigationText: [
		"<i class='ion-ios-arrow-thin-left'></i>",
		"<i class='ion-ios-arrow-thin-right'></i>"
        ],
       items: 1,
       itemsDesktop: [1024, 1],
       itemsDesktopSmall: [768, 1],
       itemsTablet: [650, 1],
       itemsMobile: 1
    });
    $('.home-four-slider #home-slider .slider-inner').owlCarousel({
        autoPlay: false,
        pagination: false,
        navigation: true,
        navigationText: [
		"<i class='ion-ios-arrow-thin-left'></i>",
		"<i class='ion-ios-arrow-thin-right'></i>"
        ],
       items: 1,
       itemsDesktop: [1024, 1],
       itemsDesktopSmall: [768, 1],
       itemsTablet: [650, 1],
       itemsMobile: 1
    });
    $('#youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=N2-HsIYd0Go'
        },
        type: 'iframe'
    });
    $('#myCarousel').carousel({
		interval:   4000
	});

    $('#myCarousel').carousel({
       interval:   4000
   });
   // Menu Active
   $("#menuzord").menuzord({
       align: "right",
       effect: "fade",
       animation: "zoom-in"
   });
});
// Load is used to ensure all images have been loaded, impossible with document
jQuery(window).load(function () {
	// Takes the gutter width from the bottom margin of .post
	var gutter = parseInt(jQuery('.post').css('marginBottom'));
	var container = jQuery('#posts');
	// Creates an instance of Masonry on #posts
	container.masonry({
		gutter: gutter,
		itemSelector: '.post',
		columnWidth: '.post'
	});
	// This code fires every time a user resizes the screen and only affects .post elements
	// whose parent class isn't .container. Triggers resize first so nothing looks weird.
	jQuery(window).bind('resize', function () {
		if (!jQuery('#posts').parent().hasClass('container')) {
			// Resets all widths to 'auto' to sterilize calculations

			post_width = jQuery('.post').width() + gutter;
			jQuery('#posts, body > #grid').css('width', 'auto');
			// Calculates how many .post elements will actually fit per row. Could this code be cleaner?
			posts_per_row = jQuery('#posts').innerWidth() / post_width;
			floor_posts_width = (Math.floor(posts_per_row) * post_width) - gutter;
			ceil_posts_width = (Math.ceil(posts_per_row) * post_width) - gutter;
			posts_width = (ceil_posts_width > jQuery('#posts').innerWidth()) ? floor_posts_width : ceil_posts_width;
			if (posts_width == jQuery('.post').width()) {
				posts_width = '100%';
			}
			// Ensures that all top-level elements have equal width and stay centered
			jQuery('#posts, #grid').css('width', posts_width);
			jQuery('#grid').css({'margin': '0 auto'});

		}
	}).trigger('resize');
});
