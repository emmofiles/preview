jQuery(document).ready(function($) {
	'use strict'

    /* =======================================================================
		  		 Chosen Script 
	   =======================================================================
	*/	
	var kode_chosen_select = $(".chosen-select");
	if(kode_chosen_select.length){
		kode_chosen_select.chosen()
	}

	
	var kode_scroll_pane = $(".scroll-pane");
	if(kode_scroll_pane.length){
		kode_scroll_pane.jScrollPane();
	}
	/* =======================================================================
		  		Celender Script 
	   =======================================================================
	*/	
	var kode_demo_pane = $(".demo");
	if(kode_demo_pane.length){	
		kode_demo_pane.dcalendarpicker();
	}
	
	var kode_bxslider_pane = $(".bxslider");
	if(kode_bxslider_pane.length){
		kode_bxslider_pane.bxSlider({
			pagerCustom: '#bx-pager',
			slideMargin: 40,
			nextSelector: '.slider-next',
			autoplay: true,
			easing: 'easeInCubic',
			infiniteLoop: false,
			prevSelector: '.slider-prev',
			adaptiveHeight: true,
		});
	}	
	var kode_bxslider_sidebar = $(".bxslider-sidebar");
	if(kode_bxslider_sidebar.length){
		kode_bxslider_sidebar.bxSlider({
			autoplay: true,
			infiniteLoop: false,
			controls:true
		});
	}	
	var kode_mainsearch = $(".mein-search");
	if(kode_mainsearch.length){
		kode_mainsearch.on('click',function(){
			$(".hide-class-o").toggle('slide','slow');
		});
	}	


		
	
	/* ==============================================================
		   File Upload Script Start
    ============================================================== */
	  if($('#uploadBtn').length){
		document.getElementById("uploadBtn").onchange = function () {
		document.getElementById("uploadFile").value = this.value;
		};
	  }
	/* =======================================================================
		  		Flex Slider Script
	   =======================================================================
	*/	
	var kode_slider = $("#slider");
	var kode_carousel = $(".carousel");
	if(kode_carousel.length){		
		  // The slider being synced must be initialized first
		  kode_carousel.flexslider({
		    animation: "slide",
		    controlNav: false,
		    slideshow: false,
		    itemWidth: 200,
		    itemMargin: 30,
		    asNavFor: '#slider'
		  });
		 
		  kode_slider.flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: ".carousel"
		  });
		}  
	/* =======================================================================
		  		Flex Slider Script
	   =======================================================================
	*/	
	var kode_bg = $(".bg");
	if(kode_bg.length){	
	 	kode_bg.interactive_bg({
			strength: 200,
			scale: 2.0
	    });
    }	
    /* =======================================================================
		  		Accordien side-bar Script
	   =======================================================================
	*/	
	var kode_accordion = $(".accordien-title");
    if(kode_accordion.length){
		//custom animation for open/close
		$.fn.slideFadeToggle = function(speed, easing, callback) {
		  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};

		kode_accordion.accordion({
		  defaultOpen: 'accodien-one',
		  cookieName: 'nav',
		  speed: 'slow',
		  animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  },
		  animateClose: function (elem, opts) { //replace the standard slideDown with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  }
		});
	} 
	/* 
	=======================================================================
	  		 	Pretty Photo Script
	======================================================================= */
	var kode_prettyphoto = $("a[data-rel^='prettyPhoto']");
	
	if(kode_prettyphoto.length){
		kode_prettyphoto.prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	}
		
	/* ---------------------------------------------------------------------- */
	/*	DL Responsive Menu
	/* ---------------------------------------------------------------------- */
		if(typeof($.fn.dlmenu) == 'function'){
			$('#kode-responsive-navigation').each(function(){
				$(this).find('.dl-submenu').each(function(){
					if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
						var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
						parent_nav.append($(this).siblings('a').clone());
						
						$(this).prepend(parent_nav);
					}
				});
				$(this).dlmenu();
			});
		}
	/* =======================================================================
		  		Range Slider Script Script
	   ======================================================================= */
	var kode_price_range = $(".price-range-scroll");
	if(kode_price_range.length){
		kode_price_range.slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 50, 450 ],
		  slide: function( event, ui ) {
			$( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( ".amount" ).val( "$" + kode_price_range.slider( "values", 0 ) +
		  " - $" + kode_price_range.slider( "values", 1 ) );
	}
	/* =======================================================================
		  		Home page SILDER Script
   	======================================================================= */

	/* =======================================================================
		  		BLOG POST SILDER Script
	   ======================================================================= */
	var kode_blog_post = $(".post-blog-post-silde");
   if(kode_blog_post.length){
		kode_blog_post.owlCarousel({
			loop:true,
			autoplay:true,
			margin:15,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				},
				1600:{
					items:2
				}
			}
		});
	}
	var kode_file_ob = $("#file-0b");
	if(kode_file_ob.length){
		kode_file_ob.fileinput();
	}	
	/* =======================================================================
		  		BLOG POST SILDER Script 8 COLUMN
   	======================================================================= */
	var kode_slider_event_ob = $(".silder-event-post");
	if(kode_slider_event_ob.length){
		kode_slider_event_ob.owlCarousel({
			loop:true,
			autoplay:true,
			margin:15,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				},
				1600:{
					items:1
				}
			}
		});
	}

	/*
	  =======================================================================
		  	Grid Slider
	  =======================================================================
	*/
	var kode_grid_slider = $(".grid-slider");
	if(kode_grid_slider.length){
		kode_grid_slider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			  responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
	}
	/*
	  =======================================================================
		  		COUNT DOWN Script
	  =======================================================================
	*/
	
	var countdown_script = $('.countdown');
	if(countdown_script.length){
		countdown_script.downCount({ date: '08/08/2017 12:00:00', offset: +1 });
	}
	var kode_tabs = $("#tabs");
	if(kode_tabs.length){
		kode_tabs.tabs();
	}
	
	var filter_container = jQuery('#filterable-item-holder-1');
	if(filter_container.length){
		filter_container.children().css('position','relative');	
		filter_container.masonry({
			singleMode: true,
			itemSelector: '.filterable-item:not(.hide)',
			animate: true,
			animationOptions:{ duration: 800, queue: false }
		});	
		jQuery(window).resize(function(){
			var temp_width =  filter_container.children().filter(':first').width();
			filter_container.masonry({
				columnWidth: temp_width,
				singleMode: true,
				itemSelector: '.filterable-item:not(.hide)',
				animate: true,
				animationOptions:{ duration: 800, queue: false }
			});		
		});	
		jQuery('ul#filterable-item-filter-1 a').on('click',function(e){	

			jQuery(this).addClass("active");
			jQuery(this).parents("li").siblings().children("a").removeClass("active");
			e.preventDefault();
			
			var select_filter = jQuery(this).attr('data-value');
			
			if( select_filter == "All" || jQuery(this).parent().index() == 0 ){		
				filter_container.children().each(function(){
					if( jQuery(this).hasClass('hide') ){
						jQuery(this).removeClass('hide');
						jQuery(this).fadeIn();
					}
				});
			}else{
				filter_container.children().not('.' + select_filter).each(function(){
					if( !jQuery(this).hasClass('hide') ){
						jQuery(this).addClass('hide');
						jQuery(this).fadeOut();
					}
				});
				filter_container.children('.' + select_filter).each(function(){
					if( jQuery(this).hasClass('hide') ){
						jQuery(this).removeClass('hide');
						jQuery(this).fadeIn();
					}
				});
			}
			
			filter_container.masonry();	
			
		});
	}
});;