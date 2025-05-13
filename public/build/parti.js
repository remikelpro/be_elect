"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["parti"],{

/***/ "./assets/parti.js":
/*!*************************!*\
  !*** ./assets/parti.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tableexport_jquery_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tableexport.jquery.plugin */ "./node_modules/tableexport.jquery.plugin/tableExport.min.js");
/* harmony import */ var tableexport_jquery_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tableexport_jquery_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-table */ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js");
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_table_dist_extensions_export_bootstrap_table_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-table/dist/extensions/export/bootstrap-table-export */ "./node_modules/bootstrap-table/dist/extensions/export/bootstrap-table-export.js");
/* harmony import */ var bootstrap_table_dist_extensions_export_bootstrap_table_export__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_table_dist_extensions_export_bootstrap_table_export__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






$(".filterSelect").select2({
  theme: "bootstrap-5"
});
$(".filterSelect").on("change", refreshTable);
function refreshTable() {
  $("#table").bootstrapTable("refresh");
}
window.queryParams = function (params) {
  return params;
};
window.ajaxRequest = function (params) {
  var parameters = {};
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
    var result = res["hydra:member"];
    result.total = res["hydra:totalItems"];
    params.success(result);
  });
};
$("#show-more-program").on("click", function () {
  $(".resource-program.hidden").each(function (index) {
    $(this).delay(index * 200).fadeIn(300, function () {
      $(this).removeClass("d-none");
    });
  });
  $(this).hide();
});
$("#show-more-status").on("click", function () {
  $(".resource-status.hidden").each(function (index) {
    $(this).delay(index * 200).fadeIn(300, function () {
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

var config = {
  type: "bar",
  options: {
    scales: {
      x: {
        min: dataset[0].year
      }
    }
  },
  data: {
    labels: dataset.map(function (item) {
      return item.year;
    }),
    datasets: [{
      label: labelBarChart,
      data: dataset.map(function (item) {
        return item.number;
      }),
      backgroundColor: "#a4d0fa",
      borderColor: "#004c93",
      borderWidth: 1
    }]
  },
  responsive: true
};
var barChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_5__["default"](document.getElementById("membersChart").getContext("2d"), config);
window.addEventListener("before", function () {
  barChart.resize(500, 500);
});
window.addEventListener("afterprint", function () {
  barChart.resize();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-a257e2","vendors-node_modules_chart_js_auto_auto_js","vendors-node_modules_bootstrap-table_dist_bootstrap-table_min_js-node_modules_bootstrap-table-51d94c"], () => (__webpack_exec__("./assets/parti.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BCLENBQUMsQ0FBQztNQUNGQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsV0FBVyxFQUFFLFNBQVM7TUFDdEJDLFdBQVcsRUFBRTtJQUNmLENBQUM7RUFFTCxDQUFDO0VBQ0RDLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFRCxJQUFJQyxRQUFRLEdBQUcsSUFBSTNELHFEQUFLLENBQ3RCNEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDeER0QixNQUFNLENBQ1A7QUFFRGpDLE1BQU0sQ0FBQ3dELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3RDSixRQUFRLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUNGekQsTUFBTSxDQUFDd0QsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07RUFDMUNKLFFBQVEsQ0FBQ0ssTUFBTSxFQUFFO0FBQ25CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9wYXJ0aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWJsZWV4cG9ydC5qcXVlcnkucGx1Z2luXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC10YWJsZVwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAtdGFibGUvZGlzdC9leHRlbnNpb25zL2V4cG9ydC9ib290c3RyYXAtdGFibGUtZXhwb3J0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5cclxuJChcIi5maWx0ZXJTZWxlY3RcIikuc2VsZWN0Mih7XHJcbiAgdGhlbWU6IFwiYm9vdHN0cmFwLTVcIixcclxufSk7XHJcbiQoXCIuZmlsdGVyU2VsZWN0XCIpLm9uKFwiY2hhbmdlXCIsIHJlZnJlc2hUYWJsZSk7XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoVGFibGUoKSB7XHJcbiAgJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZShcInJlZnJlc2hcIik7XHJcbn1cclxud2luZG93LnF1ZXJ5UGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gIHJldHVybiBwYXJhbXM7XHJcbn07XHJcblxyXG53aW5kb3cuYWpheFJlcXVlc3QgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcclxuICBpZiAocGFyYW1zLmRhdGEubGltaXQpIHtcclxuICAgIHBhcmFtZXRlcnMuaXRlbXNQZXJQYWdlID0gcGFyYW1zLmRhdGEubGltaXQ7XHJcbiAgICBwYXJhbWV0ZXJzLnBhZ2UgPSBwYXJhbXMuZGF0YS5vZmZzZXQgLyBwYXJhbXMuZGF0YS5saW1pdCArIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmFtZXRlcnMucGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuICBpZiAocGFyYW1zLmRhdGEuc29ydCkge1xyXG4gICAgcGFyYW1ldGVyc1tcIm9yZGVyW1wiICsgcGFyYW1zLmRhdGEuc29ydCArIFwiXVwiXSA9IHBhcmFtcy5kYXRhLm9yZGVyO1xyXG4gIH1cclxuICBwYXJhbWV0ZXJzW1wicGFydGkuaWRcIl0gPSAkKFwiI3BhcnRpSWRcIikudmFsKCk7XHJcblxyXG4gIHZhciB1cmwgPSBcIi9hcGkvcmVzdWx0YXRzXCI7XHJcblxyXG4gICQuZ2V0KHVybCArIFwiP1wiICsgJC5wYXJhbShwYXJhbWV0ZXJzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gcmVzW1wiaHlkcmE6bWVtYmVyXCJdO1xyXG4gICAgcmVzdWx0LnRvdGFsID0gcmVzW1wiaHlkcmE6dG90YWxJdGVtc1wiXTtcclxuICAgIHBhcmFtcy5zdWNjZXNzKHJlc3VsdCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4kKFwiI3Nob3ctbW9yZS1wcm9ncmFtXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoXCIucmVzb3VyY2UtcHJvZ3JhbS5oaWRkZW5cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICQodGhpcylcclxuICAgICAgLmRlbGF5KGluZGV4ICogMjAwKVxyXG4gICAgICAuZmFkZUluKDMwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG4gICQodGhpcykuaGlkZSgpO1xyXG59KTtcclxuXHJcbiQoXCIjc2hvdy1tb3JlLXN0YXR1c1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLnJlc291cmNlLXN0YXR1cy5oaWRkZW5cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICQodGhpcylcclxuICAgICAgLmRlbGF5KGluZGV4ICogMjAwKVxyXG4gICAgICAuZmFkZUluKDMwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG4gICQodGhpcykuaGlkZSgpO1xyXG59KTtcclxuXHJcbiQoXCIucGRmLWxpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBwZGZVcmwgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICQoXCIjcGRmSWZyYW1lXCIpLmF0dHIoXCJzcmNcIiwgcGRmVXJsKTsgLy8gRMOpZmluaXQgbCdVUkwgZGUgbCdpZnJhbWUgw6AgbCdVUkwgZHUgUERGXHJcbiAgJChcIiNwZGZNb2RhbFwiKS5tb2RhbChcInNob3dcIik7IC8vIEFmZmljaGUgbGEgbW9kYWxlXHJcbn0pO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHR5cGU6IFwiYmFyXCIsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICBtaW46IGRhdGFzZXRbMF0ueWVhcixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBsYWJlbHM6IGRhdGFzZXQubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnllYXI7XHJcbiAgICB9KSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogbGFiZWxCYXJDaGFydCxcclxuICAgICAgICBkYXRhOiBkYXRhc2V0Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0ubnVtYmVyO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYTRkMGZhXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwNGM5M1wiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHJlc3BvbnNpdmU6IHRydWUsXHJcbn07XHJcblxyXG5sZXQgYmFyQ2hhcnQgPSBuZXcgQ2hhcnQoXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1iZXJzQ2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gIGNvbmZpZ1xyXG4pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVcIiwgKCkgPT4ge1xyXG4gIGJhckNoYXJ0LnJlc2l6ZSg1MDAsIDUwMCk7XHJcbn0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFmdGVycHJpbnRcIiwgKCkgPT4ge1xyXG4gIGJhckNoYXJ0LnJlc2l6ZSgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiJCIsInNlbGVjdDIiLCJ0aGVtZSIsIm9uIiwicmVmcmVzaFRhYmxlIiwiYm9vdHN0cmFwVGFibGUiLCJ3aW5kb3ciLCJxdWVyeVBhcmFtcyIsInBhcmFtcyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImRhdGEiLCJsaW1pdCIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJvZmZzZXQiLCJwYWdpbmF0aW9uIiwic29ydCIsIm9yZGVyIiwidmFsIiwidXJsIiwiZ2V0IiwicGFyYW0iLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIiwiZWFjaCIsImluZGV4IiwiZGVsYXkiLCJmYWRlSW4iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGRmVXJsIiwiYXR0ciIsIm1vZGFsIiwiY29uZmlnIiwidHlwZSIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ4IiwibWluIiwiZGF0YXNldCIsInllYXIiLCJsYWJlbHMiLCJtYXAiLCJpdGVtIiwiZGF0YXNldHMiLCJsYWJlbCIsImxhYmVsQmFyQ2hhcnQiLCJudW1iZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwicmVzcG9uc2l2ZSIsImJhckNoYXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==