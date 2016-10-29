(function() {
    "use strict";

    /* =Loader
    -------------------------------------------------------------- */
    $("html").addClass('html-onload');

    /* disable browser scroll on desktop */
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    ];
    var html = $('html');

    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    $(window).load(function() {
        /* fade out the loading icon */
        $(".pageloader-content").addClass('pageloader-content-hide');

        /* after 250ms delay, restore browser scroll + fade out loader background */
        setTimeout(function() {

            /* enable browser scroll on desktop */
            var html = $('html');
            var scrollPosition = html.data('scroll-position');
            html.css('overflow', html.data('previous-overflow'));
            window.scrollTo(scrollPosition[0], scrollPosition[1]);

            /* fade out loader */
            $("#pageloader").addClass('pageloader-fade');

            /* slide down html */
            $("html").removeClass('html-onload');
            $("html").addClass('html-loaded');

        }, 250);

        /* after 1000ms delay, hide (not fade out) loader*/
        setTimeout(function() {
            jQuery("#pageloader").addClass('pageloader-hide');

        }, 1000);
    });

    /* =Center and Outline
    -------------------------------------------------------------- */
    function centerInit() {
        var hero = $('.hero'),
            heroContent = $('.hero-content'),
            contentMargin = ($(window).height() - heroContent.height()) / 2;

        hero.css({
            "height": $(window).height() + "px"
        });

        heroContent.css({
            "margin-top": contentMargin + "px"
        });

    }

    centerInit();
    $(window).resize(centerInit);

    /* =Local Scroll
    -------------------------------------------------------------- */
    $('.hero, nav').localScroll({
        duration: 1000
    });

    $('.offset').localScroll({
        duration: 1000,
        offset: -100
    });

    $('#top').on("click", function() {
        return $("body,html").stop().animate({
            scrollTop: 0
        }, 800, "easeOutCubic"), !1;
    });

    var sections = $('section');
    var navigation_links = $('nav a');
    sections.waypoint({
        handler: function(direction) {
            var active_section;
            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();
            var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
            navigation_links.removeClass("active");
            active_link.addClass("active");
        },
        offset: '100'
    });

    if (Modernizr.touchevents) {
        skrollr.init().destroy();
    } else {
        skrollr.init({
            forceHeight: false
        });
    }

    /* =Sticky Navigation
    -------------------------------------------------------------- */
    function navigationSticky() {
        var st = $(window).scrollTop(),
            wh = $('.hero').outerHeight() - 40,
            logoHeight = $('.header-inner .logo').outerHeight(),
            navButton = $('.menu-button'),
            navButtonMargin = (logoHeight - 12) / 2;

        if (st > wh) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        };

        navButton.css({
            "top": navButtonMargin + "px"
        });
    }

    navigationSticky();
    $(window).on("scroll", navigationSticky);
    $(window).on("resize", navigationSticky);

    $('.menu-button').on("click", function() {
        if ($('#side-nav').is(':hidden')) {
            $('#side-nav').slideDown();
            $('.menu-button').addClass('active');
        } else {
            $('#side-nav').slideUp();
            $('.menu-button').removeClass('active');
        }
    });

    $('#side-nav a').on("click", function() {
        if ($(window).width() < 992) {
            $('#side-nav').slideUp();
            $('.menu-button').removeClass('active');
        } else {
            return false;
        }
    });

    /* =Skill Bars
    -------------------------------------------------------------- */
    $('.bar-fill').waypoint({
        handler: function() {
            $(this).each(function() {
                $(this).animate({
                    width: $(this).attr('data-percent')
                }, 1500);
            });
        },
        offset: '95%'
    });

    /* =Lightbox
    -------------------------------------------------------------- */
    $('.lightbox').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-fade',

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('.atvImg') ? openerElement : openerElement.find('.atvImg');
            }
        }
    });

    /* =Thumbnail Effects
    -------------------------------------------------------------- */
    atvImg();

    function thumbHeight() {
        var imageContainer = $('.atvImg'),
            ww = $(window).width();

        imageContainer.css({
            "height": $('.folio-list li').width() + "px"
        });

    }

    thumbHeight();
    $(window).resize(thumbHeight);

    // Timeline
    $('.timeline').waypoint({
        handler: function() {
            $(this).addClass('on');
        },
        offset: '95%'
    });

    /* =Contact Form
    -------------------------------------------------------------- */
    $(function() {
        $('#contact').validate({

            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },

            messages: {
                name: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "contact.php",
                    success: function() {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contact').fadeTo("slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });


    /* =DEMO ONLY
    -------------------------------------------------------------- */
    $('.corner').on("click",function(){
		$('#options').slideToggle()
	});

	$('#default').on("click",function(){
		return false;
	});
	/* =DEMO ONLY
    -------------------------------------------------------------- */
    
})();