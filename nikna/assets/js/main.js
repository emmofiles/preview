$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Search 
    
    $("#search").on('click', function(){
        $(".search-box").fadeIn(600);
    });
    
    $(".closebtn").on('click', function(){
        $(".search-box").fadeOut(600);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-nemu").removeClass("sticky");
        } else{
            $(".header-nemu").addClass("sticky");
        }
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
    
    
    //===== Slider
    
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 1000,
            dots: false,
            fade: true,
			arrows: true,
            prevArrow:'<span class="prev"><i class="flaticon-left-arrow"></i></span>',
            nextArrow: '<span class="next"><i class="flaticon-right-arrow-1"></i></span>',
            responsive: [
                { breakpoint: 651, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.project-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Isotope Project 1
    
    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s'
        });
        
        // filter items on button click
        $('.project-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    //===== Slick Testimonial Slide
    
    $('.testimonial-slide').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
    //===== Back To Top
    
    // Show or hide the sticky footer button
    
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200);
        } else{
            $('.back-to-top').fadeOut(200);
        }
    });
    
    //Animate the scroll to top
    
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
        
    });
    
    
    //===== Isotope Project 2
    
    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s'
        });
        
        // filter items on button click
        $('.project-2-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.project-2-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //===== Slick Testimonial Slide
    
    $('.testimonial-slide-2').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== Slick Testimonial Slide
    
    $('.partner-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== Slick Testimonial Slide
    
    $('.project-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next"><i class="flaticon-right-arrow-1"></i></span>',
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //===== 
    
    
    $('input[type="number"]').niceNumber();

    
    //===== Slick Testimonial Slide
    
    $('.shop-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next"><i class="flaticon-right-arrow-1"></i></span>',
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    
    //=====  Rating selection
    
    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
              return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
              return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    
    
    $star_rating.on('click', function() {
      $star_rating.siblings('input.rating-value').val($(this).data('rating'));
      return SetRatingStar();
    });

    SetRatingStar();
    
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});