$("#switcherMap").on( 'click', () => {
    if ($('.inner').hasClass('left')){
        $('.inner').removeClass('left');
        $('.inner').animate({right: '0%'});
        $('#map').removeClass('text-end');
        $('#map').addClass('text-center');
        $('#donut').addClass('text-start');
        $('#donut').removeClass('text-center');
    } else {
        $('.inner').addClass('left');
        $('.inner').animate({right: '50%'});    
        $('#donut').removeClass('text-start');
        $('#donut').addClass('text-center');
        $('#map').addClass('text-end');
        $('#map').removeClass('text-center');
    }
});

$('.parti-search').on('change', function (e) {
    window.location.href = 'parti/' + $(this).val();
});


$('.page > p').wrap('<div class="paragraph"><div class="container"></div></div>');
$('.paragraph:odd').addClass('odd-paragraph');
$('.paragraph:even').addClass('even-paragraph');