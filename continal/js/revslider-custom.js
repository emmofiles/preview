jQuery(document).ready(function () {
	'use strict'; // use strict mode

    $('#revolution-slider').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 549,
        hideThumbs: 10,
        fullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "",
        touchenabled: "on",
        navigationType: "none",
        onHoverStop: "off",
    });

    $('#revolution-slider-2').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 550,
        hideThumbs: false,
        fullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "",
        touchenabled: "on",
        navigationType:"none",
        onHoverStop: "on",
    });

    $('#revolution-slider4').revolution({
        delay: 9000,
        startwidth: 1170,
        hideThumbs: 10,
        fullWidth: "off",
        fullScreen: "on",
        fullScreenOffsetContainer: "",
        touchenabled: "on",
        navigationType: "none",
        onHoverStop: "off",
    });

    $('#revolution-slider5').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 549,
        hideThumbs: 10,
        fullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "",
        touchenabled: "on",
        navigationType: "none",
        onHoverStop: "off",
    });

});