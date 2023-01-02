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







$(".filterSelect").select2({
  theme: "bootstrap-5"
});
$('.filterSelect').on('change', refreshTable);
var apiCall = {
  ajax: {
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
      console.log(data);
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
};
var apiParti = apiCall;
apiParti.ajax.url = '/api/partis';
apiParti.placeholder = "Select a parti";
$('#selectParti').select2(apiParti);
var apiRegion = apiCall;
apiRegion.ajax.url = '/api/regions';
apiRegion.placeholder = "Select a region";
$('#selectRegion').select2(apiRegion);
var apiProvince = apiCall;
apiProvince.ajax.url = '/api/provinces';
apiProvince.placeholder = "Select a province";
$('#selectProvince').select2(apiProvince);
var apiArrondissement = apiCall;
apiArrondissement.ajax.url = '/api/arrondissements';
apiArrondissement.placeholder = "Select a arrondissement";
$('#selectArrondissement').select2(apiArrondissement);
var apiCanton = apiCall;
apiCanton.ajax.url = '/api/cantons';
apiCanton.placeholder = "Select a canton";
$('#selectCanton').select2(apiCanton);
var apiCommune = apiCall;
apiCommune.ajax.url = '/api/communes';
apiCommune.placeholder = "Select a commune";
$('#selectCommune').select2(apiCommune);
function refreshTable() {
  $('#table').bootstrapTable('refresh');
}
window.queryParams = function (params) {
  console.log('queryParams', params);
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
    parameters['order[' + params.data.sort + ']'] = params.data.order;
  }
  if ($($('#selectParti')[0]).val().length > 0) {
    parameters['idParty.id'] = $($('#selectParti')[0]).val();
  }
  if ($($('#selectRegion')[0]).val().length > 0) {
    parameters['idRegion.id'] = $($('#selectRegion')[0]).val();
  }
  if ($($('#selectProvince')[0]).val().length > 0) {
    parameters['idProvince.id'] = $($('#selectProvince')[0]).val();
  }
  if ($($('#selectArrondissement')[0]).val().length > 0) {
    parameters['idArrondissement.id'] = $($('#selectArrondissement')[0]).val();
  }
  if ($($('#selectCanton')[0]).val().length > 0) {
    parameters['idCanton.id'] = $($('#selectCanton')[0]).val();
  }
  if ($($('#selectCommune')[0]).val().length > 0) {
    parameters['idCommune.id'] = $($('#selectCommune')[0]).val();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJ2NrZWRpdG9yNCc7XG5pbXBvcnQgJ3NlbGVjdDInO1xuaW1wb3J0ICcuL21haW4nO1xuaW1wb3J0ICcuL3RhYmxlJztcbiIsIiQoXCIjY2xvc2VNYXBcIikub24oICdjbGljaycsICgpID0+IHtcbiAgICAkKCcjbWFwJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy05JylcbiAgICAkKCcjbWFwJykuYWRkQ2xhc3MoJ2NvbC1sZy0zJylcbiAgICAkKCcjZG9udXQnKS5hZGRDbGFzcygnY29sLWxnLTknKVxuICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCdjb2wtbGctMycpXG59KTtcbiQoXCIjb3Blbk1hcFwiKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgICQoJyNtYXAnKS5hZGRDbGFzcygnY29sLWxnLTknKVxuICAgICQoJyNtYXAnKS5yZW1vdmVDbGFzcygnY29sLWxnLTMnKVxuICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCdjb2wtbGctOScpXG4gICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ2NvbC1sZy0zJylcbn0pO1xuJCgnLmJvb3RzdHJhcC1hdXRvY29tcGxldGUuZHJvcGRvd24tbWVudScpLnNob3coKTtcblxuJCgnLmJhc2ljQXV0b1NlbGVjdCcpLmF1dG9Db21wbGV0ZSgpO1xuJCgnLmJhc2ljQXV0b1NlbGVjdCcpLm9uKCdhdXRvY29tcGxldGUuc2VsZWN0JywgZnVuY3Rpb24gKGUsaXRlbSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3BhcnRpLycgKyBpdGVtLnNsdWc7XG59KTtcblxuXG4kKCcucGFnZSA+IHAnKS53cmFwKCc8ZGl2IGNsYXNzPVwicGFyYWdyYXBoXCI+PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjwvZGl2PjwvZGl2PicpO1xuJCgnLnBhcmFncmFwaDpvZGQnKS5hZGRDbGFzcygnb2RkLXBhcmFncmFwaCcpO1xuJCgnLnBhcmFncmFwaDpldmVuJykuYWRkQ2xhc3MoJ2V2ZW4tcGFyYWdyYXBoJyk7IiwiXG5pbXBvcnQgJ3RhYmxlZXhwb3J0LmpxdWVyeS5wbHVnaW4nO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUvZGlzdC9ib290c3RyYXAtdGFibGUubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2V4dGVuc2lvbnMvZXhwb3J0L2Jvb3RzdHJhcC10YWJsZS1leHBvcnQnO1xuXG4kKFwiLmZpbHRlclNlbGVjdFwiKS5zZWxlY3QyKHtcbiAgICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxufSk7XG4kKCcuZmlsdGVyU2VsZWN0Jykub24oJ2NoYW5nZScscmVmcmVzaFRhYmxlKVxuXG5sZXQgYXBpQ2FsbCA9IHtcbiAgICBhamF4OiB7XG4gICAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAzMCxcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmFtcy50ZXJtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vcmU6IGRhdGFbXCJoeWRyYTp2aWV3XCJdW1wiaHlkcmE6bGFzdFwiXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGFwaVBhcnRpID0gYXBpQ2FsbDtcbmFwaVBhcnRpLmFqYXgudXJsID0gJy9hcGkvcGFydGlzJztcbmFwaVBhcnRpLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBwYXJ0aVwiO1xuJCgnI3NlbGVjdFBhcnRpJykuc2VsZWN0MihhcGlQYXJ0aSk7XG5cbmxldCBhcGlSZWdpb24gPSBhcGlDYWxsO1xuYXBpUmVnaW9uLmFqYXgudXJsID0gJy9hcGkvcmVnaW9ucyc7XG5hcGlSZWdpb24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIHJlZ2lvblwiO1xuJCgnI3NlbGVjdFJlZ2lvbicpLnNlbGVjdDIoYXBpUmVnaW9uKTtcblxubGV0IGFwaVByb3ZpbmNlID0gYXBpQ2FsbDtcbmFwaVByb3ZpbmNlLmFqYXgudXJsID0gJy9hcGkvcHJvdmluY2VzJztcbmFwaVByb3ZpbmNlLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBwcm92aW5jZVwiO1xuJCgnI3NlbGVjdFByb3ZpbmNlJykuc2VsZWN0MihhcGlQcm92aW5jZSk7XG5cbmxldCBhcGlBcnJvbmRpc3NlbWVudCA9IGFwaUNhbGw7XG5hcGlBcnJvbmRpc3NlbWVudC5hamF4LnVybCA9ICcvYXBpL2Fycm9uZGlzc2VtZW50cyc7XG5hcGlBcnJvbmRpc3NlbWVudC5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgYXJyb25kaXNzZW1lbnRcIjtcbiQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpLnNlbGVjdDIoYXBpQXJyb25kaXNzZW1lbnQpO1xuXG5sZXQgYXBpQ2FudG9uID0gYXBpQ2FsbDtcbmFwaUNhbnRvbi5hamF4LnVybCA9ICcvYXBpL2NhbnRvbnMnO1xuYXBpQ2FudG9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBjYW50b25cIjtcbiQoJyNzZWxlY3RDYW50b24nKS5zZWxlY3QyKGFwaUNhbnRvbik7XG5cbmxldCBhcGlDb21tdW5lID0gYXBpQ2FsbDtcbmFwaUNvbW11bmUuYWpheC51cmwgPSAnL2FwaS9jb21tdW5lcyc7XG5hcGlDb21tdW5lLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBjb21tdW5lXCI7XG4kKCcjc2VsZWN0Q29tbXVuZScpLnNlbGVjdDIoYXBpQ29tbXVuZSk7XG5cbmZ1bmN0aW9uIHJlZnJlc2hUYWJsZSgpe1xuICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJylcbn1cbndpbmRvdy5xdWVyeVBhcmFtcyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygncXVlcnlQYXJhbXMnLCBwYXJhbXMpXG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxud2luZG93LmFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCBwYXJhbWV0ZXJzID0ge307XG4gICAgaWYgKHBhcmFtcy5kYXRhLmxpbWl0KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuaXRlbXNQZXJQYWdlID0gcGFyYW1zLmRhdGEubGltaXQ7XG4gICAgICAgIHBhcmFtZXRlcnMucGFnZSA9IHBhcmFtcy5kYXRhLm9mZnNldCAvIHBhcmFtcy5kYXRhLmxpbWl0ICsgMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmFtZXRlcnMucGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmRhdGEuc29ydCkge1xuICAgICAgICBwYXJhbWV0ZXJzWydvcmRlclsnICsgcGFyYW1zLmRhdGEuc29ydCArICddJ10gPSBwYXJhbXMuZGF0YS5vcmRlcjtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFBhcnR5LmlkJ10gPSAkKCQoJyNzZWxlY3RQYXJ0aScpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRSZWdpb24uaWQnXSA9ICQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFByb3ZpbmNlJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFByb3ZpbmNlLmlkJ10gPSAkKCQoJyNzZWxlY3RQcm92aW5jZScpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50JylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZEFycm9uZGlzc2VtZW50LmlkJ10gPSAkKCQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDYW50b24uaWQnXSA9ICQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdENvbW11bmUnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQ29tbXVuZS5pZCddID0gJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gJy9hcGkvcmVzdWx0YXRzJztcbiAgICBjb25zb2xlLmxvZyhwYXJhbWV0ZXJzLCAkLnBhcmFtKHBhcmFtZXRlcnMpKTtcbiAgICAkLmdldCh1cmwgKyAnPycgKyAkLnBhcmFtKHBhcmFtZXRlcnMpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc1snaHlkcmE6bWVtYmVyJ107XG4gICAgICAgIHJlc3VsdC50b3RhbCA9IHJlc1snaHlkcmE6dG90YWxJdGVtcyddO1xuICAgICAgICBwYXJhbXMuc3VjY2VzcyhyZXN1bHQpXG4gICAgfSlcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNob3ciLCJhdXRvQ29tcGxldGUiLCJlIiwiaXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNsdWciLCJ3cmFwIiwic2VsZWN0MiIsInRoZW1lIiwicmVmcmVzaFRhYmxlIiwiYXBpQ2FsbCIsImFqYXgiLCJkZWxheSIsImRhdGEiLCJwYXJhbXMiLCJxdWVyeSIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJuYW1lIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJtYXAiLCJpZCIsInBhZ2luYXRpb24iLCJtb3JlIiwidW5kZWZpbmVkIiwiYXBpUGFydGkiLCJ1cmwiLCJwbGFjZWhvbGRlciIsImFwaVJlZ2lvbiIsImFwaVByb3ZpbmNlIiwiYXBpQXJyb25kaXNzZW1lbnQiLCJhcGlDYW50b24iLCJhcGlDb21tdW5lIiwiYm9vdHN0cmFwVGFibGUiLCJxdWVyeVBhcmFtcyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydCIsIm9yZGVyIiwidmFsIiwibGVuZ3RoIiwicGFyYW0iLCJnZXQiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==