
/******************************************
	-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var tpj=jQuery;
tpj.noConflict();
var revapi12;
tpj(document).ready(function() {
	if(tpj("#rev_slider_12_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_12_1");
	}else{
		revapi12 = tpj("#rev_slider_12_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"rs-plugin/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"custom",
					enable:true,
					hide_onmobile:false,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:20,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					style:"custom",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:45,
					space:-40,
					tmp:''
				}
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:1170,
			gridheight:960,
			lazyType:"all",
			parallax: {
				type:"mouse",
				origo:"enterpoint",
				speed:400,
				levels:[1,2,5,20,25,30,35,40,45,50,47,48,49,50,51,55],
				type:"mouse",
				disable_onmobile:"on"
			},
			shadow:0,
			spinner:"spinner5",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:769,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"on",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
				panZoomDisableOnMobile:"on",
			}
		});
	}
});	/*ready*/


jQuery(document).ready(function ($) {
	'use strict';

	$('body.preloader').jpreLoader({
		loaderVPos: '50%',
	}).css('visibility', 'visible');

	//Menu Scroll on Click

	$('.scroll').click(function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var hash = href.split('#');
		var url_hash = '#' + hash[1];
		var offset;
		if ($(url_hash).length > 0) {
			if($('body').hasClass('admin-bar')){
				offset = ($(window).width() < 968) ? 20 : 80;
			} else{
				offset = ($(window).width() < 968) ? 20 : 56;
			}
			$('html, body').animate({
				scrollTop: $(url_hash).offset().top - offset
			}, 1000);
		} else {
			location.href = href;
		}
	});

	//Back to Top

	$('#back_to_top').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 900);
		return false;
	});


	// Contact Form
	$('#spiralcf-submit').on('click', function(e) {
        e.preventDefault();
        var $button=$(this);
        var $form = $button.parents('form');
        var $wrapper = $form.parents('#spiralcf-wrapper');
        $wrapper.find('.spiralcf-response-output').slideUp(300);
        $button.val('Sending').prop('disabled', true).addClass('disabled');
        var success_msg = '';
        if($form.find('#formid').val()=='planner'){
            success_msg = "Project details are successfuly sent. Thank you for your interest, we will respond as soon as possible.";
        }
        else{
            success_msg = "Message is successfuly sent. Thank you for your interest, we will respond as soon as possible.";
        }
        var str = $form.serialize() + '&action=js';
        $.ajax({
            type: "POST",
            url: 'php/sendmail.php',
            data: str,
            success: function(msg){
                if(msg == "OK"){
                    $button.val('SENDED');
                    $('.gtt_reg_data_field').prop('disabled', true).addClass('disabled_text_input');
                    var form_height = $form.outerHeight();
                    $form.slideUp(1200);
                    $('html, body').animate({scrollTop: $(window).scrollTop() - form_height});
                    $wrapper.find('.spiralcf-response-output').addClass('success').html(success_msg).slideDown(600);
                }
                else{
                    $button.val('SEND').prop('disabled', false).removeClass('disabled');
                    $wrapper.find('.spiralcf-response-output').html(msg).slideDown(600);
                }
            }
        });
        return false;
    });

	//Waypoint

	$('.home').find('.spiral_section_tc').waypoint(function (direction) {
		var section_id = $(this).attr('id');
		var $menu_item;
		if (section_id !== undefined) {
			$('.current-menu-item, .current-menu-ancestor').removeClass('current-menu-item').removeClass('current-menu-ancestor');
			if (direction === 'down') {
				$menu_item = $('#main_menu a[href=#' + section_id + ']').parent();
				if ($menu_item.length > 0) {
					$menu_item.addClass('current-menu-item');
				} else {
					$('#main_menu').find('.current_page_item').addClass('current-menu-item');
				}
			} else if (direction === 'up') {
				var previous_section_id = $(this).prevAll('[id]:first').attr('id');
				$menu_item = $('#main_menu a[href=#' + previous_section_id + ']').parent();
				if ($menu_item.length > 0) {
					$menu_item.addClass('current-menu-item');
				} else {
					$('#main_menu').find('.current_page_item').addClass('current-menu-item');
				}
			}
		}
	}, {
		offset: 100
	});

	//Material design ripple

	var ink, d, x, y;
	$('.ripplelink').click(function (e) {
		e.preventDefault();
		var $ripple = $(this);
		if ($ripple.find('.ink').length === 0) {
			$ripple.prepend('<span class="ink"></span>');
		}

		ink = $ripple.find('.ink');
		ink.removeClass('animate');

		if (!ink.height() && !ink.width()) {
			d = Math.max($ripple.outerWidth(), $ripple.outerHeight());
			ink.css({height: d, width: d});
		}

		x = e.pageX - $ripple.offset().left - ink.width() / 2;
		y = e.pageY - $ripple.offset().top - ink.height() / 2;

		ink.css({top: y + 'px', left: x + 'px'}).addClass('animate');
		if (!$(this).hasClass('spiral-modal-button')) {
			setTimeout(function () {
				var link = window.location.assign($ripple.attr('href'));
			}, 1000);
		}
	});


	//Menu scroll transition

	var $main_header = $('#ABdev_main_header');
	var $navigation = $main_header.find('nav');
	var $menu_toggle = $main_header.find('.menu_slide_toggle');
	var $breadcrumbs_bar = $('#title_breadcrumbs_bar');
	var header_height = $main_header.outerHeight();


	$menu_toggle.on('click', function (e) {
		e.preventDefault();
		var $this = $(this).toggleClass('menu_opened');
		if ($(window).width()<960) {
			$this.addClass('mobile');
			if ($this.hasClass('menu_opened')) {
				$navigation.css('width','0px').show().animate({width: '70%'},250);
			} else{
				$navigation.animate({width: '0' },250,'linear',function(){
					$(this).hide().css('width','auto');
				});
			}
		} else{
			$this.removeClass('mobile');
			if ($this.hasClass('menu_opened')) {
				$breadcrumbs_bar.toggle('slide', {direction: 'up'}, 250, function () {
					$navigation.toggle('slide', {direction: 'down'}, 250);
				});
			} else {
				$navigation.toggle('slide', {direction: 'down'}, 250, function () {
					$breadcrumbs_bar.toggle('slide', {direction: 'up'}, 250);
				});
			}
		}
	});

	function reset_menu_properties(){
		if ($menu_toggle.hasClass('menu_opened')){
			$menu_toggle.removeClass('menu_opened');
			if ($(window).width()>=960) {
				$navigation.hide().css('width','auto');
				$breadcrumbs_bar.show();
			}
		}
	}


	var lastScrollTop = 0;
	$(window).on('scroll', function () {
		scroll_menu_transparency();
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
		   	$main_header.addClass('menu_up');
		} else {
		   	$main_header.removeClass('menu_up');
		}
		lastScrollTop = st;
	});

	function scroll_menu_transparency(){
		if ($(window).width()<=960) {
			return;
		}
		var st = $(window).scrollTop();
		if ($main_header.hasClass('no_switch')) {
			if (st > 10) {
				$main_header.removeClass('transparent').addClass('smaller');
					$navigation.show();
			} else {
				$main_header.removeClass('smaller').addClass('transparent');
			}
		} else{
			if (st > 10) {
				$main_header.removeClass('transparent').addClass('smaller');
				if (!$menu_toggle.hasClass('menu_opened')) {
					$navigation.hide();
					$breadcrumbs_bar.show();
				}
			} else {
				$main_header.removeClass('smaller').addClass('transparent');
				$navigation.show();
				$breadcrumbs_bar.hide();
				if ($menu_toggle.hasClass('menu_opened')) {
					$menu_toggle.removeClass('menu_opened');
				}
			}
		}
	}

	function scroll_header_position(){
		$main_header.css('visibility', 'visible');
		var desktop_res = ($(window).width()>960)?true:false;
		if (desktop_res && $navigation.hasClass('detached')) {
			$navigation.detach().removeClass('detached').appendTo('.menu_wrapper');
		} else if(!desktop_res && !$navigation.hasClass('detached')){
			$navigation.detach().addClass('detached').prependTo('body');
		}
	}


	if (!$main_header.hasClass('coming_soon')) {
		scroll_menu_transparency();
		scroll_header_position();
	}


	//Parallax effect for slider and hero headings

	var $main_slider = $('#ABdev_main_slider');
	var $hero_heading = $('#headline_breadcrumbs_bar.with_image');

	$main_slider.height($('.rev_slider_wrapper').height());

	function hero_paralax(){
		if ($main_slider.length > 0 || $hero_heading.length > 0 ) {
			if ($(window).width()>769) {
				$main_slider.next().css('margin-top', $main_slider.outerHeight());
				$hero_heading.next().css('margin-top', $hero_heading.outerHeight());
			} else {
				$main_slider.next().css('margin-top', 0);
				$hero_heading.next().css('margin-top', 0);
			}

			var opacity_change = ($hero_heading.height()/2-$(window).scrollTop())/($hero_heading.height()/2);
			if(opacity_change > 0 ){
				$hero_heading.find('.headline_image .row').css('opacity', opacity_change);
			}
		}

		if($('.boxed_body_wrapper').length>0){
			var boxed_offset = ($(window).width()-$('.boxed_body_wrapper').width())/2;
			$hero_heading.css({'width': $('.boxed_body_wrapper').width(), 'left': boxed_offset});
			$main_slider.css({'width': $('.boxed_body_wrapper').width(), 'left': boxed_offset});
			$main_header.css({'width': $('.boxed_body_wrapper').width(), 'left': boxed_offset});
		}
	}

	function image_translation() {
		var opacity_change = ($hero_heading.height()/2-$(window).scrollTop())/($hero_heading.height()/2);
		if(opacity_change > 0 ){
			$hero_heading.find('.headline_image .row').css('opacity', opacity_change);
		}
		var window_scroll = -1/2*$(window).scrollTop();
		if ($(window).width()>769) {
			$main_slider.find('.rev_slider_wrapper ').css({'transform' : 'translateY('+window_scroll+'px)', '-webkit-transform' : 'translateY('+window_scroll+'px)', '-moz-transform' : 'translateY('+window_scroll+'px)', '-ms-transform' : 'translateY('+window_scroll+'px)', '-o-transform' : 'translateY('+window_scroll+'px)'});
			$hero_heading.find('.headline_image').css({'transform' : 'translateY('+window_scroll+'px)', '-webkit-transform' : 'translateY('+window_scroll+'px)', '-moz-transform' : 'translateY('+window_scroll+'px)', '-ms-transform' : 'translateY('+window_scroll+'px)', '-o-transform' : 'translateY('+window_scroll+'px)'});
		} else {
				$main_slider.find('.rev_slider_wrapper ').css({'transform' : 'translateY(0px)', '-webkit-transform' : 'translateY(0px)', '-moz-transform' : 'translateY(0px)', '-ms-transform' : 'translateY(0px)', '-o-transform' : 'translateY(0px)'});
			$hero_heading.find('.headline_image').css({'transform' : 'translateY(0px)', '-webkit-transform' : 'translateY(0px)', '-moz-transform' : 'translateY(0px)', '-ms-transform' : 'translateY(0px)', '-o-transform' : 'translateY(0px)'});
		}
	}

	if ($(window).width()>769) {
		$(window).on('scroll', function(){
			image_translation();
		});

		hero_paralax();
	} else{
		$main_slider.css('position', 'static');
		$hero_heading.css('position', 'static');
	}

	//Superfish menu

	var $sf = $('#main_menu');
	if ($(window).width()>960) {
		//enable superfish when the page first loads if we're on desktop
		$sf.superfish({
			delay: 0,
			popUpSelector: 'ul,.sf-mega,.cart_dropdown_widget',
			speed: 0,
			speedOut: 0,
			cssArrows: false,
			disableHI: true, /* load hoverIntent.js in header to use this option */
			onBeforeShow: function () {
				var ww = $(window).width();
				if (this.parent().offset() !== undefined) {
					var locUL = this.parent().offset().left + this.width();
					var locsubUL = this.parent().offset().left + this.parent().width() + this.width();
					var par = this.parent();
					if (par.parent().is('#main_menu') && (locUL > ww)) {
						this.css('marginLeft', '-' + (locUL - ww + 20) + 'px');
					} else if (!par.parent().is('#main_menu') && (locsubUL > ww)) {
						this.css('left', '-' + (this.width()) + 'px');
					}
				}
			}
		});
	}

	//Price box tweak

	$('.spiral_pricing-table-2').each(function () {
		var $price = $(this).find('.spiral_pricebox_price');

		$price.html(
			$price.html().replace(/(\.\d\d)/g, '<sup>$1</sup>')
			);
	});

	//Callout box tweak

	var $callout_box = $('.spiral-callout_box');
	var $callout_box_button = $('.spiral-callout_box .spiral-button');

	if ($callout_box.length && $callout_box.width()<700) {
		$callout_box_button.css({'float' : 'none', 'margin-top' : '20px'});
		if ($callout_box.find('p').length) {
			$callout_box.find('p').css({'display': 'block', 'text-align' : 'center', 'width' : '100%'});
		}
		$callout_box.css({'text-align' : 'center'});
	}

	//Collapsible side menu

	$('.widget_nav_menu li').each(function() {
		if($(this).find('> .sub-menu').length) {
			$(this).find('> a').append('<i class="ci_icon-angle-down"></i>');
		}
	});

	var $menu_with_children = $('.widget_nav_menu .menu-item-has-children > a');

	$menu_with_children.on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		if (!$this.parent().find('> .sub-menu').hasClass('visible')) {
			$this.parent().find('> .sub-menu').addClass('visible').slideDown('slow');
		} else{
			$this.parent().find('> .sub-menu').removeClass('visible').slideUp('slow');
		}
	});

	//Timeline tabs

	$('.spiral-tabs-timeline').each(function () {
		var $this = $(this);
		var $tabs = $this.find('.spiral-tabs-ul > li');
		var tabsCount = $tabs.length;
		$tabs.addClass('tab_par_' + tabsCount);
	});

	//Fancybox

	$('.fancybox').fancybox({
		'transitionIn'    : 'elastic',
		'transitionOut'   : 'elastic',
		'titlePosition'   : 'outside',
		'cyclic'      	  : true,
		'overlayShow'     : true
	});

	$('.submit').on('click', function () {
		$(this).closest('form').submit();
	});

	$('input, textarea').placeholder();


	//Timeline posts
	var $content = $("#timeline_posts");
    var $loader = $("#timeline_loading");
    var itemSelector = ('.timeline_post');

	$(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height()  >= $(document).height() - $('#ABdev_main_footer').height()) {
             if(!( $loader.hasClass('timeline_loading_loader') || $loader.hasClass('timeline_no_more_posts'))){
                load_posts();
            }
        }
    });

    var pageNumber = 1;
    function load_posts(){
        if(!($loader.hasClass('timeline_loading_loader') || $loader.hasClass('timeline_no_more_posts'))){
            pageNumber++;
            var url = $loader.data("ajaxurl");
            $.ajax({
                type: "GET",
                dataType   : "html",
                url: url,
                success : function(data){
                    var $data = $(data);
                    if($data.length){
                        var $newElements = $data.css({ opacity: 0 });
                        $content.append( $newElements );
                        $content.imagesLoaded(function(){
                            $loader.removeClass('timeline_loading_loader');
                            $content.masonry( 'appended', $newElements, false );
                            $newElements.animate({ opacity: 1 });
                        });
                    } else {
                        $loader.removeClass('timeline_loading_loader').html('No more posts.');
                    }
                },
                beforeSend : function(){
                    $loader.addClass('timeline_loading_loader').html('');
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
                },
                complete : function(){
                    $loader.removeClass('timeline_loading_loader');
                }
            });
        }
        return false;
    }

	$content.imagesLoaded(function () {
		$content.masonry({
			columnWidth: '.timeline_post_first',
			gutter: 100,
			isOriginLeft: false,
			itemSelector: itemSelector,
		});

	});


	//Modal element
	var $modal_content_wrapper = $('.spiral-modal-content-wrapper');
	var $modal_content = $('.spiral-modal-content');
	var $modal = $('.spiral-modal');
	var $modal_button = $('.spiral-modal-button');
	var $modal_button_close = $('.spiral-modal-close');

	$modal_content.each(function(){
		$(this).css('top', ($(window).height()-$(this).outerHeight(true))/2);
	});

	$modal.on('click', '.spiral-modal-button', function(e){
		e.preventDefault();
		var id = $(this).data('button_id');
		var $wrapper_id = $('#spiral-modal_wrapper_'+id);
		if($('#spiral-modal_wrapper_'+id, '.spiral-modal').length){
			$wrapper_id.detach().appendTo('body').delay(200).queue(function(){
				$(this).addClass('opened');
			});
		} else{
			$wrapper_id.addClass('opened');
		}
	});

	function modal_close(){
		$modal_content_wrapper.removeClass('opened');
		if ($modal_content.has('iframe')) {
			$modal_content.find("iframe").attr("src", $modal_content.find("iframe").attr("src"));
			$modal_content.find("object").attr("src", $modal_content.find("iframe").attr("src"));
		}
	}

	($modal_button_close, $modal_content_wrapper).on('click', function(e){
		e.preventDefault();
		modal_close();
	});

	$(document).keyup(function(e){
		if(e.keyCode === 27){
			modal_close();
		}
	});

	//Isotope portfolio

	var sortBy = 'original-order';
	var columnWidth = '.portfolio_item';

	$('.ABdev_latest_portfolio').each(function () {
		var $current_portfolio = $(this);
		if ($current_portfolio.find('.portfolio_item').hasClass('portfolio_masonry_fullwidth')) {
			sortBy = 'random';
			columnWidth = '.portfolio_item.small';
		}
		$current_portfolio.imagesLoaded(function () {
			$current_portfolio.isotope({
				layoutMode: 'masonry',
				masonry: {
					columnWidth: columnWidth
				},
				itemSelector : '.portfolio_item',
				sortBy: sortBy
			});
		});
	});

	$('.portfolio_filter_button').on('click', function () {
		var $portfolio_filter_clicked_button = $(this);

		if ($portfolio_filter_clicked_button.hasClass('selected')) {
			return false;
		}

		var $portfolio_filter = $portfolio_filter_clicked_button.parents('.portfolio_filter');
		$portfolio_filter.find('.selected').removeClass('selected');
		$portfolio_filter_clicked_button.addClass('selected');
		var options = {},
		key = $portfolio_filter.attr('data-option-key'),
		value = $portfolio_filter_clicked_button.attr('data-option-value');
		value = value === 'false' ? false : value;
		options[key] = value;

		if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
			changeLayoutMode($portfolio_filter_clicked_button, options);
		} else {
			$portfolio_filter.next('.ABdev_latest_portfolio').isotope(options);
		}

		return false;
	});

	//Post Excerpt Carousel

	var $carousel = $('.spiral_post_excerpt_carousel');
	var outer_width = $(window).outerWidth(true);

	$carousel.each(function(){

		var $this = $(this);
		var container_width;

		if (outer_width > 1145) {
			container_width = 1170;
		}

		if (outer_width > 960 && outer_width < 1145) {
			container_width = 960;
		}

		if (outer_width < 960) {
			container_width = parseInt((9/10)*outer_width,10);
		}

		var duration = $this.data('duration');
		var li_number = $this.find('li').length;
		var $ul = $this.find('ul');
		var $li = $ul.find('li');
		$li.removeClass('active');

		if (outer_width < 760){
			$li.css('width', container_width);
			$li.eq(1).addClass('active');
			if ($li.eq(2).hasClass('active')) {
				$li.eq(2).removeClass('active');
			}
		} else if (outer_width > 760){
			$li.eq(1).addClass('active');
			$li.eq(2).addClass('active');
		}

		var list_width = $this.find('li').outerWidth(true);
		var left_offset;
		if ($('.boxed_body_wrapper').length) {
			left_offset = list_width-60;
		} else{
			left_offset = parseInt(list_width - (outer_width - container_width-42)/2, 10);
		}

		$ul.css({'display': 'inline-block', 'width': li_number * $this.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});


		var not_active_no = $this.find('li').not('.first').not('.last').not('.active').length;
		var not_active_width = not_active_no * $this.find('li').outerWidth(true);

		$this.on('click', '.carousel_next', function (e) {
			e.preventDefault();

			if($this.find('li.last').prev().hasClass('active')){
				return;
			} else {
				var $a = $('.active', $this);

				if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
					$a.removeClass('active').next().addClass('active');
				}

				if (!$ul.is(':animated')) {
					$ul.animate({
						left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
					}, duration);
				}
			}

		});

		$this.on('click', '.carousel_prev', function (e) {
			e.preventDefault();

			if($this.find('li.first').next().hasClass('active')){
				return;
			} else {
				var $a = $('.active', $this);

				if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
					$a.removeClass('active').prev().addClass('active');
				}

				if (!$ul.is(':animated')) {
					$ul.animate({
						left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
					}, duration);
				}
			}

		});

	});

	//Team member carousel

	$('.spiral-team-carousel').each(function () {
		var $prev = $(this).find('.carousel_prev');
		var $next = $(this).find('.carousel_next');

		var $autoPlay = $(this).data('autoplay') == '0' ? false : true;
		var $items = $(this).data('items');
		var $effect = $(this).data('effect');
		var $easing = $(this).data('easing');
		var $duration = $(this).data('duration');

		$(this).find('ul').carouFredSel({
			prev: $prev,
			next: $next,
			circular: false,
			infinite: false,
			width: '100%',
			play: true,
			auto: $autoPlay,
			scroll: {
				items: $items,
				fx: $effect,
				easing: $easing,
				duration: $duration,
			},
			swipe: {
				onTouch: true,
			}
		});

		$(this).find('.spiral_overlayed').each(function () {
			var el_height = $(this).outerHeight() - 60;

			$(this).hover(function () {
				$(this).find('.spiral_team_info').css({'-webkit-transform': 'translate(0,-' + el_height + 'px)', '-moz-transform': 'translate(0,-' + el_height + 'px)', '-ms-transform': 'translate(0,-' + el_height + 'px)', '-o-transform': 'translate(0,-' + el_height + 'px)' ,'transform': 'translate(0,-' + el_height + 'px)'});
			}, function () {
				$(this).find('.spiral_team_info').css({'-webkit-transform': 'translate(0,0px)', '-moz-transform': 'translate(0,0px)', '-ms-transform': 'translate(0,0px)', '-o-transform': 'translate(0,0px)', 'transform': 'translate(0,0px)'});
			});
		});

	});

	//Creator elements

	/*********** Parallax ***********/
    $('.spiral-parallax').each(function(){
        var parallax_amount = $(this).data('parallax');
        var background_image = $(this).data('background_image');
        if(!jQuery.browser.mobile && background_image!==undefined){
            $(this).css('background-image', 'url(' + background_image + ')');
            $(this).parallax("50%", parallax_amount,false);
        }
        else{
            $(this).css('background-attachment', 'scroll');
        }
    });


    function spiral_resize_video_bg($section){
        var $video = $section.find('.spiral_video_background');
        $video.width('auto');
        var video_height = $video.height();
        var ratio = $video.width()/video_height;
        var difference = $section.height()-video_height;
        if(difference>0){
            $video.width((video_height+difference)*ratio);
        }
    }

    $('.spiral-video-bg').each(function(){
        spiral_resize_video_bg($(this));
        $(this).find('.spiral_video_background').css({'visibility':'visible'});
    });


	/*********** Animations ***********/
    if(!jQuery.browser.mobile && $(window).width()>769){
        $('.spiral-animo').each(function(){
            var $animated = $(this);
            var animation = $animated.data('animation');
            var trigger_point = $animated.data('trigger_point');
            var timing = $animated.data('timing'); //timing linear|ease|ease-in|ease-out|cubic-bezier(n,n,n,n)
            var duration = $animated.data('duration')/1000;
            var delay = parseInt($animated.data('delay'),10);
            $animated.waypoint({
                handler: function(direction) {
                    if(!$animated.hasClass('animation_completed')){
                        if(delay>0){
                            setTimeout(function() {
                                $animated.addClass('animation_completed').animo( { animation: animation, duration: duration, timing: timing} );
                            }, delay);
                        }
                        else{
                            $animated.addClass('animation_completed').animo( { animation: animation, duration: duration, timing: timing} );
                        }
                    }
                },
                offset: '95%'
            });
        });
    }
    else{
        $(".spiral-animo").css({visibility: "visible"});
    }

    $(".spiral-animo-children").one('inview', function(event, isInView) {
        var $element = $(this);
        var animation = $element.data('animation');
        var duration = $element.data('duration')/1000;
        var delay = parseInt($element.data('delay'),10);
        var difference = 0;
        if (isInView) {
            $element.children().each(function(){
                setTimeout(function() {
                    $element.css({visibility: "visible"}).animo( { animation: animation, duration: duration} );
                }, difference);
                difference = difference + delay;
            });
        }
    });


	/*********** Accordions ***********/
    $( ".spiral-accordion" ).accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        create: function( event, ui ) {
            var expanded = $(this).data("expanded");
            if(expanded===0){
                expanded = false;
            }
            else{
                expanded = expanded-1;
            }
            $(this).accordion( "option", "active", expanded);
        },
    });


	/*********** Tabs ***********/
    $(".spiral-tabs-tab").click(function(event) {
        event.preventDefault();
        var $this = $(this);
        var $tabs= $this.parents('.spiral-tabs');

        if ($this.parent().hasClass('active') || $tabs.hasClass('animating')) {
            return;
        }

        $this.parent().addClass('active');
        $this.parent().siblings().removeClass('active');

        var $old_pane = $tabs.find(".tab-pane.active_pane");
        var $new_pane = $($this.data("href"));
        var $pane_parent = $old_pane.parent();

        var effect = $tabs.data('effect');

        var auto_height;

        if ( effect==='fade' || effect==='slide' ) {
            $tabs.addClass('animating');
            $pane_parent.height($pane_parent.height());
            $old_pane.css({'opacity':'1','display':'block'});
            $new_pane.css({'opacity': '0','display':'block'});
            $pane_parent.find('.active_pane').removeClass('active_pane');

            if(effect==='slide'){
                var increasing = false;
                if ($new_pane.index() > $old_pane.index()){
                    increasing = true;
                }

                if($tabs.hasClass('spiral-tabs-vertical')){
                    $new_pane.css({
                        'top': ((increasing)?'100%':'-100%'),
                        'opacity':'1',
                        'display':'block',
                    });
                    $new_pane.animate({'top' : '0%'},{
                        'duration' : 300,
                        'step' : function(){
                            var offset = $(this).outerHeight()+(parseFloat($(this).css('top'))*((increasing)?-1:1));
                            // console.log(offset);
                            $old_pane.css('top',((increasing)?'-':'')+offset+'px');
                        },
                        'complete' : function(){
                            $(this).addClass('active_pane');
                            $old_pane.hide();
                            $tabs.removeClass('animating');
                        }
                    });
                }
                else{
                    $new_pane.css({
                        'left': ((increasing)?'100%':'-100%'),
                        'opacity':'1',
                        'display':'block',
                    });
                    $new_pane.animate({'left' : '0%'},{
                        'duration' : 300,
                        'step' : function(){
                            var offset = $(this).outerWidth()+(parseFloat($(this).css('left'))*((increasing)?-1:1));
                            // console.log(offset);
                            $old_pane.css('left',((increasing)?'-':'')+offset+'px');
                        },
                        'complete' : function(){
                            $(this).addClass('active_pane');
                            $old_pane.hide();
                            $tabs.removeClass('animating');
                        }
                    });

                }

                auto_height = $new_pane.outerHeight();
                $pane_parent.animate({
                    'height': auto_height+'px',
                },{
                    'duration' : 300,
                    'complete' : function(){
                        $(this).height('auto');
                    }
                });


            }
            else if(effect==='fade'){
                $old_pane.animate({'opacity' : '0'},{
                    'duration' : 300,
                    'complete' : function(){
                        $(this).css('display','none');
                    }
                });

                $new_pane.animate({'opacity' : '1'},{
                    'duration' : 300,
                    'complete' : function(){
                        $(this).addClass('active_pane');
                        $tabs.removeClass('animating');
                    }
                });

                auto_height = $new_pane.outerHeight();
                $pane_parent.animate({
                    'height': auto_height+'px',
                },{
                    'duration' : 300,
                    'complete' : function(){
                        $(this).height('auto');
                    }
                });

            }
        }
        else{
            $old_pane.removeClass('active_pane');
            $new_pane.addClass('active_pane');
        }

    });

    $('.spiral-tabs-timeline').each(function(){
        var $this = $(this);
        var $tabs = $this.find('.nav-tabs > li');
        var tabsCount = $tabs.length;
        $tabs.addClass('tab_par_'+tabsCount);
    });

    function spiral_tabs_responsive(){
        $('.spiral-tabs').each(function(){
            var $tabs = $(this);
            if($tabs.width() < parseInt($tabs.data('break_point'))){
                $tabs.addClass('spiral-tabs-fullwidthtabs');
            }
            else{
                $tabs.removeClass('spiral-tabs-fullwidthtabs');
            }
        });
    }

    spiral_tabs_responsive();

	/*********** Alert Box ***********/
    $( ".spiral_alert_box_close" ).click(function(e){
    	e.preventDefault();
        var $parent = $(this).parent();
        $parent.animate({height:"0px", paddingTop:"0px", paddingBottom:"0px", margin:"0px", opacity:"0"},400);
    });


	/*********** Stats excerpt counter ***********/
    function spiral_counter($object,interval,max,increment) {
        var number = parseInt($object.text(),10) + increment;
        if (number < max){
            setTimeout(function() {spiral_counter($object,interval,max,increment);} ,interval);
            $object.text(number);
        }
        else{
            $object.text(max);
        }
    }

    if(!jQuery.browser.mobile){
        $(".spiral_stats_number").one('inview', function(event, isInView) {
            if (isInView) {
                var max = $(this).data("number");
                var increment = 1;
                if (max > 50) increment = 10;
                if (max > 500) increment = 100;
                if (max > 5000) increment = 200;
                if (max > 10000) increment = 1000;
                var interval = $(this).data("duration")/(max/increment);
                $(this).text('0');
                spiral_counter($(this),interval,max,increment);
            }
        });
    }
    else{
        $(".spiral_stats_number").each(function() {
            var max = $(this).data("number");
            $(this).text(max);
        });
    }


	/*********** Knob ***********/
    $(".spiral_knob_wrapper").each(function(){
        var $knob = $(this).find(".spiral_knob");
        var $number_sign = $(this).find(".spiral_knob_number_sign");
        var $number = $(this).find(".spiral_knob_number");
        var outlineColor = $knob.data('troncolor');

        $knob.knob({
            'displayInput' : false,
            draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            var a = this.angle(this.cv),  // Angle
                                sa = this.startAngle,          // Previous start angle
                                sat = this.startAngle,         // Start angle
                                ea,                            // Previous end angle
                                eat = sat + a,                 // End angle
                                r = 1;

                            this.g.lineWidth = this.lineWidth;

                            this.o.cursor
                                && (sat = eat - 0.3)
                                && (eat = eat + 0.3);

                            if (this.o.displayPrevious) {
                                ea = this.startAngle + this.angle(this.v);
                                this.o.cursor
                                    && (sa = ea - 0.3)
                                    && (ea = ea + 0.3);
                                this.g.beginPath();
                                this.g.strokeStyle = outlineColor;
                                this.g.lineCap = this.$.data('linecap') || 'butt';
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.lineCap = this.$.data('linecap') || 'butt';
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                            this.g.stroke();

                            this.g.lineWidth = 3;
                            this.g.beginPath();
                            this.g.strokeStyle = outlineColor;
                            this.g.lineCap = this.$.data('linecap') || 'butt';
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2.2 / 2, -217/180 * Math.PI, -322/180 * Math.PI, false);

                            this.g.stroke();

                            return false;
                        }
                    }
        });

        var canvas_width = $(this).find("canvas").width();

        $number_sign.css({
            'visibility' : 'visible',
            'lineHeight' : canvas_width+'px',
        });

        if(!jQuery.browser.mobile){
            $knob.val(0).trigger('change');
            $(this).one('inview', function(event, isInView) {
                if (isInView) {
                    $({value: 0}).animate({value: $knob.data("number")}, {
                        duration: 1000,
                        easing:'swing',
                        step: function()
                        {
                            var current = Math.ceil(this.value);
                            $knob.val(current).trigger('change');
                            $number.html(current);
                        }
                    });
                }
            });
        }
        else{
            $number.html($knob.data("number"));
        }
    });

	/*********** Tooltip ***********/
    $('.spiral_tooltip').tipsy({
        fade: true,
        opacity: 0.8,
        gravity: function(){
            var gravity = $(this).data("gravity");
            gravity = (gravity !== undefined) ? gravity : 's';
            return gravity;
        }
    });

	/*********** Scroll Popup ***********/
    $(".spiral-popup-wrapper").one('inview', function(event, isInView) {
        if (isInView) {
            var $popup_shadow = $(this).find('.spiral-popup-shadow');
            var $popup_content = $(this).find('.spiral-popup-content');
            $popup_shadow.appendTo("body");
            var animation = $popup_content.data('animation');
            var duration = $popup_content.data('duration')/1000;
            var delay = parseInt($popup_content.data('delay'),10);
            setTimeout(function() {
               $popup_content.css({display : "block", position: "fixed"}).animo( { animation: animation, duration: duration} );
               $popup_shadow.css({display : "block"}).animo( { animation: animation, duration: duration} );
            }, delay);
        }
    });
    $('.spiral-popup-shadow').click(function(e){
        e.preventDefault();
        $('.spiral-popup-shadow').fadeOut();
    });


	/*********** Back to Top ***********/
    $('.spiral_divider a').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });


	/*********** Team Member ***********/
    $('.spiral_team_member_modal_link').click(function(e){
        e.preventDefault();
        var $parent = $(this).closest('.spiral_team_member');
        var $modal = $parent.find('.spiral_team_member_modal');
        var $section = $parent.closest('.spiral_section_tc');
        $modal.detach().appendTo('body').fadeIn().addClass('spiral_team_member_modal_opened');
        $parent.addClass('spiral_team_member_with_opened_modal');
    });
    $('.spiral_team_member_modal_close').click(function(e){
        e.preventDefault();
        $(this).parent().fadeOut('slow', function(){
            $(this).detach().appendTo($('.spiral_team_member_with_opened_modal')).removeClass('spiral_team_member_modal_opened');
            $('.spiral_team_member_with_opened_modal').removeClass('spiral_team_member_with_opened_modal');
        });
    });
    $(document).on('keydown', function(e) {
        if ( e.keyCode === 27 ) { //ESC
            $('.spiral_team_member_modal_opened').fadeOut('slow', function(){
                $(this).detach().appendTo($('.spiral_team_member_with_opened_modal')).removeClass('spiral_team_member_modal_opened');
                $('.spiral_team_member_with_opened_modal').removeClass('spiral_team_member_with_opened_modal');
            });
        }
    });

    if (('.spiral_team_member_modal_close').length !== 0) {
		$('.spiral_team_member_modal_close').empty();
	}

	$('.spiral_team_member').each(function(){
		var $team_member = $(this);
		var social_height = $team_member.find('.spiral_social_links').outerHeight();
		var negative = - social_height;
		$team_member.find('.spiral_overlayed').css('margin-bottom', -social_height+'px');
		$team_member.hover( function(){
			$(this).find('.spiral_overlayed').css({'-webkit-transform' : 'translateY('+negative+'px'+')', '-moz-transform' : 'translateY('+negative+'px'+')', '-ms-transform' : 'translateY('+negative+'px'+')', '-o-transform' : 'translateY('+negative+'px'+')', 'transform' : 'translateY('+negative+'px'+')'});
		}, function(){
			$(this).find('.spiral_overlayed').css({'-webkit-transform' : 'translateY(0)', '-moz-transform' : 'translateY(0)', '-ms-transform' : 'translateY(0)', '-o-transform' : 'translateY(0)', 'transform' : 'translateY(0)'});
		});
	});


	/*********** Progress Bar ***********/
    if(!jQuery.browser.mobile){
        $(".spiral_meter .spiral_meter_percentage").width(0).one('inview', function(event, isInView) {
          if (isInView) {
            var newwidth = $(this).data("percentage") + '%';
            $(this).animate({width: newwidth}, {
                duration:1500,
                step: function(now) {
                    $(this).find('span').html(Math.floor(now) + '%');
                    var above_tenths = Math.floor(now/10);
                    for(var i=1; i<=above_tenths; i++){
                        $(this).addClass('spiral_meter_above'+above_tenths*10);
                    }
                }
            });
          }
        });
    }
    else{
        $(".spiral_meter .spiral_meter_percentage").each(function(){
            var newwidth = $(this).data("percentage");
            $(this).css('width', newwidth+'%');
            for(var i=0; i<=newwidth; i++){
                var above_tenths = Math.floor(i/10);
                $(this).addClass('spiral_meter_above'+above_tenths*10);
            }

        });
    }

	/*********** Portfolio ***********/
	$('.ABp_latest_portfolio').each(function () {
			var $prev = $(this).find('.portfolio_prev');
			var $next = $(this).find('.portfolio_next');

			$(this).find('ul').carouFredSel({
				prev: $prev,
				next: $next,
				auto: false,
				width: '100%',
				scroll: 1,
				swipe: true,
				padding: null,
			});

		});


	/*********** Counter ***********/
    $('.spiral_countdown.simple_style, .spiral_countdown.simple_style_transparent').each(function() {
        var $this = $(this);
        var countDownString = $this.data("value");

        function update_countown_element($element,number){
            $element.html(number);
            var $span = $element.next('span');
            if(parseInt(number) == 1){
                $span.html($span.data("singular"));
            }
            else{
                $span.html($span.data("plural"));
            }
        }

        $this.find('.simple.countdown.year').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%Y'));
        });

        $this.find('.simple.countdown.month').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%m'));
        });

        $this.find('.simple.countdown.day').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%d'));
        });

        $this.find('.simple.countdown.hour').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%H'));
        });

        $this.find('.simple.countdown.minute').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%M'));
        });

        $this.find('.simple.countdown.second').countdown(countDownString).on('update.countdown', function(event){
            update_countown_element($(this),event.strftime('%S'));
        });
    });


    $('.spiral_countdown.flip_style').each(function() {
        var $this = $(this);
        var countDownString = $this.data("value");

        function zeroPad(num, places) {
          var zero = places - num.toString().length + 1;
          return Array(+(zero > 0 && zero)).join("0") + num;
        }

        function update_flip_countown_element($element,new_number,if_negative){
            var current_number = parseInt($element.find('.count.curr').html());
            if(current_number!=new_number && !$element.hasClass('in_a_flip')){
                var $span = $element.find('span');
                if(parseInt(new_number) == 1){
                    $span.html($span.data("singular"));
                }
                else{
                    $span.html($span.data("plural"));
                }
                setTimeout(function(){
                    $element.addClass('flip in_a_flip');
                },5);
                setTimeout(function(){
                    $element.find('.count.curr').html(zeroPad(new_number, 2));
                },510);
                setTimeout(function(){
                    $element.removeClass('flip in_a_flip');
                    new_number = (new_number-1 === -1) ? if_negative : new_number-1;
                    $element.find('.count.next').html(zeroPad(new_number, 2));
                },600);
            }
        }

        $this.find('.flip_element.year .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%Y'),0);
        });

        $this.find('.flip_element.month .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%m'),11);
        });

        $this.find('.flip_element.day .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%d'),30);
        });

        $this.find('.flip_element.hour .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%H'),23);
        });

        $this.find('.flip_element.minute .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%M'),59);
        });

        $this.find('.flip_element.second .count.curr.top').countdown(countDownString).on('update.countdown', function(event){
            update_flip_countown_element($(this).parent(),event.strftime('%S'),59);
        });

     });

	/*********** Image Carousel ***********/
	$('.spiral-carousel').each(function () {
			var $this = $(this);
			var image_carousel_height = $this.find('img').height();
			var $prev = $this.find('.carousel_prev');
			var $next = $this.find('.carousel_next');

			$prev.css('top', -75 - image_carousel_height/2 + 'px');
			$next.css('top', -75 - image_carousel_height/2 + 'px');

			var $autoPlay = $this.data('autoplay') == '0' ? false : true;
			var $items = $this.data('items');
			var $effect = $this.data('effect');
			var $easing = $this.data('easing');
			var $duration = $this.data('duration');

			if ($(window).width()<769) {
				$this.find('li').css('width', $this.width());
			}

			$(this).find('ul').carouFredSel({
				prev: $prev,
				next: $next,
				width: '100%',
				play: true,
				auto: $autoPlay,
				scroll: {
					items: $items,
					fx: $effect,
					easing: $easing,
					duration: $duration,
				},
				swipe: {
					onTouch: true,
				}
			});

		});


	/*********** Google Maps ***********/
	function initialize_gmap($element) {
	    var myLatlng = new google.maps.LatLng($element.data('lat'),$element.data('lng'));
	    var auto_center_zoom = ($element.data('auto_center_zoom') == 1 ? true : false);
	    var scrollwheel = ($element.data('scrollwheel') == 1 ? true : false);
	    var mapTypeControl = ($element.data('maptypecontrol') == 1 ? true : false);
	    var panControl = ($element.data('pancontrol') == 1 ? true : false);
	    var zoomControl = ($element.data('zoomcontrol') == 1 ? true : false);
	    var scaleControl = ($element.data('scalecontrol') == 1 ? true : false);
	    var map_type = google.maps.MapTypeId.ROADMAP;

	    if ($element.data('map_type') == 'SATELLITE') map_type = google.maps.MapTypeId.SATELLITE;
	    if ($element.data('map_type') == 'HYBRID') map_type = google.maps.MapTypeId.HYBRID;
	    if ($element.data('map_type') == 'TERRAIN') map_type = google.maps.MapTypeId.TERRAIN;

	    var mapOptions = {
	        zoom: parseInt($element.data('zoom'),10),
	        center: myLatlng,
	        mapTypeId: map_type,
	        scrollwheel: scrollwheel,
	        mapTypeControl: mapTypeControl,
	        mapTypeControlOptions: {
	            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	            position: google.maps.ControlPosition.BOTTOM_CENTER
	        },
	        panControl: panControl,
	        panControlOptions: {
	            position: google.maps.ControlPosition.RIGHT_CENTER
	        },
	        zoomControl: zoomControl,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.LARGE,
	            position: google.maps.ControlPosition.RIGHT_CENTER
	        },
	        scaleControl: scaleControl,
	        scaleControlOptions: {
	            position: google.maps.ControlPosition.BOTTOM_LEFT
	        },
	        streetViewControl: false,
	        streetViewControlOptions: {
	            position: google.maps.ControlPosition.RIGHT_CENTER
	        }
	    };

	    var elemnt_id = $element.attr('id');
	    var bounds = new google.maps.LatLngBounds();
	    var map = new google.maps.Map(document.getElementById(elemnt_id), mapOptions);

	    var c = 0;
	    var markers = [];
	    var infoWindowContent = [];
	    var marker_icons = [];
	    $element.siblings('.spiral_google_map_marker').each(function(){
	        var $marker = $(this);
	        markers[c] = [$marker.data('title'), $marker.data('lat'),$marker.data('lng'),$marker.data('icon')];
	        infoWindowContent[c] = ['<div class="info_content">' + '<h3>' + $marker.data('title') + '</h3>' + '<p>' + $marker.html() + '</p>' + '</div>'];
	        c++;
	    });

	    // Display multiple markers on a map
	    var infoWindow = new google.maps.InfoWindow(), marker, i;

	    // Loop through our array of markers & place each one on the map
	    for( i = 0; i < markers.length; i++ ) {
	        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
	        bounds.extend(position);
	        marker = new google.maps.Marker({
	            position: position,
	            map: map,
	            title: markers[i][0],
	            icon: markers[i][3]
	        });
	        // Allow each marker to have an info window
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
	            return function() {
	                infoWindow.setContent(infoWindowContent[i][0]);
	                infoWindow.open(map, marker);
	            }
	        })(marker, i));
	    }
	    if(auto_center_zoom){
	        map.fitBounds(bounds);
	    }
	}

	$('.spiral_google_map').each(function(){
	    google.maps.event.addDomListener(window, 'load', initialize_gmap($(this)));
	});


	// Testimonials
	$('.spiralt_testimonials_wrapper').each(function() {
        var $slider = $(this).find('.spiralt_testimonials_slide');
        var fx = $slider.data("fx");
        var play = $slider.data("play");
        var easing = $slider.data("easing");
        var direction = $slider.data("direction");
        var duration = parseInt($slider.data("duration"), 10);
        var pauseonhover = $slider.data("pauseonhover");
        var timeoutduration = parseInt($slider.data("timeoutduration"), 10);
        var $prev = $(this).find('.spiralt_prev');
        var $next = $(this).find('.spiralt_next');
        var $pagination = $(this).find('.spiralt_pagination');
        $slider.carouFredSel({
            prev   : $prev,
            next   : $next,
            pagination: $pagination,
            direction       : direction,
            responsive : true,
            auto   : {
                play            : play,
                fx              : fx,
                easing          : easing,
                duration        : duration,
                pauseOnHover    : pauseonhover,
                timeoutDuration : timeoutduration,
            },
            scroll   : {
                fx              : fx,
                easing          : easing,
                duration        : duration,
            },
            width  : 'auto',
            items  : {
                visible:1,
            },
        });
    });

    $('.spiralt_form').each(function(){
        var $form = $(this);
        var $wrapper = $(this).parent();
        $form.ajaxForm({
            url: spiralt_custom.ajaxurl,
            beforeSubmit: function () {
                $wrapper.find('.spiralt_success_message').html(spiralt_custom.sending).slideDown(400);
            },
            success: function (responseText)  {
                if(responseText === "OK"){
                    $form.animate({ height: '0px' }, 800, function() {
                        $form.hide();
                    });
                    $wrapper.find('.spiralt_success_message').delay(400).html(spiralt_custom.success).slideDown(600);
                }
                else {
                    $wrapper.find('input[type=text], textarea').each( function(){
                        if($(this).val() === ''){
                            $(this).addClass('spiralt_field_error');
                        }
                        else{
                            $(this).removeClass('spiralt_field_error');
                        }
                    });
                    $wrapper.find('.spiralt_success_message').html(spiralt_custom.error).slideDown(600);
                }
            },
        });
    });

    $('.spiralt_form input, .spiralt_form textarea').placeholder();


    // Twitter
    $('.spiral-tweet-scroller').each(function() {
        var $this =  $(this);
        var $slider = $this.find('.spiral-tweet-scroller-inner');
        var fx = $this.data("fx");
        var play = $this.data("play");
        var easing = $this.data("easing");
        var direction = $this.data("direction");
        var duration = parseInt($this.data("duration"), 10);
        var pauseonhover = $this.data("pauseonhover");
        var timeoutduration = parseInt($this.data("timeoutduration"), 10);
        var $prev = $this.find('.spiral-tweet-prev');
        var $next = $this.find('.spiral-tweet-next');
        $slider.carouFredSel({
            prev   : $prev,
            next   : $next,
            direction       : 'left',
            responsive : true,
            auto   : {
                play            : play,
                fx              : fx,
                easing          : easing,
                duration        : duration,
                pauseOnHover    : pauseonhover,
                timeoutDuration : timeoutduration,
            },
            scroll   : {
                fx              : fx,
                easing          : easing,
                duration        : duration,
            },
            width  : 'auto',
            items  : {
                visible:1,
            },
            onCreate:function(){
            	$this.css('height','auto');
            }
        });
    });


	// Subscribe
	$(".spiralss_form").submit(function() {
        "use strict";
        var str = $(this).serialize() + '&action=spiralss_save_subscriber';
        var $form = $(this);
        var $wrapper = $(this).parent();
        $.ajax({
            type: "POST",
            url: spiralss_custom.ajaxurl,
            data: str,
            success: function(msg){
                if(msg === "OK"){
                    $form.animate({ height: '0px' }, 800, function() {
                        $form.hide();
                    });
                    $wrapper.find('.spiralss_success_message').delay(400).html(spiralss_custom.success).slideDown(600);
                }
                else {
                    $wrapper.find('.spiralss_subscriber_email').addClass('spiralss_field_error').attr("placeholder", spiralss_custom.error).val('').focus();
                }
            }
        });
        return false;
    });

    $('.spiralss_form input').placeholder();


	//Resize
	$(window).on('resize', function(){


		if ($(window).width()<769) {
			$main_slider.css('position', 'static');
			$hero_heading.css('position', 'static');
		} else {
			$main_slider.css('position', 'fixed');
			$hero_heading.css('position', 'fixed');
		}

		$main_slider.height($('.rev_slider_wrapper').height());

		image_translation();
		hero_paralax();


		$('.ABdev_latest_portfolio').isotope('layout');

		if ($(window).width()>960 && !$sf.hasClass('sf-js-enabled')) {
			//you only want SuperFish to be re-enabled once ($sf.hasClass)
			$navigation.show();
			$sf.superfish({
				delay: 0,
				speed: 0,
				speedOut: 0,
				cssArrows: false,
				disableHI: true,/* load hoverIntent.js in header to use this option */
				onBeforeShow:   function () {
					var ww = $(window).width();
					if (this.parent().offset() !== undefined) {
						var locUL = this.parent().offset().left + this.width();
						var locsubUL = this.parent().offset().left + this.parent().width() + this.width();
						var par = this.parent();
						if (par.parent().is('#main_menu') && (locUL > ww)) {
							this.css('marginLeft', '-' + (locUL - ww + 20) + 'px');
						} else if (!par.parent().is('#main_menu') && (locsubUL > ww)) {
							this.css('left', '-' + (this.width()) + 'px');
						}
					}
				}
			});
		} else if ($(window).width()<960 && $sf.hasClass('sf-js-enabled')) {
			//smaller screen, disable SuperFish
			$sf.superfish('destroy');
			$navigation.hide();
			$navigation.find('.sf-mega').css('marginLeft', '0');
		}

		$(".spiral_knob_wrapper").each(function(){
	        var $number_sign = $(this).find(".spiral_knob_number_sign");
	        var canvas_width = $(this).find("canvas").width();
	        $number_sign.css({
	            'lineHeight' : canvas_width+'px',
	        });
	    });

	    $('.spiral-video-bg').each(function(){
	        spiral_resize_video_bg($(this));
	    });

	    spiral_tabs_responsive();

	    scroll_menu_transparency();
	    scroll_header_position();
	    reset_menu_properties();

	    if ($(window).width()>1024) {
			var outer_width = $(window).outerWidth();
	    	$carousel.each(function(){

				var $this = $(this);

				var container_width;

				if (outer_width > 1145) {
					container_width = 1170;
				}

				if (outer_width > 960 && outer_width < 1145) {
					container_width = 960;
				}

				if (outer_width < 960) {
					container_width = parseInt((9/10)*outer_width,10);
				}

				var duration = $this.data('duration');
				var li_number = $this.find('li').length;
				var $ul = $this.find('ul');
				var $li = $ul.find('li');
				$li.removeClass('active');

				if (outer_width < 760){
					$li.css('width', container_width);
					$li.eq(1).addClass('active');
					if ($li.eq(2).hasClass('active')) {
						$li.eq(2).removeClass('active');
					}
				} else if (outer_width > 760){
					$li.eq(1).addClass('active');
					$li.eq(2).addClass('active');
				}

				var list_width = $this.find('li').outerWidth(true);
				var left_offset;
				if ($('.boxed_body_wrapper').length) {
					left_offset = list_width-60;
				} else{
					left_offset = parseInt(list_width - (outer_width - container_width-42)/2, 10);
				}

				$ul.css({'display': 'inline-block', 'width': li_number * $this.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});


				var not_active_no = $this.find('li').not('.first').not('.last').not('.active').length;
				var not_active_width = not_active_no * $this.find('li').outerWidth(true);

				$this.on('click', '.carousel_next', function (e) {
					e.preventDefault();

					if($this.find('li.last').prev().hasClass('active')){
						return;
					} else {
						var $a = $('.active', $this);

						if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
							$a.removeClass('active').next().addClass('active');
						}

						if (!$ul.is(':animated')) {
							$ul.animate({
								left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
							}, duration);
						}
					}

				});

				$this.on('click', '.carousel_prev', function (e) {
					e.preventDefault();

					if($this.find('li.first').next().hasClass('active')){
						return;
					} else {
						var $a = $('.active', $this);

						if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
							$a.removeClass('active').prev().addClass('active');
						}

						if (!$ul.is(':animated')) {
							$ul.animate({
								left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
							}, duration);
						}
					}

				});

			});
	    }

	});

	$(window).on('orientationchange', function(){
		var outer_width = $(window).outerWidth();
		$carousel.each(function(){

			var $this = $(this);

			var container_width;

			if (outer_width > 1145) {
				container_width = 1170;
			}

			if (outer_width > 960 && outer_width < 1145) {
				container_width = 960;
			}

			if (outer_width < 960) {
				container_width = parseInt((9/10)*outer_width,10);
			}

			var duration = $this.data('duration');
			var li_number = $this.find('li').length;
			var $ul = $this.find('ul');
			var $li = $ul.find('li');
			$li.removeClass('active');

			if (outer_width < 760){
				$li.css('width', container_width);
				$li.eq(1).addClass('active');
				if ($li.eq(2).hasClass('active')) {
					$li.eq(2).removeClass('active');
				}
			} else if (outer_width > 760){
				$li.eq(1).addClass('active');
				$li.eq(2).addClass('active');
			}

			var list_width = $this.find('li').outerWidth(true);
			var left_offset;
			if ($('.boxed_body_wrapper').length) {
				left_offset = list_width-60;
			} else{
				left_offset = parseInt(list_width - (outer_width - container_width-42)/2, 10);
			}

			$ul.css({'display': 'inline-block', 'width': li_number * $this.find('li').outerWidth(true) + 'px', 'left': -left_offset + 'px'});


			var not_active_no = $this.find('li').not('.first').not('.last').not('.active').length;
			var not_active_width = not_active_no * $this.find('li').outerWidth(true);

			$this.on('click', '.carousel_next', function (e) {
				e.preventDefault();

				if($this.find('li.last').prev().hasClass('active')){
					return;
				} else {
					var $a = $('.active', $this);

					if (!$a.next().hasClass('last') && !$ul.is(':animated')) {
						$a.removeClass('active').next().addClass('active');
					}

					if (!$ul.is(':animated')) {
						$ul.animate({
							left: parseInt($ul.css('left'), 10) - $ul.find('li').outerWidth(true),
						}, duration);
					}
				}

			});

			$this.on('click', '.carousel_prev', function (e) {
				e.preventDefault();

				if($this.find('li.first').next().hasClass('active')){
					return;
				} else {
					var $a = $('.active', $this);

					if (!$a.prev().hasClass('first') && !$ul.is(':animated')) {
						$a.removeClass('active').prev().addClass('active');
					}

					if (!$ul.is(':animated')) {
						$ul.animate({
							left: parseInt($ul.css('left'), 10) + $ul.find('li').outerWidth(true),
						}, duration);
					}
				}

			});

		});
	});

	window.onload = function() {
	 $('#portfolio_gallery_slider').nivoSlider({
			effect: 'fade', //Specify sets like: 'fold,fade,sliceDown'
			pauseTime: 3000, //How long each slide will show
			directionNav: true, //Next & Prev navigation
			controlNav: true,
			controlNavThumbs: true,
			controlNavThumbsFromRel: false,
			manualAdvance: false,
			prevText: '<span class="nivo_prev"></span>',
    		nextText: '<span class="nivo_next"></span>',
    	});
	}


});


/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

