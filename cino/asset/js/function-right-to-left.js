$(document).ready(function(){
	'use trick';
	$('.click-active').on('click',function(){
		$('.logo-top-home1').css('order','3');
		$('.menu-center-home1').css('order','2');
		$('.icon-main').css('order','1').css('text-align','left');
		$('.disable-active').css('display','inline');
		$('.click-active').css('display','none');
	});
	$('.disable-active').on('click',function(){
		$('.logo-top-home1').css('order','1');
		$('.menu-center-home1').css('order','2');
		$('.icon-main').css('order','3').css('text-align','right');
		$('.disable-active').css('display','none');
		$('.click-active').css('display','inline');
	});
});