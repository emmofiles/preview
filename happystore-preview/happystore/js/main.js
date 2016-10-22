(function ($) {
 "use strict";
 
/*----------------------------
 menu a active
------------------------------ */
	$( "ul.dropdown" ).parent('li').addClass('before-after');
	$( ".home-four" ).parent('body').addClass('home-page-four');
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*--------------------------
 tooltip active jquery
---------------------------- */
	 $('.actions a[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
/*--------------------------
 menu a active jquery
---------------------------- */
		 var pgurl = window.location.href.substr(window.location.href
		.lastIndexOf("/")+1);
		 $("ul li a").each(function(){
			  if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
			  $(this).addClass("active");
		 })
/*----------------------------
 nivoSlider active
------------------------------ */
	 $('#mainSlider').nivoSlider({
		directionNav: true,
		animSpeed: 500,
		effect: 'random',
		slices: 18,
		pauseTime: 5000,
		pauseOnHover: false,
		controlNav: false,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	 });
/*----------------------------
 owl active
------------------------------ */  
  $("#acc-product").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#single-product-1,#single-product-2,#single-product-3,#women-three-item,#clothes-three-item,.thubm-caro").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
	$("#latestpost-four").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,2],
		itemsMobile : [479,1],
	});
/*----------------------------
 owl active
------------------------------ */  
  $("#women-product,#clothes-product").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#latestpost").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#latestpost-two,#related-product-1").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#barnd-logo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#barnd-logo-two").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 6,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,6],
	  itemsDesktopSmall : [991,5],
	  itemsTablet: [767,4],
	  itemsMobile : [479,2],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#accumsan-left").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 owl active
------------------------------ */  
  $("#post-thumbnail").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-play'></i>","<i class='fa fa-play'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 bxslider active for video section
------------------------------ */  
	$('.bxslider').bxSlider({
		mode: 'vertical',
		slideMargin: 5,
		pager:false,
		auto: true,
		controls:false,
		responsive:true,
	});
/*----------------------------
	Bootstrap Tabs active
------------------------------ */
	$('#all-product a,#category-tab a,#category-tab2 a,#shop-tab a').on('click',function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
/*----------------------------
 price-slider active
------------------------------ */  
	$( "#slider-range" ).slider({
		range: true,
		min: 40,
		max: 600,
		values: [ 100, 380 ],
		slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	" - £" + $( "#slider-range" ).slider( "values", 1 ) ); 
/*--------------------------
 scrollUp active
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    }); 
/*--------------------------------
	active simpleLens js
---------------------------------*/
	$('.simpleLens-image').simpleLens({
		
	});
	$(".fancybox").fancybox();
/*--------------------------------
	Create an account toggle function
---------------------------------*/
	$( '.click1' ).on('click', function() {
		$( '.toggle1' ).slideToggle(500);
	});
	$( '.click2' ).on('click', function() {
		$( '.toggle2' ).slideToggle(500);
	});
	$( '.click3' ).on('click', function() {
		$( '.toggle3' ).slideToggle(300);
	});
	$( '.click4' ).on('click', function() {
		$( '.toggle4' ).slideToggle(300);
	});
/*--------------------------------
	Progress bar 
---------------------------------*/
	$.fn.progress = function() {
		var percent = this.data("percent");
		this.css("width", percent+"%");
	};
	$(".bar-one .bar").progress();
	$(".bar-two .bar").progress();
	$(".bar-three .bar").progress();
	$(".bar-four .bar").progress();


})(jQuery); 