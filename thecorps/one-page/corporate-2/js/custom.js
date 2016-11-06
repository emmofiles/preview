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
:: menu
:: Owl carousel
:: Tooltip
:: Popup gallery
:: Rain
:: Back to top
:: Placeholder
:: Wow
  
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
        menu
*************************/
 
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          var headerh = $('.header').height(); 
      var gap = 70; 
      if(headerh > 10) gap = 70 + headerh;
          if (target.length) {
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
        } else {
            $('.navbar-default').removeClass('sticky');
        }
       }
   });
   $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })
 


/*************************
      owl carousel
*************************/ 

$('.owl-carousel-1').owlCarousel({
	 items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true, 
     dots:false,
     nav:false,
      navText:[
            "<i class='fa fa-long-arrow-left fa-2x'></i>",
            "<i class='fa fa-long-arrow-right fa-2x'></i>"
        ]
    });

   $('.owl-carousel-2').owlCarousel({
     items:5,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    },
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true, 
     dots:false,
     autoHeight:true,
     nav:true,
     navText:[
            "<i class='fa fa-long-arrow-right fa-2x'></i>",
            "<i class='fa fa-long-arrow-left fa-2x'></i>"
        ]
    });

   $('.owl-carousel-3').owlCarousel({
    items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,  
     dots:false,
     autoHeight:true,
     nav:true,
     navText:[
            "<i class='fa fa-long-arrow-right fa-2x'></i>",
            "<i class='fa fa-long-arrow-left fa-2x'></i>"
        ]
    });
  
/*************************
      tooltip
*************************/
 $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
    });
});
 
/*************************
      popup-gallery
*************************/
 // popup-gallery
  if($(".popup-gallery").length != 0) {
    $(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.portfolio-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
  });
 // popup
    $(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false

    });
});
// youtube
$.extend(true, $.magnificPopup.defaults, {  
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }
        }
    }
});
// vimeo
$.extend(true, $.magnificPopup.defaults, {  
    iframe: {
        patterns: {
           vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: 'http://player.vimeo.com/video/%id%?autoplay=1'
            },
        }
    }
});
}

/*************************
          rain
*************************/
 
function run() {
        var image = document.getElementById('background');
        image.onload = function() {
          var engine = new RainyDay({
            image: this
          });
          engine.rain([ [0, 2, 200], [3, 3, 1] ], 100);
        };
        image.crossOrigin = 'anonymous';
              image.src = 'images/bg/04.jpg';
  }
 
/*************************
     back to top
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


/*************************
         placeholder
*************************/  
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur().parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});

/*********************************
    Wow animation on scroll
*********************************/

if($(".wow").length != 0) {
wow = new WOW({
 animateClass: 'animated',
 offset: 100,
 mobile: false
});
wow.init();
} 
