jQuery(function($) {
    "use strict";

    $(".customizer").addClass("active");

    var collapseTimer;
    collapseControls();
    function collapseControls(){
        collapseTimer=setInterval(function() {
            $('.customizer').removeClass("active");
            clearTimeout(collapseTimer);
        }, 3000);
    }

    $(".skinColorPickers > a").on("click",function (e) {
        e.preventDefault();
        var $this = $(this),
            targetCss = $this.attr("data-css");
        $("#skinColorChanger").attr("href",targetCss);
    });

    $(".customizerTrigger").on("click",function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("active");
    });
    $(".darkSkinBg").on("click",function (e) {
        e.preventDefault();
        $("body").addClass("theDarkSkin");
    });

    $(".lightSkinBg").on("click",function (e) {
        e.preventDefault();
        $("body").removeClass("theDarkSkin");
    });




});