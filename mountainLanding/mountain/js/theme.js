/*
 Theme Name: Mountain - HTML5 Responsive App Landing Page
 Theme URL: http://themewar.com/html/mountainLanding
 Author: ThemeWar
 Author URI: http://themewar.com
 Description: Mountain - HTML5 Responsive App Landing Page
 Version: 1.0
 */


(function ($) {
    'use strict';

    //========================
    // Loader
    //========================
    $(window).load(function () {
        if ($(".loaderWrap").length > 0)
        {
            $(".loaderWrap").delay(800).fadeOut("slow");
        }
    });

    getWidthAndHeight();
    $(window).resize(function () {
        getWidthAndHeight();
    });
    function getWidthAndHeight() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var bdescs = $('.bdescs').height();
        var bimgs = $('.bimgs').height();
        var bdescPadd = (winHeight - bdescs) / 2;
        var bimgs = ((winHeight - bimgs) / 2) + 20;

        $('.banners').css({'width': winWidth, 'height': winHeight});
        $('.carouselBanner').css({'height': winHeight});

        $('.bdescs').css({'padding-top': bdescPadd + 'px'});
        $('.bimgs').css({'padding-top': bimgs + 'px'});
    }



    $(".screenshotSlider").owlCarousel({
        // Most important owl features
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: false,
        rewindNav: true,
        //Pagination
        pagination: true
    });


    $(".screenshotSlider2").owlCarousel({
        // Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        navigation: false,
        rewindNav: true,
        //Pagination
        pagination: true
    });


    $(".testiCarousel").owlCarousel({
        // Most important owl features
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: false,
        rewindNav: true,
        //Pagination
        pagination: true
    });


    $(".teamCarousel").owlCarousel({
        // Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        navigation: false,
        rewindNav: true,
        //Pagination
        pagination: true
    });

    $(".clientsa").owlCarousel({
        // Most important owl features
        items: 6,
        itemsCustom: false,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 2],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        navigation: false,
        rewindNav: false,
        //Pagination
        pagination: false,
        autoPlay: true
    });

    //========================
    // Image Popup
    //========================
    $('.pupup_gall').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //========================
    // About Skill
    //========================
    if ($(".ourSkills").length > 0)
    {
        $('.ourSkills').appear();
        $('.ourSkills').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".singleSkill").each(function () {
            var datacount = $(this).attr("data-limit");
            $(".skillBar", this).animate({'width': datacount + '%'}, 2000);
            $(".skillBar2", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('.skilPercent').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }


    if ($("#elasticstack").length > 0)
    {
        new ElastiStack(document.getElementById('elasticstack'));
    }


    //========================================================
    // Fun Fact
    //========================================================
    var skl = true;
    $('.funfacts').appear();
    $('.funfacts').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span>' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });


    //=======================================================
    // Background Video
    //=======================================================
    var vid = document.getElementById("myVideo");
    function playPause() {
        if (vid.paused) {
            vid.play();
        }
        else {
            vid.pause();
        }
    }
    if ($('#myVideo').length > 0) {
        $('#playVideo').on('click', function (e) {
            e.preventDefault();
            playPause();
            if ($(this).hasClass('playing'))
            {
                $(this).removeClass('playing').html('<i class="fa fa-play"></i>');
                vid.pause();
            }
            else
            {
                $(this).addClass('playing').html('<i class="fa fa-pause"></i>');
                vid.play();
            }
        });
    }
    //=======================================================
    // Video Section
    //=======================================================
    var vid1 = document.getElementById("myVideo1");
    function playPause1() {
        if (vid1.paused) {
            vid1.play();
        }
        else {
            vid1.pause();
        }
    }
    if ($("#videoWrap1").length > 0)
    {
        $('#playVideos').on('click', function (e) {
            e.preventDefault();
            playPause1();
            if ($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                vid1.pause();
            }
            else
            {
                $(this).addClass('active');
                vid1.play();
            }
        });
    }


    //=======================================================
    // button Hover
    //=======================================================
    $('.comm_btn, .apBtnDefault')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX})
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX})
            });


    //========================
    // Header One
    //========================
    $(window).on('scroll', function () {
        var hOne = $(".banners").height() - 70;
        if ($(window).scrollTop() > hOne)
        {
            $("#headerOne").removeClass('fixedHeader animated slideOutUp').addClass('fixedHeader animated slideInDown');
            $("#commonHeader").removeClass('fixedHeader animated slideOutUp').addClass('fixedHeader animated slideInDown');
        }
        else
        {
            $("#headerOne").removeClass('fixedHeader animated slideInDown').addClass('animated slideOutUp');
            $("#commonHeader").removeClass('fixedHeader animated slideInDown');
        }

    });

    //========================
    // Mobile Menu
    //========================
    if ($('.mobileMenu').length > 0)
    {
        $('.mobileMenu').on('click', function () {
            $('nav.mainMenu').slideToggle('slow');
            $(this).toggleClass('active');
        });
    }
    
    
    //========================
    // Menu
    //========================
    $(window).on('scroll', function () {
        Scroll();
    });

    $('.mainMenu ul li.scroll a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        if($(window).width() < 768)
        {
            $('nav.mainMenu').slideUp('slow');
            $('.mobileMenu').removeClass('active');
        }
        return false;
    });

    // User define function
    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function (i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.mainMenu li.scroll')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }

    //========================
    // Back To Top
    //========================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        }
        else
        {
            $("#backToTop").removeClass('showit');
        }

    });
    $("body, html").on("click", "#backToTop", function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });


    //=======================================================
    // Showcase Mixing
    //=======================================================
    if ($('#Grid').length > 0)
    {
        $('#Grid').themeWar();
    }


    //=======================================================
    // Color Preset
    //=======================================================
    if ($('.presets').length > 0)
    {
        $(".presets a").on('click', function (e) {
            e.preventDefault();
            var c = $(this).attr('href');
            $(".presets a").removeClass('active');
            $(this).addClass('active');
            $("#colorPreset").attr('href', 'css/colors/' + c + '.css')
        });
    }

    //=======================================================
    // Contact Form Submission
    //=======================================================
    if ($("#con_forms").length > 0)
    {
        $("#con_forms").on('submit', function (e) {
            e.preventDefault();
            $("#con_submit").html('Wait..');
            var con_name = $("#con_name").val();
            var con_email = $("#con_email").val();
            var con_message = $("#con_message").val();

            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/mail.php',
                    data: {con_name: con_name, con_email: con_email, con_message: con_message},
                    success: function (data)
                    {
                        $("#con_submit").html('Done!');
                        $("#con_forms #con_name").val('');
                        $("#con_forms #con_email").val('');
                        $("#con_forms #con_message").val('');
                    }
                });
            }
            else
            {
                $("#con_submit").html('Send');
            }

        });

        $("#con_forms input, #con_forms textarea").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }

    //=======================================================
    // Subscription Form Submission
    //=======================================================
    if ($("#subscribe_form").length > 0)
    {
        $("#subscribe_form").on('submit', function (e) {
            e.preventDefault();
            $("#sub_submit").val('Wait..');
            var sub_email = $("#sub_email").val();

            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/subscrib.php',
                    data: {sub_email: sub_email},
                    success: function (data)
                    {
                        $("#sub_submit").val('Done!');
                        $("#subscribe_form #sub_email").val('');
                    }
                });
            }
            else
            {
                $("#sub_submit").val('subscribe');
            }

        });

        $("#subscribe_form input").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }


    //========================
    // WOW INIT
    //========================
    if ($(window).width() > 760)
    {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }

    



})(jQuery);