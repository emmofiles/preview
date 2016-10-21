/*
  Project Name :Gardening
  Author Company : Ewebcraft
  Project Date: 06 January, 2016
  Author Website : http://www.ewebcraft.com
  Author Email : ewebcraft@gmail.com
*/

/*header fixed*/
$(document).ready(function() {
  
   "use strict";
  
   $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
  });

  /* Map */

     
         google.maps.event.addDomListener(window, 'load', initialize);

     /* Map */

});

 function initialize() {
	 
	  "use strict";
	 
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(51.508742,-0.120850),
	  zoom: 14,
	  scrollwheel: false,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
   /*********Start Map Pin code******/
	var marker = new google.maps.Marker({
	  map: map,
	  title:"Garden Theme",
	  
	  position: new google.maps.LatLng(51.508742,-0.120850)
	  
	});
	var infowindow = new google.maps.InfoWindow({
		content:"Garden at World 111-B City State, Country" 
	});
	google.maps.event.addListener(marker, "click", function(){
	  infowindow.open(map,marker);
	});
	/*********End Map Pin code******/
}