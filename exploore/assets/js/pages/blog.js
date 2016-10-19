jQuery(function($){
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function(){

        // video play
        var gurl = $(".video-embed")[0].src;
        $(".video-button-play ").on('click', function(event){
            $(".video-embed").addClass('show-video');
            $(".video-button-close").addClass('show-video');
            $(".video-embed")[0].src += "&autoplay=1";
            event.preventDefault();
        });

        $(".video-button-close").on('click', function(event){
            $(".video-embed")[0].src = gurl;
            $(".video-embed").removeClass('show-video');
            $(".video-button-close").removeClass('show-video');

            //$(".video-embed")[0].removeAttribute("&autoplay=1");
        });

        // VOTE RANGTING
        $('.stars-rating span a').on('click', function(e){
            e.preventDefault();
            $('.stars-rating span').find('a').removeClass('active');
            $(this).addClass('active');
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function(){
        SLZ.mainFunction();
    });

    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
