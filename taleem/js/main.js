"use strict";
/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
$(document).ready(function() {

	// ---------- Sticky ---------- //
    $(".sticky-1, .sticky-2").sticky({topSpacing: 0});
    // ---------- Sticky ---------- //

	// ------- Scroll to Top ------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });
    $('#scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // ------- Scroll to Top ------- //

    // ------- Auto height function ------- //
    var setElementHeight = function() {
        var width = $(window).width();
        /*if ($('.tg-hero-slider li img') >= height) {*/
        var height = $(window).height();
        $('.fullscreen').css('height', (height));
    }
        //       else {
        //            $('.autoheight').css('min-height', (800));
        //        }
        //};
    $(window).resize(function() {
        setElementHeight();
    }).resize();
    // ------- Auto height function ------- //

    // ---------- Banner Slider ---------- // 
	$('#banner-slider').owlCarousel({
	    animateOut: 'fadeOut',
	    autoplay: true,
	    items: 1,
	    nav: false,
	    loop: true,
	    dots: false,
	    smartSpeed: 450
	});
	// ---------- Banner Slider ---------- //

	// ---------- Enquiry Form ---------- //
	$('.enquiry-form-holder .bars-icon').on('click', function() {
	    $('.enquiry-form-holder').toggleClass("in-hieght");
	});
	// ---------- Enquiry Form ---------- //

	// ---------- Wow Animation ---------- //
    var wow = new WOW({
	    boxClass: 'animate',
	    animateClass: 'animated',
	    offset: 100,
	    mobile: false
	});
	wow.init();
    // ---------- Wow Animation ---------- //

	// ---------- slider Post ---------- // 
	$('#slider-post').owlCarousel({
	    items: 1,
	    nav: true,
	    loop: true,
	    dots: false,
	    smartSpeed: 450
	});
	// ---------- slider Post ---------- //

	// ------- Full Page Search Bar ------- //
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    });
    // ------- Full Page Search Bar ------- //

    // ------- Color Picker ------- //
    $('.chose-color').colorpicker();
    // ------- Color Picker ------- //

	// ------- Service Slider ------- //
	$('#services-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:1},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:2},
	        960:{ items:2},
	        991:{ items:2},
	        1024:{ items:3},
	        1199:{ items:3}
	    }
	})
	// ------- Service Slider ------- //

	// ------- Service V2 Slider ------- //
	$('.service-v2-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:1},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:2},
	        960:{ items:3},
	        991:{ items:3},
	        1024:{ items:4},
	        1199:{ items:4}
	    }
	})
	// ------- Service V2 Slider ------- //

	// ------- Service Slider ------- //
	$('#brand-icons-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    dots: false,
	    autoplay: true,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:2},
	        640:{ items:2},
	        768:{ items:3},
	        800:{ items:4},
	        960:{ items:4},
	        1200:{ items:4}
	    }
	})
	// ------- Service Slider ------- //

	// ------- Product Slider ------- //
	$('#bags-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:2},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:3},
	        991:{ items:3},
	        1200:{ items:4}
	    }
	})
	// ------- Product Slider ------- //

	// ------- Product Slider ------- //
	$('#uniform-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:2},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:3},
	        991:{ items:3},
	        1200:{ items:4}
	    }
	})
	// ------- Product Slider ------- //

	// ------- Product Slider ------- //
	$('#other-products').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:2},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:3},
	        991:{ items:3},
	        1200:{ items:4}
	    }
	})
	// ------- Product Slider ------- //

	// ------- Team Slider ------- //
	$('#team-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:2},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:2},
	        960:{ items:2},
	        991:{ items:2},
	        1024:{ items:3},
	        1200:{ items:3}
	    }
	})
	// ------- Team Slider ------- //

	// ------- Team Slider ------- //
	$('#testimonial-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:1, nav: false},
	        640:{ items:2},
	        768:{ items:2},
	        800:{ items:2},
	        960:{ items:2},
	        991:{ items:2},
	        1024:{ items:3},
	        1200:{ items:3}
	    }
	})
	// ------- Team Slider ------- //

	// ------- Thumbnail Slider Vertical ------- //
	$("#product-tumbnail-slider").owlCarousel({
		loop: true,
	  	autoplay: true,
	  	items: 1,
	  	nav: true,
	  	autoplayHoverPause: true,
	  	animateOut: 'slideOutUp',
	  	animateIn: 'slideInUp',
	  	dots: false,
	});
	// ------- Thumbnail Slider Vertical ------- //

	// ------- Team Slider ------- //
	$('#team-slider-thumnail').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    smartSpeed:200,
	    responsiveClass:true,
	    responsive:{
	        0:{ items:1},
	        320:{ items:1},
	        480:{ items:3},
	        640:{ items:3},
	        768:{ items:2},
	        800:{ items:3},
	        960:{ items:3},
	        1200:{ items:4}
	    }
	})
	// ------- Team Slider ------- //

	// ------- Time Counter ------- //
    $('#countdown-1, #countdown-2, #countdown-3, #countdown-4, #countdown-5, #countdown-6').countdown({
	    date: '3/30/2016 2:17:59',
	    offset: -2100,
	    day: 'Day',
	    days: 'Days'
	}, function() {
	    alert('Done!');
	});
    // ------- Time Counter ------- //

	// ------- Counter ------- //
	try {
	    $('#tc-counters').appear(function() {
	        setTimeout(function() {
	            odometer1.innerHTML = 2000;
	        }, 0);
	        setTimeout(function() {
	            odometer2.innerHTML = 1000;
	        }, 0);
	        setTimeout(function() {
	            odometer3.innerHTML = 188;
	        }, 0);
	        setTimeout(function() {
	            odometer4.innerHTML = 200;
	        }, 0);
	    });
	} catch (err) {}	
	// ------- Counter ------- //

	// ------- Google Map ------- // 
	$("#location-map").gmap3({
	    marker: {
	        address: "Haltern am See, Weseler Str. 151"
	    },
	    map: {
	        options: {
	            zoom: 16,
			    scrollwheel: false,
	        }
	    },
	});
    // ------- Google Map ------- //

    // ------- Google Map ------- // 
	$("#contact-map").gmap3({
	    marker: {
	        address: "Haltern am See, Weseler Str. 151"
	    },
	    map: {
	        options: {
	            zoom: 16,
			    scrollwheel: false,
	        }
	    },
	});
    // ------- Google Map ------- //

    // ------- Accodian ------- //
    $(".panel-heading").addClass("collapsed");
    // ------- Accodian ------- //

    // ------- Prety Photo ------- //
    $("a[data-rel]").each(function() {
    $(this).attr("rel", $(this).data("rel"));
	});
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
	    animation_speed: 'normal',
	    slideshow: 1000,
	    autoplay_slideshow: false,
	    social_tools: false
	});
	// ------- Prety Photo ------- //

	// ------- Video ------- //
   	$(".youtube").each(function() {
	    // Based on the YouTube ID, we can easily find the thumbnail image
	    $(this).css('background-image', +this.id + '/sddefault.jpg)');

	    // Overlay the Play icon to make it look like a video player
	    $(this).append($('<div/>', {
	        'class': 'play'
	    }));

	    $(document).delegate('#' + this.id, 'click', function() {
	        // Create an iFrame with autoplay set to true
	        var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
	        if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

	        // The height and width of the iFrame should be the same as parent
	        var iframe = $('<iframe/>', {
	            'frameborder': '0',
	            'src': iframe_url,
	            'width': $(this).width(),
	            'height': $(this).height()
	        })

	        // Replace the YouTube thumbnail with YouTube HTML5 Player
	        $(this).replaceWith(iframe);
	    });
	});
    // ------- Video ------- //

	// ------- Mesonary ------- //
    var $container = $('.gallery-masonry');
	var $optionSets = $('.option-set');
	var $optionLinks = $optionSets.find('a');

	function doIsotopeFilter() {
	    if ($().isotope) {
	        var isotopeFilter = '';
	        $optionLinks.each(function() {
	            var selector = $(this).attr('data-filter');
	            var link = window.location.href;
	            var firstIndex = link.indexOf('filter=');
	            if (firstIndex > 0) {
	                var id = link.substring(firstIndex + 7, link.length);
	                if ('.' + id == selector) {
	                    isotopeFilter = '.' + id;
	                }
	            }
	        });
	        $container.isotope({
	            itemSelector: '.masonry-grid',
	            filter: isotopeFilter,
	            layoutMode: 'fitRows'
	        });
	        $optionLinks.each(function() {
	            var $this = $(this);
	            var selector = $this.attr('data-filter');
	            if (selector == isotopeFilter) {
	                if (!$this.hasClass('selected')) {
	                    var $optionSet = $this.parents('.option-set');
	                    $optionSet.find('.selected').removeClass('selected');
	                    $this.addClass('selected');
	                }
	            }
	        });
	        $optionLinks.on('click', function() {
	            var $this = $(this);
	            var selector = $this.attr('data-filter');
	            $container.isotope({
	                itemSelector: '.masonry-grid',
	                filter: selector
	            });
	            if (!$this.hasClass('selected')) {
	                var $optionSet = $this.parents('.option-set');
	                $optionSet.find('.selected').removeClass('selected');
	                $this.addClass('selected');
	            }
	            return false;
	        });
	    }
	}
	var isotopeTimer = window.setTimeout(function() {
	    window.clearTimeout(isotopeTimer);
	    doIsotopeFilter();
	}, 1000);
    // ------- Mesonary ------- // 

});

// ------- Contact Form ------- //
function checkmail(input){
  var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(pattern1.test(input)){ return true; }else{ return false; }}     
    function proceed(){
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var company = document.getElementById("company");
        var msg = document.getElementById("message");
        var errors = "";
        if(name.value == ""){ 
        name.className = 'error';
          return false;}    
          else if(email.value == ""){
          email.className = 'error';
          return false;}
            else if(checkmail(email.value)==false){
                alert('Please provide a valid email address.');
                return false;}
            else if(company.value == ""){
                company.className = 'error';
                return false;}
           else if(msg.value == ""){
                msg.className = 'error';
                return false;}
           else 
          {
    $.ajax({
        type: "POST",
        url: "php/submit.php",
        data: $("#contact_form").serialize(),
        success: function(msg){
        //alert(msg);
        if(msg){
            $('#contact_form').fadeOut(1000);
            $('#contact_message').fadeIn(1000);
                document.getElementById("contact_message");
             return true;
        }}
    });
}};
// ------- Contact Form ------- //