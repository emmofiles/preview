(function ($) {
  "use strict";
  var active_cls = 'active', viewportHeight = 0;

  init_setup();

  //Run function when document ready
  $(document).ready(function () {
    init_hold();
    init_menu();
    init_testimonial();
    init_fullpage();
    init_pagetransition();
    init_scroldownarr();
    init_lightbox();
  });

  //Run function when finished load
  $(window).on('load', function () {

  });

  //Run function when window scroll
  $(window).on('scroll', function () {

  });

  //Run function when window resize
  $(window).on('resize', function () {
    if (Math.abs(viewportHeight - $(window).height()) > 60) {
      init_setup();;
    } 
  });


  /* ===========================================
   * functions
   */

  function init_scroldownarr() {
    var el = $('.scrolldown-arrow');
    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
      el.css({
        'opacity': 1 - st / 100
      });
    });
  }

  function init_menu() {
    $('#main_menu a').hover(function () {
      var data_hover = $(this).data('hover');
      if (data_hover) {
        $('.navigation-bg-over').removeClass(active_cls);
        $('.' + data_hover).addClass(active_cls);
      }
    });

    $('#main_menu a').click(function () {
      var $li = $(this).closest('li'), $main_menu = $('#menu_area'), $width_menu = $main_menu.width(), $menu_cont = $('#main_menu');
      if ($li.hasClass('has-child')) {
        $menu_cont.addClass('moved').animate({scrollTop: 0}, 300);
        $main_menu.animate({'left': '-=' + $width_menu + 'px'});
        $(this).next('ul').addClass(active_cls);
        return false;
      }

      if ($(this).hasClass('animsition-link')) {
        $('#site-navigation-trigger').click();
      }
    });

    $('#back_menu').click(function () {
      var $main_menu = $('#menu_area'), $menu_cont = $('#main_menu'), $width_menu = $main_menu.width();
      if ($main_menu.css('left') != '0px') {
        setTimeout(function () {
          $('#menu_area li ul.active').last().removeClass(active_cls);
        }, 300)
        $main_menu.animate({'left': '+=' + $width_menu + 'px'}, 300, function () {
          if ($main_menu.css('left') == '0px') {
            $menu_cont.removeClass('moved');
          }
        });
      }
    });


    $('#site-navigation-trigger').click(function () {
      var $toogle_area = $('#site-navigation-area'), $this = $(this);

      $this.toggleClass(active_cls);
      if ($this.hasClass(active_cls)) {
        $toogle_area.addClass(active_cls);
      } else {
        $toogle_area.removeClass(active_cls);
      }
      return false;
    });
  }



  function init_setup() {
    viewportHeight = $(window).height();
    $('.page-full-window').css('height', viewportHeight);
  }


  function init_hold() {
    $('[data-holdbg]').each(function (index, el) {
      var bg = $(el).data('holdbg');
      $(el).css('background-image', 'url(' + bg + ')');
    });

    $('[data-holdwidth]').each(function (index, el) {
      var width = $(el).data('holdwidth');
      $(el).css('width', width);
    });

    $('[data-holdheight]').each(function (index, el) {
      var width = $(el).data('holdheight');
      $(el).css('height', width);
    });
  }

  function init_fullpage() {
    var $el = $('#fullpage-projects');
    if ($el.length) {
      $el.fullpage({
        verticalCentered: true,
        scrollingSpeed: 1200,
        continuousVertical: false,
        scrollBar: false
      });
    }
  }

  function init_pagetransition() {
    var $el = $(".animsition");
    if ($el.length) {
      $el.animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 800,
        outDuration: 1000,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
          window.location.href = url;
        }
      });
    }

  }


  function init_testimonial() {
    var slide_testi, tname, tmsg, $el = $('#testimonial-post');
    if ($el.length) {
      $el.on('click mouseenter', 'li', function () {
        init_anim_testimonial(this)
      });
      $el.on('mouseleave', function () {
        clear_timeout();
        slide_testi = setTimeout(process_slide, 6000);
      });
      process_slide();
    }

    function init_anim_testimonial(el) {
      clear_timeout();
      $('#testimonial-post li').removeClass('active');
      var $this = $(el),
              $tmsg = $this.find('.t-msg').html(),
              $tname = $this.find('.t-name').html();
      $this.addClass('active');
      var $name_testi = $('#testi-name-text'), $msg_testi = $('#testi-msg-text');
      $name_testi.removeClass('active');
      $msg_testi.removeClass('active');
      anim_testi_show_text($msg_testi, $name_testi, $tmsg, $tname);
    }

    function clear_timeout() {
      clearTimeout(slide_testi);
      clearTimeout(tmsg);
      clearTimeout(tname);
    }

    function anim_testi_show_text($msg_testi, $name_testi, $tmsg, $tname) {
      tmsg = setTimeout(function () {
        $($msg_testi).html($tmsg).addClass('active');
      }, 600);
      tname = setTimeout(function () {
        $($name_testi).html($tname).addClass('active');
      }, 600);
    }

    function process_slide() {
      var $navlis = $('#testimonial-post li'),
              $next = $navlis.filter('.active').next();
      if (!$next.length) {
        $next = $navlis.first();
      }
      init_anim_testimonial($next);
      
      /* disable auto slide if width less than 1000px (table & phone)*/
      if($(window).width() > 1000){
        slide_testi = setTimeout(process_slide, 6000);
      }
      
    }
  }


  function init_lightbox() {
    var $el = $('#project_list');
    if ($el.length) {
      $el.Chocolat({
        loop: true,
        imageSize: 'contain'
      });
    }
  }

})(jQuery);









