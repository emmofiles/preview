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
:: Counter
:: Skills
:: Isotope
:: Back to top
:: Placeholder
 
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
          if (target.length) {
        var gap = 70;
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
      owl carousel
*************************/
 
$('.owl-carousel-1').owlCarousel({
	   items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true, 
     dots:false,
     nav:true,
      navText:[
            "<i class='fa fa-long-arrow-left fa-2x'></i>",
            "<i class='fa fa-long-arrow-right fa-2x'></i>"
        ]
        
    });

$('.owl-carousel-2').owlCarousel({
     items:3,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
     margin:20,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true, 
     dots:false,
     nav:true,
     navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]
    });
 ;

 
/*************************
      tooltip
*************************/

 $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
    });
});

 
/*************************
         counter
*************************/

function count(options) {
	 var $this = $(this);
	 options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	 $this.countTo(options);
 }
 if($(".counter-main").length != 0) {
	  $(document).ready(function () { 
		 $('.counter-main').appear(function() {
		   $('.timer').each(count)
		 }, {
		  offset: 500
		 });
      });
	}
 
/*************************
        skills
*************************/

 if($(".our-skills").length != 0) {
 	 $('.our-skills').appear(function() { 
       $('#bar-9').jqbar({ label: 'css3', barColor: '#00a9da', value: 50, orientation: 'v' });
       $('#bar-10').jqbar({ label: 'HTML5', barColor: '#00a9da', value: 90, orientation: 'v' });
       $('#bar-11').jqbar({ label: 'Wordpress', barColor: '#00a9da', value: 70, orientation: 'v' });
       $('#bar-12').jqbar({ label: 'SEO', barColor: '#00a9da', value: 50, orientation: 'v' });
   }, {
  offset: 200
  });
 }
 

/*************************
         isotope
*************************/
 
 if($(".isotope").length != 0) {
 jQuery(window).on("load resize",function(e){
  var $container = $('.isotope'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 1,
    columnWidth = 0;
return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope(); 
  // bind filter button click
  $('.isotope-filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change active class on buttons
  $('.isotope-filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  }); 

});
}
    
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
       Back to top
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
 
 