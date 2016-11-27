(function() {
    "use strict";
    $('#loader').delay(700).fadeOut();
    $('#mask').delay(1200).fadeOut("slow");

    // Global DOM elements
    window.upro = {
        ele: {}
    };
    upro.ele['win'] = $(window);
    upro.ele['doc'] = $(document);   

    // Slider Home
    $('img.bg').each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
            'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), rgba(0, 0, 0, 0.4) url(' + $src + ')',
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-size': 'cover',
        });
        $(this).remove();
    });

       
    // Intro section Type
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 100,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
    });


	// Animation Load
    $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if (animationDelay) {
            setTimeout(function() {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
            }, animationDelay);
        } else {
            element.addClass(animation + " visible");
            element.removeClass('hiding');
        }

    }, {
        accY: -150
    });

	// Count Down
	var endDate = "June 7, 2087 15:03:25";
        $('.countdown.simple').countdown({ date: endDate });
        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div><span class='days'>" + this.leadingZeros(data.days, 2) + " </span><div class='count-name'>Dd</div></div><div><span class='hours'>" + this.leadingZeros(data.hours, 2) + " </span><div class='count-name'>Hr</div></div><div><span class='minutes'>" + this.leadingZeros(data.min, 2) + " </span><div class='count-name'>Min</div></div><div><span class='seconds'>" + this.leadingZeros(data.sec, 2) + " </span><div class='count-name'>Sec</div></div>");
          }
        });
		
		
	// Contact Form
   $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        $.post('mail/send.php', $(this).serialize()).done(function(data) {
            $('.contact-us').fadeOut('slow', function() {
                $('.contact-us').fadeIn('slow').html(data);
            });
        }).fail(function() {
            alert('SOMETHING WENT WRONG! PLEASE TRY AGAIN.');
        });
    });

})();