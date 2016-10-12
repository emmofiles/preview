(function($) {
    "use strict";

    /* -------------------------------------------------------
     Portfolio filter set active class for style
    ----------------------------------------------------------*/
    $('.portfolio-filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* --------------------------------------------------------
     Isotope | initialization Isotope
     --------------------------------------------------------- */
    var $varPortfolio = $(".portfolio:not(.portfolio-masonry)");
    if ($.fn.imagesLoaded && $varPortfolio.length > 0) {
        imagesLoaded($varPortfolio, function() {
            setTimeout(function() {
                $varPortfolio.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows',
                    filter: '*'
                });
                $(window).trigger("resize");
            }, 500);

        });
    };


    /* ----------------------------------------------------
     Portfolio masonry style isotope
     ------------------------------------------------------*/
    var $varPortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded == 'function') {
        imagesLoaded($varPortfolioMasonry, function() {
            setTimeout(function() {
                $varPortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: "*"
                });
            }, 500);

        });
    };

    /* ---------------------------------------------------
     Portfolio filtering
     ---------------------------------------------------- */
    $('.portfolio-filter').on('click', 'a', function() {
        $('#filters button').removeClass('current');
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents(".portfolio-filter-wrap").next().isotope({
            filter: filterValue
        });
    });

    /* ---------------------------------------------------
     Portfolio filtering random
     ---------------------------------------------------- */
    $('.random-btn').on('click', function() {
        $varPortfolio.isotope('updateSortData').isotope({
            sortBy: 'random'
        });
    });

    /* -----------------------------------------------
     Venobox Activation
     -------------------------------------------------*/
    $('.venobox').venobox();

    /*------------------------------------------------
     Scroll Up activation
    -------------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------------------------------------------------
     Fun Fact Counter Activation
    -------------------------------------------------- */
    $('.fun-fact-numb').counterUp({
        delay: 20,
        time: 2000
    });

    /*------------------------------------------------
      Top menu stick
     -------------------------------------------------- */
    var sticky_menu = $("#sticky-header-area");
    var pos = sticky_menu.position();
    if (sticky_menu.length) {
        var windowpos = sticky_menu.offset().top;
        $(window).on('scroll', function() {
            var windowpos = $(window).scrollTop();
            if (windowpos > pos.top) {
                sticky_menu.addClass("sticky");
            } else {
                sticky_menu.removeClass("sticky");
            }
        });
    }

    /*------------------------------------------------
     All owl carousel activation code goes here
    -------------------------------------------------- */

    // Brand image carousel
    $(".client-logo-wrapper ").owlCarousel({
        autoPlay: false,
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        navigation: false,
        pagination: false
    });

    // Hero Slider carousel
    $(".carousel-hero-slider-wrap").owlCarousel({
        autoPlay: false,
        pagination: false,
        singleItem: true,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    // Post galley slider, Testimonial, Instragram widget active.
    $(".post-gallery-img, .testimonial-curosel-base, .instra-widget").owlCarousel({
        autoPlay: false,
        pagination: true,
        singleItem: true,
        navigation: false
    });

    // Related project carousel, Popular post full carousel
    $(".related-project-carousel, .popular-post-carousel-full").owlCarousel({
        autoPlay: false,
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [570, 1],
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    // Related post carousel
    $(".popular-post-carousel").owlCarousel({
        autoPlay: false,
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    /*--------------------------------------
      Parallax  selector
    ------------------------------------------*/
    $('.parallax-bg-area').parallax("50%", 0.3);

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
        spinner:"spinner1",   //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#ffffff"
    });

})(jQuery);