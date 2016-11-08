/*global $, jQuery */
/* Contents
// ------------------------------------------------>
	1.  Loading Screen
	2.  Nav Module Click
	3.	Mobile Menu
	4.  Background Insert
	5.  Header Affix
	6.  Header Static
	7.  Scroll To
	8.  Hero Carousel
	9.  Testimonial Carousel
	10. Portoflio Carousel
	11. Blog Carousel
	12. Cleint Carousel
	13. Product Carousel
	14. Counter Up
	15. Countdown Date
	16. Ajax Mailchimp
	17. Ajax Campaign monitor
	18. Ajax Contact Form
	19. Magnific Popup
	20. Magnific Popup Video
	21. Portoflio Filter
	22. Blog Mansory
	23. Product Filter
	24. Faq Filter
	25. Slider Range
	26. Flickr Stream
	27. Twitter Feed
	28. Rounded Skill
	29. Service Blocks
	30. Wow Animated
	31. Back To TOP
*/
(function($) {
    "use strict";

	/* ------------------  Loading Screen ------------------ */

    $(window).on("load", function() {
        $(".preloader").fadeOut(5000);
        $(".preloader").remove();
    });

	/* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });
	
    /* ------------------  Nav Module Click  ------------------ */

    $(".module-icon").on("click", function(e) {

        $(this).parent().siblings().removeClass('active'); // Remove the class .active form any sibiling.
        $(this).parent(".module").toggleClass("active"); //Add the class .active to parent .module for this element.
        // If [ module-search ] is [ active ] ADD click [ active ] class to [ module-search-box] else remove it.
        if ($(".module-search.active").length > 0) {
            $(".module-search-box").addClass("active");
        } else {
            $(".module-search-box").removeClass("active");
        };
        e.stopPropagation();
    });
    // If Click on [ Document ] and this click outside [ module ]
    $(document).on("click", function(e) {
        if ($(e.target).is(".module, .module-content, .search-form input,.cart-control .btn,.cart-overview a.cancel,.cart-box") === false) {
            $(".module").removeClass("active"); // Remove the class .active form .module when click on outside the div.
            e.stopPropagation();
        }
    });

    // If Click on [ Search-cancel ] Link
    $(".search-cancel").on("click", function() {
        $(".module-search-box").removeClass("active");
        $(".module-search").removeClass("active");
    });
	
	// If Click on [ Document ] and this click outside [ search form input ]
    $(document).on("click", function(e) {
        if ($(e.target).is(".module,.search-form input") === false) {
            $(".module-search-box").removeClass("active"); // Remove the class .active form .module when click on outside the div.
            e.stopPropagation();
        }
    });
    $(".side-nav-icon").on("click", function() {
        if ($(this).parent().hasClass('active')) {
            $(".hamburger-panel").width(270);
            $(".wrapper").addClass("page-transform");
            $(this).addClass("hamburger-panel-close");
        } else {
            $(".hamburger-panel").width(0);
            $(".wrapper").removeClass("page-transform");
            $(this).removeClass("hamburger-panel-close");
        };

    });
// If Click on [ Document ] and this click outside [ hamburger panel ]
    $(document).on("click", function(e) {
        if ($(e.target).is(".hamburger-panel,.hamburger-panel .list-links,.hamburger-panel .list-links a,.hamburger-panel .social-share,.hamburger-panel .social-share a i,.hamburger-panel .social-share a,.hamburger-panel .copywright") === false) {
            $(".wrapper").removeClass("page-transform"); // Remove the class .active form .module when click on outside the div.
			$(".side-nav-icon").removeClass("hamburger-panel-close");
			 $(".hamburger-panel").width(0);
            e.stopPropagation();
        }
    });

    /* ------------------  MOBILE MENU ------------------ */

    var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });
	
    $module.on("click",function() {
        $(this).toggleClass("toggle-module");
    });
    $module.find("input.form-control", ".btn", ".cancel").click(function(e) {
        e.stopPropagation();
    });

    /* ------------------ HEADER AFFIX ------------------ */

    var $navAffix = $(".transparent-header nav");
    $navAffix.affix({
        offset: {
            top: 50
        }
    });

    /* ------------------ HEADER STATIC ------------------ */

    $(window).on("scroll", function() {
        var wScroll = $(window).scrollTop();
        var heroSlider = $('.rev_slider_wrapper').outerHeight();
        if (wScroll > heroSlider) {

            $('nav').parent('.onepage-header').addClass('navbar-fixed-top');

        } else {
            $('nav').parent('.onepage-header').removeClass('navbar-fixed-top');
        }

    });

	/* ------------------ HEADER One Page ------------------ */
	
	if($('.onepage').length > 0){
	$(window).on("scroll", function() {
		
			$('.section').each(function() {
				var sectionID = $(this).attr("id"),
					sectionTop = $(this).offset().top - 100,
					sectionHight= $(this).outerHeight(),
					wScroll = $(window).scrollTop();
			    if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
						 $("nav a[href='#" + sectionID + "']").parent().addClass("active");
					} else {
						 $("nav a[href='#" + sectionID + "']").parent().removeClass("active");
					}
				
				})
     	});
	};
	
    /* ------------------  Smoothly Scroll To ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    /* ------------------ HERO CAROUSEL ------------------ */
    
	var $heroSlider = $("#hero-slider"),
        $galleryCarousel = $(".gallery-featured");

    $galleryCarousel.owlCarousel({
        loop: true,
        margin: 22,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* ------------------ TESTIMONIAL CAROUSEL ------------------ */
    
	var $testimonialCarousel = $("#testimonial-oc"),
        $testimonialCarousel2 = $("#testimonial-oc2"),
        $testimonialCarousel3 = $("#testimonial-oc3"),
        $testimonialCarousel4 = $("#testimonial-oc4"),
        $testimonialCarousel5 = $("#testimonial-oc5"),
        $testimonialFull = $("#testimonial-full"),
        $testimonialFull2 = $("#testimonial-full2"),
        $testimonialSlide = $(".testimonial-slide");


    $testimonialCarousel.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        dotsSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $testimonialCarousel2.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        dotsSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $testimonialCarousel3.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        dotsSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $testimonialFull.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        dotsSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $testimonialFull2.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        dotsSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $testimonialCarousel4.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    $testimonialCarousel5.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    /* ------------------ PORTOFLIO CAROUSEL ------------------ */
    
	var $portfolioGallery = $(".portofolio-gallery");
    $portfolioGallery.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
	
    /* ------------------ BLOG CAROUSEL ------------------ */
    
	var $blogCarousel = $("#blog-carousel"),
        $blogCarousel2 = $("#blog-carousel2"),
        $blogCarousel3 = $("#blog-carousel3"),
        $blogHero = $("#blog-carousel4");
		
    $blogCarousel.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    $blogCarousel2.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
	
    $blogCarousel3.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });
	
    $blogHero.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
	
    /* ------------------ CLIENT CAROUSEL ------------------ */
    
	var $clients = $(".owl-clients");
    $clients.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 6
            }
        }
    });
	
    /* ------------------ PRODUCT CAROUSEL ------------------ */

    var $productSlide = $(".product-carousel");

    $productSlide.owlCarousel({
        thumbs: true,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: false,
        dotsSpeed: 200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* ------------------  COUNTER UP ------------------ */

    var counter = $(".counter");
    counter.counterUp({
        delay: 10,
        time: 1000
    });

    /* ------------------ COUNTDOWN DATE ------------------ */

    var newDate = new Date(2016, 10, 31),
        $countDown = $("#countdown");
    $countDown.countdown({
        until: newDate,
        format: "smSMHD"
    });

    /* ------------------  AJAX MAILCHIMP ------------------ */

    $('.mailchimp').ajaxChimp({
        url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&amp;id=aa0f2ab5fa", //Replace with your own mailchimp Campaigns URL.
        callback: chimpCallback

    });

    function chimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscribe-alert').html('<h5 class="alert alert-success">' + resp.msg + '</h5>').fadeIn(1000);
            //$('.subscribe-alert').delay(6000).fadeOut();

        } else if (resp.result === 'error') {
            $('.subscribe-alert').html('<h5 class="alert alert-danger">' + resp.msg + '</h5>').fadeIn(1000);
        }
    }

    /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
    });

    /* ------------------  AJAX CONTACT FORM  ------------------ */

    var contactForm = $("#contact-form");
    var contactResult = $('#contact-result');
    contactForm.validate({
        debug: true,
        submitHandler: function(contactForm) {
            $(contactResult, contactForm).html('Please Wait...');
            $.ajax({
                type: "POST",
                url: "assets/php/sendmail.php",
                data: $(contactForm).serialize(),
                timeout: 20000,
                success: function(msg) {
                    $(contactResult, contactForm).html('<div class="alert alert-success" role="alert"><strong>Thank you. We will contact you shortly.</strong></div>').delay(3000).fadeOut(2000);
                },
                error: $('.thanks').show()
            });
            return false;
        }
    });

    /* ------------------ MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });

    /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */
	
    $('.popup-video,.popup-gmaps').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /* ------------------ PORTFOLIO FLITER ------------------ */
   
    var $portfolioFilter = $(".portfolio-filter"),
        portfolioLength = $portfolioFilter.length,
		protfolioFinder= $portfolioFilter.find("a"),
        $portfolioAll = $("#portfolio-all");

    // init Isotope For Portfolio
    protfolioFinder.on("click",function(e) {
        e.preventDefault();
        $portfolioFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (portfolioLength > 0) {
        $portfolioAll.imagesLoaded().progress(function() {
            $portfolioAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ". portfolio-item ",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    protfolioFinder.on("click",function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $portfolioAll.imagesLoaded().progress(function() {
            $portfolioAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ". portfolio-item ",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------ BLOG MANSORY  ------------------*/
    
	var $blogAll = $("#blog-all");

    $blogAll.imagesLoaded().progress(function() {
        $blogAll.isotope({
            animationOptions: {
                duration: 750,
                itemSelector: ".blog-post",
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
	
    /* ------------------ PRODUCT FLITER ------------------ */
    
	var $shopFilter = $(".shop-filter"),
        shopLength = $shopFilter.length,
		shopFinder=$shopFilter.find("a"),
        $shopAll = $("#shop-all");

    // init Isotope For Shop
    shopFinder.on("click",function(e) {
        e.preventDefault();
        $shopFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (shopLength > 0) {
        $shopAll.imagesLoaded().progress(function() {
            $shopAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".product",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    shopFinder.on("click",function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $shopAll.imagesLoaded().progress(function() {
            $shopAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".product",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------ FAQ FLITER ------------------ */
    
	var $faqsFilter = $(".faqs-filter"),
        faqsLength = $faqsFilter.length,
		faqsFinder=$faqsFilter.find("a"),
        $faqsAll = $("#faqs-all");

    // init Isotope For faqs
    faqsFinder.on("click",function(e) {
        e.preventDefault();
        $faqsFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (faqsLength > 0) {
        $faqsAll.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                itemSelector: ".faqs-item",
                easing: "linear",
                queue: false,
            }
        });
    }
    faqsFinder.on("click",function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $faqsAll.isotope({
            filter: $selector,
            animationOptions: {
                duration: 750,
                itemSelector: ".faqs-item",
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });

    /* ------------------ SLIDER RANGE ------------------ */

    var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            $sliderAmount.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $sliderAmount.val("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));

    /* ------------------  FLICKR STREAM ------------------ */
  
    var flickrID = '52617155@N08'; // Your Flickr Account Id Here
    var $flikrDiv = $('#flickr-feed');
    $flikrDiv.jflickrfeed({
        limit: 10,
        qstrings: {
            id: flickrID
        },
        itemTemplate: '<a class="flickr-item" href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
    }, function(data) {
        $('.flickr-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
	
    /* ------------------  TWITTER FEED ------------------ */
    
	var twitterFeed=$('#twitter-feed'),
		twitterID = '721372281637888000'; // Your Twitter Widget Id Here

	if(twitterFeed.length>0){
		/* Get Last 2 Tweets */
		var twitterConfig = {
			"id": twitterID,
			"domId": 'twitter-feed',
			"maxTweets": 2,
			"showUser": false,
			"showTime": true,
			"showRetweet": false,
			"showInteraction": false,
			"enableLinks": true,
			"customCallback": handleTweets,
			"dateFunction": momentDateFormatter,
		};
	
		function handleTweets(tweets) {
			var x = tweets.length;
			var n = 0;
			var element = document.getElementById('twitter-feed');
			var html = '<ul class="list-unstyled mb-0">';
			while (n < x) {
				html += '<li>' + tweets[n] + '</li>';
				n++;
			}
			html += '</ul>';
			element.innerHTML = html;
		};
	
		function momentDateFormatter(date, dateString) {
			return moment(dateString).fromNow();
		}
	twitterFetcher.fetch(twitterConfig);
	}
	
    /* ------------------  ROUNDED SKILL ------------------ */

    $(window).on("scroll", function() {
        var roundedSkill = $('.rounded-skill');

        if ($('.rounded-skill').length) {
            var wScroll = $(window).scrollTop() + $(window).height();
            var skillScroll = $('.skill').offset().top + $('.skill').outerHeight();
            /* If the object is completely visible in the window, fade it in */

            if (wScroll > skillScroll) {
                roundedSkill.easyPieChart({
                    duration: 1000,
                    enabled: true,
                    scaleColor: false,
                    size: 166,
                    trackColor: false,
                    lineWidth: 3,
                    barColor: '#46a1f0',
                    animate: 5000,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.prcent').text(Math.round(percent));
                    }
                });

            }
        }

    });

    /* ------------------  SERVICE BLOCKS ------------------ */
	
    var serviceFinder = $("#service1").find(".service-footer a");
	serviceFinder.on("click", function(e) {
        e.preventDefault();
        $(this).parent().closest(".service-panel").toggleClass("active");
        //$(".service-body").toggle();
    });

    /* ------------------  WOW ANIMATED  ------------------ */
    
	var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

    });

    wow.init();

    /* ------------------  BACK TO TOP ------------------ */
	
	var backTop = $('#back-to-top');
	
    if (backTop.length) {
        var scrollTrigger = 200, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    backTop.addClass('show');
                } else {
                    backTop.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
       backTop.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}(jQuery));
