jQuery(document).ready(function($) {
    "use strict";

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

});