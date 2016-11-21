(function (jQuery) {
    "use strict";
    // Generals Backgrounds
    jQuery('.data-image').each(function(){
        var url = jQuery(this).attr("data-image");
        if(url){
            jQuery(this).css("background-image", "url(" + url + ")");
        }
    });
    // BG Color
    jQuery('section,div').each(function(){
        var bg_color = jQuery(this).attr("data-color");
        if(bg_color){
            jQuery(this).css("background-color", "" + bg_color + "");
        }
    });
    // Site Pre Loader -- also uncomment the div in the header and the css style for #preloader
    jQuery(window).load(function(){
        jQuery('#preloader').fadeOut(
            'slow',
            function(){
                jQuery(this).remove();
            });
    });
    // Setting Width For Carousel
    var jQuerywindow = jQuery(window).on('resize', function(){
        var b_width = jQuery('body').width();
        var cal_width = b_width - 4;
        jQuery('.feature-posts-owl').css('width',cal_width+'px');
    }).trigger('resize');
    var b_width = jQuery('body').width();
    var cal_width = b_width - 4;
    jQuery('.feature-posts-owl').css('width',cal_width+'px');
    // Feature Posts Carousel
    jQuery('.owl-carousel').owlCarousel({
        loop : true,
        margin : 0,
        responsiveClass : true,
        responsiveRefreshRate : 1000,
        responsiveBaseElement : "body",
        responsive:{
            0:{
                items : 1
            },
            600:{
                items : 2
            },
            767:{
                items : 2
            },
            992:{
                items : 3
            },
            1024:{
                items : 4
            }
        }
    });
    // Setting Height For Recent Post 4
    jQuery(window).on('resize', function(){
        jQuery('.recent-post4').each(function(){
            var p_height = jQuery(this).find('.img-holder').height();
            jQuery(this).find('.recent-post-desc').css('height',p_height+'px');
        });
    }).trigger('resize');
    jQuery('.recent-post4').each(function(){
        var p_height = jQuery(this).find('.img-holder').height();
        jQuery(this).find('.recent-post-desc').css('height',p_height+'px');
    });
    // 3 Fold Slider
    jQuery('.three-fold').carousel({
        interval: false
    });
    // Right Arrows
    jQuery('.right.cc-3-fold').on('click',function(){
        var nxt_img = jQuery('.three-fold .active').next().next().attr('data-image');
        var first_img = jQuery('.three-fold .item:first').attr('data-image');
        if(nxt_img){
            jQuery(this).css('background','url("'+nxt_img+'")');
        } else {
            jQuery(this).css('background','url("'+first_img+'")');
        }
        var prv_img = jQuery('.three-fold .active').attr('data-image');
        if(prv_img){
            jQuery('.left.cc-3-fold').css('background','url("'+prv_img+'")');
        }
    });
    // Left Arrows
    jQuery('.left.cc-3-fold').on('click',function(){
        var prv_img = jQuery('.three-fold .active').prev().prev().attr('data-image');
        var last_img = jQuery('.three-fold .item:last').attr('data-image');
        if(prv_img){
            jQuery(this).css('background','url("'+prv_img+'")');
        } else {
            jQuery(this).css('background','url("'+last_img+'")');
        }
        var nxt_img = jQuery('.three-fold .active').attr('data-image');
        if(nxt_img){
            jQuery('.right.cc-3-fold').css('background','url("'+nxt_img+'")');
        }
    });
    // On Load Fill The Arrows
    var current_img = jQuery('.three-fold .active').attr('data-image');
    var last_img = jQuery('.three-fold .item:last').attr('data-image');
    var nxt_img = jQuery('.three-fold .active').next().attr('data-image');
    if(nxt_img){
        jQuery('.right.cc-3-fold').css('background','url("'+nxt_img+'")');
    } else {
        jQuery('.right.cc-3-fold').css('background','url("'+current_img+'")');
    }
    var prv_img = jQuery('.three-fold .active').prev().attr('data-image');
    if(prv_img){
        jQuery('.left.cc-3-fold').css('background','url("'+prv_img+'")');
    } else {
        jQuery('.left.cc-3-fold').css('background','url("'+last_img+'")');
    }
    // Slim Menu
    var data_menu_title = jQuery('body').attr('data-menu-title');
    jQuery('.slimmenu').slimmenu(
        {
            resizeWidth: '991',
            collapserTitle: data_menu_title,
            animSpeed:'medium',
            indentChildren: true,
            childrenIndenter: '',
            easingEffect: 'easeOutBack'
        });
})(jQuery);


