jQuery(function($){
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function(){
        // Slide section about expert
        $('.wrapper-expert').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 1500,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 381,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });
        // Slide section about banner
        $('.wrapper-banner').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            speed: 1500,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    };
    /*=======================================
    =           END MAIN FUNCTION           =
    =======================================*/

    $(document).ready(function(){
        SLZ.mainFunction();
    });

    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
