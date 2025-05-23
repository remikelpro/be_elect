// PAGE
$(".page > p").wrap('<div class="paragraph"><div class="container"></div></div>');
$(".paragraph:odd").addClass("odd-paragraph");
$(".paragraph:even").addClass("even-paragraph");

// PARTIS
$("#showNonFederal").on("click", () => {
  $(".federal-hidden").toggle(500);
  $("#showNonFederal").fadeOut(500);
});
$("#showDisappeared").on("click", () => {
  $(".disappeared-hidden").toggle(500);
  $("#showDisappeared").fadeOut(500);
});

// TYPE ELECTION

const $btn = $("#btn-show-more");
const showMoreText = $btn.data("show-more");
const showLessText = $btn.data("show-less");
const $collapseEl = $("#election-more");
const $firstTable = $(".history > table");

$collapseEl.on("show.bs.collapse", function () {
  $firstTable.css("margin-bottom", 0);
  $btn.text(showLessText);
});

$collapseEl.on("hide.bs.collapse", function () {
  $firstTable.css("margin-bottom", "1rem");
  $btn.text(showMoreText);
});
