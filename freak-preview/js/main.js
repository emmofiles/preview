(function ($) {
"use strict";
$(window).load(function() {
	$(".preloader").fadeOut("slow");
});
$(document).ready(function($){
/*--
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "750",
	meanMenuContainer: ".main-menu-wrap",
});
/*--
	Scroll Up
------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});

$('#demo-container').mixItUp();


$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
	$('html, body').animate({
	  scrollTop: target.offset().top
	}, 1000);
	return false;
  }
}
});



});	
})(jQuery);	




/* ********************************************
    STICKY HEADER
******************************************** */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('#sticky-header').addClass("sticky");
        }
        else{
            $('#sticky-header').removeClass("sticky");
        }
    });
/* ********************************************************* */
