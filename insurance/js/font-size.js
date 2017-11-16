$(document).ready(function() { 
	"use strict";
		  $('#incfont').click(function(){    
				curSize= parseInt($('.font-increase').css('font-size')) + 2;
		  if(curSize<=28)
				$('.font-increase').css('font-size', curSize);
				});  
		  $('#decfont').click(function(){    
				curSize= parseInt($('.font-increase').css('font-size')) - 2;
		  if(curSize>=12)
				$('.font-increase').css('font-size', curSize);
		  }); 
 });