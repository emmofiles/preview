jQuery(function($){
    "use strict";

    var SLZ = window.SLZ || {};
    

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function(){
        $('.wrapper-journey').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            autoplay: false,
            speed: 700,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 381,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        });

        $('.slider-for.group1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav.group1'
        });
        $('.slider-nav.group1').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for.group1',
            arrows: false,
            infinite: true,
            // centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 381,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
            ]
        });
        $('.slider-for.group2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav.group2'
        });
        $('.slider-nav.group2').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for.group2',
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
            ]
        });
        $('.slider-for.group3').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav.group3'
        });
        $('.slider-nav.group3').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for.group3',
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        $('.btn-book-tour').click(function(event) {
            /* Act on the event */
            event.preventDefault();
            $(this).parents('.timeline-content').find('.timeline-book-block').toggleClass('show-book-block');
        });


        /*Google map*/
        var myLatLng = {lat: 13.8705583 - 0.0033, lng: 100.5976089 - 0.0055};
        var markerLatLng = {lat: 13.8705583, lng: 100.5976089};
        var customMapType = new google.maps.StyledMapType(
            [
                {
                    "featureType": "water",
                    "stylers": [
                        { "color": "#f0f3f6" }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",  
                    "stylers": [
                        { "color": "#adb3b7" }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                      { "hue": "#ededed" }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        { "color": "#c8cccf" }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        { "color": "#e6e6e6" }
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [
                        { "color": "#ffffff" }
                    ]
                },
                {
                    "elementType": "labels.text",
                    "stylers": [
                        { "weight": 0.1 },
                      { "color": "#6d6d71" }
                    ]
                }
            ], 
            {
                name: 'Custom Style'
        });
        var customMapTypeId = 'custom_style';

        var mapProp = {
            center: myLatLng,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            draggable: false,
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
            }
        };
        function initialize() {
            var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
            map.mapTypes.set(customMapTypeId, customMapType);
            map.setMapTypeId(customMapTypeId);
            var image = {
                url: 'assets/images/hotel-view/icon-location.png',
                // size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(40, 40)
            };
            var marker = new google.maps.Marker({
                position: markerLatLng,
                map: map,
                animation:google.maps.Animation.BOUNCE, 
                icon: image,
                title: 'expooler'
            });

            var contentString = '\
            <div class="info-beachmarker">\
                <p class="address">\
                    <i class="fa fa-map-marker"></i>\
                    333 Moo 10, Chert Wudthakas Road, Srikan, <br>Don Mueang, Bangkok, Thailand\
                </p>\
                <p class="phone">\
                    <i class="fa fa-phone"></i>\
                    910-740-6026\
                </p>\
                <p class="mail">\
                    <i class="fa fa-envelope-o"></i>\
                    <a href="mailto:domain@expooler.com">domain@expooler.com</a>\
                </p>\
            </div>';

            var infowindow = new google.maps.InfoWindow({
               content: contentString
            });

            marker.addListener('click', function() {
               // infowindow.open(map, marker);
               $('.btn-open-map').parents('.map-info').toggle(400);
               // $('#googleMap').css('pointer-events', 'none');
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

        $('.btn-open-map').click(function(event) {
            /* Act on the event */
            $(this).parents('.map-info').toggle(400);
            $('#googleMap').css('pointer-events', 'auto');
            if($(window).width() > 462) {
                mapProp = {
                    center: markerLatLng,
                    zoom:16,
                    mapTypeId:google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false,
                    disableDefaultUI: true,
                    mapTypeControlOptions: {
                      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
                    }
                };
            }
            else {
                mapProp = {
                    center: markerLatLng,
                    zoom:15,
                    mapTypeId:google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    mapTypeControlOptions: {
                      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
                    }
                };
            } 

            initialize();
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/
    
    $(document).ready(function(){
        SLZ.mainFunction();
    });
    
    /*=====  End of INIT FUNCTIONS  ======*/
});