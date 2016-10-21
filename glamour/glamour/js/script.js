jQuery(function($) {
    'use strict';

    (function() {
        $(window).on('load', function() {

            /*
            =========================================================================================
            1. Spinner 
            =========================================================================================
            */
            $(".glamour_loader").fadeOut("slow");


            /*
            =========================================================================================
            2.PARALLAX
            =========================================================================================
            */
            parallaxInit();
            function parallaxInit() {
                $('.slider-parallax').parallax("30%", 0.1);
                $('.testimonial-parallax').parallax("30%", 0.1);
                $('.page-header-parallax').parallax("30%", 0.1);
                /*add as necessary*/
            }
        });
    }());


    (function() {
        $(window).on('scroll', function() {

            /*
            =========================================================================================
            3. NAV SCROLL FIX
            =========================================================================================
            */
            if ($(window).scrollTop() > 80) {
                $("nav.transparrent-bg").css({
                    'background-color': '#fff',
                    'border-bottom' : '1px solid #eee'
                });
                $("nav.transparrent-bg .menuzord-menu > li > a").css({
                    'padding-top': '26px',
                    'color': '#333'    
                }); 
                $("nav.transparrent-bg .menuzord-brand").css({
                    'margin-top': '15px',   
                });  
                $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
                    'padding-top': '26px',
                    'color': '#333'    
                });   
                $("nav.navbar-fixed-top").addClass("nav_border");               
                $(".changeable").attr("src", "images/logo.png");              
            } else {
                $("nav.transparrent-bg").css({
                    'background-color': 'transparent',
                    'border' : '1px solid transparent'
                });
                $("nav.transparrent-bg .menuzord-menu > li > a").css({
                    'padding-top': '40px' ,
                    'color': '#fff'   
                });  
                $("nav.transparrent-bg .menuzord-brand").css({
                    'margin-top': '28px',   
                }); 
                $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
                    'padding-top': '40px',
                    'color': '#fff'    
                });   
                $("nav.navbar-fixed-top").removeClass("nav_border");               
                $(".changeable").attr("src", "images/logo-2.png");                               
            }

            /*
            =========================================================================================
            4. PROGRESS BAR
            =========================================================================================
            */

            $(".single_progressbar").each(function() {
                var base = $(this);
                var windowHeight = $(window).height();
                var itemPos = base.offset().top;
                var scrollpos = $(window).scrollTop() + windowHeight - 100;
                if (itemPos <= scrollpos) {
                    var auptcoun = base.find(".progress-bar").attr("aria-valuenow");
                    base.find(".progress-bar").css({
                        "width": auptcoun + "%"
                    });
                    var str = base.find(".skill_per").text();
                    var res = str.replace("%", "");
                    if (res == 0) {
                        $({
                            countNumber: 0
                        }).animate({
                            countNumber: auptcoun
                        }, {
                            duration: 3000,
                            easing: 'linear',
                            step: function() {
                                base.find(".skill_per").text(Math.ceil(this.countNumber) + "%");
                            }
                        });
                    }
                }
            });

            /*
            =========================================================================================
            5. MENU  FOCUS FIX 
            =========================================================================================
            */             
            $(".page").each(function() {
                var bb = $(this).attr("id");
                var hei = $(this).outerHeight();
                var grttop = $(this).offset().top - 80;
                if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                    var uu = $(".onepage .menuzord-menu > li > a[href='#" + bb + "']").parent().addClass("active");
                } else {
                    var uu = $(".onepage .menuzord-menu > li > a[href='#" + bb + "']").parent().removeClass("active");
                }
            });


        });
    }());


    (function() {
        /*
        =========================================================================================
        6. MENU   
        =========================================================================================
        */        
        $("#menuzord").menuzord({
            align: "right",
            scrollable: true
        });

        /*
        =========================================================================================
        7.NAV MENU SMOOTH SCROLL  
        =========================================================================================
        */


        $(".onepage .menuzord-menu > li > a").on('click', function() {
            $(this).parent().addClass("active");
            $(".onepage .menuzord-menu > li > a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 1000, 'swing');
            return false;
        });


        /*
        =========================================================================================
        8. FIX HOME SCREEN HEIGHT  
        =========================================================================================
        */

        setInterval(function() {
                var widnowHeight = $(window).height();
                var sliderHeight = $(".hero-fullscreen").height();
                var padTop = widnowHeight - sliderHeight;
                $(".hero-fullscreen").css({
                    'padding-top': Math.round(padTop / 2) + 'px',
                    'padding-bottom': Math.round(padTop / 2) + 'px'
                });
            }, 10);
        
        /*
        =========================================================================================
        9. PORTFOLIO   
        =========================================================================================
        */ 
        $('#js-grid-masonry').cubeportfolio({
            filters: '#js-filters-masonry',
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: 'fadeOut',
            gapHorizontal: 20,
            gapVertical: 20,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            caption: 'overlayBottomAlong',
            displayType: 'bottomToTop',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });

        /*
        =========================================================================================
        10. CLIENT CAROSEL   
        =========================================================================================
        */ 
        var owl_gallery = $("#client-carosel");
        owl_gallery.owlCarousel({
            loop: true,
            margin: 50,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 3
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 6
                }
            }
        });
        /*
        =========================================================================================
        11. BLOG CAROSEL   
        =========================================================================================
        */ 
        var owl_gallery = $("#blog_carosel");
        owl_gallery.owlCarousel({
            loop: true,
            margin: 50,
            nav: true,
            navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        /*
        =========================================================================================
        12. PRODUCT SLIDER   
        =========================================================================================
        */ 
        var owl_gallery = $("#product_slider");
        owl_gallery.owlCarousel({
            loop: true,
            margin: 50,
            nav: true,
            navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        /*
        =========================================================================================
        13. SINGLE PORTFOLIO SLIDER 
        =========================================================================================
        */ 
        var owl_gallery = $("#single_portfolio_slider");
        owl_gallery.owlCarousel({
            loop: true,
            margin: 50,
            nav: true,
            // autoplay: true,
            navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });        
        /*
        =========================================================================================
        14. MAILCHIMP
        =========================================================================================
        */         
        $('#mc-form').ajaxChimp({
            url: "http://themerocks.us9.list-manage.com/subscribe/post?u=f04c804868966b1b4509daa9b&amp;id=825b9235c7"
        });
        /*
        =========================================================================================
        15. CONTACT  FORM VALIDATION   
        =========================================================================================
        */

        $("#Name").keyup(function() {
            "use strict";
            var value = $(this).val();
            if (value.length > 1) {
                $(this).parent().find(".error_message").remove();
                $(this).css({
                    "border": "1px solid rgba(0, 0, 0, 0.2)"
                })
            } else {
                $(this).parent().find(".error_message").remove();
                $(this).parent().append("<div class='error_message'>Name value should be at least 2</div>");
            }
        });
        $("#Email").keyup(function() {
            "use strict";
            var value = $(this).val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test(value)) {
                $(this).parent().find(".error_message").remove();
                $(this).css({
                    "border": "1px solid rgba(0, 0, 0, 0.2)"
                })
            } else {
                $(this).parent().find(".error_message").remove();
                $(this).parent().append("<div class='error_message'>Please entire a valid email. </div>");
            }
        });
        $("#contact_submit").click(function() {
            "use strict";
            var nameValue = $("#Name").val();
            if (!nameValue.length) {
                $("#Name").css({
                    "border": "1px solid red"
                });
                $("#Name").parent().find(".error_message").remove();
                $("#Name").parent().append("<div class='error_message'>Name is required</div>");
                return false;
            }
            if (nameValue.length < 1) {
                $("#Name").css({
                    "border": "1px solid red"
                });
                $("#Name").parent().find(".error_message").remove();
                $("#Name").parent().append("<div class='error_message'>Name value should be at least 2</div>").show();
                return false;
            }
            var emailValue = $("#Email").val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (!emailValue) {
                $("#Email").css({
                    "border": "1px solid red"
                });
                $("#Email").parent().find(".error_message").remove();
                $("#Email").parent().append("<div class='error_message'>Email is required</div>").show();
                return false;
            }
            if (!testEmail.test(emailValue)) {
                $("#Email").css({
                    "border": "1px solid red"
                });
                $("#Email").parent().find(".error_message").remove();
                $("#Email").parent().append("<div class='error_message'>Please entire a valid email.</div>").show();
                return false;
            }
            var phoneValue = $("#Phone").val();
            var messageValue = $("#Message").val();
            if (nameValue && emailValue) {
                $(".feedback_box").slideDown();
                $.ajax({
                    url: 'mail/mail.php',
                    data: {
                        name: nameValue,
                        email: emailValue,
                        phone: phoneValue,
                        message: messageValue
                    },
                    type: 'POST',
                    success: function(result) {
                        "use strict";
                        $(".show_result").append("<div class='result_message'>" + result + "</div>");
                        $(".result_message").slideDown();
                        $("#Name").val("");
                        $("#Email").val("");
                        $("#Phone").val("");
                        $("#Message").val("");
                    }
                });
            }
            return false;
        });

        /*
        =========================================================================================
        16. MOSONRY   
        =========================================================================================
        */ 
        var $container = $('.masonry-container');
        $container.imagesLoaded(function() {
            $container.masonry({
                columnWidth: '.item',
                itemSelector: '.item'
            });
        });

        /*
        =========================================================================================
        17. COUNTER
        =========================================================================================
        */
        $('.single_facts > h2').counterUp({
            delay: 10,
            time: 1000
        });
        /*
        =========================================================================================
        18. TEXT ROTATOR
        =========================================================================================
        */
        $(".inner_hero_section h2 .rotate").textrotator({
            animation: "fade",
            speed: 1500
        });
        /*
        =========================================================================================
        19. CART SPINNER
        =========================================================================================
        */
        $('.spinner .btn:first-of-type').on('click', function() {
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
        });
        $('.spinner .btn:last-of-type').on('click', function() {
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
        });

        /*
        =========================================================================================
        20. TYPED
        =========================================================================================
        */

        $(".element").each(function(){
            var $this = $(this);
            $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100, // typing speed
            backDelay: 3000, // pause before backspacing
            loop: true
            });
        });
        /*
        =========================================================================================
        12. SEARCH OVERLY
        =========================================================================================
        */

        $("#filter-search").on('click', function() {
            $(".full-page-search").addClass("open-search");
        });
        $(".sr-overlay").on('click', function() {
            $(".full-page-search").removeClass("open-search");
        });  

    }());
});