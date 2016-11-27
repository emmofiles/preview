(function($) { "use strict" ; 

	$(window).load(function() {
		"use strict";
		$('body').addClass('loaded');
	});   
        
    $(window).on('scroll', function() {
        

        if ($(window).scrollTop() > 2  ) {

            $('body').addClass('scrollActive');
           

        } else {
            $('body').removeClass('scrollActive');
        }
        
    });
	
	
	if($.fn.waypoint){
        
			$('.anim-slideInDown').css('opacity','0');
			$('.anim-slideInDown').waypoint(function () {
				$(this).addClass('slideInDown');
				$('.anim-slideInDown.slideInDown').css({
					opacity: 1
				});
			}, {
				offset: '60%'
			});
        
			$('.anim-slideInLeft').css('opacity','0');
			$('.anim-slideInLeft').waypoint(function () {
				$(this).addClass('slideInLeft');
				$('.anim-slideInLeft.slideInLeft').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
        
			$('.anim-slideInRight').css('opacity','0');
			$('.anim-slideInRight').waypoint(function () {
				$(this).addClass('slideInRight');
				$('.anim-slideInRight.slideInRight').css({
					opacity: 1
				});
			}, {
				offset: '90%'
			});
        
			$('.anim-bounceIn').css('opacity','0');
			$('.anim-bounceIn').waypoint(function () {
				$(this).addClass('bounceIn');
//				$('.anim-bounceIn.bounceIn').css({
//					opacity: 1
//				});
			}, {
				offset: '90%'
			});
            
            
		}
	
	
	

})(jQuery);