'use strict';
$('#sub-form').submit(function(e) { //Click send
    e.preventDefault();
    var postdata = $('#sub-form').serialize();
    $.ajax({
        type: 'POST',
        url: 'php/subscribe.php', //Attach subscribe.php
        data: postdata,
        dataType: 'json',
        success: function(json) {
            if(json.valid == 0) {
                $('#success-message').hide();
                $('#error-message').hide();
                $('#error-message').html(json.message);
                $('#error-message').fadeIn('fast');
            }
            else {
                $('#error-message').hide();
                $('#success-message').hide();
                $('#sub-form').hide();
                $('#success-message').html(json.message);
                $('#success-message').fadeIn('fast', function(){
                    $('.top-content').backstretch("resize");
                });
            }
        }
    });
	return false;
});