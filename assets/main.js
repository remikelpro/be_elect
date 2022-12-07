$("#closeMap").on( 'click', () => {
    $('#map').removeClass('col-lg-9')
    $('#map').addClass('col-lg-3')
    $('#donut').addClass('col-lg-9')
    $('#donut').removeClass('col-lg-3')
});
$("#openMap").on( 'click', () => {
    $('#map').addClass('col-lg-9')
    $('#map').removeClass('col-lg-3')
    $('#donut').removeClass('col-lg-9')
    $('#donut').addClass('col-lg-3')
});
$('.bootstrap-autocomplete.dropdown-menu').show();

$('.basicAutoSelect').autoComplete();
$('.basicAutoSelect').on('autocomplete.select', function (e,item) {
    window.location.href = 'parti/' + item.slug;
});