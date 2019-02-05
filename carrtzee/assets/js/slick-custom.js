$(window).on("load", function() {
    "use strict";


var scrollToElement = function(element) {
            var $innerListItem = $(element),
                $parentDiv = $(element).parent();

            $parentDiv.scrollTop($parentDiv.scrollTop() + $innerListItem.position().top - $parentDiv.height() / 2 + $innerListItem.height() / 2);
        },
        setNavHeight = function() {
            setTimeout(function() {
                $('.carousel-nav-list').height($('.product-carousel').find('img').height() - $('.carousel-btn').height() * 2 - 20);
            }, 250);
        };

    $(".product-carousel").slick({
        arrows: false,
        fade: false,
        speed: 500,
        autoplay: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: true,
                prevArrow: '<i class="slick-prev fa fa-chevron-left" aria-hidden="true"></i>',
                nextArrow: '<i class="slick-next fa fa-chevron-right" aria-hidden="true"></i>'
            }
        }]
    });

    window.onresize = function() {
        setNavHeight();
    };

    $(document).ready(function() {
        setNavHeight();
    });

    $(".carousel").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $('.carousel-nav-item').removeClass('active');
        $('.carousel-nav-item[data-slide="' + nextSlide + '"]').addClass('active');
        scrollToElement($('.carousel-nav-item[data-slide="' + nextSlide + '"]')[0]);
    });

    $(document).on('click', '.carousel-nav-item', function(e) {
        var $this = $(this),
            slideNumber = parseInt($this.attr('data-slide'));

        $(".product-carousel").slick("slickGoTo", slideNumber);
    });

    $(document).on('click', '.prev-img', function() {
        $(".product-carousel").slick("slickPrev");
    });

    $(document).on('click', '.next-img', function() {
        $(".product-carousel").slick("slickNext");
    });

});