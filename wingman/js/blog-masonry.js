/**JS Masonry**/
var $ = jQuery.noConflict();
$(document).ready(function() {
  function az_masonry($masonry)
  {
    var t = $masonry.attr("data-cols");
    if (t == "1") {
        var n = $masonry.width();
        var r = 1;
        return r
    }
    if (t == "2") {
        var n = $masonry.width();
        var r = 2;
        if (n < 480) r = 1;
        return r
    } else if (t == "3") {
        var n = $masonry.width();
        var r = 3;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 3;
        return r
    } else if (t == "4") {
        var n = $masonry.width();
        var r = 4;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 4;
        return r
    } else if (t == "5") {
        var n = $masonry.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 5;
        return r
    } else if (t == "6") {
        var n = $masonry.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 6;
        return r
    } else if (t == "8") {
        var n = $masonry.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 8;
        return r
    }
  }
  function s($masonry)
  {
    var t = az_masonry($masonry);
    var n = $masonry.width();
    var r = n / t;
    r = Math.floor(r);
    $masonry.find(".item-masonry").each(function (t) {
        $(this).css({
            width: r + "px"
        });
    });
  }

  $('.blog-masonry').each(function () {
    var $masonry = $(this);
    var $layoutMode = $masonry.attr('data-layoutMode');
    s($masonry);
    // init Isotope
    var $grid = $masonry.isotope({
      itemSelector: '.item-masonry',
      layoutMode: $layoutMode,
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    

  });

    $(window).on("debouncedresize", function (e) {
        $('.blog-masonry').each(function () { 
            var $masonry = $(this);
            var $layoutMode = $masonry.attr('data-layoutMode');
            
            console.log($masonry);
            s($masonry);
            // init Isotope
            var $grid = $masonry.isotope({
              itemSelector: '.item-masonry',
              layoutMode: $layoutMode,
            });

            $grid.imagesLoaded().progress( function() {
                $grid.isotope('layout');
            });
        });
    });
});

