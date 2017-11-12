/*
 * Copyright (c) 2017 Frenify
 * Author: Frenify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	//var H = jQuery( window ).height();
	//var W = jQuery( window ).width();
	
	eloisa_fn_mmenu_off();
	eloisa_fn_min_height_bg();
	eloisa_fn_portfolio_height();
	eloisa_fn_horsubmenu();
	eloisa_fn_submenu();
	eloisa_fn_search_popup_height();
	eloisa_fn_search_popup_opener();
	eloisa_fn_search_popup_closer();
	eloisa_fn_share_popup_height();
	eloisa_fn_share_popup_opener();
	eloisa_fn_share_popup_closer();
	eloisa_fn_hamburger();
	eloisa_fn_overlay_window_height();
	eloisa_fn_widget_menu_opener();
	eloisa_fn_widget_menu_closer();
	eloisa_fn_isotope();
	eloisa_fn_totop();
	eloisa_fn_totop_myhide();
	eloisa_fn_widgetscroll();
	eloisa_fn_mainslider();
	eloisa_fn_next_slide_button();
	eloisa_fn_mainslider_height();
	eloisa_fn_magnific_popup();
	eloisa_fn_splitscreen_h();
	eloisa_fn_miniboxes();
	eloisa_fn_imgtosvg();
	eloisa_fn_proofing_choose();
	eloisa_fn_contact_form();
	eloisa_fn_page_extra_bg();
	eloisa_fn_button_effect();
	eloisa_fn_flexslider_overlay();
	eloisa_fn_owl_carousel();
	eloisa_fn_carousel_wrap();
	eloisa_fn_jarallax();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		eloisa_fn_totop_myhide();
	});
	jQuery(window).on('resize',function(){
		eloisa_fn_widgetscroll();
		eloisa_fn_mmenu_off();
  		eloisa_fn_min_height_bg();
		eloisa_fn_search_popup_height();
		eloisa_fn_share_popup_height();
		eloisa_fn_isotope();
		eloisa_fn_splitscreen_h();
		eloisa_fn_miniboxes();
		eloisa_fn_page_extra_bg();
		eloisa_fn_carousel_wrap();
		eloisa_fn_mainslider_height();
	});
	jQuery(window).on('load', function(e) {
		e.preventDefault();
		eloisa_fn_isotope();
	});
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// -----------------  MMENU OFF   ----------------------
// -----------------------------------------------------
function eloisa_fn_mmenu_off(){
	"use strict";
	var W 			= jQuery(window).width();
	var mmenu		= jQuery('.eloisa_fn_mobile_menu');
	var trigger		= jQuery('.eloisa_fn_hamburger .hamburger');
	
	if(W>1040){
		mmenu.slideUp();
		trigger.removeClass('is-active');
	}
}
// -----------------------------------------------------
// ------------    MIN HEIGHT BACKGROUND    ------------
// -----------------------------------------------------
function eloisa_fn_min_height_bg(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var element		= jQuery('.eloisa_fn_wrapper_all');
	
	element.css({minHeight:H});
}
// -----------------------------------------------------
// ------------    HEIGHT SEARCH POPUP    --------------
// -----------------------------------------------------
function eloisa_fn_search_popup_height(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var element		= jQuery('.eloisa_fn_search_popup');
	
	element.css({height:H});
}
// -----------------------------------------------------
// ------------    SEARCH POPUP OPENER    --------------
// -----------------------------------------------------
function eloisa_fn_search_popup_opener(){
	
	"use strict";
	
	var searchOpener		= jQuery('.eloisa_fn_header_icons_bar a.search');
	var popupWindow			= jQuery('.eloisa_fn_search_popup');
	
	searchOpener.on('click',function(){
		popupWindow.addClass('opened');
		return false;
	});
}
// -----------------------------------------------------
// ------------    SEARCH POPUP CLOSER    --------------
// -----------------------------------------------------
function eloisa_fn_search_popup_closer(){
	
	"use strict";
	
	var searchCloser		= jQuery('.eloisa_fn_search_popup_closer a');
	var popupWindow			= jQuery('.eloisa_fn_search_popup');
	
	searchCloser.on('click',function(){
		popupWindow.removeClass('opened');
		return false;
	});
	
}
// -----------------------------------------------------
// ------------    HEIGHT PORTFOLIO PAGE    ------------
// -----------------------------------------------------
function eloisa_fn_portfolio_height(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var element		= jQuery('.eloisa_fn_portfolio_left');
	
	element.css({height:H});
}
// -----------------------------------------------------
// ------------    HEIGHT SHARE POPUP    ---------------
// -----------------------------------------------------
function eloisa_fn_share_popup_height(){
	"use strict";
	var H			= jQuery(window).height();
	var element		= jQuery('.eloisa_fn_share_popup');
	
	element.css({height:H});
}
// -----------------------------------------------------
// ------------    SEARCH POPUP OPENER    --------------
// -----------------------------------------------------
function eloisa_fn_share_popup_opener(){
	
	"use strict";
	
	var shareOpener		= jQuery('.eloisa_fn_header_icons_bar a.share');
	var popupWindow		= jQuery('.eloisa_fn_share_popup');
	
	shareOpener.on('click',function(){
		popupWindow.addClass('opened');
		return false;
	});
	
}
// -----------------------------------------------------
// ------------    SHARE POPUP CLOSER    ---------------
// -----------------------------------------------------
function eloisa_fn_share_popup_closer(){
	
	"use strict";
	
	var shareCloser		= jQuery('.eloisa_fn_share_popup_closer a');
	var popupWindow		= jQuery('.eloisa_fn_share_popup');
	
	shareCloser.on('click',function(){
		popupWindow.removeClass('opened');
		return false;
	});
	
}

// -----------------------------------------------------
// --------------     MAIN FLEXSLIDER     --------------
// -----------------------------------------------------
function eloisa_fn_mainslider(){
	
	"use strict";
	
	var flexslider 		= jQuery('.eloisa_fn_mainslider .flexslider');
	
	flexslider.flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: true,
		slideshowSpeed: 5000,
		pauseOnAction: true,
		after: function(slider){
			if(!slider.playing){
				slider.play();
			}
		}
	});
	var  aa = jQuery('.eloisa_fn_mainslider .flex-direction-nav li a');
	aa.html('<span class="line"></span>');
}
function eloisa_fn_mainslider_height(){
	
	"use strict";
	
	var H 				= jQuery(window).height();
	var ulli 			= jQuery('.eloisa_fn_mainslider .flexslider ul.slides > li');
	var mainSlider		= jQuery('.eloisa_fn_mainslider');
	
	ulli.css({height:H});
	mainSlider.css({height:H});
}
// -----------------------------------------------------
// -------------    NEXT SLIDE BUTTON ------------------
// -----------------------------------------------------
function eloisa_fn_next_slide_button(){
	
	"use strict";
	
	jQuery('.flexslider .overlay .slider_content').on('click', function() {
		setTimeout(function(){
			jQuery('.flexslider').flexslider('next');
		}, 100);
		return false;	
	});
		
}
// -----------------------------------------------------
// ------------    HORIZONTAL SUBMENU    ---------------
// -----------------------------------------------------
function eloisa_fn_horsubmenu(){
	
	"use strict";
	
	var nav				= jQuery('ul.nav__hor');
	var W				= jQuery(window).width();
	var delay			= 100;
	
	
	var submenu 		= nav.find('.sub_menu');
	
	submenu.each(function(){
		var element 			= jQuery(this);
		var submenuW			= element.width();
		var submenuLeftOffset	= element.offset().left;
		
		if(W < (submenuLeftOffset + submenuW)){
			element.addClass('reversed');
		}
		
	});
	
	nav.find('li').on('mouseover', function(e){
		e.preventDefault();
		
		var element 			= jQuery(this);
		var submenu				= element.children('ul');
		
		
		if(submenu.length){
			setTimeout(function(){submenu.css({visibility:'visible', opacity:1, transform: 'translateY(0)'});}, delay);
		}
		
	}).on('mouseleave', function(e){
		e.preventDefault();
		
		var element 			= jQuery(this);
		var submenu				= element.children('ul');
		
		
		if(submenu.length){
			setTimeout(function(){submenu.css({visibility:'hidden', opacity:0, transform: 'translateY(20px)'});}, delay);
		}
		
	});
}
// -----------------------------------------------------
// --------------------    SUBMENU    ------------------
// -----------------------------------------------------
function eloisa_fn_submenu(){
	
	"use strict";
	
	var nav 		= jQuery('ul.nav');
	
	
	nav.find('a').on('click', function(e){

		
		var element 			= jQuery(this);
		var parentItem			= element.parent('li');
		var parentItems			= element.parents('li');
		var parentUls			= parentItem.parents('ul.sub_menu');
		var subMenu				= element.next();
		var allSubMenusParents 	= nav.find('li');
		
		allSubMenusParents.removeClass('opened');
		
		if(subMenu.length){
			
			e.preventDefault();
			
			if(!(subMenu.parent('li').hasClass('active'))){
				if(!(parentItems.hasClass('opened'))){parentItems.addClass('opened');}
				
				allSubMenusParents.each(function(){
					var el = jQuery(this);
					if(!el.hasClass('opened')){el.find('ul.sub_menu').slideUp();}
				});
				
				allSubMenusParents.removeClass('active');
				parentUls.parent('li').addClass('active');
				subMenu.parent('li').addClass('active');
				subMenu.slideDown();
				
				// for recalculate scrollable height
				var scrollableE = jQuery('.scrollable');
				scrollableE.each(function(){
					var elE = jQuery(this);
					var hhhE = elE.height();hhhE++;
					setTimeout(function(){elE.css({height:hhhE});},500);
					setTimeout(function(){hhhE--;elE.css({height:hhhE});},600);
				});
				
			}else{
				subMenu.parent('li').removeClass('active');
				subMenu.slideUp();
			}
			return false;
		}
	});
}
// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------
function eloisa_fn_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.eloisa_fn_mobile_menu');
	var header			= jQuery('.eloisa_fn_header');
	var mobMenu			= jQuery('.eloisa_fn_mobile_menu .mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
			header.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
			header.addClass('opened');
			mobMenu.addClass('color');
		}
		return false;
	});
}
// -----------------------------------------------------
// ------------    HEIGHT OVERLAY WINDOW    ------------
// -----------------------------------------------------
function eloisa_fn_overlay_window_height(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var element		= jQuery('.eloisa_fn_overlay_window');
	
	element.css({height:H});
}
// -----------------------------------------------------
// ---------------  WIDGET MENU OPENER  ----------------
// -----------------------------------------------------
function eloisa_fn_widget_menu_opener(){
	
	"use strict";
	
	var button			= jQuery('.eloisa_fn_trigger a');
	var verticalMenu	= jQuery('.eloisa_fn_widget_menu_wrap');
	var overlayWindow	= jQuery('.eloisa_fn_overlay_window');
	
	button.on('click',function(){
		verticalMenu.addClass('opened');
		overlayWindow.addClass('opened');
		return false;
	});
}
// -----------------------------------------------------
// ---------------  WIDGET MENU CLOSER  ----------------
// -----------------------------------------------------
function eloisa_fn_widget_menu_closer(){
	
	"use strict";
	
	var button			= jQuery('.eloisa_fn_widget_menu_closer a');
	var verticalMenu	= jQuery('.eloisa_fn_widget_menu_wrap');
	var overlayWindow	= jQuery('.eloisa_fn_overlay_window');
	
	button.on('click',function(){
		verticalMenu.removeClass('opened');
		overlayWindow.removeClass('opened');
		return false;
	});
	overlayWindow.on('click',function(){
		verticalMenu.removeClass('opened');
		overlayWindow.removeClass('opened');
		return false;
	});
}
// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------
function eloisa_fn_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.item',
		masonry: {
			columnWidth:2
		}
	});
	
	jQuery('.masonry2').isotope({
		itemSelector: '.item',
		masonry: {
			
		}
	});
}
// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function eloisa_fn_totop(){
	
	"use strict";
	
	jQuery(".eloisa_fn_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}
function eloisa_fn_totop_myhide(){
	
	"use strict";
	
	var toTop		=jQuery(".eloisa_fn_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}
// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------
function eloisa_fn_widgetscroll(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var scrollable	= jQuery('.scrollable');
	
	var verMenu		= jQuery('.eloisa_fn_widget_menu_in');
	
	verMenu.css({height:H});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function eloisa_fn_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
}
// -----------------------------------------------------
// -----------------   HERO HEADER    ------------------
// -----------------------------------------------------
function eloisa_fn_splitscreen_h(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var W			= jQuery(window).width();
	var navH		= jQuery('.eloisa_fn_header_in').outerHeight();
	var splitLeft	= jQuery('.eloisa_fn_page_splitleft');
	var splitRight	= jQuery('.eloisa_fn_page_splitright');
	var split		= jQuery('.eloisa_fn_page_splitscreen');
	
	splitLeft.css({height:H - navH});
	splitRight.css({height:H - navH});
	split.css({minHeight:(H - navH)});
	
	if(W > 768){splitRight.css({height:H-navH});}else{splitRight.css({height:'auto'});}
}
// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------
 function eloisa_fn_miniboxes(){
	 
  "use strict";
	 
  var el 		= jQuery('.eloisa_fn_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    var child		= jQuery(element).children('.eloisa_fn_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    var W 		= jQuery(window).width();
    if(W > 480){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------
function eloisa_fn_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var $img 		= jQuery(this);
		var imgClass	= $img.attr('class');
		var imgURL		= $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}
// -----------------------------------------------------
// ---------------    PROOFING CHOOSE   ----------------
// -----------------------------------------------------
function eloisa_fn_proofing_choose(){
	
	"use strict";
	
	var item			= jQuery('.eloisa_fn_portfolio_list_wrap ul li');
	
	    item.each(function(){
		var element			= jQuery(this);
		var choose			= element.find('.choose');
		var close			= element.find('.close');
		var check			= element.find('.check');
		var checked			= element.find('.checked');
		
		choose.on('click',function(){
		if(!close.hasClass('opened') && !check.hasClass('opened') && !checked.hasClass('opened')){
			close.addClass('opened');
			check.addClass('opened');
			checked.addClass('opened');
		}
		else{
			close.removeClass('opened');
			check.removeClass('opened');
			checked.removeClass('opened');
		}
		return false;
	});
	});
}
// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------
function eloisa_fn_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}
// -----------------------------------------------------
// ----------------    404 PAGE HEIGHT    --------------
// -----------------------------------------------------
function eloisa_fn_page_extra_bg(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var W				= jQuery(window).width();
	var header			= jQuery('.eloisa_fn_header_in').outerHeight();
	var element 		= jQuery('.eloisa_fn_page_extra_wrap');
	var element_2 		= jQuery('.eloisa_fn_page_extra_content');
	
	element.css({minHeight:H});
	element_2.css({minHeight:H});
	
	if(W>768){
		element_2.css({height:H});
	}else{
		element_2.css({height: 'auto'});
		element_2.css({paddingTop: header+200});
		element_2.css({paddingBottom: 200});
	}
}
// -----------------------------------------------------
// ----------------    BUTTON EFFECT    ----------------
// -----------------------------------------------------
function eloisa_fn_button_effect(){
	
	"use strict";
	
	var button		= jQuery('.eloisa_fn_button_effect');
	var textColor	= button.data('text-color');
	var borderColor	= button.data('border-color');
	var bgColor		= button.data('bg-color');
	var text		= button.find('span');
	var border		= button.find('span');
	var bg			= button.find('span');
	
	text.css({color:textColor});
	border.css({borderColor:borderColor});
	bg.css({backgroundColor:bgColor});
}
// -----------------------------------------------------
// ----------------    FLEXSLIDER OVERLAY    -----------
// -----------------------------------------------------
function eloisa_fn_flexslider_overlay(){
	
	"use strict";
	
	var overlay			= jQuery('.overlay_flexslider');
	var bgColor 		= overlay.data('bg-color');
	var bgOpacity 		= overlay.data('bg-opacity');
	
	overlay.css({backgroundColor:bgColor});
	overlay.css({opacity:bgOpacity});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function eloisa_fn_owl_carousel(){
	
	"use strict";
	
	var carusel		= jQuery('.owl-carousel');
  	carusel.owlCarousel({
		loop:true,
		margin:0,
		autoplay:3000,
		autoWidth: true,
		nav: false,
		
	});
	
	
	var	prev		= jQuery('.carousel_nav a.prev');
	var	next		= jQuery('.carousel_nav a.next');
	
	prev.on('click',function(){
		carusel.trigger('prev.owl.carousel');
		return false;
	});
	next.on('click',function(){
		carusel.trigger('next.owl.carousel');
		return false;
	});
}

function eloisa_fn_carousel_wrap(){
	"use strict";
	var wrap	= jQuery('.eloisa_fn_carousel_wrap');
	var H		= jQuery(window).height();
	var header	= jQuery('.eloisa_fn_header_in').outerHeight();
	
	wrap.css({minHeight:H-header});
}
// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------
function eloisa_fn_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
	
}



