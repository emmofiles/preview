"use strict";


var all = {
  init: function(){
       all.menuSearch(); // shows the search bar on menu
       all.fixednavbar(); // fixed navbar
       all.menucollapse(); // menu collapse
       all.movingbg(); // moving parallax background
       all.progressbar(); // progressbars
       all.countonscroll(); // count to plugin initialization
       all.picpopup();  //popup
       all.slickcarousl(); // slick carousl
       all.smoothlinks();  // smoothlinks
      all.wow(); // wow js intializing
    $(window).trigger('scroll');
       
      
    },
  menuSearch: function() {
   $('.search-toggler').on("click",function() {
     $('.search-bar').slideToggle();
   })
  },
  menucollapse: function() {
    $('.primary-navbar .menu-toggle').on("click",function() {
      $(this).toggleClass('open');
      $(this).parent().find('.navbar-content').toggleClass('shown');
    })
  },
  movingbg: function() {
    $(window).on("scroll",function() {
    var screenoffset = -($(window).scrollTop() /8); 
    var screenoffset2 = -($(window).scrollTop() /2); 

    // Put together our final background position
    var bgposs = '50% '+ screenoffset + 'px';

    // Move the background

    $('.parallax-bg').css({ backgroundPosition: bgposs });
    $('.parallax-bg-2').css({ backgroundPosition: bgposs });



});
  },
  progressbar: function () {
    var m = 0;
   
    $(window).on("scroll",function() {
       if($('.progressbar').length > 0){
        
       var screenoffset = $(window).scrollTop() * 2;
       var offesttop2 = $('.progressbar').offset().top;
       var progressbar = $('.progressbar');
           if (  screenoffset > offesttop2 && m == 0) {
        $('.progressbar').each(function () {
          $(this).find('.progress-nm').animate({
            width: $(this).attr('data-progress')
          }, 1500);
        });
        m = 1;
        
      }
      }

      
   

    });
  },
  wow:function(){
    new WOW().init();
  },
  countonscroll:function() {
     var m = 0;
    $(window).on("scroll",function(){
      if($('.count').length > 0){
        
      var screenoffset = $(window).scrollTop() *2; 
      var offesttop = $('.count').offset().top;
      var count = $('.count');
      }
     
      if(screenoffset>offesttop && m== 0) {
          $('.count').countTo({
          speed:'3000',
          refreshInterval:'50'
        });
        m=1;
          
      }
    })
  },
  picpopup: function() {
    
  $('.image-link').magnificPopup({
    type:'image',
    mainClass: 'mfp-with-zoom',
    
  });

  },
  slickcarousl:function() {
    $('.slick-carousl').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });
    
    $('.causes-carousl').slick({
      slidesToScroll: 2,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    
  },
  fixednavbar:function() {
    var fixednav = $('.primary-navbar');
    var windowoffest = $(window).scrollTop();
    $(window).on("scroll",function() {
        if ($(window).scrollTop() > 50) {
          $('.primary-navbar').addClass('fixed');
        } else {
          $('.primary-navbar').removeClass('fixed');
        }
  });
  },
  smoothlinks:function(){
    
    $('.primary-navbar a.smooth').on("click",function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
  },
}

// all function initialization
$(document).ready(function(){
    
    setTimeout(function(){
        all.init();
    });
})

// the loading aninmation
$(window).on("load",function(){

    $('.load-wrapp').fadeOut();

});