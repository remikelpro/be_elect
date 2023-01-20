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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN1RCxHQUFHLEVBQUU7RUFDaEU7RUFFQSxJQUFJdkQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDdUQsR0FBRyxFQUFFLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFDNUNOLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBR2xELENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3VELEdBQUcsRUFBRTtFQUNsRTtFQUVBLElBQUloQixHQUFHLEdBQUcsZ0JBQWdCO0VBQzFCVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ21CLFVBQVUsRUFBRWxELENBQUMsQ0FBQ3lELEtBQUssQ0FBQ1AsVUFBVSxDQUFDLENBQUM7RUFDNUNsRCxDQUFDLENBQUMwRCxHQUFHLENBQUNuQixHQUFHLEdBQUcsR0FBRyxHQUFHdkMsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDUCxVQUFVLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQUMsVUFBVUMsR0FBRyxFQUFFO0lBQ3ZELElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNoQ0MsTUFBTSxDQUFDQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0Q3JDLE1BQU0sQ0FBQ3dDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDO0VBQzFCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7OztBQzdIRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAtYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnY2tlZGl0b3I0JztcbmltcG9ydCAnc2VsZWN0Mic7XG5pbXBvcnQgJy4vbWFpbic7XG5pbXBvcnQgJy4vdGFibGUnO1xuIiwiJChcIiNzd2l0Y2hlck1hcFwiKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICgkKCcuaW5uZXInKS5oYXNDbGFzcygnbGVmdCcpKXtcbiAgICAgICAgJCgnLmlubmVyJykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICcwJSd9KTtcbiAgICAgICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWVuZCcpO1xuICAgICAgICAkKCcjbWFwJykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgICAgICQoJyNkb251dCcpLmFkZENsYXNzKCd0ZXh0LXN0YXJ0Jyk7XG4gICAgICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWNlbnRlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5pbm5lcicpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICQoJy5pbm5lcicpLmFuaW1hdGUoe3JpZ2h0OiAnNTAlJ30pOyAgICBcbiAgICAgICAgJCgnI2RvbnV0JykucmVtb3ZlQ2xhc3MoJ3RleHQtc3RhcnQnKTtcbiAgICAgICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgICAgICQoJyNtYXAnKS5hZGRDbGFzcygndGV4dC1lbmQnKTtcbiAgICAgICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWNlbnRlcicpO1xuICAgIH1cbn0pO1xuXG4kKCcuYm9vdHN0cmFwLWF1dG9jb21wbGV0ZS5kcm9wZG93bi1tZW51Jykuc2hvdygpO1xuXG4kKCcuYmFzaWNBdXRvU2VsZWN0JykuYXV0b0NvbXBsZXRlKCk7XG4kKCcuYmFzaWNBdXRvU2VsZWN0Jykub24oJ2F1dG9jb21wbGV0ZS5zZWxlY3QnLCBmdW5jdGlvbiAoZSxpdGVtKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAncGFydGkvJyArIGl0ZW0uc2x1Zztcbn0pO1xuXG5cbiQoJy5wYWdlID4gcCcpLndyYXAoJzxkaXYgY2xhc3M9XCJwYXJhZ3JhcGhcIj48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PC9kaXY+PC9kaXY+Jyk7XG4kKCcucGFyYWdyYXBoOm9kZCcpLmFkZENsYXNzKCdvZGQtcGFyYWdyYXBoJyk7XG4kKCcucGFyYWdyYXBoOmV2ZW4nKS5hZGRDbGFzcygnZXZlbi1wYXJhZ3JhcGgnKTsiLCJcbmltcG9ydCAndGFibGVleHBvcnQuanF1ZXJ5LnBsdWdpbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2Jvb3RzdHJhcC10YWJsZS5taW4uY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCAnYm9vdHN0cmFwLXRhYmxlL2Rpc3QvZXh0ZW5zaW9ucy9leHBvcnQvYm9vdHN0cmFwLXRhYmxlLWV4cG9ydCc7XG5cbiQoXCIuZmlsdGVyU2VsZWN0XCIpLnNlbGVjdDIoe1xuICAgIHRoZW1lOiBcImJvb3RzdHJhcC01XCIsXG59KTtcbiQoJy5maWx0ZXJTZWxlY3QnKS5vbignY2hhbmdlJyxyZWZyZXNoVGFibGUpXG5cbmxldCBhcGlDYWxsID0ge1xuICAgIGFqYXg6IHtcbiAgICAgICAgZGVsYXk6IDEwMDAsXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHtcbiAgICAgICAgICAgICAgICBpdGVtc1BlclBhZ2U6IDMwLFxuICAgICAgICAgICAgICAgIHBhZ2U6IHBhcmFtcy5wYWdlIHx8IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogcGFyYW1zLnRlcm1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gZGF0YVtcImh5ZHJhOm1lbWJlclwiXS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBpdGVtLm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbW9yZTogZGF0YVtcImh5ZHJhOnZpZXdcIl1bXCJoeWRyYTpsYXN0XCJdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgYXBpUGFydGkgPSBhcGlDYWxsO1xuYXBpUGFydGkuYWpheC51cmwgPSAnL2FwaS9wYXJ0aXMnO1xuYXBpUGFydGkucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIHBhcnRpXCI7XG4kKCcjc2VsZWN0UGFydGknKS5zZWxlY3QyKGFwaVBhcnRpKTtcblxubGV0IGFwaVJlZ2lvbiA9IGFwaUNhbGw7XG5hcGlSZWdpb24uYWpheC51cmwgPSAnL2FwaS9yZWdpb25zJztcbmFwaVJlZ2lvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcmVnaW9uXCI7XG4kKCcjc2VsZWN0UmVnaW9uJykuc2VsZWN0MihhcGlSZWdpb24pO1xuXG5sZXQgYXBpUHJvdmluY2UgPSBhcGlDYWxsO1xuYXBpUHJvdmluY2UuYWpheC51cmwgPSAnL2FwaS9wcm92aW5jZXMnO1xuYXBpUHJvdmluY2UucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIHByb3ZpbmNlXCI7XG4kKCcjc2VsZWN0UHJvdmluY2UnKS5zZWxlY3QyKGFwaVByb3ZpbmNlKTtcblxubGV0IGFwaUFycm9uZGlzc2VtZW50ID0gYXBpQ2FsbDtcbmFwaUFycm9uZGlzc2VtZW50LmFqYXgudXJsID0gJy9hcGkvYXJyb25kaXNzZW1lbnRzJztcbmFwaUFycm9uZGlzc2VtZW50LnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBhcnJvbmRpc3NlbWVudFwiO1xuJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50Jykuc2VsZWN0MihhcGlBcnJvbmRpc3NlbWVudCk7XG5cbmxldCBhcGlDYW50b24gPSBhcGlDYWxsO1xuYXBpQ2FudG9uLmFqYXgudXJsID0gJy9hcGkvY2FudG9ucyc7XG5hcGlDYW50b24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGNhbnRvblwiO1xuJCgnI3NlbGVjdENhbnRvbicpLnNlbGVjdDIoYXBpQ2FudG9uKTtcblxubGV0IGFwaUNvbW11bmUgPSBhcGlDYWxsO1xuYXBpQ29tbXVuZS5hamF4LnVybCA9ICcvYXBpL2NvbW11bmVzJztcbmFwaUNvbW11bmUucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGNvbW11bmVcIjtcbiQoJyNzZWxlY3RDb21tdW5lJykuc2VsZWN0MihhcGlDb21tdW5lKTtcblxubGV0IGFwaUVsZWN0aW9uID0gYXBpQ2FsbDtcbmFwaUVsZWN0aW9uLmFqYXgudXJsID0gJy9hcGkvZWxlY3Rpb25zJztcbmFwaUVsZWN0aW9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBlbGVjdGlvblwiO1xuJCgnI3NlbGVjdEVsZWN0aW9uJykuc2VsZWN0MihhcGlFbGVjdGlvbik7XG5cbmZ1bmN0aW9uIHJlZnJlc2hUYWJsZSgpe1xuICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJylcbn1cbndpbmRvdy5xdWVyeVBhcmFtcyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygncXVlcnlQYXJhbXMnLCBwYXJhbXMpXG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxud2luZG93LmFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCBwYXJhbWV0ZXJzID0ge307XG4gICAgaWYgKHBhcmFtcy5kYXRhLmxpbWl0KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuaXRlbXNQZXJQYWdlID0gcGFyYW1zLmRhdGEubGltaXQ7XG4gICAgICAgIHBhcmFtZXRlcnMucGFnZSA9IHBhcmFtcy5kYXRhLm9mZnNldCAvIHBhcmFtcy5kYXRhLmxpbWl0ICsgMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmFtZXRlcnMucGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmRhdGEuc29ydCkge1xuICAgICAgICBwYXJhbWV0ZXJzWydvcmRlclsnICsgcGFyYW1zLmRhdGEuc29ydCArICddJ10gPSBwYXJhbXMuZGF0YS5vcmRlcjtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFBhcnR5LmlkJ10gPSAkKCQoJyNzZWxlY3RQYXJ0aScpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRSZWdpb24uaWQnXSA9ICQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFByb3ZpbmNlJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFByb3ZpbmNlLmlkJ10gPSAkKCQoJyNzZWxlY3RQcm92aW5jZScpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50JylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZEFycm9uZGlzc2VtZW50LmlkJ10gPSAkKCQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDYW50b24uaWQnXSA9ICQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdENvbW11bmUnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQ29tbXVuZS5pZCddID0gJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKTtcbiAgICB9XG5cbiAgICBpZiAoJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkRWxlY3Rpb24uaWQnXSA9ICQoJCgnI3NlbGVjdEVsZWN0aW9uJylbMF0pLnZhbCgpO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSAnL2FwaS9yZXN1bHRhdHMnO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtZXRlcnMsICQucGFyYW0ocGFyYW1ldGVycykpO1xuICAgICQuZ2V0KHVybCArICc/JyArICQucGFyYW0ocGFyYW1ldGVycykpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgcmVzdWx0LnRvdGFsID0gcmVzWydoeWRyYTp0b3RhbEl0ZW1zJ107XG4gICAgICAgIHBhcmFtcy5zdWNjZXNzKHJlc3VsdClcbiAgICB9KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYW5pbWF0ZSIsInJpZ2h0IiwiYWRkQ2xhc3MiLCJzaG93IiwiYXV0b0NvbXBsZXRlIiwiZSIsIml0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzbHVnIiwid3JhcCIsInNlbGVjdDIiLCJ0aGVtZSIsInJlZnJlc2hUYWJsZSIsImFwaUNhbGwiLCJhamF4IiwiZGVsYXkiLCJkYXRhIiwicGFyYW1zIiwicXVlcnkiLCJpdGVtc1BlclBhZ2UiLCJwYWdlIiwibmFtZSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwibWFwIiwiaWQiLCJwYWdpbmF0aW9uIiwibW9yZSIsInVuZGVmaW5lZCIsImFwaVBhcnRpIiwidXJsIiwicGxhY2Vob2xkZXIiLCJhcGlSZWdpb24iLCJhcGlQcm92aW5jZSIsImFwaUFycm9uZGlzc2VtZW50IiwiYXBpQ2FudG9uIiwiYXBpQ29tbXVuZSIsImFwaUVsZWN0aW9uIiwiYm9vdHN0cmFwVGFibGUiLCJxdWVyeVBhcmFtcyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydCIsIm9yZGVyIiwidmFsIiwibGVuZ3RoIiwicGFyYW0iLCJnZXQiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==