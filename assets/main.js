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

// ELECTION
let visibleCount = 5;
const $rows = $(".election-row");
const $button = $("#show-more");

function updateDisplay() {
  const showMoreText = $button.data("show-more");
  const showLessText = $button.data("show-less");

  $rows.each(function (index) {
    $(this).toggleClass("d-none", index >= visibleCount);
  });

  if (visibleCount >= $rows.length) {
    $button.text(showLessText).removeClass("btn-secondary").addClass("btn-primary");
  } else {
    $button.text(showMoreText).removeClass("btn-primary").addClass("btn-secondary");
  }
}

$button.on("click", function () {
  if (visibleCount >= $rows.length) {
    visibleCount = 5;
  } else {
    visibleCount += 5;
  }

  updateDisplay();
});

updateDisplay();
