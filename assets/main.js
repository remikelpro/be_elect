// HOMEPAGE
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

//SEARCH PARTI
$('.parti-search').on('change', function (e) {
    window.location.href = 'parti/' + $(this).val();
});

// PAGE
$('.page > p').wrap('<div class="paragraph"><div class="container"></div></div>');
$('.paragraph:odd').addClass('odd-paragraph');
$('.paragraph:even').addClass('even-paragraph');

// PARTIS
$('#showNonFederal').on('click',() =>{
    $('.federal-hidden').toggle(500);
    $('#showNonFederal').fadeOut(500);
})
$('#showDisappeared').on('click',() =>{
    $('.disappeared-hidden').toggle(500);
    $('#showDisappeared').fadeOut(500);
})