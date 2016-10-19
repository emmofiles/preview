jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function() {

        // Select box stacking order
        $('.result-filter-wrapper .select-wrapper').each(function(i) {
            $(this).css('z-index', 100 - i);
        });

        $('.result-wrapper').slick({
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 8,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
            ]
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
    });

    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
