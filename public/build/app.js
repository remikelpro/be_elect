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
$("#switcherMap").on('click', function () {
  if ($('.inner').hasClass('left')) {
    $('.inner').removeClass('left');
    $('.inner').animate({
      right: '0%'
    });
  } else {
    $('.inner').addClass('left');
    $('.inner').animate({
      right: '50%'
    });
  }
});
$("#openMap").on('click', function () {
  $('#map').addClass('top');
  $('#map').removeClass('under');
  $('#donut').removeClass('top');
  $('#donut').addClass('under');
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js","vendors-node_modules_bootstrap-autocomplete_dist_latest_bootstrap-autocomplete_js-node_module-f644b2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxDQUFDLGVBQWUsQ0FBQyxHQUFHbEQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDdUQsR0FBRyxFQUFFO0VBQ2xFO0VBRUEsSUFBSWhCLEdBQUcsR0FBRyxnQkFBZ0I7RUFDMUJULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbUIsVUFBVSxFQUFFbEQsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDUCxVQUFVLENBQUMsQ0FBQztFQUM1Q2xELENBQUMsQ0FBQzBELEdBQUcsQ0FBQ25CLEdBQUcsR0FBRyxHQUFHLEdBQUd2QyxDQUFDLENBQUN5RCxLQUFLLENBQUNQLFVBQVUsQ0FBQyxDQUFDLENBQUNTLElBQUksQ0FBQyxVQUFVQyxHQUFHLEVBQUU7SUFDdkQsSUFBSUMsTUFBTSxHQUFHRCxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLEtBQUssR0FBR0YsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3RDckMsTUFBTSxDQUFDd0MsT0FBTyxDQUFDRixNQUFNLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1hdXRvY29tcGxldGUnO1xuaW1wb3J0ICdja2VkaXRvcjQnO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCAnLi9tYWluJztcbmltcG9ydCAnLi90YWJsZSc7XG4iLCIkKFwiI3N3aXRjaGVyTWFwXCIpLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCQoJy5pbm5lcicpLmhhc0NsYXNzKCdsZWZ0Jykpe1xuICAgICAgICAkKCcuaW5uZXInKS5yZW1vdmVDbGFzcygnbGVmdCcpO1xuICAgICAgICAkKCcuaW5uZXInKS5hbmltYXRlKHtyaWdodDogJzAlJ30pOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmlubmVyJykuYWRkQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICc1MCUnfSk7ICAgIFxuICAgIH1cbn0pO1xuJChcIiNvcGVuTWFwXCIpLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgJCgnI21hcCcpLmFkZENsYXNzKCd0b3AnKVxuICAgICQoJyNtYXAnKS5yZW1vdmVDbGFzcygndW5kZXInKVxuICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCd0b3AnKVxuICAgICQoJyNkb251dCcpLmFkZENsYXNzKCd1bmRlcicpXG59KTtcbiQoJy5ib290c3RyYXAtYXV0b2NvbXBsZXRlLmRyb3Bkb3duLW1lbnUnKS5zaG93KCk7XG5cbiQoJy5iYXNpY0F1dG9TZWxlY3QnKS5hdXRvQ29tcGxldGUoKTtcbiQoJy5iYXNpY0F1dG9TZWxlY3QnKS5vbignYXV0b2NvbXBsZXRlLnNlbGVjdCcsIGZ1bmN0aW9uIChlLGl0ZW0pIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdwYXJ0aS8nICsgaXRlbS5zbHVnO1xufSk7XG5cblxuJCgnLnBhZ2UgPiBwJykud3JhcCgnPGRpdiBjbGFzcz1cInBhcmFncmFwaFwiPjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj48L2Rpdj48L2Rpdj4nKTtcbiQoJy5wYXJhZ3JhcGg6b2RkJykuYWRkQ2xhc3MoJ29kZC1wYXJhZ3JhcGgnKTtcbiQoJy5wYXJhZ3JhcGg6ZXZlbicpLmFkZENsYXNzKCdldmVuLXBhcmFncmFwaCcpOyIsIlxuaW1wb3J0ICd0YWJsZWV4cG9ydC5qcXVlcnkucGx1Z2luJztcbmltcG9ydCAnYm9vdHN0cmFwLXRhYmxlL2Rpc3QvYm9vdHN0cmFwLXRhYmxlLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUnO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUvZGlzdC9leHRlbnNpb25zL2V4cG9ydC9ib290c3RyYXAtdGFibGUtZXhwb3J0JztcblxuJChcIi5maWx0ZXJTZWxlY3RcIikuc2VsZWN0Mih7XG4gICAgdGhlbWU6IFwiYm9vdHN0cmFwLTVcIixcbn0pO1xuJCgnLmZpbHRlclNlbGVjdCcpLm9uKCdjaGFuZ2UnLHJlZnJlc2hUYWJsZSlcblxubGV0IGFwaUNhbGwgPSB7XG4gICAgYWpheDoge1xuICAgICAgICBkZWxheTogMTAwMCxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogMzAsXG4gICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXJhbXMudGVybVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBkYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtb3JlOiBkYXRhW1wiaHlkcmE6dmlld1wiXVtcImh5ZHJhOmxhc3RcIl0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBhcGlQYXJ0aSA9IGFwaUNhbGw7XG5hcGlQYXJ0aS5hamF4LnVybCA9ICcvYXBpL3BhcnRpcyc7XG5hcGlQYXJ0aS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcGFydGlcIjtcbiQoJyNzZWxlY3RQYXJ0aScpLnNlbGVjdDIoYXBpUGFydGkpO1xuXG5sZXQgYXBpUmVnaW9uID0gYXBpQ2FsbDtcbmFwaVJlZ2lvbi5hamF4LnVybCA9ICcvYXBpL3JlZ2lvbnMnO1xuYXBpUmVnaW9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSByZWdpb25cIjtcbiQoJyNzZWxlY3RSZWdpb24nKS5zZWxlY3QyKGFwaVJlZ2lvbik7XG5cbmxldCBhcGlQcm92aW5jZSA9IGFwaUNhbGw7XG5hcGlQcm92aW5jZS5hamF4LnVybCA9ICcvYXBpL3Byb3ZpbmNlcyc7XG5hcGlQcm92aW5jZS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcHJvdmluY2VcIjtcbiQoJyNzZWxlY3RQcm92aW5jZScpLnNlbGVjdDIoYXBpUHJvdmluY2UpO1xuXG5sZXQgYXBpQXJyb25kaXNzZW1lbnQgPSBhcGlDYWxsO1xuYXBpQXJyb25kaXNzZW1lbnQuYWpheC51cmwgPSAnL2FwaS9hcnJvbmRpc3NlbWVudHMnO1xuYXBpQXJyb25kaXNzZW1lbnQucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGFycm9uZGlzc2VtZW50XCI7XG4kKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKS5zZWxlY3QyKGFwaUFycm9uZGlzc2VtZW50KTtcblxubGV0IGFwaUNhbnRvbiA9IGFwaUNhbGw7XG5hcGlDYW50b24uYWpheC51cmwgPSAnL2FwaS9jYW50b25zJztcbmFwaUNhbnRvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY2FudG9uXCI7XG4kKCcjc2VsZWN0Q2FudG9uJykuc2VsZWN0MihhcGlDYW50b24pO1xuXG5sZXQgYXBpQ29tbXVuZSA9IGFwaUNhbGw7XG5hcGlDb21tdW5lLmFqYXgudXJsID0gJy9hcGkvY29tbXVuZXMnO1xuYXBpQ29tbXVuZS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY29tbXVuZVwiO1xuJCgnI3NlbGVjdENvbW11bmUnKS5zZWxlY3QyKGFwaUNvbW11bmUpO1xuXG5sZXQgYXBpRWxlY3Rpb24gPSBhcGlDYWxsO1xuYXBpRWxlY3Rpb24uYWpheC51cmwgPSAnL2FwaS9lbGVjdGlvbnMnO1xuYXBpRWxlY3Rpb24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGVsZWN0aW9uXCI7XG4kKCcjc2VsZWN0RWxlY3Rpb24nKS5zZWxlY3QyKGFwaUVsZWN0aW9uKTtcblxuZnVuY3Rpb24gcmVmcmVzaFRhYmxlKCl7XG4gICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKVxufVxud2luZG93LnF1ZXJ5UGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKCdxdWVyeVBhcmFtcycsIHBhcmFtcylcbiAgICByZXR1cm4gcGFyYW1zO1xufVxuXG53aW5kb3cuYWpheFJlcXVlc3QgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmRhdGEubGltaXQpIHtcbiAgICAgICAgcGFyYW1ldGVycy5pdGVtc1BlclBhZ2UgPSBwYXJhbXMuZGF0YS5saW1pdDtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdlID0gcGFyYW1zLmRhdGEub2Zmc2V0IC8gcGFyYW1zLmRhdGEubGltaXQgKyAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZGF0YS5zb3J0KSB7XG4gICAgICAgIHBhcmFtZXRlcnNbJ29yZGVyWycgKyBwYXJhbXMuZGF0YS5zb3J0ICsgJ10nXSA9IHBhcmFtcy5kYXRhLm9yZGVyO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UGFydGknKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUGFydHkuaWQnXSA9ICQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UmVnaW9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFJlZ2lvbi5pZCddID0gJCgkKCcjc2VsZWN0UmVnaW9uJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UHJvdmluY2UnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUHJvdmluY2UuaWQnXSA9ICQoJCgnI3NlbGVjdFByb3ZpbmNlJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQXJyb25kaXNzZW1lbnQuaWQnXSA9ICQoJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50JylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0Q2FudG9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZENhbnRvbi5pZCddID0gJCgkKCcjc2VsZWN0Q2FudG9uJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDb21tdW5lLmlkJ10gPSAkKCQoJyNzZWxlY3RDb21tdW5lJylbMF0pLnZhbCgpO1xuICAgIH1cblxuICAgIGlmICgkKCQoJyNzZWxlY3RFbGVjdGlvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRFbGVjdGlvbi5pZCddID0gJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9ICcvYXBpL3Jlc3VsdGF0cyc7XG4gICAgY29uc29sZS5sb2cocGFyYW1ldGVycywgJC5wYXJhbShwYXJhbWV0ZXJzKSk7XG4gICAgJC5nZXQodXJsICsgJz8nICsgJC5wYXJhbShwYXJhbWV0ZXJzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXNbJ2h5ZHJhOm1lbWJlciddO1xuICAgICAgICByZXN1bHQudG90YWwgPSByZXNbJ2h5ZHJhOnRvdGFsSXRlbXMnXTtcbiAgICAgICAgcGFyYW1zLnN1Y2Nlc3MocmVzdWx0KVxuICAgIH0pXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhbmltYXRlIiwicmlnaHQiLCJhZGRDbGFzcyIsInNob3ciLCJhdXRvQ29tcGxldGUiLCJlIiwiaXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNsdWciLCJ3cmFwIiwic2VsZWN0MiIsInRoZW1lIiwicmVmcmVzaFRhYmxlIiwiYXBpQ2FsbCIsImFqYXgiLCJkZWxheSIsImRhdGEiLCJwYXJhbXMiLCJxdWVyeSIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJuYW1lIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJtYXAiLCJpZCIsInBhZ2luYXRpb24iLCJtb3JlIiwidW5kZWZpbmVkIiwiYXBpUGFydGkiLCJ1cmwiLCJwbGFjZWhvbGRlciIsImFwaVJlZ2lvbiIsImFwaVByb3ZpbmNlIiwiYXBpQXJyb25kaXNzZW1lbnQiLCJhcGlDYW50b24iLCJhcGlDb21tdW5lIiwiYXBpRWxlY3Rpb24iLCJib290c3RyYXBUYWJsZSIsInF1ZXJ5UGFyYW1zIiwiYWpheFJlcXVlc3QiLCJwYXJhbWV0ZXJzIiwibGltaXQiLCJvZmZzZXQiLCJzb3J0Iiwib3JkZXIiLCJ2YWwiLCJsZW5ndGgiLCJwYXJhbSIsImdldCIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9