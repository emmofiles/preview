jQuery(document).ready(function($) {
    "use strict";

    // add to cart click

   $(document).on('click', '.product .add_to_cart_button', function(e) {
        e.preventDefault();
        var addedText = $(this).data('textadded');
        if ($(this).hasClass('loading')) {
            $(this).html(addedText);
        }
   });

    //Menu Cart hover

    // var menu_cart = $('#shop_link_dropdown_cart'), subelement = menu_cart.find('.cart_dropdown_widget').css('display', 'none');

    // menu_cart.hover(
    //     function(){
    //         subelement.css('display', 'block');
    //     },
    //     function(){
    //         subelement.css('display', 'none');
    //     }
    // );

    if ($('.cart_list.product_list_widget').length>0) {
        $('.cart_list.product_list_widget').each(function () {
            var $price = $(this).find('.quantity .amount');

            if ($price.length>0) {
                $price.html(
                    $price.html().replace(/(\.\d\d)/g, '<sup>$1</sup> ')
                );
            }
        });
    }

    if ($('.widget_shopping_cart').length>0) {
        $('.widget_shopping_cart').each(function () {
            var $total = $(this).find('.total .amount');

           if ($total.length>0) {
                $total.html(
                    $total.html().replace(/(\.\d\d)/g, '<sup>$1</sup> ')
                );
            }
        });
    }

    if ($('.cart_list.product_list_widget li').hasClass('empty')) {
        $('.cart_list.product_list_widget').addClass('empty');
    } else{
        $('.cart_list.product_list_widget').removeClass('empty');
    }

    //List/Grid toggle

    $( document ).ready(function() {
        $('.woocommerce .gridlist-toggle a#grid').empty().append('<i class="ci_icon-layout-grid3-alt"></i>');
        $('.woocommerce .gridlist-toggle a#list').empty().append('<i class="ci_icon-menu"></i>');
    });

    //Remove zoom from image thumbnails

    if ($('body').hasClass('single-product')) {
        if ($('.product').find('.images .thumbnails > a').hasClass('zoom')) {
            $('.product').find('.images .thumbnails > a').removeClass('zoom');
        }
    }

    // Input +- tweak

    $(function(a){
    a(".woocommerce-ordering").on("change", "select.orderby", function(){
        a(this).closest("form").submit();
    }),
    a("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />'), a("input.qty:not(.product-quantity input.qty)").each(function(){
        var b=parseFloat(a(this).attr("min"));b&&b>0&&parseFloat(a(this).val())<b&&a(this).val(b);
    }),
    a(document).on("click", ".plus, .minus", function(){
        var b=a(this).closest(".quantity").find(".qty"),
        c=parseFloat(b.val()),
        d=parseFloat(b.attr("max")),
        e=parseFloat(b.attr("min")),
        f=b.attr("step");c&&""!==c&&"NaN"!==c||(c=0),
        (""===d||"NaN"===d)&&(d=""),
        (""===e||"NaN"===e)&&(e=0),
        ("any"===f||""===f||void 0===f||"NaN"===parseFloat(f))&&(f=1),
        a(this).is(".plus")?b.val(d&&(d==c||c>d)?d:c+parseFloat(f)):e&&(e==c||e>c)?b.val(e):c>0&&b.val(c-parseFloat(f)),
        b.trigger("change");
        });
    });


});