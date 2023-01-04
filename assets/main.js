$("#switcherMap").on( 'click', () => {
    if ($('.inner').hasClass('left')){
        $('.inner').removeClass('left');
        $('.inner').animate({right: '0%'});  
    } else {
        $('.inner').addClass('left');
        $('.inner').animate({right: '50%'});    
    }
});
$("#openMap").on( 'click', () => {
    $('#map').addClass('top')
    $('#map').removeClass('under')
    $('#donut').removeClass('top')
    $('#donut').addClass('under')
});
$('.bootstrap-autocomplete.dropdown-menu').show();

$('.basicAutoSelect').autoComplete();
$('.basicAutoSelect').on('autocomplete.select', function (e,item) {
    window.location.href = 'parti/' + item.slug;
});


$('.page > p').wrap('<div class="paragraph"><div class="container"></div></div>');
$('.paragraph:odd').addClass('odd-paragraph');
$('.paragraph:even').addClass('even-paragraph');