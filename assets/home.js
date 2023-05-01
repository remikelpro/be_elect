
import './map';
import './search-parti';
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