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
// HOMEPAGE
$("#switcherMap").on('click', function () {
  if ($('.inner').hasClass('left')) {
    $('.inner').removeClass('left');
    $('.inner').animate({
      right: '0%'
    });
    $('#map').removeClass('text-end');
    $('#map').addClass('text-center');
    $('#donut').addClass('text-start');
    $('#donut').removeClass('text-center');
  } else {
    $('.inner').addClass('left');
    $('.inner').animate({
      right: '50%'
    });
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
$('#showNonFederal').on('click', function () {
  $('.federal-hidden').toggle(500);
  $('#showNonFederal').fadeOut(500);
});
$('#showDisappeared').on('click', function () {
  $('.disappeared-hidden').toggle(500);
  $('#showDisappeared').fadeOut(500);
});

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
var _$$html;







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
apiParti.placeholder = (_$$html = $('#placeholderSelectParti').html()) !== null && _$$html !== void 0 ? _$$html : "Select a parti";
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
var apiElection = apiCall;
apiElection.ajax.url = '/api/elections';
apiElection.placeholder = "Select a election";
$('#selectElection').select2(apiElection);
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
  if ($($('#selectElection')[0]).val().length > 0) {
    parameters['idElection.id'] = $($('#selectElection')[0]).val();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-5f4fa7","vendors-node_modules_bootstrap-autocomplete_dist_latest_bootstrap-autocomplete_js-node_module-a1637a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1hdXRvY29tcGxldGUnO1xuaW1wb3J0ICdja2VkaXRvcjQnO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCAnLi9tYWluJztcbmltcG9ydCAnLi90YWJsZSc7XG4iLCIvLyBIT01FUEFHRVxuJChcIiNzd2l0Y2hlck1hcFwiKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICgkKCcuaW5uZXInKS5oYXNDbGFzcygnbGVmdCcpKXtcbiAgICAgICAgJCgnLmlubmVyJykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICcwJSd9KTtcbiAgICAgICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWVuZCcpO1xuICAgICAgICAkKCcjbWFwJykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgICAgICQoJyNkb251dCcpLmFkZENsYXNzKCd0ZXh0LXN0YXJ0Jyk7XG4gICAgICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWNlbnRlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5pbm5lcicpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICQoJy5pbm5lcicpLmFuaW1hdGUoe3JpZ2h0OiAnNTAlJ30pOyAgICBcbiAgICAgICAgJCgnI2RvbnV0JykucmVtb3ZlQ2xhc3MoJ3RleHQtc3RhcnQnKTtcbiAgICAgICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgICAgICQoJyNtYXAnKS5hZGRDbGFzcygndGV4dC1lbmQnKTtcbiAgICAgICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWNlbnRlcicpO1xuICAgIH1cbn0pO1xuXG4vL1NFQVJDSCBQQVJUSVxuJCgnLnBhcnRpLXNlYXJjaCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3BhcnRpLycgKyAkKHRoaXMpLnZhbCgpO1xufSk7XG5cbi8vIFBBR0VcbiQoJy5wYWdlID4gcCcpLndyYXAoJzxkaXYgY2xhc3M9XCJwYXJhZ3JhcGhcIj48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PC9kaXY+PC9kaXY+Jyk7XG4kKCcucGFyYWdyYXBoOm9kZCcpLmFkZENsYXNzKCdvZGQtcGFyYWdyYXBoJyk7XG4kKCcucGFyYWdyYXBoOmV2ZW4nKS5hZGRDbGFzcygnZXZlbi1wYXJhZ3JhcGgnKTtcblxuLy8gUEFSVElTXG4kKCcjc2hvd05vbkZlZGVyYWwnKS5vbignY2xpY2snLCgpID0+e1xuICAgICQoJy5mZWRlcmFsLWhpZGRlbicpLnRvZ2dsZSg1MDApO1xuICAgICQoJyNzaG93Tm9uRmVkZXJhbCcpLmZhZGVPdXQoNTAwKTtcbn0pXG4kKCcjc2hvd0Rpc2FwcGVhcmVkJykub24oJ2NsaWNrJywoKSA9PntcbiAgICAkKCcuZGlzYXBwZWFyZWQtaGlkZGVuJykudG9nZ2xlKDUwMCk7XG4gICAgJCgnI3Nob3dEaXNhcHBlYXJlZCcpLmZhZGVPdXQoNTAwKTtcbn0pIiwiXG5pbXBvcnQgJ3RhYmxlZXhwb3J0LmpxdWVyeS5wbHVnaW4nO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUvZGlzdC9ib290c3RyYXAtdGFibGUubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2V4dGVuc2lvbnMvZXhwb3J0L2Jvb3RzdHJhcC10YWJsZS1leHBvcnQnO1xuXG4kKFwiLmZpbHRlclNlbGVjdFwiKS5zZWxlY3QyKHtcbiAgICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxufSk7XG4kKCcuZmlsdGVyU2VsZWN0Jykub24oJ2NoYW5nZScscmVmcmVzaFRhYmxlKVxuXG5sZXQgYXBpQ2FsbCA9IHtcbiAgICBhamF4OiB7XG4gICAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAzMCxcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmFtcy50ZXJtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBkYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtb3JlOiBkYXRhW1wiaHlkcmE6dmlld1wiXVtcImh5ZHJhOmxhc3RcIl0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBhcGlQYXJ0aSA9IGFwaUNhbGw7XG5hcGlQYXJ0aS5hamF4LnVybCA9ICcvYXBpL3BhcnRpcyc7XG5hcGlQYXJ0aS5wbGFjZWhvbGRlciA9ICQoJyNwbGFjZWhvbGRlclNlbGVjdFBhcnRpJykuaHRtbCgpID8/IFwiU2VsZWN0IGEgcGFydGlcIjtcbiQoJyNzZWxlY3RQYXJ0aScpLnNlbGVjdDIoYXBpUGFydGkpO1xuXG5sZXQgYXBpUmVnaW9uID0gYXBpQ2FsbDtcbmFwaVJlZ2lvbi5hamF4LnVybCA9ICcvYXBpL3JlZ2lvbnMnO1xuYXBpUmVnaW9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSByZWdpb25cIjtcbiQoJyNzZWxlY3RSZWdpb24nKS5zZWxlY3QyKGFwaVJlZ2lvbik7XG5cbmxldCBhcGlQcm92aW5jZSA9IGFwaUNhbGw7XG5hcGlQcm92aW5jZS5hamF4LnVybCA9ICcvYXBpL3Byb3ZpbmNlcyc7XG5hcGlQcm92aW5jZS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcHJvdmluY2VcIjtcbiQoJyNzZWxlY3RQcm92aW5jZScpLnNlbGVjdDIoYXBpUHJvdmluY2UpO1xuXG5sZXQgYXBpQXJyb25kaXNzZW1lbnQgPSBhcGlDYWxsO1xuYXBpQXJyb25kaXNzZW1lbnQuYWpheC51cmwgPSAnL2FwaS9hcnJvbmRpc3NlbWVudHMnO1xuYXBpQXJyb25kaXNzZW1lbnQucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGFycm9uZGlzc2VtZW50XCI7XG4kKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKS5zZWxlY3QyKGFwaUFycm9uZGlzc2VtZW50KTtcblxubGV0IGFwaUNhbnRvbiA9IGFwaUNhbGw7XG5hcGlDYW50b24uYWpheC51cmwgPSAnL2FwaS9jYW50b25zJztcbmFwaUNhbnRvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY2FudG9uXCI7XG4kKCcjc2VsZWN0Q2FudG9uJykuc2VsZWN0MihhcGlDYW50b24pO1xuXG5sZXQgYXBpQ29tbXVuZSA9IGFwaUNhbGw7XG5hcGlDb21tdW5lLmFqYXgudXJsID0gJy9hcGkvY29tbXVuZXMnO1xuYXBpQ29tbXVuZS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY29tbXVuZVwiO1xuJCgnI3NlbGVjdENvbW11bmUnKS5zZWxlY3QyKGFwaUNvbW11bmUpO1xuXG5sZXQgYXBpRWxlY3Rpb24gPSBhcGlDYWxsO1xuYXBpRWxlY3Rpb24uYWpheC51cmwgPSAnL2FwaS9lbGVjdGlvbnMnO1xuYXBpRWxlY3Rpb24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGVsZWN0aW9uXCI7XG4kKCcjc2VsZWN0RWxlY3Rpb24nKS5zZWxlY3QyKGFwaUVsZWN0aW9uKTtcblxuZnVuY3Rpb24gcmVmcmVzaFRhYmxlKCl7XG4gICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKVxufVxud2luZG93LnF1ZXJ5UGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKCdxdWVyeVBhcmFtcycsIHBhcmFtcylcbiAgICByZXR1cm4gcGFyYW1zO1xufVxuXG53aW5kb3cuYWpheFJlcXVlc3QgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmRhdGEubGltaXQpIHtcbiAgICAgICAgcGFyYW1ldGVycy5pdGVtc1BlclBhZ2UgPSBwYXJhbXMuZGF0YS5saW1pdDtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdlID0gcGFyYW1zLmRhdGEub2Zmc2V0IC8gcGFyYW1zLmRhdGEubGltaXQgKyAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZGF0YS5zb3J0KSB7XG4gICAgICAgIHBhcmFtZXRlcnNbJ29yZGVyWycgKyBwYXJhbXMuZGF0YS5zb3J0ICsgJ10nXSA9IHBhcmFtcy5kYXRhLm9yZGVyO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UGFydGknKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUGFydHkuaWQnXSA9ICQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UmVnaW9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFJlZ2lvbi5pZCddID0gJCgkKCcjc2VsZWN0UmVnaW9uJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UHJvdmluY2UnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUHJvdmluY2UuaWQnXSA9ICQoJCgnI3NlbGVjdFByb3ZpbmNlJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQXJyb25kaXNzZW1lbnQuaWQnXSA9ICQoJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50JylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0Q2FudG9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZENhbnRvbi5pZCddID0gJCgkKCcjc2VsZWN0Q2FudG9uJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDb21tdW5lLmlkJ10gPSAkKCQoJyNzZWxlY3RDb21tdW5lJylbMF0pLnZhbCgpO1xuICAgIH1cblxuICAgIGlmICgkKCQoJyNzZWxlY3RFbGVjdGlvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRFbGVjdGlvbi5pZCddID0gJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9ICcvYXBpL3Jlc3VsdGF0cyc7XG4gICAgY29uc29sZS5sb2cocGFyYW1ldGVycywgJC5wYXJhbShwYXJhbWV0ZXJzKSk7XG4gICAgJC5nZXQodXJsICsgJz8nICsgJC5wYXJhbShwYXJhbWV0ZXJzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXNbJ2h5ZHJhOm1lbWJlciddO1xuICAgICAgICByZXN1bHQudG90YWwgPSByZXNbJ2h5ZHJhOnRvdGFsSXRlbXMnXTtcbiAgICAgICAgcGFyYW1zLnN1Y2Nlc3MocmVzdWx0KVxuICAgIH0pXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhbmltYXRlIiwicmlnaHQiLCJhZGRDbGFzcyIsImUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ2YWwiLCJ3cmFwIiwidG9nZ2xlIiwiZmFkZU91dCIsInNlbGVjdDIiLCJ0aGVtZSIsInJlZnJlc2hUYWJsZSIsImFwaUNhbGwiLCJhamF4IiwiZGVsYXkiLCJkYXRhIiwicGFyYW1zIiwicXVlcnkiLCJpdGVtc1BlclBhZ2UiLCJwYWdlIiwibmFtZSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJwYWdpbmF0aW9uIiwibW9yZSIsInVuZGVmaW5lZCIsImFwaVBhcnRpIiwidXJsIiwicGxhY2Vob2xkZXIiLCJodG1sIiwiYXBpUmVnaW9uIiwiYXBpUHJvdmluY2UiLCJhcGlBcnJvbmRpc3NlbWVudCIsImFwaUNhbnRvbiIsImFwaUNvbW11bmUiLCJhcGlFbGVjdGlvbiIsImJvb3RzdHJhcFRhYmxlIiwicXVlcnlQYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiYWpheFJlcXVlc3QiLCJwYXJhbWV0ZXJzIiwibGltaXQiLCJvZmZzZXQiLCJzb3J0Iiwib3JkZXIiLCJsZW5ndGgiLCJwYXJhbSIsImdldCIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9