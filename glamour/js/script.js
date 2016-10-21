jQuery(function($) {
    'use strict';

    (function() {
        $(window).on('load', function() {

            /*
            =========================================================================================
            1. Spinner 
            =========================================================================================
            */
            


            /*
            =========================================================================================
            2.PARALLAX
            =========================================================================================
            */
            parallaxInit();
            function parallaxInit() {
                $('.slider-parallax').parallax("30%", 0.1);
                $('.testimonial-parallax').parallax("30%", 0.1);
                $('.page-header-parallax').parallax("30%", 0.1);
                /*add as necessary*/
            }
        });
    }());


    (function() {
        $(window).on('scroll', function() {

            /*
            =========================================================================================
            3. NAV SCROLL FIX
            =========================================================================================
            */
            if ($(window).scrollTop() > 80) {
                $("nav.transparrent-bg").css({
                    'background-color': '#fff',
                    'border-bottom' : '1px solid #eee'
                });
                $("nav.transparrent-bg .menuzord-menu > li > a").css({
                    'padding-top': '26px',
                    'color': '#333'    
                }); 
                $("nav.transparrent-bg .menuzord-brand").css({
                    'margin-top': '15px',   
                });  
                $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
                    'padding-top': '26px',
                    'color': '#333'    
                });   
                $("nav").addClass("nav_border");               
                $(".changeable").attr("src", "images/logo.png");              
            } else {
                $("nav.transparrent-bg").css({
                    'background-color': 'transparent',
                    'border' : '1px solid transparent'
                });
                $("nav.transparrent-bg .menuzord-menu > li > a").css({
                    'padding-top': '40px' ,
                    'color': '#fff'   
                });  
                $("nav.transparrent-bg .menuzord-brand").css({
                    'margin-top': '28px',   
                }); 
                $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
                    'padding-top': '40px',
                    'color': '#fff'    
                });   
                $("nav").removeClass("nav_border");               
                $(".changeable").attr("src", "images/logo-2.png");                               
            }



            /*
            =========================================================================================
            5. MENU  FOCUS FIX 
            =========================================================================================
            */             
            $(".page").each(function() {
                var bb = $(this).attr("id");
                var hei = $(this).outerHeight();
                var grttop = $(this).offset().top - 80;
                if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                    var uu = $(".onepage .menuzord-menu > li > a[href='#" + bb + "']").parent().addClass("active");
                } else {
                    var uu = $(".onepage .menuzord-menu > li > a[href='#" + bb + "']").parent().removeClass("active");
                }
            });


        });
    }());


    (function() {
        /*
        =========================================================================================
        6. MENU   
        =========================================================================================
        */        
        $("#menuzord").menuzord({
            align: "right",
            scrollable: true
        });



        /*
        =========================================================================================
        12. SEARCH OVERLY
        =========================================================================================
        */
        $("#filter-search").click(function() {
            $(".full-page-search").addClass("open-search");
        });
        $(".sr-overlay").click(function() {
            $(".full-page-search").removeClass("open-search");
        });


    }());
});