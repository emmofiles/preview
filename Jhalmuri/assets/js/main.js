(function($) {
  
  "use strict";

 

   /*
    =======================================================
        // Preloader
    ======================================================
        */
    $('.preloader').delay(5000).fadeOut('slow');

    

    /*--===================================
    dropdown search menubar
    =================================*/

       $(function(){
        // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
        $('.dropdown').on('show.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        // ADD SLIDEUP ANIMATION TO DROPDOWN //
        $('.dropdown').on('hide.bs.dropdown', function(e){
            e.preventDefault();
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
                //On Complete, we reset all active dropdown classes and attributes
                //This fixes the visual bug associated with the open class being removed too fast
                $('.dropdown').removeClass('open');
                $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
            });
        });
    });



   /*--======================
   navbar scroll
   ========================--*/

   /* Page Scroll to id fn call */
       $("#navigation-menu a,#slide-scroll").mPageScroll2id({
          highlightClass: "current-menu-item",
       });


   /*--=====================
   Navbar slide
   ======================--*/
   
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 80) {
                $(".navbar-brand").css({
                    'padding-top': '30px',
                    transition: 'all .6s linear 0s'
                });
                $(".navbar-nav > li > a").css({
                    'padding-top': '35px',
                    transition: 'all .6s linear 0s',
                    'padding-bottom': '25px'
                });
                $(".navbar-toggle").css({
                    'margin-top': '30px',
                    transition: 'all .6s linear 0s'
                });
                $(".button-toggle").css({
                   'margin-top': '37px',
                    transition: 'all .6s linear 0s'
                });
                $(".navbar-default").css({
                    'background-image': '-webkit-linear-gradient(left top, rgba(199, 45, 39, 0.8) , rgba(240, 132, 39, 0.8))',
                    transition: 'all 1s linear 0s'
                });
                $(".navbar-default").css({
                    'margin-top': '0px',
                    transition: 'all .6s linear 0s'
                });

            } else {
                $(".navbar-brand").css({
                    'padding-top': '50px',
                    transition: 'all .6s linear 0s'
                });
                 $(".navbar-nav > li > a").css({
                    'padding-top': '50px',
                    transition: 'all .6s linear 0s',
                    'padding-bottom': '15px'
                });
                $(".navbar-toggle").css({
                    'margin-top': '49px',
                    transition: 'all .6s linear 0s'
                });
                $(".button-toggle").css({
                    'margin-top': '52px',
                    transition: 'all .6s linear 0s'
                });
                $(".navbar-default").css({
                   'background-image': '-webkit-linear-gradient(left top, rgba(199, 45, 39, 0) , rgba(240, 132, 39, 0))',
                    border: '0px solid #ddd',
                    transition: 'all .6s linear 0s'
                });
                
            }
        });


    /*=======================================================
            // Vertical Center Welcome
    ======================================================*/
    setInterval(function () {
        var widnowHeight = $(window).height();
        var introHeight = $(".wellcome-txt").height();
        var paddingTop = widnowHeight - introHeight;
        $(".wellcome-txt").css({
            'padding-top': Math.round(paddingTop / 2) + 'px',
            'padding-bottom': Math.round(paddingTop / 2) + 'px'
        });
    }, 10);
    
  /*--=================================
    our achivment counter
  =======================================--*/
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });

  /*=======================================================
        Portfolio Filtering
  ======================================================*/
  /* mixitup portfolio filtering */

  $('#Container').mixItUp();

  /*--==============================
  portfolio popup
  ==============================--*/

    // Portfolio Item Inline popup (type inline)
        $('.inline-popup-trigger').magnificPopup({
            type: 'inline',
            modal: false,
            alignTop: true,
            fixedContentPos: true,
            fixedBgPos: false,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade-zoom',
            gallery: {
                enabled: false, // enable or disable gallery (false/true)
                arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)' // title for right button
            }
        });

        $(document).on('click', '.inline-popup-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });


  /*--=========================
   youtube popup video player
   =================== --*/

    jQuery("a.bla-1").YouTubePopUp();


  /*--=========================
  testimonial carosel js
  ===========================--*/

     $("#owl-demo").owlCarousel({
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          navigation : false
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
      });

     /*=======================================================
            Mailchimp
        ======================================================*/
        $('#mc-form').ajaxChimp({
            url: 'http://xyz.us14.list-manage.com/subscribe/post?u=4d82d41f1edf005408ef6f8ac&amp;id=a048f4e0dc'
                /* Replace Your AjaxChimp Subscription Link */
        });

  

     /*--===========================
     our partner slider
     ============================--*/

       var owl = $("#cuslogo-curosel");
        owl.owlCarousel({
            autoPlay: true, 
            slideSpeed:2000,
            pagination:false,
            navigation:true,    
            items : 4,
            /* transitionStyle : "fade", */    /* [This code for animation ] */
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,3],
            itemsMobile : [479,1],
        });
 


})(window.jQuery);