/* -----------------------------------------------------------------------------

"FundMe - is a Premium HTML Responsive Templeate by HTMLmate Team. You can use this for anykind of Nonprofit website

File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Suelo

-------------------------------------------------------------------------------- */
(function() {

"use strict";

var vCard = {
	init: function() {
		this.Basic.init();  
	},

	Basic: {
		init: function() {

			this.preloader();
			this.pageAscensor();
			this.scrollOut();
			this.counterUp();
			this.testimonialSlide();
			this.clientSlide();
			this.workTab();
			this.switchOpen();
			this.blogSlide();
			this.mobileMenu();
			this.mobileProfile();
		},
/* Start Of Preloader
================================================*/
preloader: function (){

	$(window).on("load", function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
},
/* Start Of Preloader
================================================*/

/* - Start Switch open
================================================*/
switchOpen: function (){
	$('.color-switcher .open').on("click", function() {
		$('.color-switcher').toggleClass("open-switcher");
	});
},

/* - Start Switch open
================================================*/

/* Start Of pageAscensor
================================================*/
pageAscensor: function (){
	var ascensor = $('#vcard-ascensor').ascensor({
		height: "100%",
		ascensorFloorName:["about-me", "resume", "portfolio" , "blog" , "contact"], direction: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]]});
	var ascensorInstance = $('#vcard-ascensor').data('ascensor');
	var floorAdded = false;

	$(".menu-item  li").on("click", function(event, index) {
		ascensorInstance.scrollToFloor($(this).index());
	});

	$(".menu-item  li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

	ascensor.on("scrollStart", function(event, floor){
		$(".menu-item  li").removeClass("selected");
		$(".menu-item  li:eq("+floor.to+")").addClass("selected");
	});

	$(".prev").on("click", function() {
		ascensorInstance.prev();
	});

	$(".next").on("click", function() {
		ascensorInstance.next();
	});

	$(".direction").on("click", function() {
		ascensorInstance.scrollToDirection($(this).data("direction"));
	});
},
/* End of pageAscensor
================================================*/


/* Start Of Scroll-out
================================================*/
scrollOut: function (){
	if ($('.scroll-out').length) {
		$(".scroll-out").mCustomScrollbar({
			theme:"minimal-dark",
			autoHideScrollbar: true,
		});	


	};
},
/* end of Scroll-out
================================================*/


/* Start Of counter-up
================================================*/
counterUp: function (){
	$('.count').counterUp({
		delay: 50,
		time: 2000,
	});

},
/* - End Of counter-up
================================================*/


/* - Start of Testimonial slide
================================================*/
testimonialSlide: function (){
	$('.vcard-testimonial-slider').owlCarousel({
		responsiveClass:true,
		autoplay: false,
		responsive:{
			0:{
				items:1,
				pagination: true,
			},
			1000:{
				items:1,
				pagination: true,

			}
		},
	})

},
/* - End Of Testimonial slide
================================================*/

/* - Start of trusted client-slide
================================================*/
clientSlide: function (){
	$('.trusted-client-slide').owlCarousel({
		responsiveClass:true,
		margin:10,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:2,
			},
			600:{
				items:3,
			},
			700:{
				items:4,
			},
			1000:{
				items:4,

			}
		},
	})
},
/* - End Of trusted client-slide
================================================*/

/* Start Of Isotope
================================================*/
workTab: function (){
		/* activate jquery isotope */
		var $container = $('#posts').isotope({
			itemSelector : '.item',
			isFitWidth: true
		});

		$container.isotope({ filter: '*' });

    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
    	var filterValue = $(this).attr('data-filter');
    	$container.isotope({ filter: filterValue });
    });
    $('.tab-button').on("click", function() {

    //console.log("Clicked");
    $('.tab-button.active').removeClass('active');
    $(this).addClass('active');
});


},
/* End Of Isotope
================================================*/

/* - Start of trusted client-slide
================================================*/
blogSlide: function (){
	$('.blog-content').owlCarousel({
		responsiveClass:true,
		margin:10,
		navText:['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i'], 
		dotsSpeed:2000,
		navSpeed:2000,
		nav:true,
		smartSpeed:2000, 
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:1,
			},
			600:{
				items:1,
			},
			700:{
				items:2,
			},
			1000:{
				items:2,

			}
		},
	})
},
/* - End Of trusted client-slide
================================================*/



/* - Start of mobile menu
================================================*/
mobileMenu: function (){
	$('.mobile-menu-view .open').on("click", function() {
		$('.mobile-menu-view').toggleClass("open-menu");
	});
	$(".menu-item li").on("click", function(o) {
        o.preventDefault(), $(this).parent().parent().find("li").removeClass("selected"), $(this).addClass("selected")
    })
},

/* - End of mobile menu
================================================*/


/* - Start of mobile profile
================================================*/
mobileProfile: function (){
	$('.mobile-menu-view-profile .open').on("click", function() {
		$('.mobile-menu-view-profile').toggleClass("open-profile");
	});
},

/* - End of mobile profile
================================================*/

}
}
$(document).ready(function (){
	vCard.init();
});

})();