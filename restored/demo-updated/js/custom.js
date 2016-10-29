jQuery(document).ready(function(){
		"use strict";
		
		//menu toggle button
		$(".rs_menubtn span.rs_bars").on("click",function() {
			$(".rs_menubtn span.rs_bars").css("display", "none");
			$(".rs_menubtn span.rs_close").css("display", "block");
			
		});
		$(".rs_menubtn span.rs_close").on("click",function() {
			$(".rs_menubtn span.rs_close").css("display", "none");
			$(".rs_menubtn span.rs_bars").css("display", "block");
			
		});
		$('#open-button').on("click",function(e) {
			$('body').addClass('show-menu');
			e.preventDefault;
		});
		$('#close-button').on("click",function(e) {
				   setTimeout(function () {      
          $('body').removeClass('show-menu');}, 800);
					e.preventDefault;
			if (!$(e.target).is('.rs_menubtn span.rs_close ')) {
				$(".rs_menubtn span.rs_close").delay("400");
				$(".rs_menubtn span.rs_close").queue(function (next) {
				$(this).css("display", "none");
				next(); 
				});
				$(".rs_menubtn span.rs_bars").delay("400");
				$(".rs_menubtn span.rs_bars").queue(function (next) {
				$(this).css("display", "block");
				next(); 
				});
			}
			if (!$(e.target).is('.rs_user_pic *')) {
				 $(".rs_user_pic").removeClass('rs_active');
			}
			if (!$(e.target).is('.rs_sort *')) {
				 $(".rs_sort").removeClass('rs_active');
			}
			if (!$(e.target).is('.rs_user_profile *')) {
				$(".rs_user_profile").slideUp();
			}
			if (!$(e.target).is('.rs_product_sorting *')) {
				$(".rs_product_sorting").slideUp();
			}	
		});
		// counter
	  $('.timer').appear(function() {
			$(this).countTo();
		});
	  
	  	// Client Say Slider
		var owl1 =  $(".rs_testimonial_slider_content .owl-carousel");
		owl1.owlCarousel({
			loop:true,
			items:1,
			dots: true,
			nav: false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoHeight: false,
			touchDrag: false,
			mouseDrag: false,
			margin:0,
			autoplay:true
		});
		
		// About page Slider
		var owl2 =  $(".rs_about_testimonial_slider .owl-carousel");
		owl2.owlCarousel({
			loop:true,
			items:1,
			dots: true,
			nav: false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoHeight: false,
			touchDrag: false,
			mouseDrag: false,
			margin:0,
			autoplay:true
		});
		
		// Index Page Main Slider
		 var tpj = jQuery;
            var revapi8;
			tpj(document).ready(function() {
				if (tpj("#rev_slider_8_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_8_1");
				} else {
					revapi8 = tpj("#rev_slider_8_1").show().revolution({
						sliderType: "standard",
						jsFileLocation: "../../revolution/js/",
						sliderLayout: "auto",
						dottedOverlay: "none",
						delay: 9000,
						navigation: {
							keyboardNavigation: "on",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								style: "hephaistos",
								enable: true,
								hide_onmobile: true,
								hide_onleave: true,
								tmp: '',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								}
							},
							bullets: {
								enable: true,
								hide_onmobile: true,
								style: "hephaistos",
								hide_onleave: true,
								direction: "horizontal",
								h_align: "center",
								v_align: "bottom",
								h_offset: 20,
								v_offset: 30,
								space: 5,
								tmp: ''
							}
						},
						gridwidth: 800,
						gridheight: 600,
						lazyType: "single",
						shadow: 0,
						spinner: "off",
						stopLoop: "on",
						stopAfterLoops: 0,
						stopAtSlide: 1,
						shuffle: "off",
						autoHeight: "off",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							nextSlideOnWindowFocus: "off",
							disableFocusListener: false
						}
					});
				}
			}); 
				
		// On focus Placeholder Hide/show
		var place = '';
		$('input,textarea').focus(function(){
			place = $(this).attr('placeholder');
		$(this).attr('placeholder','');
		}).blur(function(){
		$(this).attr('placeholder',place);
		});
		
		// User Porfile Hide/Show on Header
		$('.rs_user_profile').hide();
		$('.rs_user_pic').on("click",function(e){
			$('.rs_user_profile').slideToggle("slow");		
			e.stopPropagation();
		}); 
		$(".rs_user_pic, .rs_sort").on("click",function(){
        if($(this).hasClass("rs_active")){
			$(this).removeClass('rs_active');
		}
		else{
			$(this).addClass('rs_active');
		}
		});
		
		// Main Menu Hide/Show on Header
		$('.rs_menu').hide();
		$('.rs_menubtn').on("click",function(e){
			$('.rs_menu').fadeIn("slow");		
			e.stopPropagation();
		}); 
		
		// User Porfile Hide/Show on Header
		$('.rs_product_sorting').hide();
		$('.rs_sort').on("click",function(e){
			$('.rs_product_sorting').slideToggle("slow");		
			e.stopPropagation();
		});
		

		// mixitup js
		$(".rs_sorting a").on("click", function(e) {
			e.preventDefault();
		});
			$('#rs_grid').mixItUp();
			
		// mixitup js
		$(".rs_aws_ftrd_sorting a").on("click", function(e) {
			e.preventDefault();
		});
			//$('#rs_aws_ftrd_grid').mixItUp();
		
		$('#rs_aws_ftrd_grid').mixItUp({
			 selectors: {
			   filter: '.filter1'
			 }
		});
		
		// fancybox js
		$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
		});
		
		// Salary Slider js
		$("#ex2").slider({});
		
		// Menu Window hight		
		var h = window.innerHeight;
		$('.rs_menu_inner_section ').css('height',h);
		
		// Accordians
		 $(function() {
			$( "#accordion" ).accordion();
		  });
		  
		    //images upload function
    $('#myfile').change(function() {
        $('#path').val($(this).val());
    });
    $('#myfile1').change(function() {
        $('#path1').val($(this).val());
    });
	
	 // show product in grid view and list view
    var elem = $('ul.dgm_listdata');
    $('#rs_viewcontrols a').on('click', function(e) {
        if ($(this).hasClass('gridview')) {
            elem.fadeOut(1000, function() {
                elem.removeClass('rs_listview').addClass('rs_grid');
                elem.fadeIn(1000);
            });
        } else if ($(this).hasClass('listview')) {
            elem.fadeOut(1000, function() {
                elem.removeClass('rs_grid').addClass('rs_listview');
                elem.fadeIn(1000);
            });
        }
    });
    $('#rs_viewcontrols a').on("click", function() {
        $("#rs_viewcontrols a").each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
	// author deshboard custom select
		$(".rs-custom-select").each(function(){
            $(this).wrap("<span class='rs-select-wrapper'></span>");
            $(this).after("<span class='rs-holder'></span>");
        });
        $(".rs-custom-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".rs-holder").text(selectedOption);
        }).trigger('change');
		
	//chart js
	var chart = c3.generate({
	bindto: '#chart',
    data: {
        x : 'x',
        columns: [
            ['x','Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','nov','Dec'],
            ['amount', 0, 100, 140, 200, 100, 400, 90, 100, 140, 200, 100, 400]
        ],
        type: 'bar'
		},
		axis: {
			x: {
				type: 'category'
			}
		}
	});
	var chart1 = c3.generate({
	bindto: '#chart1',
    data: {
        columns: [
            ['data1', 30],
            ['data2', 50]
        ],
        type: 'pie'
		},
		pie: {
			label: {
				format: function (value, ratio, id) {
					return d3.format('$')(value);
				}
			}
		}
	});
	//index2 featured detail slider
	var owl3 = $(".rs_featured_deals_silder .owl-carousel");
		owl3.owlCarousel({
			items:3,
			autoplay:false,
			loop:true,
			dots:false,
			mouseDrag: false,
			nav: true,
			navText:['<img src="images/arrow-left.png">','<img src="images/arrow-right.png">'],
			responsive: {
				0: {
					items: 1,
					nav: true,
					navText:['<img src="images/arrow-left.png">','<img src="images/arrow-right.png"> ']
				},
				600: {
					items: 2,
					nav: true
				},
				1000: {
					items: 3,
					nav: true
				}
			}
		});
	// index3 product slider
		var owl4 = $(".rs_index3_product_slider .owl-carousel");
			owl4.owlCarousel({
			items:1,
			autoplay:false,
			loop:true,
			dots:true,
			mouseDrag: false,
			nav: true,
			slideSpeed : 3000,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			navText:false
			});
	// Recently View Slider on Single Productr Page
			var owl5 =  $(".rs_recentlyview_slider .owl-carousel");
			owl5.owlCarousel({
				loop:true,
				items:4,
				dots: true,
				nav: false,
				//animateIn: 'fadeIn',
				//animateOut: 'fadeOut',
				autoHeight: false,
				touchDrag: false,
				mouseDrag: false,
				margin:0,
				autoplay:false,
				responsiveClass:true,
					responsive:{
						0:{
							items:1,
							nav:true
						},
						600:{
							items:3,
							nav:false
						},
						1000:{
							items:4,
							nav:true,
							loop:false
						}
					}
			});
			
		// Single page ProgressBar
			$( ".progressbar" ).progressbar({
				value: 37
			});
		//increment decrement btn 
		$('.count_val').text('1');
		$('.count_plus').on("click", function() {
			var per = $(this).parent('div').find('.count_val');
			var cnt = per.text();
			per.text(parseInt(cnt, 10)+parseInt('1', 10));
			
		});
		
		$('.count_minus').on("click", function() {
			var per = $(this).parent('div').find('.count_val');
			var cnt = per.text();
			if(cnt >0){
				per.text(parseInt(cnt, 10)-parseInt('1', 10));	
			}
		});
		//Single Product Slider
			$('.pgwSlideshow').pgwSlideshow();
			
		 
		
		// woocommerce checkout process
			$("input[name$='checkout']").on("click",function () {
			
			var test = $(this).val();
			$(".payment_box").hide('slow');
			$(".payment_box[data-period='" + test + "']").show('slow');
			});
		
		// Skill Bar Js on Product single page
			$('progress').each(function() {
				var max = $(this).val();
				$(this).val(0).animate({ value: max }, { duration: 5000, easing: 'easeOutCirc' });
			});
			
		// Index_2 page slider
				
		var revapi100;
			if(jQuery("#rev_slider_100_1").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_100_1");
			}else{
				revapi100 = jQuery("#rev_slider_100_1").show().revolution({
					sliderType:"hero",
					jsFileLocation:"../../revolution/js/",
					sliderLayout:"fullwidth",
					dottedOverlay:"none",
					delay:9000,
					navigation: {
					},
					responsiveLevels:[1240,1024,778,480], 
					gridwidth:[1240,1024,778,480],
					gridheight:[600,500,400,300],
					lazyType:"none",
					parallax: {
						type:"mouse",
						origo:"slidercenter",
						speed:2000,
						levels:[2,3,4,5,6,7,12,16,10,50]
					},
					shadow:0,
					spinner:"off",
					autoHeight:"off",
					disableProgressBar:"on",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						disableFocusListener:false
					}
				});
			}
			
		//tooltip 
		$('[data-toggle="tooltip"]').tooltip();
			
		//preloader js
			$(".rs_preloader").delay(1000).fadeOut();
			$(".rs_preloaded").delay(1000).fadeOut("slow");
			
		//contact form submition
		$("#send_btn").on("click", function() {
        var e = $("#ur_name").val();
        var t = $("#ur_mail").val();
        var s = $("#sub").val();
        var r = $("#msg").val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                username: e,
                useremail: t,
                usersub: s,
                mesg: r
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#ur_name").val("");
                    $("#ur_mail").val("");
                    $("#sub").val("");
                    $("#msg").val("");
                    $("#err").html(i[1]);
                } else {
                    $("#ur_name").val(e);
                    $("#ur_mail").val(t);
                    $("#sub").val(s);
                    $("#msg").val(r);
                    $("#err").html(i[1]);
                }
            }
        });
		});
	
	});