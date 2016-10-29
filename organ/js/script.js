jQuery(document).ready(function(){
"use strict";

    $("nav ul li ul li ul").parent().addClass("has-dropdown");

    /*=================== Sticky Header  ===================*/
        if($("header").hasClass('stick')){
            var header_stick = $("header.stick").offset().top;
        }
        var header_height = $("header.stick").innerHeight();
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > header_stick) {
                $("header.stick").addClass("sticky");
            } else {
                $("header.stick").removeClass("sticky");
            }
        });


    /*=================== Side Header Button  ===================*/
    $(".sideheader > span").on("click",function(){
        $(this).parent().toggleClass("slidein");
        $("body").toggleClass("move");
    });

    $(".open-menu").on("click",function(){
        $(".sideheader").toggleClass("slidein");
    });
    $("html").on("click",function(){
        $(".sideheader").removeClass("slidein");
    });
    $(".sideheader, .open-menu").on("click",function(e){
        e.stopPropagation();
    });

    /*=================== Responsive Button Menu And Links Slide In ===================*/
    $(".responsive-bar span").on("click", function(e) {
        var target = $(e.target);
        var data_menu = $(e.target.attributes['data-target']).val();
        if (target.is('.open-menu') || data_menu == 'menu') {
            $(".responsive-links.other").removeClass("slidein");
            $(".responsive-links.menu").toggleClass("slidein");
        }
        if (target.is('.open-links') || data_menu == 'links') {
            $(".responsive-links.menu").removeClass("slidein");
            $(".responsive-links.other").toggleClass("slidein");
        }
    });


    $("html").on("click", function() {
        $(".responsive-links.other").removeClass("slidein");
        $(".responsive-links.menu").removeClass("slidein");
    });

    $(".responsive-header").on("click", function(e) {
        e.stopPropagation();
    })

    /*=================== Responsive Menu And Links Dropdown ===================*/
    $(".responsive-links ul li.menu-item-has-children > a, .sideheader ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().siblings().removeClass("active").find("ul").slideUp();
        $(this).next("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });
    $(".responsive-links ul li .lang-selector span").on("click", function() {
        $(this).next("ul").slideToggle();
        return false;
    })



$(".cart-open").on("click",function(){
    $(this).parent().find(".cart").slideToggle();
    return false;
});
$(".open-search").on("click",function(){
    $(this).parent().find("form").slideToggle();
    $(this).toggleClass("close");
    return false;
});
$('#counter').bootstrapNumber();
$('#counter2').bootstrapNumber();


/*=================== Accordion ===================*/
$('.toggle .content').hide();
$('.toggle h3:first').addClass('active').next().slideDown(500).parent().addClass("activate");
$('.toggle h3').on("click", function() {
    if ($(this).next().is(':hidden')) {
        $('.toggle h3').removeClass('active').next().slideUp(500).removeClass('animated zoomIn').parent().removeClass("activate");
        $(this).toggleClass('active').next().slideDown(500).addClass('animated zoomIn').parent().toggleClass("activate");
    }
});

/* =============== Ajax Contact Form ===================== */
$('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
        $('#submit')
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');
    $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        comments: $('#comments').val(),
        verify: $('#verify').val()
    },
        function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
            $('#submit').removeAttr('disabled');
            if(data.match('success') != null) $('#contactform').slideUp('slow');

        }
    );
    });
    return false;
});


/*=================== Enscroll ===================*/  
    $('.responsive-links, .scrolling').enscroll({
        showOnHover: false,
        verticalTrackClass: 'track3',
        verticalHandleClass: 'handle3'
    });



/*=================== LightBox ===================*/  
$(function() {
    var foo = $('.lightbox');
    foo.poptrox({
        usePopupCaption: true
    });
});


$(".product-img-show.active").fadeIn();
$(".product-thumbs > a").on("mouseenter",function(){
    var id = $(this).attr("href");
    $(this).parent().parent().find(".product-img-show").each(function(){
        if($(this).attr("data-id") == id){
            $(this).parent().parent().find(".product-img-show").fadeOut().removeClass("active");
            $(this).fadeIn().addClass("active");
        }
    });
})


});


$(window).load(function(){
$('.parallax').scrolly({bgParallax: true});

});






