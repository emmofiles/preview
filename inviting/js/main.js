(function ($) {
	"use strict";

    jQuery(document).ready(function($){

         /*---
         * Full Screen Banner
         *---------------*/
        $(window).bind('resizeEnd', function () {
            $("#fullscreen-banner").height($(window).height());
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 300);
        }).trigger("resize");

        $('.live-demo').click(function(e){
          var target = $(this).attr('href');
          var offset = $(target).offset().top;
          $('body, html').animate({
            scrollTop : offset
          }, 600);
          e.preventDefault();
        });
        
        //this code is for preloader
        $("body").addClass("preloader_active");



    });

		// preloader
		$(window).load(function(){
				$('body').css('overflow-y', 'visible');
				$('#preloader').fadeOut('slow', function(){
						$(this).remove();
				});
		});		

})(jQuery);
