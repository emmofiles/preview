(function($) {
    'use strict';


//=========================
// Revolution Slider
//=========================
    if ($(".revSlider").length > 0)
    {
        $('.revSlider').revolution({
            delay: 15000,
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
            if ($("#con_lastname").length > 0) {
                var con_lname = $("#con_lastname").val();
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
                if ($(this).val() === '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                } else
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
            } else
            {
                $("#con_submit").html('<b>Failed!</b> <span></span>');
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }

    if ($("#contactForm2").length > 0)
    {
        $("#contactForm2").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit2").html('Processsing...');
            var con_name, con_lname, con_email, con_message, con_sub;

            if ($("#con_name2").length > 0) {
                var con_name = $("#con_name2").val();
            }
            if ($("#con_lastname2").length > 0) {
                var con_lname = $("#con_lastname2").val();
            }
            if ($("#con_email2").length > 0) {
                var con_email = $("#con_email2").val();
            }
            if ($("#con_message2").length > 0) {
                var con_message = $("#con_message2").val();
            }
            if ($("#con_sub2").length > 0) {
                var con_sub = $("#con_sub2").val();
            }

            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() === '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                } else
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
                        $("#con_submit2").html('<i>Done!</i><span></span>');
                        $("#contactForm2 input, #contactForm2 textarea").val('');
                    }
                });
            } else
            {
                $("#con_submit2").html('<b>Failed!</b> <span></span>');
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }

    //========================================================
    // Button Hover effect
    //========================================================

    $('.poseidon_btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX});
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top: relY, left: relX});
            });

    //=========================
    // Wow Animation
    //=========================
    new WOW().init();

    //=========================
    // Fillter
    //=========================
    if ($('#filterCont').length > 0) {
        $('#filterCont').themeWar();
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

    //=======================================================
    // Bootstrap Carousel Auto Play Off
    //=======================================================
    $('#testislider2').carousel({
        interval: false
    });

    //========================
    // Subscriptions 
    //========================
    if ($("#subscriptionsforms").length > 0)
    {
        $("#subscriptionsforms").on('submit', function(e) {
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            $("#subs_submit").html('Processsing...');
            if (sub_email === '')
            {
                $("#sub_email").addClass('reqError');
                $("#subs_submit").html('Failed!');
            } else
            {
                $("#sub_email").removeClass('reqError');
                $.ajax({
                    type: "POST",
                    url: "php/subscribe.php",
                    data: {sub_email: sub_email},
                    success: function(data)
                    {
                        $("#subscriptionsforms input").val('');
                        $("#subs_submit").html('success');
                    }
                });
            }
        });
        $("#sub_email").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }
    //=======================================================
    // Client Carowsel Home3
    //=======================================================
    $(".client3Carusel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });


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
    }

    //========================
    // Back To Top
    //========================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        } else
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
    $(window).load(function() {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    //===================================
    // Fixed Header
    //===================================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40)
        {
            $("header").addClass('fixedHeader');
        } else
        {
            $("header").removeClass('fixedHeader');
        }
    });
    //========================
    // Mobile Menu
    //========================
    if ($('.mobileMenu').length > 0) {
        $('.mobileMenu').on('click', function() {
            $(this).toggleClass('active');
            $('.mainnav > ul').slideToggle('slow');
        });
        if ($(window).width() < 768)
        {
            $(".mainnav ul li.has-menu-items > a").on('click', function() {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }

    }


})(jQuery);
