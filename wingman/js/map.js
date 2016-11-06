jQuery(document).ready(function() {
    jQuery(window).load(function() {
        mk_google_maps();
    });
});
    
function mk_google_maps() {
    jQuery('.az-gmaps').each(function() {
        var $this = jQuery(this),
        	$id 	= $this.attr('id');
      	var $styles = [

          	{
		        stylers: [
					{ hue: '#ff1a00' },
					{ invert_lightness: true },
					{ saturation: -100  },
        			{ lightness: 33 },
        			{ gamma: 0.5 }
		        ]
			},{
        		featureType: 'water',
        		elementType: 'geometry',
        		stylers: [
        			{ color: '#2D333C' }
        		]
    	    }
    	];
        
        var map;

        function initialize()
        {            
            var bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                zoom: 14,
                panControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                draggable: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId['ROADMAP'],
                styles: $styles
            };

          	map = new google.maps.Map(document.getElementById($id), mapOptions);
          	// map.setTilt(45);

          	             
            var position = new google.maps.LatLng(-32.511733, 115.754414);
            bounds.extend(position);

            var marker = new google.maps.Marker({
              	position: position,
                map: map,
                icon: 'images/Location-32.png'
            });

            var html= "<div class='map-info' style='width:360px'>"+
	                    "<div class='logo-map'><img src='images/logo.png' alt=''/></div>"+
	                    "<div class='text-center group-share'>"+
	                        "<ul class='social'>"+
	                            "<li><a href='#'><i class='fa fa-twitter'></i></a></li>"+
	                            "<li><a href='#'><i class='fa fa-facebook'></i></a></li>"+
	                            "<li><a href='#'><i class='fa fa-pinterest'></i></a></li>"+
	                            "<li><a href='#'><i class='fa fa-rss'></i></a></li>"+
	                            "<li><a href='#'><i class='fa fa-heart'></i></a></li>"+
	                        "</ul>"+
	                    "</div>"+
	                    "<div class='item-info'>81 Gordon Rd, Mandurah WA 6210</div>"+
	                    "<div class='item-info'><a href='mailto:tuanna.design@gmail.com'>tuanna.design@gmail.com</a></div>"+
	                    "<div class='item-info'>(00) 123 456 789</div>"+
	                   "</div>";

	        var infowindow = new google.maps.InfoWindow({
			    content: html,
			    maxWidth: 360
			 });

            google.maps.event.addListener(marker, 'click', (function(marker) {
                return function() {
                	infowindow.open(map, marker);
              }
            })(marker));

           

			google.maps.event.addListener(infowindow, 'domready', function() {
				var iwOuter = $('.gm-style-iw');
            	var iwBackground = iwOuter.prev();
            	// Remove the background shadow DIV
			    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

			    // Remove the white background DIV
			    iwBackground.children(':nth-child(4)').css({'display' : 'none'});
				
				// Moves the infowindow 55px to the right.
			    iwOuter.parent().parent().css({left: '30px'});

			    // Moves the shadow of the arrow 76px to the left margin.
			    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 170px !important;'});

			    // Moves the arrow 76px to the left margin.
			    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 170px !important;'});

			    // Changes the desired tail shadow color.
			    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});
			    
			    // Reference to the div that groups the close button elements.
			    var iwCloseBtn = iwOuter.next();

			    // Apply the desired effect to the close button
			    iwCloseBtn.css({opacity: '1', right: '60px', top: '20px',});
			});

            map.fitBounds(bounds);

          
          var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
            this.setZoom(14);
            google.maps.event.removeListener(boundsListener);
          });                          
        }
        
        initialize();
        
        function googleMapsResize() {                          
          initialize();
        } 

	});
}