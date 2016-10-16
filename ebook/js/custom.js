/*

  Author: ilmosys
  Template: eBook
  Version: 1.0
  URL: http://themeforest.net/user/ilmosys


*/
	
	$(document).ready(function() { // Document ready
	"use strict";	
	/* ==========================
	   PRE-LOADER
	=============================*/
	
	$(window).load(function() {
		// will fade loading animation
		$("#object").delay(600).fadeOut(300);
		// will fade loading background					
		$("#loading").delay(1000).fadeOut(500);
	})            

	/* =====================================
	   AJAX CHIMP ( NEWSLETTER SUBSCRIPTION )
	========================================*/
	$('#mc-embedded-subscribe-form').ajaxChimp({
		callback: mailchimpCallback,
	    url: 'http://ilmosys.us10.list-manage.com/subscribe/post?u=44e56a3df540b7b4c488ce45b&amp;id=a779ddfdd9'
	    // Replace the URL above with your mailchimp URL (put your URL inside '').
	});

	// callback function when the form submitted, show the notification box
	function mailchimpCallback(resp) {
        if (resp.result === 'success') {
			$('#newsletter-error').slideUp();
            $('#newsletter-success').slideDown();
        }
        else if (resp.result === 'error') {
			$('#newsletter-success').slideUp();
            $('#newsletter-error').slideDown();
        }
    }
	
	}); // End document ready