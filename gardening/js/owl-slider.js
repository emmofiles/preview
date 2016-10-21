/*
  Project Name :Gardening
  Author Company : Ewebcraft
  Project Date: 06 January, 2016
  Author Website : http://www.ewebcraft.com
  Author Email : ewebcraft@gmail.com
*/

(function($) {
  "use strict";	   

   

    $("#sponsers-slider").owlCarousel({
          navigation : true,
          navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"],
          loop:true,
          autoplay:true,
          autoplayHoverPause:true,
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          stopOnHover: true,
          items : 4,
          dots: false,
          pagination:false,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
        });   
		
		 $("#womencarousel").owlCarousel({
		autoPlay : 5000,
		slideSpeed : 4000,
		items : 3,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [700,1],
		pagination : false
		
  		//navigation:true,
//  		navigationText: [
//   	 	"<i class='icon-chevron-left icon-white'><</i>",
//    	"<i class='icon-chevron-right icon-white'>></i>"
//    	],
	}); 
})(jQuery);
    

