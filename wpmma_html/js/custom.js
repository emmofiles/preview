jQuery(function () {

		// Disable scrollme for mobile
		scrollme.init_if = function() { return( $( window ).width() > 768 ); }

		// Hero slider
		$('.carousel').carousel({
		  interval: 5000,
		  keyboard: true
		})

		// Homepage classes carousel
		$('.slick-slider').slick({
		    infinite: true,
			slidesToShow: 4,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true,
			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

		// Instructors carousel
		$('.three.instructors').slick({
		    infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

		// Testimonial arousel
		$('.testimonials').slick({
		    infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true
		});

		// Instructors carousel
		$('.instructors').slick({
		    infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true
		});

		// Hero slider dynamic height
		$(window).on("resize", function () {
			var hero = $('.hero').outerHeight();
			$("body").css('padding-top', hero);
		}).resize();

		// Add class to tabs
		$('#tabs ul li a:contains("Sat")').addClass('weekend');
		$('#tabs ul li a:contains("sat")').addClass('weekend');
		$('#tabs ul li a:contains("Sun")').addClass('weekend');
		$('#tabs ul li a:contains("sun")').addClass('weekend');

		$('#tabs.timetable').parent().parent().parent().parent().addClass('tab-wrap')

		// Hide / show more classes
		size_li = $(".classes .class, .blog-posts article").size();
	    x=8;

	    $('.classes .class:lt('+x+'), .blog-posts article:lt('+x+')').show();

	    $('.showMore').click(function () {
	        x= (x+4 <= size_li) ? x+4 : size_li;
	        $('.classes .class:lt('+x+'), .blog-posts article:lt('+x+')').show();
	        return false;
	    });

	    $('.showLess').click(function () {
	        x=(x-4<0) ? 3 : x-4;
	        $('.classes .class, .blog-posts article').not(':lt('+x+')').hide();
	        return false;
	    });

	    if ($('.venobox').length ) {
		 
		    $('.venobox').venobox({
		        bgcolor: '#27292d',
		        titleattr: 'data-title',
		        infinigall: true
		    });
		}

		// Tabs
		$( "#tabs" ).tabs();

	    // Equal height icon blocks
	    $('.icon-block, .small-blog, .large-footer .container .row > div, #tabs.main .indv-tab div').matchHeight();

		// Burger icon
		$('.menu').click(function(){
	        $(this).find('#nav_icon').toggleClass('open');
	        $('.nav').toggleClass('opennav');
	        $('body').toggleClass('open');
	        $('html').toggleClass('open');
	    });

	    // Dropdown menu
	    $('.child').siblings('a').addClass('ion-chevron-down');
		$( '.nav li:has(ul)' ).doubleTapToGo();

	    // Google maps
        if ($("#map").length > 0){
        	
 			$("#map").gmap3({                        
                map:{
                    options:{
                        zoom: 14,
                        center: new google.maps.LatLng(25.759421, -80.233970),
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "style1"]
                        },
                        styles: [
						    {
						        "featureType": "all",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "saturation": 36
						            },
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "50"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "labels.text.stroke",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "0"
						            }
						        ]
						    },
						    {
						        "featureType": "all",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "20"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "0"
						            },
						            {
						                "weight": 1.2
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "8"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "saturation": "-100"
						            },
						            {
						                "lightness": "-54"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "lightness": "0"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "8"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "saturation": "-89"
						            },
						            {
						                "lightness": "-55"
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "10"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "10"
						            },
						            {
						                "weight": 0.2
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "12"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "0"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "5"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "saturation": "-100"
						            },
						            {
						                "lightness": "-51"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "color": "#24262a"
						            },
						            {
						                "lightness": "0"
						            }
						        ]
						    }
						],
                        streetViewControl: false,
                        draggable: true,
                        scrollwheel: false,
                    }
                }            
                ,
                marker:{
                    latLng:[25.759421, -80.233970],
                    options:{
                        icon: new google.maps.MarkerImage("images/pin.svg", new google.maps.Size(225, 75, "px", "px")),
                    }
                }

            });

        }


});