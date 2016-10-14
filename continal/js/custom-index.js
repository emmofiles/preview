(function($) { "use strict";

	$(window).load(function() {
        $('.images-preloader').hide();
    });
	
	//Header Scroll
	var $header = $("header"),
    $clone = $header.before($header.clone().addClass("clone"));
	function init() {
        window.addEventListener('scroll', function(e){
			
			var mq = window.matchMedia( "(min-width: 992px)" );
			
			if (mq.matches) {
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 200,
                header = document.querySelector("header.clone");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }

            }
			}

            
        });
    }
    window.onload = init();

	//Testimonial Slider    

	$(document).ready(function() {

		$("#client-logo").owlCarousel({
	        navigation: false, 
	        slideSpeed : 600,
	        autoPlay : 5000,
	        items : 8,
			itemsDesktop      : [1199,8],
			itemsDesktopSmall     : [979,6],
			itemsTablet       : [768,4],
			itemsMobile       : [479,2],
	        pagination: false
	    });

		$("#latest-post").owlCarousel({
	        navigation: true, 
	        slideSpeed : 600,
	        autoPlay : false,
	        items : 3,
			itemsDesktop      : [1199,3],
			itemsDesktopSmall     : [979,2],
			itemsTablet       : [768,2],
			itemsMobile       : [479,1],
	        pagination: false,
	        navigationText: [
		      "<i class='fa fa-chevron-left'></i>",
		      "<i class='fa fa-chevron-right'></i>"
		    ],
	    });
	 
		var sync1 = $("#sync-3");
		var sync2 = $("#sync-4");

		sync1.owlCarousel({
		singleItem : true,
		autoPlay: 6000,
		transitionStyle : "fade",
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
		});


		sync2.owlCarousel({
		items : 6,
		itemsDesktop      : [1199,6],
		itemsDesktopSmall     : [979,6],
		itemsTablet       : [768,6],
		itemsMobile       : [479,3],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
		});

		function syncPosition(el){
		var current = this.currentItem;
		$("#sync-4")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync-4").data("owlCarousel") !== undefined){
		  center(current)
		}
		}

		$("#sync-4").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
		});

		function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}

		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}

		}

	});

	
	// Menu Mobile
	
	$('.btn-toggle').on('click',function(){

		var parent = $(this).parents('header');
		if(parent.find('nav').hasClass('menu-mobile')){
            parent.find('nav').removeClass('menu-mobile');
        }else{
            parent.find('nav').addClass('menu-mobile');
        }

        if(parent.find('.top-info').hasClass('menu-mobile')){
            parent.find('.top-info').removeClass('menu-mobile');
        }else{
            parent.find('.top-info').addClass('menu-mobile');
        }

	});
	
	$( '.arrow-parent' ).on( 'click', function() {

		if($(this).siblings('ul').hasClass('show')){
            $(this).siblings('ul').removeClass('show');
        }else{
            $(this).siblings('ul').addClass('show');
        }
		
	} );
  	
	// BACK TO TOP BUTTON

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 300) {
	      $('#back-to-top').fadeIn('slow');
	    } else {
	      $('#back-to-top').fadeOut('slow');
	    }
	  });
	$('#back-to-top').on( 'click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


	
})(jQuery);