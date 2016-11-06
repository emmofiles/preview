/*

Template:  The Corps - Responsive Multi-purpose HTML5 Template
Author: potenzaglobalsolutions.com
Version: 1
Design and Developed by: potenzaglobalsolutions.com

NOTE:  

*/


/*================================================
[  Table of contents  ]
================================================
 
:: Preloader
:: mega menu 
:: Back to top 

======================================
[ End table content ]
======================================*/


/*************************
       preloader
*************************/
 $(window).load(function() {
      //preloader
     $("#load").fadeOut();
     $('#preloader').delay(0).fadeOut('slow');
  });
  

/*************************
       mega menu
*************************/
    
        jQuery(document).ready(function () {
            jQuery('#menu-1').megaMenu({
                // DESKTOP MODE SETTINGS
                logo_align          : 'left',         // align the logo left or right. options (left) or (right)
                links_align         : 'left',        // align the links left or right. options (left) or (right)
                socialBar_align     : 'left',    // align the socialBar left or right. options (left) or (right)
                searchBar_align     : 'right',   // align the search bar left or right. options (left) or (right)
                trigger             : 'hover',           // show drop down using click or hover. options (hover) or (click)
                effect              : 'fade',             // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
                effect_speed        : 400,          // drop down show speed in milliseconds
                sibling             : true,              // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
                outside_click_close : true,  // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
                top_fixed           : false,           // fixed the menu top of the screen. options (true) or (false)
                sticky_header       : false,       // menu fixed on top when scroll down down. options (true) or (false)
                sticky_header_height: 250,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
                menu_position       : 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
                full_width          : false,           // make menu full width. options (true) or (false)
                // MOBILE MODE SETTINGS
                mobile_settings     : {
                    collapse            : true,    // collapse the menu on click. options (true) or (false)
                    sibling             : true,      // hide the others showing drop downs when click on current drop down. options (true) or (false)
                    scrollBar           : true,    // enable the scroll bar. options (true) or (false)
                    scrollBar_height    : 400,  // scroll bar height in px value. this option works if the scrollBar option true.
                    top_fixed           : false,       // fixed menu top of the screen. options (true) or (false)
                    sticky_header       : false,   // menu fixed on top when scroll down down. options (true) or (false)
                    sticky_header_height: 200   // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
                }
            });
        }); 
 
 /*=====================================================*/
/* Click to Scroll */
/*=====================================================*/
     $('a.page-scroll').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
        var gap = 0;
        if ($('.navbar-default').hasClass('no-sticky')) { 
            gap = 0;
         }      
        $('html,body').animate({
          scrollTop: target.offset().top - gap
        }, 900);
       
            return false;
          }
        }
      });
     $(window).scroll(function () {
   if (!$('.navbar-default').hasClass('no-sticky')) {
        if ($(this).scrollTop() > 10) {      
            $('.navbar-default').addClass('sticky');
           }
         else {
            $('.navbar-default').removeClass('sticky');
        }
      }
   });
   $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })
/*************************
        Back To Top
*************************/

  $(document).ready(function(){
    $("#back-to-top").hide();
       $(window).scroll(function(){
             if ($(window).scrollTop()>100){
               $("#back-to-top").fadeIn(1500);
                 }
                 else
                  {
                   $("#back-to-top").fadeOut(1500);
                  }
              });
              //back to top
               $("#back-to-top").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                 return false;
                });
            });
