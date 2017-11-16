$('.navbar .dropdown').hover(function() {
		"use strict";
$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
}, function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp(400);
});
