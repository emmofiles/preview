	// RESPONSIVE MENU
	$(window).on('load', function() {
        $('#mobnav-btn').click(

            function() {
                $('.sf-menu').toggleClass("xactive");

            });

        $('.mobnav-subarrow').click(
            function() {
                $(this).parent().toggleClass("xpopdrop");

            });
	});

	jQuery(document).ready(function() {
		jQuery('ul.sf-menu').superfish({
			delay:       200,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			autoArrows:  false                            // disable generation of arrow mark-up
		});
	});

	// FULLWIDTH SEARCH
	$(".ss-trigger").click(function() {
		$(".ss-content").addClass("ss-content-act");
	});

	$(".ss-close").click(function() {
		$(".ss-content").removeClass("ss-content-act");
	});
