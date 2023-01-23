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
$('.parti-search').on('change', function (e) {
  window.location.href = 'parti/' + $(this).val();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js","vendors-node_modules_bootstrap-autocomplete_dist_latest_bootstrap-autocomplete_js-node_module-f644b2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDMkMsTUFBTSxHQUFHLENBQUMsRUFBQztJQUM1Q0wsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHakQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVyxHQUFHLEVBQUU7RUFDbEU7RUFFQSxJQUFJd0IsR0FBRyxHQUFHLGdCQUFnQjtFQUMxQlcsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFVBQVUsRUFBRWpELENBQUMsQ0FBQ3VELEtBQUssQ0FBQ04sVUFBVSxDQUFDLENBQUM7RUFDNUNqRCxDQUFDLENBQUN3RCxHQUFHLENBQUNyQixHQUFHLEdBQUcsR0FBRyxHQUFHbkMsQ0FBQyxDQUFDdUQsS0FBSyxDQUFDTixVQUFVLENBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUMsVUFBVUMsR0FBRyxFQUFFO0lBQ3ZELElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNoQ0MsTUFBTSxDQUFDQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0Q3RDLE1BQU0sQ0FBQ3lDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDO0VBQzFCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7OztBQzVIRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAtYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnY2tlZGl0b3I0JztcbmltcG9ydCAnc2VsZWN0Mic7XG5pbXBvcnQgJy4vbWFpbic7XG5pbXBvcnQgJy4vdGFibGUnO1xuIiwiJChcIiNzd2l0Y2hlck1hcFwiKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICgkKCcuaW5uZXInKS5oYXNDbGFzcygnbGVmdCcpKXtcbiAgICAgICAgJCgnLmlubmVyJykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICcwJSd9KTtcbiAgICAgICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWVuZCcpO1xuICAgICAgICAkKCcjbWFwJykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgICAgICQoJyNkb251dCcpLmFkZENsYXNzKCd0ZXh0LXN0YXJ0Jyk7XG4gICAgICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWNlbnRlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5pbm5lcicpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICQoJy5pbm5lcicpLmFuaW1hdGUoe3JpZ2h0OiAnNTAlJ30pOyAgICBcbiAgICAgICAgJCgnI2RvbnV0JykucmVtb3ZlQ2xhc3MoJ3RleHQtc3RhcnQnKTtcbiAgICAgICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgICAgICQoJyNtYXAnKS5hZGRDbGFzcygndGV4dC1lbmQnKTtcbiAgICAgICAgJCgnI21hcCcpLnJlbW92ZUNsYXNzKCd0ZXh0LWNlbnRlcicpO1xuICAgIH1cbn0pO1xuXG4kKCcucGFydGktc2VhcmNoJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAncGFydGkvJyArICQodGhpcykudmFsKCk7XG59KTtcblxuXG4kKCcucGFnZSA+IHAnKS53cmFwKCc8ZGl2IGNsYXNzPVwicGFyYWdyYXBoXCI+PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjwvZGl2PjwvZGl2PicpO1xuJCgnLnBhcmFncmFwaDpvZGQnKS5hZGRDbGFzcygnb2RkLXBhcmFncmFwaCcpO1xuJCgnLnBhcmFncmFwaDpldmVuJykuYWRkQ2xhc3MoJ2V2ZW4tcGFyYWdyYXBoJyk7IiwiXG5pbXBvcnQgJ3RhYmxlZXhwb3J0LmpxdWVyeS5wbHVnaW4nO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUvZGlzdC9ib290c3RyYXAtdGFibGUubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2V4dGVuc2lvbnMvZXhwb3J0L2Jvb3RzdHJhcC10YWJsZS1leHBvcnQnO1xuXG4kKFwiLmZpbHRlclNlbGVjdFwiKS5zZWxlY3QyKHtcbiAgICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxufSk7XG4kKCcuZmlsdGVyU2VsZWN0Jykub24oJ2NoYW5nZScscmVmcmVzaFRhYmxlKVxuXG5sZXQgYXBpQ2FsbCA9IHtcbiAgICBhamF4OiB7XG4gICAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAzMCxcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmFtcy50ZXJtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBkYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtb3JlOiBkYXRhW1wiaHlkcmE6dmlld1wiXVtcImh5ZHJhOmxhc3RcIl0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBhcGlQYXJ0aSA9IGFwaUNhbGw7XG5hcGlQYXJ0aS5hamF4LnVybCA9ICcvYXBpL3BhcnRpcyc7XG5hcGlQYXJ0aS5wbGFjZWhvbGRlciA9ICQoJyNwbGFjZWhvbGRlclNlbGVjdFBhcnRpJykuaHRtbCgpID8/IFwiU2VsZWN0IGEgcGFydGlcIjtcbiQoJyNzZWxlY3RQYXJ0aScpLnNlbGVjdDIoYXBpUGFydGkpO1xuXG5sZXQgYXBpUmVnaW9uID0gYXBpQ2FsbDtcbmFwaVJlZ2lvbi5hamF4LnVybCA9ICcvYXBpL3JlZ2lvbnMnO1xuYXBpUmVnaW9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSByZWdpb25cIjtcbiQoJyNzZWxlY3RSZWdpb24nKS5zZWxlY3QyKGFwaVJlZ2lvbik7XG5cbmxldCBhcGlQcm92aW5jZSA9IGFwaUNhbGw7XG5hcGlQcm92aW5jZS5hamF4LnVybCA9ICcvYXBpL3Byb3ZpbmNlcyc7XG5hcGlQcm92aW5jZS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcHJvdmluY2VcIjtcbiQoJyNzZWxlY3RQcm92aW5jZScpLnNlbGVjdDIoYXBpUHJvdmluY2UpO1xuXG5sZXQgYXBpQXJyb25kaXNzZW1lbnQgPSBhcGlDYWxsO1xuYXBpQXJyb25kaXNzZW1lbnQuYWpheC51cmwgPSAnL2FwaS9hcnJvbmRpc3NlbWVudHMnO1xuYXBpQXJyb25kaXNzZW1lbnQucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGFycm9uZGlzc2VtZW50XCI7XG4kKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKS5zZWxlY3QyKGFwaUFycm9uZGlzc2VtZW50KTtcblxubGV0IGFwaUNhbnRvbiA9IGFwaUNhbGw7XG5hcGlDYW50b24uYWpheC51cmwgPSAnL2FwaS9jYW50b25zJztcbmFwaUNhbnRvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY2FudG9uXCI7XG4kKCcjc2VsZWN0Q2FudG9uJykuc2VsZWN0MihhcGlDYW50b24pO1xuXG5sZXQgYXBpQ29tbXVuZSA9IGFwaUNhbGw7XG5hcGlDb21tdW5lLmFqYXgudXJsID0gJy9hcGkvY29tbXVuZXMnO1xuYXBpQ29tbXVuZS5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY29tbXVuZVwiO1xuJCgnI3NlbGVjdENvbW11bmUnKS5zZWxlY3QyKGFwaUNvbW11bmUpO1xuXG5sZXQgYXBpRWxlY3Rpb24gPSBhcGlDYWxsO1xuYXBpRWxlY3Rpb24uYWpheC51cmwgPSAnL2FwaS9lbGVjdGlvbnMnO1xuYXBpRWxlY3Rpb24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGVsZWN0aW9uXCI7XG4kKCcjc2VsZWN0RWxlY3Rpb24nKS5zZWxlY3QyKGFwaUVsZWN0aW9uKTtcblxuZnVuY3Rpb24gcmVmcmVzaFRhYmxlKCl7XG4gICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKVxufVxud2luZG93LnF1ZXJ5UGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKCdxdWVyeVBhcmFtcycsIHBhcmFtcylcbiAgICByZXR1cm4gcGFyYW1zO1xufVxuXG53aW5kb3cuYWpheFJlcXVlc3QgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmRhdGEubGltaXQpIHtcbiAgICAgICAgcGFyYW1ldGVycy5pdGVtc1BlclBhZ2UgPSBwYXJhbXMuZGF0YS5saW1pdDtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdlID0gcGFyYW1zLmRhdGEub2Zmc2V0IC8gcGFyYW1zLmRhdGEubGltaXQgKyAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZGF0YS5zb3J0KSB7XG4gICAgICAgIHBhcmFtZXRlcnNbJ29yZGVyWycgKyBwYXJhbXMuZGF0YS5zb3J0ICsgJ10nXSA9IHBhcmFtcy5kYXRhLm9yZGVyO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UGFydGknKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUGFydHkuaWQnXSA9ICQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UmVnaW9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFJlZ2lvbi5pZCddID0gJCgkKCcjc2VsZWN0UmVnaW9uJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0UHJvdmluY2UnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUHJvdmluY2UuaWQnXSA9ICQoJCgnI3NlbGVjdFByb3ZpbmNlJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQXJyb25kaXNzZW1lbnQuaWQnXSA9ICQoJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50JylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0Q2FudG9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZENhbnRvbi5pZCddID0gJCgkKCcjc2VsZWN0Q2FudG9uJylbMF0pLnZhbCgpO1xuICAgIH1cbiAgICBpZiAoJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDb21tdW5lLmlkJ10gPSAkKCQoJyNzZWxlY3RDb21tdW5lJylbMF0pLnZhbCgpO1xuICAgIH1cblxuICAgIGlmICgkKCQoJyNzZWxlY3RFbGVjdGlvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRFbGVjdGlvbi5pZCddID0gJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9ICcvYXBpL3Jlc3VsdGF0cyc7XG4gICAgY29uc29sZS5sb2cocGFyYW1ldGVycywgJC5wYXJhbShwYXJhbWV0ZXJzKSk7XG4gICAgJC5nZXQodXJsICsgJz8nICsgJC5wYXJhbShwYXJhbWV0ZXJzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXNbJ2h5ZHJhOm1lbWJlciddO1xuICAgICAgICByZXN1bHQudG90YWwgPSByZXNbJ2h5ZHJhOnRvdGFsSXRlbXMnXTtcbiAgICAgICAgcGFyYW1zLnN1Y2Nlc3MocmVzdWx0KVxuICAgIH0pXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhbmltYXRlIiwicmlnaHQiLCJhZGRDbGFzcyIsImUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ2YWwiLCJ3cmFwIiwic2VsZWN0MiIsInRoZW1lIiwicmVmcmVzaFRhYmxlIiwiYXBpQ2FsbCIsImFqYXgiLCJkZWxheSIsImRhdGEiLCJwYXJhbXMiLCJxdWVyeSIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJuYW1lIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJpZCIsInBhZ2luYXRpb24iLCJtb3JlIiwidW5kZWZpbmVkIiwiYXBpUGFydGkiLCJ1cmwiLCJwbGFjZWhvbGRlciIsImh0bWwiLCJhcGlSZWdpb24iLCJhcGlQcm92aW5jZSIsImFwaUFycm9uZGlzc2VtZW50IiwiYXBpQ2FudG9uIiwiYXBpQ29tbXVuZSIsImFwaUVsZWN0aW9uIiwiYm9vdHN0cmFwVGFibGUiLCJxdWVyeVBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJhamF4UmVxdWVzdCIsInBhcmFtZXRlcnMiLCJsaW1pdCIsIm9mZnNldCIsInNvcnQiLCJvcmRlciIsImxlbmd0aCIsInBhcmFtIiwiZ2V0IiwidGhlbiIsInJlcyIsInJlc3VsdCIsInRvdGFsIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=