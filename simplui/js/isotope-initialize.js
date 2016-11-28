$(window).load(function(){
  var $portfolio = $('#grid').imagesLoaded( function() {
        // images have loaded

          $('#grid').isotope({
              // options
              itemSelector: '.grid-item',
              masonry: {
              //columnWidth: 1,
               gutter: 3
          }
          });
        });


      var $optionSets = $('#filter'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('#filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $portfolio.isotope( options );
        }
        
        return false;
      });
        
});

