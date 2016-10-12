(function($) {
    "use strict";

    /*------------------------------------------------
     Scroll Up activation code goes hear
    -------------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------------------
    Mobile Menu active
    -----------------------------------*/
    $('.mobile-menu').meanmenu();
    
    /*-----------------------------
    Loader activation here. 
    -------------------------------*/
    $("#fakeloader").fakeLoader({
        timeToHide:1500, 
        zIndex:999999, 
        spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#ffffff"
    });

})(jQuery);