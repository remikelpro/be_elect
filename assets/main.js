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