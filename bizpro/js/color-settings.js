(function ($) {
    "use strict";

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });


    $('.default-color').on('click', function () {
        $('body').addClass('default-color').removeClass('allgreen allorange allblue allyellow');
        $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
    });

    $('.yellow-color').on('click', function () {
        $('body').addClass('allyellow').removeClass('allgreen allorange allblue default-color');
        $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
    });

    $('.green-color').on('click', function () {
        $('body').addClass('allgreen').removeClass('allorange allblue allyellow default-color');
        $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
    });


    $('.orange-color').on('click', function () {
        $('body').addClass('allorange').removeClass('allgreen allblue allyellow default-color');
        $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
    });


    $('.blue-color').on('click', function () {
        $('body').addClass('allblue').removeClass('allgreen allorange allyellow default-color');
        $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
    });


    $('.deepblue-color').on('click', function () {
        $('body').addClass('secondary-blue');
        $('.deepblue-color').addClass('actives');
        $('.black-color').removeClass('actives');
    });

    $('.black-color').on('click', function () {
        $('body').removeClass('secondary-blue');
        $('.black-color').addClass('actives');
        $('.deepblue-color').removeClass('actives');
    });



}(jQuery));