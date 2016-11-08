
/* ==============================================
Theme Panel Style Switcher
=============================================== */

	$( "#theme-panel .panel-btn" ).click(function(){
		$( "#theme-panel" ).toggleClass( "panel-close", "panel-open", 1000 );
		$( "#theme-panel" ).toggleClass( "panel-open", "panel-close", 1000 );
		return false;
	});

	$('.color-switch').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#color-skins').attr('href', 'css/colors/' + title + '.css');				
	  	return false;
    });	

	//MENU APPEAR
$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '70px'
            });
            $(".navbar-brand img").css({
                'margin-top': '-0px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0.78)'
            });
        } else {
            $(".navbar").css({

            })
            $(".navbar-nav>li>a").css({
                'padding-top': '25px'
            });
            $(".navbar-brand img").css({
                'height': '75px'
            });
            $(".navbar-brand img").css({
                'padding-bottom': '20px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });
        }
    });
});