$(document).ready(function($) {
    "use strict";
	  /* === jQuery for page scrolling plugin === */

    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    /* ======= Sticky Menu  ======= */
    $(window).scroll(function(){
        if ($(window).scrollTop() > 10){
            $('.main-nav').addClass("sticky");
        }else{
            $('.main-nav').removeClass("sticky");
        }
    });

    /* ======= Full Screen Menu  ======= */
    $('.nav-bars, .tt-nav').on('click', function(){
        $('.nav-bars').toggleClass('navbar-on');
        $('.tt-nav').fadeToggle();
        $('.tt-nav').removeClass('nav-hide');
    });


 	/* ======= Parallax  ======= */
  
        $.stellar({
            responsive: true,
            horizontalScrolling: false,
            verticalOffset: 0
        });


	/* ======= Counter  ======= */
        function countUp() {   
            var dataperc;   
            $('.statistic-percent').each(function(){
                dataperc = $(this).attr('data-perc'),
                $(this).find('.percentfactor').delay(6000).countTo({
                    from: 0,                 // number to begin counting
                    to: dataperc,      
                    speed: 1000,             // ms
                    refreshInterval: 10,
                });  
            });
        }   
        $('.statistic-percent').waypoint(function() {
            countUp();
        },
        {
            offset: '95%',                 
            triggerOnce: true
        });




  /* === magnificPopup === */
	$(window).load(function(){
    $('.tt-lightbox').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        fixedContentPos: false
        // other options
    });
 /* ======= shuffle js ======= */
    if ($('#portfolio-grid').length > 0) {
        /* initialize shuffle plugin */
        var $grid = $('#portfolio-grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter li').on('click', function (e) {
            e.preventDefault();

            // set active class
            $('#filter li').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    }
	
	});

});
