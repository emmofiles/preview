(function($) {
    'use strict';
    getWidthAndHeight();
    $(window).resize(function() {
        getWidthAndHeight();
    });
    function getWidthAndHeight() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var slheight = $(".slContent").height();
        var slPad = (winHeight - slheight) / 2;
        $('.banners').css({'height': winHeight});
        $('.slContent').css({'padding-top': slPad});
    }

//=========================
// Revolution Slider
//=========================
    if ($(".sliderSection").length > 0)
    {
        $('.revSlider').revolution({
            delay: 8000,
            startwidth: 1170,
            startheight: 500,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on",
            navigationVOffset: 35

        });
    }
    ;
    if ($(".banner4").length > 0)
    {
        $('.revSlider4').revolution({
            delay: 8000,
            startwidth: 1170,
            startheight: 500,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on",
            navigationVOffset: 35

        });
    }
    ;
    if ($(".banner2").length > 0)
    {
        $('.revSlider4').revolution({
            delay: 8000,
            startwidth: 1170,
            startheight: 500,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on",
            navigationVOffset: 35

        });
    }
    ;
    //=========================
    // Home1 Testmonial
    //=========================
    $(".testmonial").owlCarousel({
        items: 1,
        dots: true
    });
    //=========================
    // Home4 Twitter feeds carowsel
    //=========================
    $(".twitcaro4").owlCarousel({
        items: 1,
        dots: true
    });
    //=========================
    // Mixitup
    //=========================
    if ($('.filterCont').length > 0) {
        $('.filterCont').mixItUp();
    }
    if ($('.folioItem').length > 0) {
        $('.folioItem').mixItUp();
    }
    //=======================================================
    // Video Section
    //=======================================================
    /* initialize shuffle plugin */
    if ($("#grid").length > 0)
    {

        $(window).load(function() {
            var $grid = $('#grid');
            $grid.shuffle({
                itemSelector: '.item' // the selector for the items in the grid
            });
            /* reshuffle when user clicks a filter item */
            $('#mas_nav li').on('click', function() {

                // set active class
                $('#mas_nav li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        });
    }


    //=======================================================
    // Video Section
    //=======================================================
    var vid1 = document.getElementById("myVideo1");
    function playPause1() {
        if (vid1.paused) {
            vid1.play();
        } else {
            vid1.pause();
        }
    }
    if ($("#videoWrap1").length > 0)
    {
        $('#playVideos').on('click', function(e) {
            e.preventDefault();
            playPause1();
            if ($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                vid1.pause();
            } else
            {
                $(this).addClass('active');
                vid1.play();
            }
        });
    }
    ;
    //=======================================================
    //Bootstrap Carowsel
    //=======================================================

    if ($('.carousel').length > 0) {
        $('.carousel').carousel({
            interval: false
        });
    }

    //=======================================================
    // Google map
    //=======================================================
    if ($('#map').length > 0) {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 51.4584218,
            lng: -0.0813982,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            scrollwheel: false,
            zoom: 16,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        map.addMarker({
            lat: 51.4584218,
            lng: -0.0813982
        });
    }

    //========================
    // Our Incredible Skill
    //========================
    if ($(".skill_set2, .skill_set3").length > 0)
    {
        $('.skill_set2, .skill_set3').appear();
        $('.skill_set2 , .skill_set3').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".singleSkill2, .singleSkill3").each(function() {
            var datacount = $(this).attr("data-limit");
            $(".skill2, .skill3", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('.parcen2, .parcen3').each(function() {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }

    //========================
    // Services Slide
    //========================
    if ($(".serviceSlide").length > 0) {
        $(".serviceSlide").slick({
            vertical: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>'
        });
    }

    if ($('.piecartholder').length > 0) {
        $('.piecartholder').appear();
        $('.piecartholder').on('appear', function() {
            $(".chart").each(function() {
                $(this).easyPieChart({
                    barColor: '#f7941d',
                    trackColor: '#4f5668',
                    scaleColor: false,
                    scaleLength: 5,
                    lineCap: 'butt',
                    lineWidth: 5,
                    size: 150,
                    rotate: 0,
                    animate: 1500,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            });
        });
    }

    //========================
    // Mobile Menu
    //========================
    if ($('.mobileMenu').length > 0) {
        $('.mobileMenu').on('click', function() {
            $(this).toggleClass('active');
            $('.mainMenu > ul, .mainMenu2 > ul').slideToggle('slow');
        });
        if ($(window).width() < 768)
        {
            $(".mainMenu li.has-menu-items > a, .mainMenu2 li.has-menu-items > a").on('click', function() {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }

    }
    //=======================================================
    // magnificPopup
    //=======================================================
    if ($('a.popup').length > 0) {
        $("a.popup").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    //========================================================
    // Button Hover effect
    //========================================================

    $('.martin_btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX})
            });


    //========================================================
    // Fun Fact
    //========================================================
    var skl = true;
    $('.funFacts, .funfactSec').appear();
    $('.funFacts, .funfactSec').on('appear', function() {
        if (skl)
        {
            $('.count').each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });
    //===================================
    // Fixed Header
    //===================================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40)
        {
            $("#header, #header3").addClass('fixedHeader');
        }
        else
        {
            $("#header , #header3").removeClass('fixedHeader');
        }
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 790)
        {
            $(".header3").addClass('fixedHeader');
        }
        else
        {
            $(".header3").removeClass('fixedHeader');
        }
    });
    //========================
    // Contact Submit
    //========================
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var con_name, con_lname, con_email, con_message, con_sub;

            if ($("#con_name").length > 0) {
                var con_name = $("#con_name").val();
            }
            if ($("#con_lname").length > 0) {
                var con_lname = $("#con_lname").val();
            }
            if ($("#con_email").length > 0) {
                var con_email = $("#con_email").val();
            }
            if ($("#con_message").length > 0) {
                var con_message = $("#con_message").val();
            }
            if ($("#con_sub").length > 0) {
                var con_sub = $("#con_sub").val();
            }

            var required = 0;
            $(".required", this).each(function() {
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
                    data: {con_name: con_name, con_email: con_email, con_message: con_message, con_sub: con_sub, con_lname: con_lname},
                    success: function(data)
                    {
                        $("#con_submit").html('<i>Done!</i><span></span>');
                        $("#contactForm input, #contactForm textarea").val('');
                    }
                });
            }
            else
            {
                $("#con_submit").html('<i>Failed!</i> <span></span>');
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }
    //========================
    // Wow Js
    //========================
    new WOW().init();

    //========================
    // Back To Top
    //========================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        }
        else
        {
            $("#backToTop").removeClass('showit');
        }

    });
    $("body, html").on("click", "#backToTop", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
    //========================
    // Loader 
    //========================
    $(window).load(function(){
        if($('.preloader').length > 0){
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

})(jQuery);
