jQuery(document).ready(function($) {

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

});