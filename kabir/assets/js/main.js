/* ==========================
   Theme Author: ilmosys
   Theme URL: http://ilmosys.com/html/kabir/
   Version: 1.0 
=============================*/
(function($) {
"use strict"; 
$("ul.menu-lists li .scrollTo").click(function() {
     $('.modal').modal('hide');
     return false;
 });
 })(jQuery);
 
/* ==========================
	 PRE-LOADER
=============================*/
(function($) {
"use strict"; 	
	$(window).load(function() {
		// will fade loading animation
		$("#object").delay(600).fadeOut(300);
		// will fade loading background					
		$("#loading").delay(1000).fadeOut(500);
	})  
})(jQuery);	
/* ==========================
    MAGNIFICENT POPUP
=============================*/
(function($) {
"use strict"; 
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

          $(document).hover('.popup-modal-dismiss', function (e) {
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
		
	$(".lightbox").magnificPopup();
	
	});	
	
})(jQuery);
	
/* ==========================
    JQUERY ISOTOPE 
=============================*/

$(window).load(function() {
    "use strict";


docReady( function() {
  // init Isotope
  var iso = new Isotope( '#isotopeGrid', {
    itemSelector: '.grid-item',
    gutter: 10
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

});

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

/* ==========================
	   SMOOTH-SCROLLING
=============================*/
	$(function() {
		"use strict"; 
		
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1500);
					return false;
				}
			}
		});

	});

})(jQuery);