'use strict';

// Add the basic String function trim for all browsers with an outdated ECMAScript implementation
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, ''); 
    }
}
// Add the isNumeric function for older versions of jQuery that do not have it
if(typeof(jQuery.isNumeric) !== 'function'){
    jQuery.isNumeric = function(obj){ return !isNaN(parseFloat(obj)) && isFinite(obj); };
}

var Main = Main || {};

function HeadlineHandler(){
    var self = this,
    container = jQuery('#headline_cycler'),
    clone = container.clone( false );

    this.init = function (){
        var textillate_options = {
            loop: false,
            minDisplayTime: 0,
            initialDelay: 0,
            autoStart: false,
            inEffects: ['fadeInUp'],
            outEffects: ['fadeOutUp'],
            in: {
                effect: 'fadeInUp',
                delayScale: 3.5,
                delay: 20,
                sync: true,
                shuffle: true,
                reverse: false
            },
            out: {
                effect: 'fadeOutUp',
                delayScale: 2.5,
                delay: 20,
                sync: true,
                shuffle: true,
                reverse: false
            }
        };

        var slides = container.find('.slide');
        var max_s_h = 0;

        slides.each(function(){
            jQuery(this).css({'height': 'auto'});
            var s_h = jQuery(this).outerHeight();
            max_s_h = (s_h > max_s_h) ? s_h : max_s_h;
        });


        slides.each(function(){
            jQuery(this).css({'height': max_s_h+'px', 'display': 'none'});
            jQuery(this).children('.sp_transition, .sp_transition2').textillate(textillate_options);
        });

        var $ = jQuery;

        container.flexslider({
            selector: '.flexslider > .slide',
            animation: 'fade',
            controlNav: false,
            directionNav: false,
            animationLoop: false,
            slideshow: true,
            slideshowSpeed: 3000,
            direction: 'horizontal',
            itemMargin: 0,
            move: 1,
            minItems: 1,
            maxItems: 1,
            before: function(slider){ 
                var $currentSlide = slider.slides.eq(slider.currentSlide);
                $currentSlide.children('.sp_transition').first().textillate('out');
                $currentSlide.children('.sp_transition2').first().textillate('out');
            },
            after: function(slider){
                var $prevSlide = slider.slides.eq(slider.currentSlide-1);
                var $currentSlide = slider.slides.eq(slider.currentSlide);
                setTimeout(
                    function(){ 
                        $prevSlide.find('span[class^="char"]').removeClass('animated').css({'visibility':'hidden'});
                    }, 
                    1000
                    );
                $currentSlide.children('.sp_transition').first().textillate('start');
                $currentSlide.children('.sp_transition2').first().textillate('start');
            },
            start: function(slider){          
                var $currentSlide = slider.slides.eq(slider.currentSlide);
                $currentSlide.children('.sp_transition').first().textillate('start');
                $currentSlide.children('.sp_transition2').first().textillate('start');
            }
        });
    }
    this.update = function () {
        container.replaceWith(clone);
        container = clone;
        clone = container.clone( false );
        this.init();
    }

    this.init();
}



function testimonialsHandler(){
    var self = this,
    container = jQuery('.testimonials'),
    clone = container.clone( false );

    this.init = function (){
        var textillate_options = {
            loop: false,
            minDisplayTime: 0,
            initialDelay: 0,
            autoStart: false,
            inEffects: ['fadeInUp'],
            outEffects: ['fadeOutUp'],
            in: {
                effect: 'fadeInUp',
                delayScale: 1.5,
                delay: 20,
                sync: true,
                shuffle: true,
                reverse: false
            },
            out: {
                effect: 'fadeOutUp',
                delayScale: 1.5,
                delay: 20,
                sync: true,
                shuffle: true,
                reverse: false
            }
        };      
        var slides = container.find('.slide');
        var max_s_h = 0;
        slides.each(function(){
            jQuery(this).css({'height': 'auto'});
            var s_h = jQuery(this).outerHeight();
            max_s_h = (s_h > max_s_h) ? s_h : max_s_h;
        });
        slides.each(function(){
            jQuery(this).css({'height': max_s_h+'px', 'display': 'none'});
            jQuery(this).find('.sp_transition, .sp_transition2').textillate(textillate_options);
        });
        var $ = jQuery;
        container.flexslider({
            selector: '.flexslider > .slide',
            animation: 'fade',
            controlNav: false,
            directionNav: false,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 6000,
            direction: 'horizontal',
            itemMargin: 0,
            move: 1,
            minItems: 1,
            maxItems: 1,
            before: function(slider){ 
                var $currentSlide = slider.slides.eq(slider.currentSlide);
                $currentSlide.find('.sp_transition').first().textillate('out');
                $currentSlide.find('.sp_transition2').first().textillate('out');
            },
            after: function(slider){
                var $prevSlide = slider.slides.eq(slider.currentSlide-1);
                var $currentSlide = slider.slides.eq(slider.currentSlide);
                setTimeout(
                    function(){ 
                        $prevSlide.find('span[class^="char"]').removeClass('animated').css({'visibility':'hidden'});
                    }, 
                    1000
                    );
                $currentSlide.find('.sp_transition').first().textillate('start');
                $currentSlide.find('.sp_transition2').first().textillate('start');
            },
            start: function(slider){          
                var $currentSlide = slider.slides.eq(slider.currentSlide);
                $currentSlide.find('.sp_transition').first().textillate('start');
                $currentSlide.find('.sp_transition2').first().textillate('start');
            }
        });
    }
    this.update = function () {
        container.replaceWith(clone);
        container = clone;
        clone = container.clone( false );
        this.init();
    }

    this.init();
}


function hoverHandler(){
    var self = this,
    container = jQuery('.sp-image-caption'),
    clone = container.clone( false );

    this.init = function (){
        var textillate_options = {
            loop: false,
            minDisplayTime: 0,
            initialDelay: 0,
            autoStart: false,
            inEffects: ['fadeInUp'],
            outEffects: ['fadeOutUp'],
            in: {
                effect: 'fadeInUp',
                delayScale: 1.5,
                delay: 20,
                sync: true,
                shuffle: true,
                reverse: false
            },
            out: {
                effect: 'fadeOutUp',
                delayScale: 1.5,
                delay: 20,
                sync: true,
                shuffle: true,
                reverse: false
            }
        };

        var slides = container.find('.inner');

        slides.each(function(){
           jQuery(this).find('.sp_transition, .sp_transition2').textillate(textillate_options);
       });

        var $ = jQuery;

        container.hover(function(){

          $(this).find('.sp_transition').first().textillate('start');
          $(this).find('.sp_transition2').first().textillate('start');
          $(this).addClass('hovered');

      }, function(){
        $(this).find('.sp_transition').first().textillate('out');
        $(this).find('.sp_transition2').first().textillate('out'); 
        $('.sp-image-caption').removeClass('hovered');
        setTimeout(function(){
            $('.sp-image-caption:not(.hovered) span[class^="char"]').css({'opacity':'0'});
        }, 1000)
    });

    }

    this.update = function () {
        container.replaceWith(clone);
        container = clone;
        clone = container.clone( false );
        this.init();
    }

    this.init();
}

;(function($, window, document, undefined) {
    "use strict";
    var $window   = $(window),
    $document = $(document),
    $body     = $('body');

/**
* jQuery displayWidth - A simple Media Query check
* @param  {string} comparison   Comparison condition. Possible values: Either one these: '>', '<', '>=', '<=' or a full, complex Media Query. The latter is risky because it will fail without a fallback in browsers that do not support the matchMedia function.
* @param  {int+} width          Display width (in pixels)
*
* @author Stefan Winkler
*/
window.displayWidth = function(comparison, value){
    if(typeof window.matchMedia == 'function' && window.matchMedia!=undefined && window.matchMedia('screen and (max-width: 767px)')!=null){
        if(jQuery.isNumeric(value)){
            value = Number(value);
            if(comparison == '>='){
                comparison = 'min-width';
            }else if(comparison == '<='){
                comparison = 'max-width';
            }else if(comparison == '>'){
                comparison = 'min-width';
                value++;
            }else if(comparison == '<'){
                comparison = 'max-width';
                value--;
            }
            return window.matchMedia('('+comparison+':'+value+'px)').matches;
        }else{
            return window.matchMedia(value).matches;
        }
    }else{
        if(!jQuery.isNumeric(value)){
            if(typeof(console) !== 'undefined'){
                console.log("Error: This Browser doesn't support media queries.");
            }
            return false;
        }
        if(typeof(window.current_screen_width)==='undefined'){
            window.current_screen_width = jQuery(window).outerWidth();
        }
        if(comparison == '>='){
            return window.current_screen_width >= value;
        }else if(comparison == '<='){
            return window.current_screen_width <= value;
        }else if(comparison == '>'){
            return window.current_screen_width > value;
        }else if(comparison == '<'){
            return window.current_screen_width < value;
        }
    }
};

/**
* @param  {function} func      the code to be executed
* @param  {int+} threshold     delay after trigger event (in milliseconds)
* @param  {boolean} execAsap   forces to execute the code as soon as possible
* @return {void}
*
* @author Paul Irish
* @see http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
*/
var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function () {
        var obj = this, args = arguments;
        function delayed () {
            if (!execAsap)
                func.apply(obj, args);
            timeout = null;
        }

        if (timeout)
            clearTimeout(timeout);
        else if (execAsap)
            func.apply(obj, args);

        timeout = setTimeout(delayed, threshold || 100);
    };
};

/**
* jQuery debounceEvent function
* @param  {string} event       The event to be bound
* @param  {int+} threshold     Delay after trigger event (in milliseconds)
* @param  {boolean} execAsap   Forces to execute the code as soon as possible
*
* @author Paul Irish
* @see http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
*/
$.fn.debounceEvent = function(event, func, threshold, execAsap){
    return func ? this.bind(event, debounce(func, threshold, execAsap)) : this.trigger(event);
};

var resizeHandler = function(){
    if(Main.headlineHandler && typeof(Main.headlineHandler.update)==='function'){
        Main.headlineHandler.update();
    }

    if(Main.testimonialsHandler && typeof(Main.testimonialsHandler.update)==='function'){
        Main.testimonialsHandler.update();
    }

};

$window.load(function(){

    var wW = $(window).width(); 

    if($('#headline_cycler').length){
        Main.headlineHandler = new HeadlineHandler();
    }

    if($('.testimonials').length){
        Main.testimonialsHandler = new testimonialsHandler();
    }

    if($('.sp-image-caption').length && (wW > 1024)) {
        Main.hoverHandler = new hoverHandler();
    }

});

$document.ready(function(){
    if(navigator.appVersion.indexOf("Mac")!=-1){
        $('html').addClass('MacOS');
    }else if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
        $('html').addClass('Android');
    }


    $body.on('click touchstart',function(e){
        var $t = $(e.target);
        if($('#nav-button').is(':visible') && $('#nav').is(':visible')){        
            if(!$t.is('#nav-button') && !$t.closest('#nav-button').length && !$t.closest('#nav').length){
                e.preventDefault();
                $('#nav-button').click();
            }
        }
        if(!$t.is('.service_item') && !$t.closest('.service_item').length){
            $('.service_item').removeClass('open').removeClass('hover');
        }
    });

    $window.debounceEvent('resize', resizeHandler, 120);
});
})(jQuery, window, document);