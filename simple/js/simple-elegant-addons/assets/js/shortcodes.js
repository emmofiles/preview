(function($){
    $(document).ready(function(){
    
        /* Revolution Slider
        -------------------------------------------------------------------------------------- */
        if ( $().flexslider ) {
            $(window).load(function(){
                $('.testimonial-slider').each(function(){
                    var $this = $(this);
                    var args = {
                        controlNav : $this.data('pager') == true,
                        slideshow : $this.data('auto') == true,
                        directionNav : false,
                        smoothHeight : false,
                        multipleKeyboard: true,
                    }

                    $this.find('.flexslider').flexslider(args);
                }); // each testimonial slider
            }); // window load
        }
        
    }); // document ready
})(jQuery);