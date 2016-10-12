var $container = $('#container').isotope({});
$('#mmfilters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});