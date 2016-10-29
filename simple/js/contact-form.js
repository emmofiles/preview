var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";
	
    /* ---------------------------------------------------------------------- */
    /*  Contact Form
    /* ---------------------------------------------------------------------- */

    var submitContact = $('#submit_contact'),
        message = $('#msg');

    submitContact.on('click', function(e){
        e.preventDefault();

        var $this = $(this);
        
        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if(data.info !== 'error'){
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                }
            }
        });
    });

    /* ---------------------------------------------------------------------- */
    /*  Contact Map
    /* ---------------------------------------------------------------------- */
    var contact = {"lat":"40.714623", "lon":"-74.006605"}; //Change a map coordinate here!

    try {
        $('#map').gmap3({
            action: 'addMarker',
            latLng: [contact.lat, contact.lon],
            map:{
                center: [contact.lat, contact.lon],
                zoom: 14
                },
            },
            {action: 'setOptions', args:[{scrollwheel:false}]}
        );
    } catch(err) {

    }


    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/


    
    var winDow = $(window);
            // Needed variables
    var $container=$('.filter-container');
    var $filter=$('.filter');


    try{
        $container.imagesLoaded( function(){
            $container.show();
            $container.isotope({
                filter:'*',
                layoutMode:'masonry',
                animationOptions:{
                    duration:750,
                    easing:'linear'
                }
            });
        });
    } catch(err) {
    }

    winDow.bind('resize', function(){
        var selector = $filter.find('a.active').attr('data-filter');

        try {
            $container.isotope({ 
                filter  : selector,
                animationOptions: {
                    duration: 750,
                    easing  : 'linear',
                    queue   : false,
                }
            });
        } catch(err) {
        }
        return false;
    });
    
    // Isotope Filter 
    $filter.find('a').on('click', function(){
        var selector = $(this).attr('data-filter');

        try {
            $container.isotope({ 
                filter  : selector,
                animationOptions: {
                    duration: 750,
                    easing  : 'linear',
                    queue   : false,
                }
            });
        } catch(err) {

        }
        return false;
    });


    var filterItemA = $('.filter a');

    filterItemA.on('click', function(){
        var $this = $(this);
        if ( !$this.hasClass('active')) {
            filterItemA.removeClass('active');
            $this.addClass('active');
        }
    });




});
