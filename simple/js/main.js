/* Table of Contents
--------------------------------------------------------------------------------------

*/
(function($) {
"use strict";
var WITHEMES = WITHEMES || {};

/* Mobile Check
--------------------------------------------------------------------------------------------- */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/* Fitvids
--------------------------------------------------------------------------------------------- */
WITHEMES.fitvids = function(){
	if ( !$().fitVids ) {
        return;
    }

    $('.entry-content, .media-container').fitVids();
    
}; // fitvids
    
/* Flexslider
--------------------------------------------------------------------------------------------- */
WITHEMES.flexslider = function(){
    if ( !$().flexslider ) {
        return;
    }
    
    $(window).load(function(){
        $('.wi-flexslider').each(function(){
            var $this = $(this);
            $this.find('.flexslider').flexslider({
                controlNav: false,
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>'
            });
        });
    }); // window load
}

/* Topbar Search
--------------------------------------------------------------------------------------------- */
WITHEMES.topbar_search = function() {
    $('#topbar_search .mobile_submit').on('click', function(){
        $('#mobile_search').slideToggle('fast',function(){ $('#mobile_search').find('.s').focus(); });
        return false;
    });
}

/* Tipsy
--------------------------------------------------------------------------------------------- */
WITHEMES.tipsy = function() {
    if ( !$().tipsy ) {
        return;
    }
    
    $('.tipsy').tipsy({
        fade	:	true,
		gravity	: 	's',
		opacity	:	'.9',
    });
    
    $('#wi-topbar .social-list ul a').tipsy({
        fade	:	false,
		gravity	: 	'n',
		opacity	:	'.9',
    });
    
}

/* Mobile Nav
--------------------------------------------------------------------------------------------- */
WITHEMES.mobilenav = function() {
    if ( !$().slicknav ) {
        return;
    }
    
    $('#wi-mainnav').slicknav({
        allowParentLinks : true,
        prependTo : '#mobilemenu',
    });
    
}

/* Sticky
--------------------------------------------------------------------------------------------- */
WITHEMES.sticky = function() {
    
    var header = $('#wi-mainnav'),
        header_top = header.length ? header.offset().top : 0,
        header_h = header.outerHeight(),
        delay_distance = 120;

    function sticky() {
        
        if ( !header.length ) {
            return;
        }
        
        if ( $(window).scrollTop() > header_top + header_h + delay_distance ) {
            header.addClass('before-sticky is-sticky');
        } else if ( $(window).scrollTop() > header_top + header_h ) {
            header.removeClass('is-sticky');
            header.addClass('before-sticky');
        } else {
            header.removeClass('is-sticky before-sticky');
        }
        
    }
    
    sticky();
    $(window).scroll(sticky);
    
}

/* Superfish
--------------------------------------------------------------------------------------------- */
WITHEMES.superfish = function(){
    if ( !$().superfish ) {
        return;
    }
    $('#wi-mainnav div.menu').superfish({
        delay : 500,
        speed : 0,
    });
}

/* Init functions
--------------------------------------------------------------------------------------------- */
$(document).ready(function() {
    
    WITHEMES.fitvids();
    WITHEMES.sticky();
    WITHEMES.tipsy();
    WITHEMES.flexslider();
    WITHEMES.topbar_search();
    WITHEMES.mobilenav();
    WITHEMES.superfish();
    
						   });
})(jQuery);	// EOF