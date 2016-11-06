 




/*========== stickyNavbar start ================*/

$(document).ready(function(){
	$(function () {
		$('.header_home').stickyNavbar({
			activeClass: false,          // Class to be added to highlight nav elements
			sectionSelector: false,    // Class of the section that is interconnected with nav links
			animDuration: 250,              // Duration of jQuery animation
			startAt: 1,                     // Stick the menu at XXXpx from the top of the this() (nav container)
			easing: "linear",               // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - 			gsgd.co.uk/sandbox/jquery/easing
			animateCSS: false,               // AnimateCSS effect on/off
			animateCSSRepeat: false,        // Repeat animation everytime user scrolls
			cssAnimation: "fadeInDown",     // AnimateCSS class that will be added to selector
			jqueryEffects: false,           // jQuery animation on/off
			jqueryAnim: "slideDown",        // jQuery animation type: fadeIn, show or slideDown
			selector: false,                  // Selector to which activeClass will be added, either "a" or "li"
			mobile: false,                  // If false nav will not stick under 480px width of window
			mobileWidth: false,             // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due usability on mobile devices)
			zindex: 9999,                   // The zindex value to apply to the element: default 9999, other option is "auto"
			stickyModeClass: "sticky",      // Class that will be applied to 'this' in sticky mode
			unstickyModeClass: "unsticky"   // Class that will be applied to 'this' in non-sticky mode
		});
	});
	
$("#formcontact").on('submit',function(event){

  event.preventDefault();
	var formdata = $(this).serialize();
	$.ajax({
		type:"POST",
		url:"contact_me.php",
		data:formdata,
		success:function(data)
		{
			var returnd = $.parseJSON(data);

			if(!returnd.error)
			{
					$("#formcontact").find('input:text, input:password, input:file, select, textarea').val('');
					$("#formcontact").find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
			}
				alert(returnd.text);

		}
	});
	



});


});

/*========== stickyNavbar end  ================*/




/*========== Animation On Scroll start ================*/


(function () {
	var Util, __bind = function (fn, me) {
		return function () {
			return fn.apply(me, arguments);
		};
	};
	Util = (function () {
		function Util() {}
		Util.prototype.extend = function (custom, defaults) {
			var key, value;
			for (key in custom) {
				value = custom[key];
				if (value != null) {
					defaults[key] = value;
				}
			}
			return defaults;
		};
		Util.prototype.isMobile = function (agent) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
		};
		return Util;
	})();
	this.WOW = (function () {
		WOW.prototype.defaults = {
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true
		};
		function WOW(options) {
			if (options == null) {
				options = {};
			}
			this.scrollCallback = __bind(this.scrollCallback, this);
			this.scrollHandler = __bind(this.scrollHandler, this);
			this.start = __bind(this.start, this);
			this.scrolled = true;
			this.config = this.util().extend(options, this.defaults);
		}
		WOW.prototype.init = function () {
			var _ref;
			this.element = window.document.documentElement;
			if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
				return this.start();
			} else {
				return document.addEventListener('DOMContentLoaded', this.start);
			}
		};
		WOW.prototype.start = function () {
			var box, _i, _len, _ref;
			this.boxes = this.element.getElementsByClassName(this.config.boxClass);
			if (this.boxes.length) {
				if (this.disabled()) {
					return this.resetStyle();
				} else {
					_ref = this.boxes;
					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
						box = _ref[_i];
						this.applyStyle(box, true);
					}
					window.addEventListener('scroll', this.scrollHandler, false);
					window.addEventListener('resize', this.scrollHandler, false);
					return this.interval = setInterval(this.scrollCallback, 50);
				}
			}
		};
		WOW.prototype.stop = function () {
			window.removeEventListener('scroll', this.scrollHandler, false);
			window.removeEventListener('resize', this.scrollHandler, false);
			if (this.interval != null) {
				return clearInterval(this.interval);
			}
		};
		WOW.prototype.show = function (box) {
			this.applyStyle(box);
			return box.className = "" + box.className + " " + this.config.animateClass;
		};
		WOW.prototype.applyStyle = function (box, hidden) {
			var delay, duration, iteration;
			duration = box.getAttribute('data-wow-duration');
			delay = box.getAttribute('data-wow-delay');
			iteration = box.getAttribute('data-wow-iteration');
			return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
		};
		WOW.prototype.resetStyle = function () {
			var box, _i, _len, _ref, _results;
			_ref = this.boxes;
			_results = [];
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				box = _ref[_i];
				_results.push(box.setAttribute('style', 'visibility: visible;'));
			}
			return _results;
		};
		WOW.prototype.customStyle = function (hidden, duration, delay, iteration) {
			var style;
			style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
			if (duration) {
				style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
			}
			if (delay) {
				style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
			}
			if (iteration) {
				style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
			}
			return style;
		};
		WOW.prototype.scrollHandler = function () {
			return this.scrolled = true;
		};
		WOW.prototype.scrollCallback = function () {
			var box;
			if (this.scrolled) {
				this.scrolled = false;
				this.boxes = (function () {
					var _i, _len, _ref, _results;
					_ref = this.boxes;
					_results = [];
					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
						box = _ref[_i];
						if (!(box)) {
							continue;
						}
						if (this.isVisible(box)) {
							this.show(box);
							continue;
						}
						_results.push(box);
					}
					return _results;
				}).call(this);
				if (!this.boxes.length) {
					return this.stop();
				}
			}
		};
		WOW.prototype.offsetTop = function (element) {
			var top;
			top = element.offsetTop;
			while (element = element.offsetParent) {
				top += element.offsetTop;
			}
			return top;
		};
		WOW.prototype.isVisible = function (box) {
			var bottom, offset, top, viewBottom, viewTop;
			offset = box.getAttribute('data-wow-offset') || this.config.offset;
			viewTop = window.pageYOffset;
			viewBottom = viewTop + this.element.clientHeight - offset;
			top = this.offsetTop(box);
			bottom = top + box.clientHeight;
			return top <= viewBottom && bottom >= viewTop;
		};
		WOW.prototype.util = function () {
			return this._util || (this._util = new Util());
		};
		WOW.prototype.disabled = function () {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent);
		};
		return WOW;
	})();
}).call(this);
wow = new WOW({
	animateClass: 'animated',
	offset: 100
});
wow.init();

/*========== Animation On Scroll end ================*/




/*========== Page Loader start ================*/

jQuery(window).load(function() {
	// Animate loader off screen
	jQuery(".loading").fadeOut("slow");;
});

/*========== Page Loader end ================*/





/*========== Banner Height Start ================*/

function banner_height() {
    var height = jQuery(window).height();
    var bannerheight = (height);
    bannerheight = parseInt(bannerheight) + 'px';
    jQuery(".home_banner").css('height',bannerheight);
}

jQuery(document).ready(function() {
    banner_height();
    jQuery(window).bind('resize', banner_height);
});

/*========== Banner Height end ================*/




/*========== Countdown start ================*/


$(function(){
	
	var note = $('#note'),
		ts = new Date(2016, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});


/*========== Countdown end ================*/




/*========== Pictures Lightbox start ================*/


jQuery('.pictuers_main').magnificPopup({
	delegate: 'a',
	type: 'image',
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	closeOnContentClick: false,
    closeBtnInside: false,
	image: {
	  cursor: null,
	  titleSrc: 'title',
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function(element) {
		  return element.find('img');
		}
  	},
gallery: {
  enabled: true,
  preload: [0,1], // Will preload 0 - before current, and 1 after the current image
  navigateByImgClick: true
	}
});




/*========== Pictures Lightbox end ================*/


/*========== Scroll Top start ================*/

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1500);
});


/*========== Scroll Top end ================*/