/**** ******************************************************************
##
##    Template Name: Mars - Creative Minimal HTML Template
##    Description: Mars is an elegant creative theme designed for creative professionals and agencies.
##    Author: MrWP
##    Theme URI: http://themeforest.net/user/MrWP/portfolio
##    Author URI: http://themeforest.net/user/MrWP
##    Version: 1.0
##
*************************************************************************/

$(function () {
	'use strict';
	
/*	Loading	*/
  $(window).load(function () {
    $("#loading-sp").delay(600).fadeOut("slow");
  });
  
	/*	CountTo	*/
  $('.countup').appear(function() {
    var count_element =  $(this);
        count_element.countTo({
          from: 0,
          to: parseInt( count_element.text() , 10 ) ,
          speed: 5000
        });
  });

/*	About Carousel	*/
  $(window).load(function () {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
      singleItem: true,
      slideSpeed: 1700,
      pagination: false,
      afterAction: syncPosition,
      responsiveRefreshRate: 150,
    });

    sync2.owlCarousel({
      items : 4,
      itemsDesktop: [1199,4],
      itemsDesktopSmall: [979,4],
      itemsTablet: [768,4],
      itemsMobile: [479,2],
      pagination: false,
      responsiveRefreshRate: 100,
      afterInit: function(el){
        el.find(".owl-item").eq(0).addClass("synced");
      }
    });

    function syncPosition(el){
      var current = this.currentItem;
      $("#sync2")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
      if($("#sync2").data("owlCarousel") !== undefined){
        center(current)
      }
    }

    $("#sync2").on("click", ".owl-item", function(e){
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
	var myVar;

	$("#loading").hide();
	$('.works-loader').on('click', function(e){
	  $('#ajax-content').html("");
		e.preventDefault();
		var htmlStringLink=$(this).attr('href');
	  var catTopPosition = jQuery('#anchor-sp').offset().top;
		jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
	  $("#loading").slideDown();
	  $(".sliphover-container").hide();
	  myVar=setTimeout(function(){
		$('#ajax-content').load(htmlStringLink, function(result) {
			$(".sliphover-container").hide();
		$(this).hide();
		$(this).fadeIn();
		$("#loading").hide();
			// initiate responsive slideshow
		jQuery('.flexslider').flexslider({
			//	smoothHeight: true,
			animation: "slide"
			});
			// close ajax content
			
			$('.close-ajax').on('click', function() {
				jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
				$('#ajax-content').html("");
			});
		
	 
		});
		
	  }, 1000);

	});

	 $(document).ajaxComplete(function(e, xhr, options) {
	 if (options.type != 'POST') { 
	   $('#ajax-content').trigger('contentchanged');
	  myVar=setTimeout(function(){
		$("#loading").fadeOut();
		}, 500);
	  }
	 });


	$('#ajax-content').bind('contentchanged', function() {
		$("#loading").fadeIn();
		
		$('.prev-ajax').on('click', function() {
		  var prevHtmlString = $(this).attr('href');
		  console.log(prevHtmlString);
		  $('#ajax-content').load(prevHtmlString, function(result) {
		  var catTopPosition = jQuery('#anchor-sp').offset().top;
			jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
			$(this).hide();
			$(this).fadeIn();
			$("#loading").fadeOut();
			jQuery('.flexslider').flexslider({
			//	smoothHeight: true,
			animation: "slide"
			});
			$('.close-ajax').on('click', function() {
			  jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
			  $('#ajax-content').html("");
			});
			
		  });
		});
		
		$('.next-ajax').on('click', function() {
		  var nextHtmlString = $(this).attr('href');
		  $('#ajax-content').load(nextHtmlString, function(result) {
		  var catTopPosition = jQuery('#anchor-sp').offset().top;
			jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
			$(this).hide();
			$(this).fadeIn();
			$("#loading").fadeOut();
			jQuery('.flexslider').flexslider({
			//	smoothHeight: true,
			animation: "slide"
			});
			$('.close-ajax').on('click', function() {
			  jQuery('html, body').animate({scrollTop:catTopPosition}, '1000');
			  $('#ajax-content').html("");
			});
			
		  });
		});

	window.clearTimeout(myVar);

	});

});