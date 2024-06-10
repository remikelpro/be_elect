import "tableexport.jquery.plugin";
import "bootstrap-table";
import "bootstrap-table/dist/extensions/export/bootstrap-table-export";
import Chart from "chart.js/auto";

$(".filterSelect").select2({
  theme: "bootstrap-5",
});
$(".filterSelect").on("change", refreshTable);

function refreshTable() {
  $("#table").bootstrapTable("refresh");
}
window.queryParams = function (params) {
  return params;
};

window.ajaxRequest = function (params) {
  let parameters = {};
  if (params.data.limit) {
    parameters.itemsPerPage = params.data.limit;
    parameters.page = params.data.offset / params.data.limit + 1;
  } else {
    parameters.pagination = false;
  }
  if (params.data.sort) {
    parameters["order[" + params.data.sort + "]"] = params.data.order;
  }
  parameters["parti.id"] = $("#partiId").val();

  var url = "/api/resultats";

  $.get(url + "?" + $.param(parameters)).then(function (res) {
    let result = res["hydra:member"];
    result.total = res["hydra:totalItems"];
    params.success(result);
  });
};

$("#show-more-program").on("click", function () {
  $(".resource-program.hidden").each(function (index) {
    $(this)
      .delay(index * 200)
      .fadeIn(300, function () {
        $(this).removeClass("d-none");
      });
  });
  $(this).hide();
});

$("#show-more-status").on("click", function () {
  $(".resource-status.hidden").each(function (index) {
    $(this)
      .delay(index * 200)
      .fadeIn(300, function () {
        $(this).removeClass("d-none");
      });
  });
  $(this).hide();
});

$(".pdf-link").on("click", function (event) {
  event.preventDefault();
  var pdfUrl = $(this).attr("href");
  $("#pdfIframe").attr("src", pdfUrl); // Définit l'URL de l'iframe à l'URL du PDF
  $("#pdfModal").modal("show"); // Affiche la modale
});


const config = {
  type: "bar",
  options: {
    scales: {
      x: {
        min:dataset[0].year
      }
    }
  },
  data: {
    labels: dataset.map(function (item) {
      return item.year;
    }),
    datasets: [
      {
        label: "Nombre d'adhérents",
        data: dataset.map(function (item) {
          return item.number;
        }),
      },
    ],
  },
  responsive: true,
};

let barChart = new Chart(
  document.getElementById("membersChart").getContext("2d"),
  config
);

window.addEventListener("before", () => {
  barChart.resize(500, 500);
});
window.addEventListener("afterprint", () => {
  barChart.resize();
});
