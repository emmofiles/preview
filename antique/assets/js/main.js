




  /* --strict mode enabled 
	-------------------------------------*/
	"use strict";

$(window).on("load", function () {

	/* --preloader 
	-------------------------------------*/
    $("body").imagesLoaded(function () {
        $(".tb-preloader-wave").fadeOut();
        $("#tb-preloader").delay(200).fadeOut("slow").remove();
    });

});