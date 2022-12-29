(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var bootstrap_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-autocomplete */ "./node_modules/bootstrap-autocomplete/dist/latest/bootstrap-autocomplete.js");
/* harmony import */ var bootstrap_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ckeditor4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4 */ "./node_modules/ckeditor4/ckeditor.js");
/* harmony import */ var ckeditor4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ckeditor4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main */ "./assets/main.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ "./assets/table.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)








/***/ }),

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$("#closeMap").on('click', function () {
  $('#map').removeClass('col-lg-9');
  $('#map').addClass('col-lg-3');
  $('#donut').addClass('col-lg-9');
  $('#donut').removeClass('col-lg-3');
});
$("#openMap").on('click', function () {
  $('#map').addClass('col-lg-9');
  $('#map').removeClass('col-lg-3');
  $('#donut').removeClass('col-lg-9');
  $('#donut').addClass('col-lg-3');
});
$('.bootstrap-autocomplete.dropdown-menu').show();
$('.basicAutoSelect').autoComplete();
$('.basicAutoSelect').on('autocomplete.select', function (e, item) {
  window.location.href = 'parti/' + item.slug;
});
$('.page > p').wrap('<div class="paragraph"><div class="container"></div></div>');
$('.paragraph:odd').addClass('odd-paragraph');
$('.paragraph:even').addClass('even-paragraph');

/***/ }),

/***/ "./assets/table.js":
/*!*************************!*\
  !*** ./assets/table.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tableexport_jquery_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tableexport.jquery.plugin */ "./node_modules/tableexport.jquery.plugin/tableExport.min.js");
/* harmony import */ var tableexport_jquery_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tableexport_jquery_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_table_dist_bootstrap_table_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-table/dist/bootstrap-table.min.css */ "./node_modules/bootstrap-table/dist/bootstrap-table.min.css");
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-table */ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js");
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_table_dist_extensions_export_bootstrap_table_export__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-table/dist/extensions/export/bootstrap-table-export */ "./node_modules/bootstrap-table/dist/extensions/export/bootstrap-table-export.js");
/* harmony import */ var bootstrap_table_dist_extensions_export_bootstrap_table_export__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_table_dist_extensions_export_bootstrap_table_export__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







$("select").select2({
  theme: "bootstrap-5"
});
$('#selectParti').select2({
  placeholder: "Select a parti",
  ajax: {
    url: '/api/partis',
    delay: 1000,
    data: function data(params) {
      var query = {
        itemsPerPage: 30,
        page: params.page || 1,
        name: params.term
      };
      return query;
    },
    processResults: function processResults(data) {
      var results = data["hydra:member"].map(function (item) {
        return {
          "id": item.id,
          "text": item.name
        };
      });
      return {
        results: results,
        pagination: {
          more: data["hydra:view"]["hydra:last"] !== undefined
        }
      };
    }
  }
});
$('#selectParti').on('change', function (e) {
  $('#table').bootstrapTable('refresh');
});
window.queryParams = function (params) {
  console.log('queryParams', params);
  return params;
};
window.ajaxRequest = function (params) {
  console.log('ajax', params);
  var parameters = {};
  if (params.data.limit) {
    parameters.itemsPerPage = params.data.limit;
    parameters.page = params.data.offset / params.data.limit + 1;
  } else {
    parameters.pagination = false;
  }
  if (params.data.sort) {
    parameters['order[' + params.data.sort + ']'] = params.data.order;
  }
  if ($($('#selectParti')[0]).val().length > 0) {
    parameters['idParty.id'] = $($('#selectParti')[0]).val();
  }
  var url = '/api/resultats';
  console.log(parameters, $.param(parameters));
  $.get(url + '?' + $.param(parameters)).then(function (res) {
    var result = res['hydra:member'];
    result.total = res['hydra:totalItems'];
    params.success(result);
  });
};

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js","vendors-node_modules_bootstrap-autocomplete_dist_latest_bootstrap-autocomplete_js-node_module-f644b2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMyQjtBQUNSO0FBQ2E7QUFDYjtBQUNGO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ2JoQkEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxFQUFFLENBQUUsT0FBTyxFQUFFLFlBQU07RUFDOUJELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFVBQVUsQ0FBQztFQUNqQ0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRyxRQUFRLENBQUMsVUFBVSxDQUFDO0VBQzlCSCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNHLFFBQVEsQ0FBQyxVQUFVLENBQUM7RUFDaENILENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFVBQVUsQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFDRkYsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxFQUFFLENBQUUsT0FBTyxFQUFFLFlBQU07RUFDN0JELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0csUUFBUSxDQUFDLFVBQVUsQ0FBQztFQUM5QkgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRSxXQUFXLENBQUMsVUFBVSxDQUFDO0VBQ2pDRixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNFLFdBQVcsQ0FBQyxVQUFVLENBQUM7RUFDbkNGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0csUUFBUSxDQUFDLFVBQVUsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFDRkgsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDLENBQUNJLElBQUksRUFBRTtBQUVqREosQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNLLFlBQVksRUFBRTtBQUNwQ0wsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVSyxDQUFDLEVBQUNDLElBQUksRUFBRTtFQUM5REMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksSUFBSTtBQUMvQyxDQUFDLENBQUM7QUFHRlgsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDWSxJQUFJLENBQUMsNERBQTRELENBQUM7QUFDakZaLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQzdDSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0csUUFBUSxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCWjtBQUNtQjtBQUM3QjtBQUM4QztBQUV2RUgsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDYSxPQUFPLENBQUM7RUFDaEJDLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQztBQUNGZCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNhLE9BQU8sQ0FBQztFQUN0QkUsV0FBVyxFQUFFLGdCQUFnQjtFQUM3QkMsSUFBSSxFQUFFO0lBQ0ZDLEdBQUcsRUFBRSxhQUFhO0lBQ2xCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxJQUFJLEVBQUUsY0FBVUMsTUFBTSxFQUFFO01BQ3BCLElBQUlDLEtBQUssR0FBRztRQUNSQyxZQUFZLEVBQUUsRUFBRTtRQUNoQkMsSUFBSSxFQUFFSCxNQUFNLENBQUNHLElBQUksSUFBSSxDQUFDO1FBQ3RCQyxJQUFJLEVBQUVKLE1BQU0sQ0FBQ0s7TUFDakIsQ0FBQztNQUNELE9BQU9KLEtBQUs7SUFDaEIsQ0FBQztJQUNESyxjQUFjLEVBQUUsd0JBQVVQLElBQUksRUFBRTtNQUM1QixJQUFJUSxPQUFPLEdBQUdSLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLFVBQUNyQixJQUFJLEVBQUs7UUFDN0MsT0FBTztVQUNILElBQUksRUFBRUEsSUFBSSxDQUFDc0IsRUFBRTtVQUNiLE1BQU0sRUFBRXRCLElBQUksQ0FBQ2lCO1FBQ2pCLENBQUM7TUFDTCxDQUFDLENBQUM7TUFDRixPQUFPO1FBQ0hHLE9BQU8sRUFBUEEsT0FBTztRQUNQRyxVQUFVLEVBQUU7VUFDUkMsSUFBSSxFQUFFWixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUthO1FBQy9DO01BQ0osQ0FBQztJQUNMO0VBQ0o7QUFDSixDQUFDLENBQUM7QUFDRmhDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBQyxVQUFDSyxDQUFDLEVBQUc7RUFDL0JOLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2lDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUZ6QixNQUFNLENBQUMwQixXQUFXLEdBQUcsVUFBVWQsTUFBTSxFQUFFO0VBQ25DZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVoQixNQUFNLENBQUM7RUFDbEMsT0FBT0EsTUFBTTtBQUNqQixDQUFDO0FBRURaLE1BQU0sQ0FBQzZCLFdBQVcsR0FBRyxVQUFVakIsTUFBTSxFQUFFO0VBQ25DZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVoQixNQUFNLENBQUM7RUFDM0IsSUFBSWtCLFVBQVUsR0FBRyxDQUFDLENBQUM7RUFDbkIsSUFBSWxCLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO0lBQ25CRCxVQUFVLENBQUNoQixZQUFZLEdBQUdGLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDb0IsS0FBSztJQUMzQ0QsVUFBVSxDQUFDZixJQUFJLEdBQUdILE1BQU0sQ0FBQ0QsSUFBSSxDQUFDcUIsTUFBTSxHQUFHcEIsTUFBTSxDQUFDRCxJQUFJLENBQUNvQixLQUFLLEdBQUcsQ0FBQztFQUNoRSxDQUFDLE1BQ0k7SUFDREQsVUFBVSxDQUFDUixVQUFVLEdBQUcsS0FBSztFQUNqQztFQUNBLElBQUlWLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDc0IsSUFBSSxFQUFFO0lBQ2xCSCxVQUFVLENBQUMsUUFBUSxHQUFHbEIsTUFBTSxDQUFDRCxJQUFJLENBQUNzQixJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUdyQixNQUFNLENBQUNELElBQUksQ0FBQ3VCLEtBQUs7RUFDckU7RUFDQSxJQUFJMUMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzJDLEdBQUcsRUFBRSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ3pDTixVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUd0QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMkMsR0FBRyxFQUFFO0VBQzVEO0VBRUEsSUFBSTFCLEdBQUcsR0FBRyxnQkFBZ0I7RUFDMUJrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsVUFBVSxFQUFFdEMsQ0FBQyxDQUFDNkMsS0FBSyxDQUFDUCxVQUFVLENBQUMsQ0FBQztFQUM1Q3RDLENBQUMsQ0FBQzhDLEdBQUcsQ0FBQzdCLEdBQUcsR0FBRyxHQUFHLEdBQUdqQixDQUFDLENBQUM2QyxLQUFLLENBQUNQLFVBQVUsQ0FBQyxDQUFDLENBQUNTLElBQUksQ0FBQyxVQUFVQyxHQUFHLEVBQUU7SUFDdkQsSUFBSUMsTUFBTSxHQUFHRCxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLEtBQUssR0FBR0YsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3RDNUIsTUFBTSxDQUFDK0IsT0FBTyxDQUFDRixNQUFNLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1hdXRvY29tcGxldGUnO1xuaW1wb3J0ICdja2VkaXRvcjQnO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCAnLi9tYWluJztcbmltcG9ydCAnLi90YWJsZSc7XG4iLCIkKFwiI2Nsb3NlTWFwXCIpLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCdjb2wtbGctOScpXG4gICAgJCgnI21hcCcpLmFkZENsYXNzKCdjb2wtbGctMycpXG4gICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ2NvbC1sZy05JylcbiAgICAkKCcjZG9udXQnKS5yZW1vdmVDbGFzcygnY29sLWxnLTMnKVxufSk7XG4kKFwiI29wZW5NYXBcIikub24oICdjbGljaycsICgpID0+IHtcbiAgICAkKCcjbWFwJykuYWRkQ2xhc3MoJ2NvbC1sZy05JylcbiAgICAkKCcjbWFwJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zJylcbiAgICAkKCcjZG9udXQnKS5yZW1vdmVDbGFzcygnY29sLWxnLTknKVxuICAgICQoJyNkb251dCcpLmFkZENsYXNzKCdjb2wtbGctMycpXG59KTtcbiQoJy5ib290c3RyYXAtYXV0b2NvbXBsZXRlLmRyb3Bkb3duLW1lbnUnKS5zaG93KCk7XG5cbiQoJy5iYXNpY0F1dG9TZWxlY3QnKS5hdXRvQ29tcGxldGUoKTtcbiQoJy5iYXNpY0F1dG9TZWxlY3QnKS5vbignYXV0b2NvbXBsZXRlLnNlbGVjdCcsIGZ1bmN0aW9uIChlLGl0ZW0pIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdwYXJ0aS8nICsgaXRlbS5zbHVnO1xufSk7XG5cblxuJCgnLnBhZ2UgPiBwJykud3JhcCgnPGRpdiBjbGFzcz1cInBhcmFncmFwaFwiPjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj48L2Rpdj48L2Rpdj4nKTtcbiQoJy5wYXJhZ3JhcGg6b2RkJykuYWRkQ2xhc3MoJ29kZC1wYXJhZ3JhcGgnKTtcbiQoJy5wYXJhZ3JhcGg6ZXZlbicpLmFkZENsYXNzKCdldmVuLXBhcmFncmFwaCcpOyIsIlxuaW1wb3J0ICd0YWJsZWV4cG9ydC5qcXVlcnkucGx1Z2luJztcbmltcG9ydCAnYm9vdHN0cmFwLXRhYmxlL2Rpc3QvYm9vdHN0cmFwLXRhYmxlLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUnO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUvZGlzdC9leHRlbnNpb25zL2V4cG9ydC9ib290c3RyYXAtdGFibGUtZXhwb3J0JztcblxuJChcInNlbGVjdFwiKS5zZWxlY3QyKHtcbiAgICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxufSk7XG4kKCcjc2VsZWN0UGFydGknKS5zZWxlY3QyKHtcbiAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgYSBwYXJ0aVwiLFxuICAgIGFqYXg6IHtcbiAgICAgICAgdXJsOiAnL2FwaS9wYXJ0aXMnLFxuICAgICAgICBkZWxheTogMTAwMCxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogMzAsXG4gICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXJhbXMudGVybVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gZGF0YVtcImh5ZHJhOm1lbWJlclwiXS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBpdGVtLm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbW9yZTogZGF0YVtcImh5ZHJhOnZpZXdcIl1bXCJoeWRyYTpsYXN0XCJdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufSk7XG4kKCcjc2VsZWN0UGFydGknKS5vbignY2hhbmdlJywoZSk9PntcbiAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpXG59KVxuXG53aW5kb3cucXVlcnlQYXJhbXMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5UGFyYW1zJywgcGFyYW1zKVxuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbndpbmRvdy5hamF4UmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygnYWpheCcsIHBhcmFtcyk7XG4gICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmRhdGEubGltaXQpIHtcbiAgICAgICAgcGFyYW1ldGVycy5pdGVtc1BlclBhZ2UgPSBwYXJhbXMuZGF0YS5saW1pdDtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdlID0gcGFyYW1zLmRhdGEub2Zmc2V0IC8gcGFyYW1zLmRhdGEubGltaXQgKyAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZGF0YS5zb3J0KSB7XG4gICAgICAgIHBhcmFtZXRlcnNbJ29yZGVyWycgKyBwYXJhbXMuZGF0YS5zb3J0ICsgJ10nXSA9IHBhcmFtcy5kYXRhLm9yZGVyO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UGFydGknKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUGFydHkuaWQnXSA9ICQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSAnL2FwaS9yZXN1bHRhdHMnO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtZXRlcnMsICQucGFyYW0ocGFyYW1ldGVycykpO1xuICAgICQuZ2V0KHVybCArICc/JyArICQucGFyYW0ocGFyYW1ldGVycykpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgcmVzdWx0LnRvdGFsID0gcmVzWydoeWRyYTp0b3RhbEl0ZW1zJ107XG4gICAgICAgIHBhcmFtcy5zdWNjZXNzKHJlc3VsdClcbiAgICB9KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwib24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2hvdyIsImF1dG9Db21wbGV0ZSIsImUiLCJpdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2x1ZyIsIndyYXAiLCJzZWxlY3QyIiwidGhlbWUiLCJwbGFjZWhvbGRlciIsImFqYXgiLCJ1cmwiLCJkZWxheSIsImRhdGEiLCJwYXJhbXMiLCJxdWVyeSIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJuYW1lIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicmVzdWx0cyIsIm1hcCIsImlkIiwicGFnaW5hdGlvbiIsIm1vcmUiLCJ1bmRlZmluZWQiLCJib290c3RyYXBUYWJsZSIsInF1ZXJ5UGFyYW1zIiwiY29uc29sZSIsImxvZyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydCIsIm9yZGVyIiwidmFsIiwibGVuZ3RoIiwicGFyYW0iLCJnZXQiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==