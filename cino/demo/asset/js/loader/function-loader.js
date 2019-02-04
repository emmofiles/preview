$(document).ready(function(){
	'use trick'
	var timer;	//timer for splash screen
//calling jPreLoader
	$('#wrapper').hide();
	$('body').jpreLoader({
		splashID: "#jSplash",
		loaderVPos: '50%',
		autoClose: true,
		
		splashFunction: function() {  
			//passing Splash Screen script to jPreLoader
			
			$('#jSplash').hide().fadeIn(100);
			
			timer = setInterval(function() {
				splashRotator();
			}, 2000);
		}
	}, function() {	//callback function
		clearInterval(timer);
		$('#footer')
		.animate({"bottom":0}, 500);
		$('#header')
		.animate({"top":0}, 800, function() {
			$('#wrapper').fadeIn(1000);
		});
	});
	//create splash screen animation
	function splashRotator(){
		var cur = $('#jSplash').children('.selected');
		var next = $(cur).next();
		
		if($(next).length != 0) {
			$(next).addClass('selected');
		} else {
			$('#jSplash').children('section:first-child').addClass('selected');
			next = $('#jSplash').children('section:first-child');
		}
			
		$(cur).removeClass('selected').fadeOut(800, function() {
			$(next).fadeIn(800);
		});
	}
});
