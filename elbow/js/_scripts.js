+(function($) {
  'use strict';

  if (typeof window.$ === 'undefined' || !window.$)
    throw "This theme need jQuery";

  /*
      ====================================
      portfolio javascript
      ====================================
  */
  var shuffleme = (function() {
    'use strict';
    var $grid = $('.grid'), //locate what we want to sort
        $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories
        $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

    init = function() {

      // None of these need to be executed synchronously
      setTimeout(function() {
        listen();
        setupFilters();
      }, 100);

      // instantiate the plugin
      $grid.shuffle({
        itemSelector: '[class*="col-"]',
        speed: 350,
        sizer: $sizer
      });
    },

    // Set up button clicks
    setupFilters = function() {
      var $btns = $filterOptions.children();
      $btns.on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            isActive = $this.hasClass( 'active' ),
            group = isActive ? 'all' : $this.data('group');

        // Hide current label, show current label in title
        if ( !isActive ) {
          $('.portfolio-sorting li a').removeClass('active');
        }

        $this.toggleClass('active');

        // Filter elements
        $grid.shuffle( 'shuffle', group );
      });

      $btns = null;
    },

    // Re layout shuffle when images load. This is only needed
    // below 768 pixels because the .picture-item height is auto and therefore
    // the height of the picture-item is dependent on the image
    // I recommend using imagesloaded to determine when an image is loaded
    // but that doesn't support IE7
    listen = function() {
      var debouncedLayout = $.throttle( 300, function() {
        $grid.shuffle('update');
      });

      // Get all images inside shuffle
      $grid.find('img').each(function() {
        var proxyImage;

        // Image already loaded
        if ( this.complete && this.naturalWidth !== undefined ) {
          return;
        }

        // If none of the checks above matched, simulate loading on detached element.
        proxyImage = new Image();
        $( proxyImage ).on('load', function() {
          $(this).off('load');
          debouncedLayout();
        });

        proxyImage.src = this.src;
      });

      // Because this method doesn't seem to be perfect.
      setTimeout(function() {
        debouncedLayout();
      }, 500);
    };

    return {
      init: init
    };
  }());

  /**
   * Doc ready
   */
  $(function() {
    /*
        ====================================
        navbar toggle javascript
        ====================================
    */
    $('.navbar-toggle').on('click', function(){
        var docHeight = $(document).height(),
            $body = $("body"),
            $overlay = $('#overlay'),
            $navbar = $('.navbar-header');

        if ($('.nav-contain').hasClass('active-nav')) {
          $overlay.remove();
          $body.removeClass("hideoverflow");
          $navbar.removeClass('hidden');
        }
        else {
          $body.append("<div id='overlay' style='height: " + docHeight + "px'></div>");
          $overlay.height(docHeight);
          $navbar.removeClass('hidden');
        }

        $('.icon-bar.first').toggleClass("top-bar");
        $('.icon-bar.second').toggleClass("middle-bar");
        $('.icon-bar.third').toggleClass("bottom-bar");
        $('.nav-contain').toggleClass("active-nav");
        $navbar.toggleClass("show");
    });

    $(".navbar").sticky({topSpacing:0});
    /*
        ====================================
        show up and scroll down hide menu JS
        ====================================
    */
    var didScroll;
    var lastScrollTop = 0;
    var delta = 3;
    var navbarHeight = $('.navbar').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(window).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.navbar').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.navbar').removeClass('nav-up');
            }
        }
        lastScrollTop = st;
    }

    /*
        ====================================
        clickable arrow
        ====================================
    */
    $('.arrow-down').on('click', function(){
        var heightwindow = $(window).height();
        $('body,html').animate({ scrollTop: heightwindow }, 'slow');
    })


    /* swipe slider mobile */
    if($(window).width() <= 640){
        $("#slideshow-home-fullscreen").swiperight(function() {
            $(this).carousel('prev');
        });
        $("#slideshow-home-fullscreen").swipeleft(function() {
            $(this).carousel('next');
        });
    }

    /*
        ====================================
        tooltip
        ====================================
    */
    $('[data-toggle="tooltip"]').tooltip();

    // Init shuffleme
    shuffleme.init();
  });
})(jQuery);
