
jQuery(document).ready(function ($) {
     "use strict"
        
         /* switcher load */
        if ($('.switcher-icon').length > 0){
            $(".switcher-icon").click(function(event){
                event.preventDefault();
                if($(this).hasClass('in-out')){
                    $('.switcher-area').stop().animate({left:"-210px"}, 500);
                }else{
                    $('.switcher-area').stop().animate({left:"0px"}, 500);
                }
                $(this).toggleClass('in-out');
                return false;
            });
        }

        /* protfolio  isotope */
        if ($('.protfolio_menu').length > 0){
            $('.protfolio_menu').on( 'click', 'li.filter', function() {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });
        }
        // init Isotope
        if ($('.grid').length > 0){
            var $grid = $('.grid').isotope({
              itemSelector: '.grid-item',
              percentPosition: true,
              masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
              }
            });
        }
        
         /* nav_menu_toggler*/

        if ($('.nav_menu_toggler').length > 0){
            $(".nav_menu_toggler").click(function(){
                $(".icon").removeClass("nav_menu_remove");
                $(".nav_menu_content").removeClass("nav_menu_shift");
            });
        }
        
         
        /* //start  scroll to top  js */

        if ($('#scroll').length > 0){
            $("#scroll").click(function(){
                $('html,body').animate({scrollTop:0},1000);
            });
        }
         
        /* //  start  fullscreen_nav_content  js*/

        // if ($('.icon').length > 0){
        //     $(".icon").click(function(){
        //         $(".nav_menu_content").toggle();
        //     });
        // }

        if ($('.icon').length > 0){
            $(".icon").click(function(){
                $(".icon").addClass("nav_menu_remove");
                $(".nav_menu_content").addClass("nav_menu_shift");
            });
        }
        // if ($('.nav_menu_toggler').length > 0){
        //      $(".nav_menu_toggler").click(function(){
        //         $(".nav_menu_content").hide();
        //     });
        // }
        /* // jQuery sticky menu */

        if ($('#manu_area').length > 0){
           $("#manu_area").sticky({topSpacing: 0});
        }

        if ($('.header-area.page_header_area').length > 0){
           $(".header-area.page_header_area").sticky({topSpacing: 0});
        }

        
        /* jQuery smooth scroll */

        if ($('li.smoot-menu > a').length > 0){
            $('li.smoot-menu > a').bind('click', function(event) {
                var $anchor = $(this);
                var headerH = '59';
                $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
                }, 1200, 'easeInOutExpo');

                event.preventDefault();
            }); 
        }
        
        /* // Add scrollspy to */
        if ($('body').length > 0){   
            $('body').scrollspy({target: ".main_menu", offset: 60});
        }


        // navbar-toggle

        if ($('.navbar-toggle').length > 0){
            $(".navbar-toggle").click(function () {
                $("body").addClass("mobil-menu-activted");
            });

        }
        /* // jQuery client list carosul*/
        if ($('.client_list').length > 0){
            $('.client_list').owlCarousel({
                items:1,
                loop:true,
                autoplay:true,
                autoplayTimeout:10000,
            });
        }
       
            /*Preloader js call too  activation js file*/

        if ($('#fakeloader').length > 0){
            $("#fakeloader").fakeLoader({
                timeToHide:2000,
                zIndex:"9999999999999",
                spinner:"spinner4",
                bgColor:"rgba(51,51,51,33)", 

            });
        }
            
             // countdown timer  activation js file
        if ($('#example').length > 0){
           $('#example').countdown({
                date: '05/10/2019 23:59:59',
                offset: -8,
                day: 'Day',
                days: 'Days'
            }, function () {
                alert('Done!');
            });
        }


     /*start  tooltip  js */
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });  



        /* jQuery counter count */
        if ($('.counter').length > 0){
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });      
        }

        /* WOW Settings */
            var wow = new WOW( {
                mobile: false,
                offset: 0
            });
            wow.init();



});

 /* // start  scroll to top   js  
================================= */
$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $("#scroll").fadeIn();
    }
    else{
        $("#scroll").fadeOut();
    }
    return false;
});