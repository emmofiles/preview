$('.countdown').countdown('2017/12/12', function(event) {
  jQuery(this).html(event.strftime('<ul class="countdown_timer">' + '<li><span class="time"> %D </span><span class="meta"> days </span></li>' + '<li><span class="time"> %H </span><span class="meta"> Hours </span></li>' + '<li><span class="time"> %M </span><span class="meta"> Mins </span></li>' + '<li><span class="time"> %S </span><span class="meta"> Second </span></li>' + '</ul>'));
});

$(document).ready(function() {
  $('.slide-cover,.-slide-basic').slick({
    vertical: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    verticalSwiping: true
  });
  $('.slide-h').slick({
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slide-h-next">Next</button>',
    nextArrow: '<button type="button" class="slide-h-prev">Prev</button>',
  });
});

jQuery('#bg_slide').backstretch([
  'images/bg-rocket/samuel-zeller-62819-comingsoon.jpg',
  'images/bg-rocket/derek-thomson-330312-comingsoon.jpg',
  'images/bg-rocket/paul-earle-39322-comingsoon.jpg'
], {
  duration: 3000,
  fade: 750
});

$('#bg_video').YTPlayer({
  fitToBackground: true,
  videoId: 'w7JrHIHi8t0'
});

$('#info').click(function() {
  $('body').toggleClass('move-50');
});

var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    $('#preload').stop(true, true).fadeOut({duration: 1000, queue: false}).fadeOut(600);
    clearInterval(interval);
    //done();
  }
}, 100);


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href');
  var offset = 110;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
});
