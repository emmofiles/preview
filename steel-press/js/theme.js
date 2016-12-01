
"use strict";




// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Theme-banner slider 
function BannerSlider () {
  if ($("#main-banner-slider").length) {
    $("#main-banner-slider").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:7000,
      navigation: {
          arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    }
                },
         bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -15,
                  v_offset: 30,
                  space: 10,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,350],
                gridheight:[900,900,900,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


// Theme-banner slider 
function BannerSliderTwo () {
  if ($("#main-banner-slider-two").length) {
    $("#main-banner-slider-two").revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:7000,
      navigation: {
          arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    }
                },
         bullets: {
                  enable: true,
                  hide_onmobile: false,
                  style: "uranus",
                  hide_onleave: false,
                  direction: "horizontal",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: -15,
                  v_offset: 30,
                  space: 10,
                  tmp: '<span class="tp-bullet-inner"></span>'
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,400],
                gridheight:[790,790,790,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       50,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}

// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    });
  };
}

// Project Slider
function projectSlider () {
  if($('.project-img-slider').length) {
    $('.project-img-slider').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:333500,
        autoplaySpeed:1000,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:4
            }
        }
    })
  }
}

// Client Slider
function clientSlider () {
  if($('.client-slider-wrapper').length) {
    $('.client-slider-wrapper').owlCarousel({
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1400,
        lazyLoad:true,
        items:1,
    })
  }
}


// News Slider
function newsSlider () {
  if($('.news-slider').length) {
    $('.news-slider').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1250,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Partner Slider
function partnerSlider () {
  if($('.partner-slider').length) {
    $('.partner-slider').owlCarousel({
        loop:true,
        nav:false,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1250,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:4
            }
        }
    })
  }
}


// Related Product Slider
function relatedProduct () {
  if($('.product-sldier').length) {
    $('.product-sldier').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1250,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            651:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitup-list").length) {
    $("#mixitup-list").mixItUp()
  };
}

// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}

// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        Fname: {
          required: true
        },
        Lname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  if($('.closeAlert').length) {
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    });
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    })
  }
}


// toggle menu for mobile
function mobileDropdown () {
  if($('.main-menu').length) {
    $('.main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-bars" aria-hidden="true"></i>';
    });
    $('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}


// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");
          
    });
    
    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

  };
}

// DropDown
function mainDropdown () {
  if ($(".dropdown-menu li").length) {
    $(".dropdown-menu li").on('click', function(){
      $(this).parents(".dropdown").find('.btn-dropdown').html($(this).text() + ' <i class="fa fa-angle-down"></i>');
      $(this).parents(".dropdown").find('.btn-dropdown').val($(this).data('value'));
    });  
  };
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     BannerSlider ();
     BannerSliderTwo ();
     wowAnimation ();
     FancypopUp ();
     projectSlider ();
     clientSlider ();
     partnerSlider ();
     relatedProduct ();
     mixitupGallery ();
     newsSlider ();
     CounterNumberChanger ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     mobileDropdown ();
     themeAccrodion ();
     mainDropdown ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ()
  })(jQuery);
 });
