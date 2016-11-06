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
:: Contact popup
:: Search
:: Login
:: Mega menu
:: Owl carousel
:: Tooltip
:: Our skills
:: Socialstream
:: Side menu
:: Isotope
:: Back to top
:: Accordion
:: Sliderbar menu
:: Audio video
:: Tabs
:: Rain
:: Skills 2
:: Countdown
:: Ripple
:: Placeholder
:: wow
 
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
    contact popup
*************************/

  $('#contact-btn').click(function() {
    $(this).next().toggle('slow');
    return false;
  });


/*************************
       search
*************************/

$(".search-close").click(function(){
        $(".search-open").fadeOut(500);
    });
$(".search").click(function(){
    $(".search-open").fadeIn(500);
}); 
$('.search').click(function() {
       $('body').addClass('top-search-open')
});
$('.search-close').click(function() {
       $('body').removeClass('top-search-open')
});

// search 2
$(".search-2-close").click(function(){
        $(".search-2-open").fadeOut(500);
    });
$(".search-2").click(function(){
    $(".search-2-open").fadeIn(500);
});

// search-3
  if (jQuery('.search-3').size() > 0) {
       jQuery('.search-btn').on("click", function () {
           jQuery('.search-3').toggleClass("search-3-open");
             return false;
            });
         jQuery("html, body").on('click', function (e) {
          if (!jQuery(e.target).hasClass("not-click")) {
               jQuery('.search-3').removeClass("search-3-open");
           }
       });
      }
// search-4
 $(".search-4 a").click(function() {
  $(this).parent(".search-4").toggleClass("collapsed");
});

  
/*************************
       login
*************************/ 

$(document).ready(function() {
    $(".login").click(function(e) {
        $(".login-open").fadeToggle();
        e.stopPropagation();
    });
    $(document).click(function(e) {
        if (!$(e.target).is('.login-open, .login-open *')) {
            $(".login-open").hide();
        }
    });
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
                sticky_header       : true,       // menu fixed on top when scroll down down. options (true) or (false)
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
// menu-2
   jQuery(document).ready(function () {
       jQuery('#menu-2').megaMenu({
          sticky_header       : true,       // menu fixed on top when scroll down down. options (true) or (false)
          sticky_header_height: 1000,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
          // MOBILE MODE SETTINGS
          mobile_settings     : {
          collapse            : true    // collapse the menu on click. options (true) or (false)
          }
       });
    }); 
 // vertical-left
   jQuery(document).ready(function () {
     jQuery('#menu-3').megaMenu({
         menu_position:'vertical-left',
         effect : 'expand-left'
      });
   });


/*************************
      owl-carousel
*************************/
 
$('.owl-carousel-1').owlCarousel({
	 items:1,
     loop:true,
     animateOut: 'fadeOut',
     autoplay:false,
     autoplayTimeout:1000,
     autoplayHoverPause:true, 
     dots:false,
     nav:true,
      navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]
    });

$('.owl-carousel-2').owlCarousel({
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

$('.owl-carousel-3').owlCarousel({
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

 $('.owl-carousel-4').owlCarousel({
     items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:3000,
     autoplayHoverPause:true, 
     dots:false,
     smartSpeed:1000,
     nav:true,
     navText:[
            "<i class='fa fa-long-arrow-right fa-2x'></i>",
            "<i class='fa fa-long-arrow-left fa-2x'></i>"
        ]
    });

 $('.owl-carousel-5').owlCarousel({
     items:5,
     loop:true,
     autoplay:true,
     autoplayTimeout:2500,
     smartSpeed:1000,
     autoplayHoverPause:true, 
     dots:false,
     nav:false,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
     }
    });


  $('.owl-carousel-6').owlCarousel({
     items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000, 
     autoplayHoverPause:true, 
     dots:false,
     autoHeight:true,
     nav:true,
     navText:[
            "<i class='fa fa-long-arrow-left fa-2x'></i>",
            "<i class='fa fa-long-arrow-right fa-2x'></i>"
        ]
    });
 
  $('.owl-carousel-7').owlCarousel({
     items:4,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
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
            "<i class='fa fa-angle-right fa-2x'></i>",
            "<i class='fa fa-angle-left fa-2x'></i>"
        ]
    });
 

   $('.owl-carousel-8').owlCarousel({
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


  $('.owl-carousel-9').owlCarousel({
     items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:3000,
     autoplayHoverPause:true,  
     smartSpeed:1000,
     dots:false,
     autoHeight:true,
     nav:true,
     navText:[
            "<i class='fa fa-long-arrow-right fa-2x'></i>",
            "<i class='fa fa-long-arrow-left fa-2x'></i>"
        ]
    });
 
 $('.owl-carousel-10').owlCarousel({
     items:4,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2     
        },
        1000:{
            items:4
        }
    },
    dots:false,
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    smartSpeed:1000,
    autoplayHoverPause:true   
    });

  
  $('.owl-carousel-11').owlCarousel({
     items:4,
     margin:25,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    },
     loop:true,
     autoplay:true,
     autoplayTimeout:2500, 
     smartSpeed:1000,
     autoplayHoverPause:true,  
     dots:false,
     autoHeight:true,
     nav:true,
     navText:[
            "<i class='fa fa-angle-right fa-2x'></i>",
            "<i class='fa fa-angle-left fa-2x'></i>"
        ]
    });
 
 $('.owl-carousel-12').owlCarousel({
    items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2500,
     smartSpeed:1000,
     autoplayHoverPause:true,  
     dots:true,
     autoHeight:true,
     nav:false
    });

 $('.owl-carousel-13').owlCarousel({
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
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     dots:false,
     autoHeight:true,
     nav:true,
     navText:[
            "<i class='fa fa-angle-right fa-2x'></i>",
            "<i class='fa fa-angle-left fa-2x'></i>"
        ]
    });
$('.owl-carousel-14').owlCarousel({
     items:1,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,  
     dots:false,
     autoHeight:true,
     nav:false
    });
$('.owl-carousel-15').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel-16').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:false, 
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
    }
})

$('.owl-carousel-17').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:true,
    items:1
})


$('.owl-carousel-18').owlCarousel({
   items:1,
   loop:true,
    margin:10,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:false
});
 
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
      our-skills
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
      socialstream
*************************/
 
if($(".instagram-feed").length != 0) {
 $('.instagram-feed').socialstream({
    socialnetwork: 'instagram',
    limit: 6,
    username: 'andreasmhansen'
 })
}

 if($(".flickr-feed").length != 0) {
    $('.flickr-feed').socialstream({
        socialnetwork: 'flickr',
         limit: 6,
         username: 'andreasmhansen'
    })
}

if($(".pinterest-feed").length != 0) {
 $('.pinterest-feed').socialstream({
    socialnetwork: 'pinterest',
    limit: 6,
    username: 'fromupnorth'
  })
}

if($(".deviant-feed").length != 0) {
 $('.deviant-feed').socialstream({
     socialnetwork: 'deviantart',
     limit: 6,
     username: 'neo-innov'
 })
}

if($(".newsfeed-feed").length != 0) { 
  $('.newsfeed').socialstream({
     socialnetwork: 'newsfeed',
      limit: 6,
      username: 'http://feeds.feedburner.com/vectips'
   })
}
/*************************
      side menu
*************************/

$(document).ready(function(){
  $('#menu-icon').click(function(){
    $(this).toggleClass('open');
    $('#menu,#menu-toggle,#page-content,#menu-overlay').toggleClass('open');
    $('#menu li,.submenu-toggle').removeClass('open');
  });
});
 

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

// masonry

 if($(".isotope-2").length != 0) {
  jQuery(window).on("load resize",function(e){
  var $container = $('.masonry-main .isotope-2'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 1,
    columnWidth = 0;
return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.masonry-main .masonry-item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope(); 
  // bind filter button click
$('.masonry-main .isotope-filters-2').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change active class on buttons
  $('.masonry-main .isotope-filters-2').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  }); 

});
}

// packetry
 if($(".isotope-3").length != 0) {
 jQuery(window).on("load resize",function(e){
  var $container = $('.isotope-3'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 1,
    columnWidth = 0;
  //Select what will be your porjects columns according to container widht
  if (w > 1040)     { columnNum  = 6; }  
  else if (w > 850) { columnNum  = 6; }  
  else if (w > 768) { columnNum  = 6; }  
  else if (w > 480) { columnNum  = 6; }
  else if (w > 300) { columnNum  = 1; }
  columnWidth = Math.floor(w/columnNum);
  //Default item width and height
  $container.find('.item').each(function() {
    var $item = $(this), 
    width = columnWidth,
    height = columnWidth;
    $item.css({ width: width, height: height });
  }); 
  //2x width item width and height
  $container.find('.width2').each(function() {
    var $item = $(this), 
    width = columnWidth*2,
    height = columnWidth;
    $item.css({ width: width, height: height });
  }); 
  //2x height item width and height
  $container.find('.height2').each(function() {
    var $item = $(this), 
    width = columnWidth,
    height = columnWidth*2;
    $item.css({ width: width, height: height });
  }); 
  //2x item width and height
  $container.find('.width2.height2').each(function() {
    var $item = $(this), 
    width = columnWidth*1,
    height = columnWidth*2;
    $item.css({ width: width, height: height });
  }); 
  return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.item',
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
 
// portfolio scroll
 if($(".snap-scrolling-example").length != 0) {
    (function($){
            $(window).load(function(){                
                /* 
                get snap amount programmatically or just set it directly (e.g. "273") 
                in this example, the snap amount is list item's (li) outer-width (width+margins)
                */
                var amount=Math.max.apply(Math,$("#portfolio-scroll li").map(function(){return $(this).outerWidth(true);}).get());
                
                $("#portfolio-scroll").mCustomScrollbar({
                    axis:"x",
                    theme:"inset",
                    advanced:{
                        autoExpandHorizontalScroll:true
                    },
                    scrollButtons:{
                        enable:true,
                        scrollType:"stepped"
                    },
                    keyboard:{scrollType:"stepped"},
                    snapAmount:amount,
                    mouseWheel:{scrollAmount:amount},
                    mouseWheel:{ enable: false }
                });
                
            });
        })(jQuery);
 }    

 if($(".hover-direction").length != 0) {

 $(window).load(function() {
        $('.portfolio-item').directionalHover();
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
         back-to-top
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
      accordion
 *************************/

 var allPanels = $(".accordion > .accordion-content").hide();
    allPanels.first().slideDown("easeOutExpo");
        $(".accordion > .accordion-title > a").first().addClass("active");
        $(".accordion > .accordion-title > a").click(function(){
            var current = $(this).parent().next(".accordion-content");
            $(".accordion > .accordion-title > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");
            return false;
  });
 
 var allToggles = $(".accordion-2 .accordion-2-content").hide();
  $(".accordion-2 .accordion-2-title a").click(function(){
      if ($(this).hasClass("active")) {
         $(this).parent().next().slideUp("easeOutExpo");
         $(this).removeClass("active");
        }
   else {
        var current = $(this).parent().next(".accordion-2-content");
        $(this).addClass("active");
        $(this).parent().next().slideDown("easeOutExpo");
      }
     return false;
    });
 
/*************************
        sliderbar menu
*************************/

$('.widget-menu > ul > li > a').click(function() {
  var checkElement = $(this).next();
  $('.widget-menu li').removeClass('active');
  $(this).closest('li').addClass('active');
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('.widget-menu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});

/*************************
     audio video
*************************/
 
if($(".audio-video").length != 0) {
  $('audio,video').mediaelementplayer();
}

/*************************
          tabs
*************************/

 $(function(e) {
  $('.tabcontent').hide().filter(':first').show();
  $('#tabs li[data-tabs]').on('click', function () {
    $('#tabs li[data-tabs]').removeClass('active');
    $('.tabcontent').hide();
    var tab = $(this).data('tabs');
    $(this).addClass('active');
    $('#' + tab).fadeIn().show();
  });
  $(".tabs li").click(function(){
      var  cur =$(".tabs li").index(this);
      var elm = $('.tabcontent:eq('+cur+')');
      elm.addClass("pulse");
      setTimeout(function() {
            elm.removeClass("pulse");
      }, 220);
   });
}); 
 
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
              image.src = 'images/bg/09.jpg';
  }

/*************************
          skills-2
*************************/
 
if($(".skills-2").length != 0) {
$('.skills-2').appear(function() {
		 $( ".bar" ).each( function() {
			  var $bar = $( this ),
			 $pct = $bar.find( ".pct" ),
			 data = $bar.data( "bar" );
		  setTimeout( function() {
				 $bar
				 .css( "background-color", data.color )
				 .prop( "title", data.width )
				 .animate({
				 "width": $pct.html()
		   }, 3000, function() {
		  $pct.css({
			 "color": data.color,
			 "opacity": 1
		 });
		 });
		 }, data.delay || 0 );   
	 });
 }, {
  offset: 400
});
}
 
/*************************
         countdown
*************************/

  $(document).ready(function(){
    if($(".countdown").length != 0) {
      $('.maintenance-progress-bar').appear(function() {
       $('.countdown').downCount({
            date: '10/05/2016 12:00:00',
            offset: +10
        }, function () {
            // alert('WOOT WOOT, done!');
        });
        $(".progress-bar").loading();
    $('input').on('click', function () {
       $(".progress-bar").loading();
    });

     }, {
  offset: 400
});
}
});

/*************************
         ripple
*************************/
 
 $(".tabs li").click(function(e) {
  /* Add the slider movement */
  // what tab was pressed
  var whatTab = $(this).index();
  // Work out how far the slider needs to go
  var howFar = 160 * whatTab;
  /* Add the ripple */
  // Remove olds ones
  $(".ripple").remove();
  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight = $(this).height();
  // Add the element
  $(this).prepend("<span class='ripple'></span>");
  // Make it round!
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }
  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
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