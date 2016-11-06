$(document).ready(function(){
	
	"use strict";
	
    // Countdown options               
    $(".countdown").jCounter({
        date: "1 january 2015 12:00:00", // Deadline date
        timezone: "Europe/Bucharest",
        format: "dd:hh:mm:ss",
        twoDigits: 'on',
        fallback: function() {
            console.log("count finished!")
        }
    });    
	           
    // Form validate options            
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
		errorElement: "div",
        errorPlacement: function(error, element) {
            error.appendTo("#result");
        },
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element),
			$('#result').removeClass('valid')
        },                    
					
        success: function(element) {
            element
            $('#result').addClass('valid')
        }
    }); 
	
	// Close subscribe block error-block	
	$( '#result_close' ).click(function() {	
		$('#subscribe_field').removeClass('flip');
	})

    // Subscribe form MailChimp integration			
    $('#subscribe_form').submit(function() {
		
         $('#subscribe_field').addClass('flip');
		
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
                    $('.error').html('Well done, you are subscribed!');
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
                    // Change subscribe form error message text here
                    $('.error').html('Oops! Something went wrong!');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        }
        return false; 
    });
	
	
	// Construktor  
    $('.settings_link').toggle(function(event){
        $(this).find('i').css({
            'transform': 'rotate(90deg)',
            'transition' : 'all linear 0.5s'
        },500);
        $(this).parent().animate({
            'marginLeft': '0'
        },500);
        event.preventDefault();
    },function(){
        $(this).find('i').css({
            'transform': 'rotate(-90deg)',
            'transition' : 'all linear 0.5s'
        },500);
        $(this).parent().animate({
            'marginLeft': '-140px'
        },500);
    });                
    $('.colors li a').click(function(event){
        $('.colors li a').removeClass('selected');
        $(this).addClass('selected');            
        event.preventDefault();
    });
              
});