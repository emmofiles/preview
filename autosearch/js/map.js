/* global document */


//Init Map Scripts
function radar_init_map_script(){
	var directory_path = '';
	var _data_list		 = data;
	console.log(_data_list.listing);
	var dir_latitude	 = '51.5001524';
	var dir_longitude	 = '-0.1262362';
	var dir_map_type	 = 'ROADMAP';
	var dir_close_marker		= directory_path+'images/close.png';
	var dir_cluster_marker		= directory_path+'images/cluster.png';
	var dir_map_marker			= directory_path+'images/marker.png';
	var dir_cluster_color		= '#000';
	var dir_zoom				= '12';
	var dir_map_scroll			= 'false';
	var gmap_norecod			= '';
	
	if( _data_list.status == 'found' ){
		var response_data	= _data_list.listing;
		var location_center = new google.maps.LatLng(response_data[0].latitude,response_data[0].longitude);
	} else{
		var location_center = new google.maps.LatLng(dir_latitude,dir_longitude);
	}

	if(dir_map_type == 'ROADMAP'){
		var map_id = google.maps.MapTypeId.ROADMAP;
	} else if(dir_map_type == 'SATELLITE'){
		var map_id = google.maps.MapTypeId.SATELLITE;
	} else if(dir_map_type == 'HYBRID'){
		var map_id = google.maps.MapTypeId.HYBRID;
	} else if(dir_map_type == 'TERRAIN'){
		var map_id = google.maps.MapTypeId.TERRAIN;
	} else {
		var map_id = google.maps.MapTypeId.ROADMAP;
	}

	var scrollwheel	= true;
	var lock		   = 'unlock';

	if( dir_map_scroll == 'false' ){
		scrollwheel	= false;
		lock		   = 'lock';
	}

	var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#373542"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#aeaeae"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#d4e4eb"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fef7f7"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#f7f7f7"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#fef7f7"}]}]

	var mapOptions = {
		zoom: parseInt(dir_zoom),
		maxZoom: 20,
		mapTypeId: map_id,
		scaleControl: true,
		scrollwheel: scrollwheel,
		disableDefaultUI: true,
		styles:styles
	}

	var map = new google.maps.Map(document.getElementById("tg-map"), mapOptions);
	var bounds = new google.maps.LatLngBounds();

	//Zoom In
	if(document.getElementById('doc-mapplus') ){ 
		google.maps.event.addDomListener(document.getElementById('doc-mapplus'), 'click', function () {
			var current= parseInt( map.getZoom(),10 );
			current++;
			if(current>20){
				current=20;
			}
			map.setZoom(current);
		});
	}

	//Zoom Out
	if(document.getElementById('doc-mapminus') ){ 
		google.maps.event.addDomListener(document.getElementById('doc-mapminus'), 'click', function () {
			var current= parseInt( map.getZoom(),10);
			current--;
			if(current<0){
				current=0;
			}
			map.setZoom(current);
		});
	}

	//Lock Map
	if( document.getElementById('doc-lock') ){ 
		google.maps.event.addDomListener(document.getElementById('doc-lock'), 'click', function () {
			if(lock == 'lock'){
				map.setOptions({ 
						scrollwheel: true,
						draggable: true 
					}
				);
				jQuery("#doc-lock").html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>');
				lock = 'unlock';
			}else if(lock == 'unlock'){
				map.setOptions({ 
						scrollwheel: false,
						draggable: false 
					}
				);
				jQuery("#doc-lock").html('<i class="fa fa-lock" aria-hidden="true"></i>');
				lock = 'lock';
			}
		});
	}
	if( _data_list.status == 'found' ){
		jQuery('#gmap-noresult').html('').hide(); //Hide No Result Div
		var markers = new Array();
		var info_windows = new Array();

		for (var i=0; i < response_data.length; i++) {
			markers[i] = new google.maps.Marker({
				position: new google.maps.LatLng(response_data[i].latitude,response_data[i].longitude),
				map: map,
				icon: response_data[i].marker,
				title: response_data[i].title,
				animation: google.maps.Animation.DROP,
				visible: true
			});
			bounds.extend(markers[i].getPosition());
			var boxText = document.createElement("div");
			boxText.className = 'directory-detail';
			
			var infobox_html = "";
			infobox_html += '<div class="tg-mapbox">';
			infobox_html += '<figure><img src="'+response_data[i].image+'" alt="'+response_data[i].title+'">';
			infobox_html += '<figcaption>';
			
			if(response_data[i].featured == 'yes'){
				infobox_html += '<span class="tg-featured">featured</span>';
			}
			
			infobox_html += '<h4><a href="'+response_data[i].url+'">'+response_data[i].title+'</a></h4>';
			infobox_html += '<address>'+response_data[i].location+'</address>';
			infobox_html += '<address>model:'+response_data[i].year+'</address>';
			infobox_html += '<address>milage:'+response_data[i].milage+'</address>';
			infobox_html += '<address>make:'+response_data[i].make+'</address>';
			infobox_html += '</figcaption>';
			infobox_html += '</figure>';
			infobox_html += '</div>';
			
			boxText.innerHTML = infobox_html;
			
			var myOptions = {
				content: boxText,
				disableAutoPan: true,
				maxWidth: 0,
				alignBottom: true,
				pixelOffset: new google.maps.Size( -130, -60 ),
				zIndex: null,
				closeBoxMargin: "0 0 -16px -16px",
				closeBoxURL: dir_close_marker,
				infoBoxClearance: new google.maps.Size( 1, 1 ),
				isHidden: false,
				pane: "floatPane",
				enableEventPropagation: false
			};
			var ib = new InfoBox( myOptions );
			attachInfoBoxToMarker( map, markers[i], ib );
		}
		map.fitBounds(bounds);
		/* Marker Clusters */
		var markerClustererOptions = {
			ignoreHidden: true,
			//maxZoom: 14,
			styles: [{
				textColor: dir_cluster_color,
				url: dir_cluster_marker,
				height: 30,
				width: 30
			}]
		};
		var markerClusterer = new MarkerClusterer( map, markers, markerClustererOptions );
	} else{
		map.fitBounds(bounds);
		jQuery('#gmap-noresult').html(gmap_norecod).show();
	}
}
//Assign Info window to marker
function attachInfoBoxToMarker( map, marker, infoBox ){
	google.maps.event.addListener( marker, 'click', function(){
		var scale = Math.pow( 2, map.getZoom() );
		var offsety = ( (100/scale) || 0 );
		var projection = map.getProjection();
		var markerPosition = marker.getPosition();
		var markerScreenPosition = projection.fromLatLngToPoint( markerPosition );
		var pointHalfScreenAbove = new google.maps.Point( markerScreenPosition.x, markerScreenPosition.y - offsety );
		var aboveMarkerLatLng = projection.fromPointToLatLng( pointHalfScreenAbove );
		map.setCenter( aboveMarkerLatLng );
		
		jQuery(".infoBox").hide();
		infoBox.open( map, marker );
		
	});
}