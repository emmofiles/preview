jQuery(function($) {
    "use strict";

    // Prettyphoto
    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // Twitter
    $('#tweecool').tweecool({
        //settings
        username: 'envato',
        profile_image: false,
        limit: 1
    });

    // Parallax 
    $.stellar({
        horizontalOffset: 50
    });

    // Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 100)
            $("header").css("background", "#000").css("padding", "0px 0px 13px");
        else
            $("header").css("background", "transparent");
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('body').on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});