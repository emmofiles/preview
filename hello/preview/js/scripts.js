(function() {
    "use strict";
    $('#loader').delay(700).fadeOut();
    $('#mask').delay(1200).fadeOut("slow");

    // Global DOM elements
    window.upro = {
        ele: {}
    };
    upro.ele['win'] = $(window);
    upro.ele['doc'] = $(document);

    // Menu Top
    $('#main-nav').affix({
        offset: {
            top: 100
        }
    })


    // Pages Image
    $('#intro-page img').each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
            'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), rgba(0, 0, 0, 0.4) url(' + $src + ')',
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-size': 'cover',
        });
        $(this).remove();
    });

   
	// Animation Load
    $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if (animationDelay) {
            setTimeout(function() {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
            }, animationDelay);
        } else {
            element.addClass(animation + " visible");
            element.removeClass('hiding');
        }

    }, {
        accY: -150
    });


    upro.ele['win'].on('scroll', function() {
                // Back to Top On Scroll
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });


})();