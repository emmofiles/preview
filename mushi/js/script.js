jQuery(document).ready(function(){
	
	"use strict";

	$(".popup-client > span").on("click", function(){
		$(".account-popup-sec").addClass("active");
		$("html").addClass("no-scroll");
	});

	$(".close-popup").on("click", function(){
		$(".account-popup-sec").removeClass("active");
		$("html").removeClass("no-scroll");
	});

	$('.menu-toggle').on("click", function(){
		$(".menu nav").slideToggle();
	});

	// Get Header Height //
	var stick = $(".simple-header.for-sticky").height();
	$(".simple-header.for-sticky").parent().css({
	    "padding-top": stick
	});


	$("header").on("click",function(e){
	    e.stopPropagation();
	});
	$(".menu-item-has-children > a").on("click",function(){
	    $(this).parent().siblings().children("ul").slideUp();
	    $(this).parent().siblings().removeClass("active");
	    $(this).parent().children("ul").slideToggle();
	    $(this).parent().toggleClass("active");
	    return false;
	});


	/*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
		$(".for-sticky").addClass("sticky");
		}
		else{
		$(".for-sticky").removeClass("sticky");
		$("for-sticky").addClass("");
		}
	});	
	

	/*=================== Parallax ===================*/   
	$('.parallax').scrolly({bgParallax: true});
	
});