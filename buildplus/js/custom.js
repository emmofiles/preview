
var $ = jQuery.noConflict();

jQuery( document ).ready(function( $ ) {
  "use strict";


  /*----------------------------------------------------------------------*/
  /* =  Number Counter
  /*----------------------------------------------------------------------*/

      var timer = $('.timer');
        if(timer.length) {
          timer.appear(function () {
            timer.countTo();
          })
      }

  /*----------------------------------------------------------------------*/
  /* =  Owl carousell
  /*----------------------------------------------------------------------*/

    // Home Slider
    $("#slider").owlCarousel({
            autoPlay: 5000,
            slideSpeed: 700,
            navigation : true,
            stopOnHover: true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            pagination:false,
            navigationText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
      });

          // Fullwidth carousel
          $(".fullwidth-carousel").owlCarousel({
              autoPlay: 5000,
              slideSpeed: 350,
              singleItem: true,
              stopOnHover: true,
              autoHeight: true,
              navigation: true,
              pagination: false,
              navigationText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
          });

          // Item carousel
          $(".small-item-carousel").owlCarousel({
              autoPlay: false,
              //stopOnHover: true,
              items: 6,
              itemsDesktop: [1199, 4],
              itemsTabletSmall: [768, 3],
              itemsMobile: [480, 2],
              pagination: true,
              navigation: false,
          });

  /*-------------------------------------------------*/
  /* =  Search animation
  /*-------------------------------------------------*/
  
  var searchToggle = $('.open-search'),
    inputAnime = $(".form-search"),
    body = $('body');

  searchToggle.on('click', function(event){
    event.preventDefault();

    if ( !inputAnime.hasClass('active') ) {
      inputAnime.addClass('active');
    } else {
      inputAnime.removeClass('active');     
    }
  });

  body.on('click', function(){
    inputAnime.removeClass('active');
  });

  var elemBinds = $('.open-search, .form-search');
  elemBinds.bind('click', function(e) {
    e.stopPropagation();
  });

  /* ---------------------------------------------------------------------- */
  /*  Contact Map 2
  /* ---------------------------------------------------------------------- */
      var gmMapDiv = $("#map-section");

      if (gmMapDiv.length) {
              var gmCenterAddress = gmMapDiv.attr("data-address");
              var gmMarkerAddress = gmMapDiv.attr("data-address");
          
              gmMapDiv.gmap3({
              action: "init",
              marker: {
                  address: gmMarkerAddress,
                  options: {
                      icon: "images/others/marker.png"
                  }
              },
              map: {
                  options: {
                      zoom: 14,
                      zoomControl: true,
                      zoomControlOptions: {
                          style: google.maps.ZoomControlStyle.SMALL
                      },
                      mapTypeControl: false,
                      scaleControl: false,
                      scrollwheel: false,
                      streetViewControl: false,
                      draggable: true,
                  }
              }
          });
      }
  /*----------------------------------------------------------------------*/
  /* =  Accordion
  /*----------------------------------------------------------------------*/
        if($('.contact-form').length){
          $('.contact-form').validate({ // initialize the plugin
            rules: {
              name: {
                required: true
              },
              email: {
                required: true,
                email: true
              },
              message: {
                required: true
              },
              subject: {
                required: true
              }
            },
            submitHandler: function (form) { 
              // sending value with ajax request
              $.post($(form).attr('action'), $(form).serialize(), function (response) {
                $(form).parent('div').append(response);
                $(form).find('input[type="text"]').val('');
                $(form).find('input[type="email"]').val('');
                $(form).find('textarea').val('');
              });
              return false;
            }
          });
        }
  /*----------------------------------------------------------------------*/
  /* =  Accordion
  /*----------------------------------------------------------------------*/
        
        var allPanels = $(".accordion > dd").hide();

        allPanels.first().slideDown("easeOutExpo");

        $(".accordion > dt > a").first().addClass("active");
        
            $(".accordion > dt > a").on('click', function(){
        
            var current = $(this).parent().next("dd");
            $(".accordion > dt > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");
            
            return false;   
        });

 
  /*----------------------------------------------------------------------*/
  /* =  portfolio isotope
  /*----------------------------------------------------------------------*/
        
        var $container = $('.projects-list');
        $container.imagesLoaded( function(){
          $container.isotope({
              filter: '*',
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false,
              }
          });
        });

        // Isotope Filter 
        $('.isotope-filters a').click(function() {
            $('.isotope-filters .selected').removeClass('selected');
            $(this).addClass('selected');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

  /*----------------------------------------------------------------------*/
  /* =  Fancy Box
  /*----------------------------------------------------------------------*/

    $(".prettyPhoto").prettyPhoto({
        show_title: false,
        slideshow: 3000,
        overlay_gallery: true,
        social_tools: ''
      });

  /*----------------------------------------------------------------------*/
  /* =  scroll to top
  /*----------------------------------------------------------------------*/
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
  
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

});

