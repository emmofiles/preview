/*
  Project Name :Gardening
  Author Company : Ewebcraft
  Project Date: 06 January, 2016
  Author Website : http://www.ewebcraft.com
  Author Email : ewebcraft@gmail.com
*/

// JavaScript Document
	
//loader
$(window).load(function(){
	$('#loader').fadeOut("slow");
});

//main content
jQuery(document).ready(function($){
    "use strict";

    /* Main Slider */
    var slider = new MasterSlider();
		 slider.setup('mainSlider' , {
			width:1170,
			height:580,
			autoplay:true,
			space:1,
			loop:true,
			dir:"v",
			fullwidth:true,
			centerControls:false,
			speed:60,
			preload:0,
			view:'scale'
			
		});
		 slider.control('arrows');
		 slider.control('timebar' , {color:"#F4BC16"});

	/* Main Slider */

	// start toggle buttom	
	$(".slicknav_btn").on('click', function(e){
	  $(".slicknav").toggleClass("mobile-nav");
	  
	  //navigation
	if($("#navigation").length > 0)
	{
		$("#navigation").sticky({topSpacing:0});
	}
	});

	//end toggle button

	
	//testimonial slider start
	if($(".testimonial-slider").length > 0)
	{
		 $('.testimonial-slider').flexslider({
			slideshow: true,                //Boolean: Animate slider automatically
			slideshow: true,                //Boolean: Animate slider automatically
			slideshowSpeed: 4000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
			animationDuration: 600,
			animation: "slide",
		 });
	}
	//testimonial slider ends

	//siderbar slider
	if($(".siderbar-slider").length > 0)
	{
		$('.siderbar-slider').flexslider({
			slideshow: true,                //Boolean: Animate slider automatically               //Boolean: Animate slider automatically
			slideshowSpeed: 4000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
			animationDuration: 600,
			animation: "slide",
		 });
	}
	//siderbar slider end


	//success count
	if($(".success-count").length > 0)
	{
		$('.success-count').counterUp({
			delay:20,
			time:2000
		});
	}
	//skills
        
  	//functionality for filter button
  	if($(".tabs").length > 0)
	{
	  
		$('.tabs').find('a').on("click" ,function (e) {
			var theFilter = $(this).data('filter');
			
			e.preventDefault();
			$('.tabs').find('a').removeClass('active');
			$(this).addClass('active');
			
		   $('.portfolio').find('li').show(); $('.portfolio').find('li').not(theFilter).hide();
			
		  });
	}
	//end filter buttons functionality
   
	//start skills
		  if($('#our-skills').length > 0){
			var $section = $("#our-skills");
			$(document).bind('scroll', function(ev) {
				var scrollOffset = $(document).scrollTop();
				var containerOffset = $section.offset().top - window.innerHeight;
				if (scrollOffset > containerOffset) {            
				   progress(85, $('#skill-1'));
				   progress(75, $('#skill-2'));
				   progress(100, $('#skill-3'));
				   progress(90, $('#skill-4'));
				   // unbind event not to load scrolsl again
				   $(document).unbind('scroll');
				}       
			});
		  } 

		
	 
		 // scroll down 
		 $("body").on('click', 'a[href^="#"]', function(e) {
			// target element id
			var id = $(this).attr('href');
		
			// target element
			var $id = $(id);
			if ($id.length === 0) {
				return;
			}
		
			// prevent standard hash navigation (avoid blinking in IE)
			e.preventDefault();
		
			// top position relative to the document
			var pos = $(id).offset().top;
		
			// animated top scrolling
			$('body, html').animate({scrollTop: pos});
	});
	
	
			 
		 //start price filter
		if($("#slider-range").length > 0)
		{
			$( "#slider-range" ).slider({
					range: true,
					min: 0,
					max: 500,
					values: [0,150 ],
					slide: function( event, ui ) {
						$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
					}
			});
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
				" - $" + $( "#slider-range" ).slider( "values", 1 ) );
		}
		//product detail slider
		
		//pretty photo function call

		if($("a[data-gal^='prettyPhoto']").length > 0)
		{

			$("a[data-gal^='prettyPhoto']").prettyPhoto({
				hook: 'data-gal',
				social_tools:false
			});
		}
				
	//end pretty photo function call

	if($("#productcarousel").length > 0)
	{
		$("#productcarousel").owlCarousel({
			autoPlay : 4000,
			slideSpeed : 3000,
			items : 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [992,1],
			itemsTablet: [700,1],
			pagination : false,
			navigation:true,
			navigationText: [
			"<i class='icon-chevron-left icon-white'><</i>",
			"<i class='icon-chevron-right icon-white'>></i>"
			],
		});
	}
	
	
	
	
		$(function() {
		  $('.box').on('click', '.minus', function () {
			var $quantity = $(this).siblings('.quantity'),
				value     = +$quantity.val();
		
			if (value > 1) {
			  $quantity.val(value - 1);
			}
		  });
		
		  $('.box').on('click', '.plus', function () {
			var $quantity = $(this).siblings('.quantity'),
				value     = +$quantity.val();
		
			if (value < 1000) {
			  $quantity.val(value + 1);
			}
		  });
		});
		

	$(".product-container").on("click",function(){
		if($(this).attr("data-link"))
		{
			window.location.href=$(this).attr("data-link");	
		}	
	});
	
	
	//start mix-it-up
	
	if($(".tabs-style-linebox nav li").length > 0)
	{
		$(".tabs-style-linebox nav li").click(function(){
			$(this).addClass('active');
			$(".tabs-style-linebox nav li").removeClass('active');
		  });
		  $('.gallery-photos-thumb').mixItUp();
		  
	}
		 //end mix-it-up		 
	 

	$("#emaill").focus(function(){
		$("#subcrb-form form").addClass("ready");
	})

	$("#emaill").blur(function(){
	  if($(this).val() == ""){
	    $("#subcrb-form form").removeClass("ready");
	  }
	});

	$('form.registerForm').on('submit', function(){
		   $("<div />").addClass("formOverlay").appendTo($(this));
      			//$(this).addClass("sending");      	  
      			if ( $( this ).hasClass( "ready" ) ) {
 
			        $(this).addClass("sending");			 
			    }
                var curForm = jQuery(this);
                $.ajax({
                    url: 'mail.php',
                    type: 'POST',
                    data: jQuery(curForm).serialize(),
                    success: function(data) {
                        var res=data.split("::");
                        jQuery(curForm).find("div.formOverlay").remove();
                        jQuery(curForm).prev('.expMessage').html(res[1]);
                        if(res[0]=='Success')
                        {
                         jQuery(curForm).remove(); 
                         jQuery(curForm).prev('.expMessage').html('');
                        }              
                    }
                });
                return false;
            });

});

 function progress(percent, $element) {
	 "use strict";
      var begin = 0;
      var pos = -100; 
      var handle = setInterval(function() {
      
      var mySkill  = pos + begin;
      $element.find('.skill-img').css('bottom',mySkill + "%");
      begin++;
      $element.find('.counterr').html(begin);
      
      if (begin >= percent) {
        clearInterval(handle);
        handle = null;
      }
    }, 20);    
   }
   

   