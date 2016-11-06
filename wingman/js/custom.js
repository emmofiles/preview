(function($){
    "use strict"; // Start of use strict
    /* ---------------------------------------------
     Owl carousel
     --------------------------------------------- */
    function init_carousel(){
        $('.owl-carousel').each(function(){
          var config = $(this).data();
          // config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
          var animateOut = $(this).data('animateout');
          var animateIn = $(this).data('animatein');
          if(typeof animateOut != 'undefined' ){
            config.animateOut = animateOut;
          }
          if(typeof animateIn != 'undefined' ){
            config.animateIn = animateIn;
          }
          var owl = $(this);
          owl.owlCarousel(config);
        });
    }
    /* ---------------------------------------------
     Height Full
     --------------------------------------------- */
    function js_height_full(){
        (function($){
            var heightSlide = $(window).outerHeight();
            $(".full-height").css("height",heightSlide);
            $(".min-fullheight").css("min-height",heightSlide);
        })(jQuery);
    }

    /* ---------------------------------------------
     Scripts ready
     --------------------------------------------- */
    $(document).ready(function() {

        // OWL CAROUSEL
        setTimeout( function(){
          init_carousel();
        }, 500);

        //Min - FUll height
        js_height_full()
        $(window).on("debouncedresize", function (e) {
          //Min - FUll height
          js_height_full()
        });


      //TAB
      $('.az-tab').each(function(){
        $(this).tabs({
          active: 1
        });
      })


     //COUNT DOWN DATE
      $('.az-countdown').each(function(){
        var _this = $(this);
        var _date = _this.attr('data-datecount');
        _this.countdown(_date, function(event) {
            var bz_day = event.strftime('%-D');
            var bz_hour = event.strftime('%-H');
            var bz_minute = event.strftime('%-M');
            var bz_second = event.strftime('%-S');
            _this.find('.day').html(bz_day);
            _this.find('.hour').html(bz_hour);
            _this.find('.minute').html(bz_minute);
            _this.find('.second').html(bz_second);
        });
      });


      //TESTIMONIAL SLIDE
      $('.testimonial-style2').each(function(){
          var owl = $(this).find('.testimonial-slide');
          owl.owlCarousel(
            {
                margin:40,
                autoplay:true,
                dots:false,
                loop:true,
                items:3,
                smartSpeed:1000,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                nav:false,
                responsive:{
                   0 : {
                      margin : 20,
                  },
                  600 : {
                      margin : 40,
                  },
                }
            }
          );
          owl.trigger('next.owl.carousel');
          owl.on('changed.owl.carousel', function(event) {
              owl.find('.owl-item.active').removeClass('item-center');
              var caption = owl.find('.owl-item.active').first().next().find('.info-client').html();
              var t = owl.closest('.testimonial-style2').find('.az-info-client');
              var animated = t.data('animated');
              t.html(caption).addClass('animated '+animated).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                       $(this).removeClass('animated '+animated);
              });;
              setTimeout(function(){
                  owl.find('.owl-item.active').first().nextAll().slice(0, 1).addClass('item-center');
              }, 100);
          })
        });

        //BACKGROUND PARALLAX
        $(window).bind('load', function () {
            parallaxInit();
        });
        function parallaxInit() {
            testMobile = isMobile.any();
            if (testMobile == null)
            {
                $('.bg-parallax').each(function(){
                    $(this).parallax('50%', 0.3);
                });
            }
            testMobile = isMobile.iOS()
        }

        //Mobile Detect
        var testMobile;
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        //SELECT Chosen
        $("select").chosen();


        //SLIDE PRICE WIDGET
        $('.price_slider_wrapper').each(function(){
            var _min = $(this).find('.price_slider_amount input#min_price').data('min');
            var _max = $(this).find('.price_slider_amount input#max_price').data('max');
            $(this).find( ".price_slider" ).slider({
              range: true,
              min: _min,
              max: _max,
              values: [ 10, 100 ],
              slide: function( event, ui ) {
                $( ".price_label .from" ).text( "$" + ui.values[ 0 ]);
                $( ".price_label .to" ).text( "$" + ui.values[ 1 ] );
              }
            });
            $(this).find( ".price_label .from" ).text( "$" + $( ".price_slider" ).slider( "values", 0 ));
            $(this).find( ".price_label .to" ).text( "$" + $( ".price_slider" ).slider( "values", 1 ));
        });


        //ACORDION SINGLE PRODUCT
        if($('.accordion-product').length > 0){
            $('.accordion-product').accordion({ 
                collapsible: true,
                heightStyle:"content"
            })
        }


        //SLIDE PRODUCT DETAIL VERTICAL
        $('.slideproduct-vertical .slide-product-detail').each(function(){
          var $pgwSlider = $(this);
          $pgwSlider.pgwSlider({
            listPosition:"left",
            transitionEffect:"sliding",
            touchControls:"true",
            intervalDuration : 4000,
            beforeSlide: function() {
              var $currentSlide = $pgwSlider.getCurrentSlide();
              if ( $currentSlide == $('.ps-list li').length ) {
                $currentSlide = 0;
              }
              var $current_elem = $('.ps-list li').eq($currentSlide);
              $('.ps-list li').removeClass('active');
              $current_elem.addClass('active');
            }
          });
          $pgwSlider.find('li').on('click', function() {
            $pgwSlider.find('li').removeClass('active');
            $(this).addClass('active');
          });
        });


        //SLIDE PRODUCT DETAIL HORIZONTAL
        $(window).load(function() {
          $('.productslide-horizontal').each(function(){
              $(this).find('#carousel-thumb').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 98.5,
                itemMargin: 20,
                asNavFor: '#main-slide'
              });
              $(this).find('#main-slide').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel-thumb"
              });
          })
        });


        //SKILL BAR
        $('.item-processbar').each(function(){
          var $percentSkill = $(this).attr('data-percent');
          $(this).find('.processbar-width').animate({
              'width':$percentSkill+'%'
          },6000);
        });


        //MENU DROPDOWN
        var ts_is_mobile = (Modernizr.touch) ? true : false;
        if (ts_is_mobile === true){
          $('.az-main-menu .navigation .menu-parent > a .caret').on('click',function(e){
              var $this = $(this);
              var thisLi = $this.closest('li');
              var thisUl = thisLi.closest('ul');
              var thisA = $this.closest('a');
              if ( thisLi.is('.sub-menu-open') ) {
                  thisLi.find('> .sub-menu').stop().slideUp('fast');
                  thisLi.removeClass('sub-menu-open').find('> a').removeClass('active');
              }
              else{
                  thisUl.find('> li.sub-menu-open > .sub-menu').stop().slideUp('fast');
                  thisUl.find('> li.sub-menu-open').removeClass('sub-menu-open');
                  thisUl.find('> li > a.active').removeClass('active');
                  thisLi.find('> .sub-menu').stop().slideDown('fast');
                  thisLi.addClass('sub-menu-open').find('> a').addClass('active');
              }
              thisUl.closest('.az-main-menu').trigger('focus');
              e.preventDefault();
              e.stopPropagation();
          });
        }else{
          $('.az-main-menu .navigation .menu-parent').hover(function(){
                $(this).addClass('sub-menu-open');
              }, function(){
                $(this).removeClass('sub-menu-open'); 
              });
        }

        //LANGUE ACTIVE
        $('.touch-menutop').on('click',function(){
            $(this).parent().find('.az-menubar').slideToggle(500);
        });

        //SEARCH BOX
        $('.touch-search').on('click',function(){
            $(this).parent().find('.az-search-box').fadeIn(500)
        });
        $('.az-search-box .search-ovelay, .az-search-box .close-search').on('click',function(){
            $('.az-search-box').fadeOut();
        });

        //NEWSLETTER 
        $('.close-newsletter, .newsletter-popup .overlay-body').on('click', function(){
            $('.newsletter-popup').fadeOut(500);
        });

        //Cart Header
        $('.header-cart .touch-cart').on('click',function(){
            $(this).parent().find('.az-shoppingcart-header').slideToggle(500)
        });


        //LOGIN - REGISTER FORM
        $('.show-formlogin').on('click', function(){
          $('.az-menubar').fadeOut();
          $('.form-login-register').fadeIn(500);
        });
        $('.close-formlogin, .form-login-register .overlay-form').on('click',function(){
          $('.form-login-register').fadeOut();
        });


        //TOGOLE LOGIN & REGISTER
        $('.inner-form .toggole-form').on("click",function(e){
            var formId = $(this).attr('href');
            $(this).closest('.kt-form-account').removeClass('show slide');
            $(formId).addClass('show slide');
            e.preventDefault();
        });


        //TOGOLE MENU
        $('.togole-menu').on("click", function(){
            $('.az-main-menu .navigation').slideToggle(500)
        })


        //COMPARE
        $('.az-product-compare').each(function(){
          var $this = $(this);
          var $tb1 = $this.find('.compare-title .table-compare');
          var $tb2 = $this.find('.list-product-compare .table-compare');
          $tb2.find('tr').each( function(index, elem) {
            var $class = $(this).attr('class');
            var $height = $(this).outerHeight();
            $tb1.find('.'+$class).css({
              'height' : $height
            });
          });
        });


        //PAGE CHECKOUT
        $('.woo-info .showlogin').on('click',function(){
            $('.custommers-checkout .login').slideToggle(500);
        });
        $('.checkout-payment input[type="radio"]').each(function(){
          var $this = $(this);
          if($this.is(':checked')){
            $(this).closest('.payment-method').find('.payment-desc').css('display','block')
          }
          $this.on( 'click', function() {
            $('.payment-method').removeClass('active');
            $('.payment-method .payment-desc').slideUp(300);
            $(this).closest('.payment-method').addClass('active');
            $(this).closest('.payment-method').find('.payment-desc').slideDown(500);
          });
        });

        //MENU FIXED
        $(window).load(function(){
          $(window).scroll(function() {
              var heightScroll = $('.slide-header').outerHeight() + $('.header-style3 .az-top-header').outerHeight();

              var scroll = getCurrentScroll();
              if($('header').hasClass('header-style3')){
                if ( scroll >= heightScroll ) {
                  $('.main-header').addClass('menu-fixed');
                } else {
                    $('.main-header').removeClass('menu-fixed');
                }
              }else{
                if(scroll > 30){
                  $('header .main-header').addClass('menu-fixed');
                }else{
                  $('header .main-header').removeClass('menu-fixed');
                }
              }
              
          });
          function getCurrentScroll() {
              return window.pageYOffset || document.documentElement.scrollTop;
          }

          });

    });
})(jQuery); // End of use strict