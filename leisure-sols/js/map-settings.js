// JavaScript Document
function initialize() {
  	var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: new google.maps.LatLng(31.5497, 74.3812),
      disableDefaultUI: true,
      scrollwheel: false,
      zoom: 16,
	panControl:true,
	zoomControl:true,
	mapTypeControl:false,
	scaleControl:false,
	streetViewControl:false,
	overviewMapControl:false,
	rotateControl:false,
	styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //Create map
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Create marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(31.5497, 74.3812),
      map: map,
      title: 'INOVATIVE TECHNOLOGIES.',
      icon: 'images/map-marker.png'
 	});

    //Map marker info
    var contentString = '<div id="map-info" style="z-index:99999l;">'+
      '<h4>INOVATIVE TECHNOLOGIES.</h4>'+
      '<p style="text-align:left; margin:0;"><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p>'+
      '</div>';

    //Add info to marker 
	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

    //Keep map centered
    google.maps.event.addDomListener(window, 'resize', function() {
    	var center = map.getCenter();
    	google.maps.event.trigger(map, "resize");
    	map.setCenter(center); 
	});
  }
  google.maps.event.addDomListener(window, 'load', initialize);