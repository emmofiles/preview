
 //------- MAGNIFICENT POPUP ---//

$(document).ready(function() {

"use strict";

  $('.image-modal').magnificPopup({

    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'

  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
   e.preventDefault();
   $.magnificPopup.close();
  });


  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });


//------- SITE LOADER ---//

jQuery(".spinner").fadeOut();
jQuery(".loading-mask").delay(400).fadeOut("slow");


//---------MENU CHANGES BLACK ----//

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 700 ) {
        $(".header-fixed").addClass("header-fixed-black");
    } else {
        $(".header-fixed").removeClass("header-fixed-black");
    }
});





/*---- NAV MENU ---- */


$('.site-menu').on('click', function() {
  $(this).toggleClass('triggered');
  $('.sidebar-menu').addClass('sidebar-open');
  $('.page-wrapper').addClass('page-wrapper-side');
});

$('.menu-close').on('click', function() {
  $('.sidebar-menu').removeClass('sidebar-open');
  $('.page-wrapper').removeClass('page-wrapper-side');
});

$('.smenu li a').on('click', function() {
  $('.sidebar-menu').removeClass('sidebar-open');
  $('.page-wrapper').removeClass('page-wrapper-side');
});

$('#page').on('click', function() {
  $('.sidebar-menu').removeClass('sidebar-open');
  $('.page-wrapper').removeClass('page-wrapper-side');
});


/*-- GOGGLE MAP
   –––––––––––––––––––––––––––––––––––––––––––––––––– --*/

           // When the window has finished loading create our google map below
           google.maps.event.addDomListener(window, 'load', init);

           function init() {
               // Basic options for a simple Google Map
               // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
               var mapOptions = {
                   // How zoomed in you want the map to start at (always required)
                   zoom: 11,

                   // The latitude and longitude to center the map (always required)
                   center: new google.maps.LatLng(40.6700, -73.9400), // New York

                   // How you would like to style the map.
                   // This is where you would paste any style found on Snazzy Maps.
                   styles:
                   [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
               };

               // Get the HTML DOM element that will contain your map
               // We are using a div with id="map" seen below in the <body>
               var mapElement = document.getElementById('map');

               // Create the Google Map using our element and options defined above
               var map = new google.maps.Map(mapElement, mapOptions);

               // Let's also add a marker while we're at it
               var marker = new google.maps.Marker({
                   position: new google.maps.LatLng(40.6700, -73.9400),
                   map: map,
                   title: 'Snazzy!'
               });
           }

//------- JQUERY ISOTOPE ---//


// external js: isotope.pkgd.js, classie.js

// ----- getText helper ----- //

var textProp = document.documentElement.textContent !== undefined ? 'textContent' : 'innerText';

function getText( elem ) {
  return elem[ textProp ];
}


  // init Isotope for Blog
$('#isoBlog').isotope({
    itemSelector: '.isoBlog',
    gutter: 10
  });

  // init Isotope for Portfolio with Filters
  var iso = new Isotope( '#isotopeGrid', {
    itemSelector: '.itemIso',
    gutter: 0
  });


  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = getText( itemElem.querySelector('.number') );
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = getText( itemElem.querySelector('.name') );
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  var filtersElem = document.querySelector('.filters');
  eventie.bind( filtersElem, 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, '.filter' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.filters-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }



function radioButtonGroup( buttonGroup ) {
  eventie.bind( buttonGroup, 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, '.filter' ) ) {
      return;
    }
    classie.remove( buttonGroup.querySelector('.is-checked'), 'is-checked' );
    classie.add( event.target, 'is-checked' );
  });
}


});


