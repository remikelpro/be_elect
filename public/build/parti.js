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
      label: "Nombre d'adhérents",
      data: dataset.map(function (item) {
        return item.number;
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQixDQUFDO0lBQ0gsQ0FBQztFQUVMLENBQUM7RUFDREMsVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUVELElBQUlDLFFBQVEsR0FBRyxJQUFJdkQscURBQUssQ0FDdEJ3RCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUN4RGxCLE1BQU0sQ0FDUDtBQUVEakMsTUFBTSxDQUFDb0QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDdENKLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBQ0ZyRCxNQUFNLENBQUNvRCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtFQUMxQ0osUUFBUSxDQUFDSyxNQUFNLEVBQUU7QUFDbkIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhcnRpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInRhYmxlZXhwb3J0LmpxdWVyeS5wbHVnaW5cIjtcbmltcG9ydCBcImJvb3RzdHJhcC10YWJsZVwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwLXRhYmxlL2Rpc3QvZXh0ZW5zaW9ucy9leHBvcnQvYm9vdHN0cmFwLXRhYmxlLWV4cG9ydFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5cbiQoXCIuZmlsdGVyU2VsZWN0XCIpLnNlbGVjdDIoe1xuICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxufSk7XG4kKFwiLmZpbHRlclNlbGVjdFwiKS5vbihcImNoYW5nZVwiLCByZWZyZXNoVGFibGUpO1xuXG5mdW5jdGlvbiByZWZyZXNoVGFibGUoKSB7XG4gICQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoXCJyZWZyZXNoXCIpO1xufVxud2luZG93LnF1ZXJ5UGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICByZXR1cm4gcGFyYW1zO1xufTtcblxud2luZG93LmFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBsZXQgcGFyYW1ldGVycyA9IHt9O1xuICBpZiAocGFyYW1zLmRhdGEubGltaXQpIHtcbiAgICBwYXJhbWV0ZXJzLml0ZW1zUGVyUGFnZSA9IHBhcmFtcy5kYXRhLmxpbWl0O1xuICAgIHBhcmFtZXRlcnMucGFnZSA9IHBhcmFtcy5kYXRhLm9mZnNldCAvIHBhcmFtcy5kYXRhLmxpbWl0ICsgMTtcbiAgfSBlbHNlIHtcbiAgICBwYXJhbWV0ZXJzLnBhZ2luYXRpb24gPSBmYWxzZTtcbiAgfVxuICBpZiAocGFyYW1zLmRhdGEuc29ydCkge1xuICAgIHBhcmFtZXRlcnNbXCJvcmRlcltcIiArIHBhcmFtcy5kYXRhLnNvcnQgKyBcIl1cIl0gPSBwYXJhbXMuZGF0YS5vcmRlcjtcbiAgfVxuICBwYXJhbWV0ZXJzW1wicGFydGkuaWRcIl0gPSAkKFwiI3BhcnRpSWRcIikudmFsKCk7XG5cbiAgdmFyIHVybCA9IFwiL2FwaS9yZXN1bHRhdHNcIjtcblxuICAkLmdldCh1cmwgKyBcIj9cIiArICQucGFyYW0ocGFyYW1ldGVycykpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIGxldCByZXN1bHQgPSByZXNbXCJoeWRyYTptZW1iZXJcIl07XG4gICAgcmVzdWx0LnRvdGFsID0gcmVzW1wiaHlkcmE6dG90YWxJdGVtc1wiXTtcbiAgICBwYXJhbXMuc3VjY2VzcyhyZXN1bHQpO1xuICB9KTtcbn07XG5cbiQoXCIjc2hvdy1tb3JlLXByb2dyYW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIucmVzb3VyY2UtcHJvZ3JhbS5oaWRkZW5cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAkKHRoaXMpXG4gICAgICAuZGVsYXkoaW5kZXggKiAyMDApXG4gICAgICAuZmFkZUluKDMwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgfSk7XG4gIH0pO1xuICAkKHRoaXMpLmhpZGUoKTtcbn0pO1xuXG4kKFwiI3Nob3ctbW9yZS1zdGF0dXNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIucmVzb3VyY2Utc3RhdHVzLmhpZGRlblwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICQodGhpcylcbiAgICAgIC5kZWxheShpbmRleCAqIDIwMClcbiAgICAgIC5mYWRlSW4oMzAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICB9KTtcbiAgfSk7XG4gICQodGhpcykuaGlkZSgpO1xufSk7XG5cbiQoXCIucGRmLWxpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIHBkZlVybCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICQoXCIjcGRmSWZyYW1lXCIpLmF0dHIoXCJzcmNcIiwgcGRmVXJsKTsgLy8gRMOpZmluaXQgbCdVUkwgZGUgbCdpZnJhbWUgw6AgbCdVUkwgZHUgUERGXG4gICQoXCIjcGRmTW9kYWxcIikubW9kYWwoXCJzaG93XCIpOyAvLyBBZmZpY2hlIGxhIG1vZGFsZVxufSk7XG5cblxuY29uc3QgY29uZmlnID0ge1xuICB0eXBlOiBcImJhclwiLFxuICBvcHRpb25zOiB7XG4gICAgc2NhbGVzOiB7XG4gICAgICB4OiB7XG4gICAgICAgIG1pbjpkYXRhc2V0WzBdLnllYXJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IGRhdGFzZXQubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS55ZWFyO1xuICAgIH0pLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIk5vbWJyZSBkJ2FkaMOpcmVudHNcIixcbiAgICAgICAgZGF0YTogZGF0YXNldC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5udW1iZXI7XG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICByZXNwb25zaXZlOiB0cnVlLFxufTtcblxubGV0IGJhckNoYXJ0ID0gbmV3IENoYXJ0KFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbWJlcnNDaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIiksXG4gIGNvbmZpZ1xuKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVcIiwgKCkgPT4ge1xuICBiYXJDaGFydC5yZXNpemUoNTAwLCA1MDApO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFmdGVycHJpbnRcIiwgKCkgPT4ge1xuICBiYXJDaGFydC5yZXNpemUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiJCIsInNlbGVjdDIiLCJ0aGVtZSIsIm9uIiwicmVmcmVzaFRhYmxlIiwiYm9vdHN0cmFwVGFibGUiLCJ3aW5kb3ciLCJxdWVyeVBhcmFtcyIsInBhcmFtcyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImRhdGEiLCJsaW1pdCIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJvZmZzZXQiLCJwYWdpbmF0aW9uIiwic29ydCIsIm9yZGVyIiwidmFsIiwidXJsIiwiZ2V0IiwicGFyYW0iLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIiwiZWFjaCIsImluZGV4IiwiZGVsYXkiLCJmYWRlSW4iLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGRmVXJsIiwiYXR0ciIsIm1vZGFsIiwiY29uZmlnIiwidHlwZSIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ4IiwibWluIiwiZGF0YXNldCIsInllYXIiLCJsYWJlbHMiLCJtYXAiLCJpdGVtIiwiZGF0YXNldHMiLCJsYWJlbCIsIm51bWJlciIsInJlc3BvbnNpdmUiLCJiYXJDaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=