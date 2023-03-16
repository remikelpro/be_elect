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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-5f4fa7","vendors-node_modules_bootstrap-autocomplete_dist_latest_bootstrap-autocomplete_js-node_module-a1637a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDMkMsTUFBTSxHQUFHLENBQUMsRUFBQztJQUM1Q0wsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHakQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVyxHQUFHLEVBQUU7RUFDbEU7RUFFQSxJQUFJd0IsR0FBRyxHQUFHLGdCQUFnQjtFQUMxQlcsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFVBQVUsRUFBRWpELENBQUMsQ0FBQ3VELEtBQUssQ0FBQ04sVUFBVSxDQUFDLENBQUM7RUFDNUNqRCxDQUFDLENBQUN3RCxHQUFHLENBQUNyQixHQUFHLEdBQUcsR0FBRyxHQUFHbkMsQ0FBQyxDQUFDdUQsS0FBSyxDQUFDTixVQUFVLENBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUMsVUFBVUMsR0FBRyxFQUFFO0lBQ3ZELElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNoQ0MsTUFBTSxDQUFDQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0Q3RDLE1BQU0sQ0FBQ3lDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDO0VBQzFCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7OztBQzVIRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1hdXRvY29tcGxldGUnO1xuaW1wb3J0ICdja2VkaXRvcjQnO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCAnLi9tYWluJztcbmltcG9ydCAnLi90YWJsZSc7XG4iLCIkKFwiI3N3aXRjaGVyTWFwXCIpLm9uKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCQoJy5pbm5lcicpLmhhc0NsYXNzKCdsZWZ0Jykpe1xuICAgICAgICAkKCcuaW5uZXInKS5yZW1vdmVDbGFzcygnbGVmdCcpO1xuICAgICAgICAkKCcuaW5uZXInKS5hbmltYXRlKHtyaWdodDogJzAlJ30pO1xuICAgICAgICAkKCcjbWFwJykucmVtb3ZlQ2xhc3MoJ3RleHQtZW5kJyk7XG4gICAgICAgICQoJyNtYXAnKS5hZGRDbGFzcygndGV4dC1jZW50ZXInKTtcbiAgICAgICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ3RleHQtc3RhcnQnKTtcbiAgICAgICAgJCgnI2RvbnV0JykucmVtb3ZlQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmlubmVyJykuYWRkQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICc1MCUnfSk7ICAgIFxuICAgICAgICAkKCcjZG9udXQnKS5yZW1vdmVDbGFzcygndGV4dC1zdGFydCcpO1xuICAgICAgICAkKCcjZG9udXQnKS5hZGRDbGFzcygndGV4dC1jZW50ZXInKTtcbiAgICAgICAgJCgnI21hcCcpLmFkZENsYXNzKCd0ZXh0LWVuZCcpO1xuICAgICAgICAkKCcjbWFwJykucmVtb3ZlQ2xhc3MoJ3RleHQtY2VudGVyJyk7XG4gICAgfVxufSk7XG5cbiQoJy5wYXJ0aS1zZWFyY2gnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdwYXJ0aS8nICsgJCh0aGlzKS52YWwoKTtcbn0pO1xuXG5cbiQoJy5wYWdlID4gcCcpLndyYXAoJzxkaXYgY2xhc3M9XCJwYXJhZ3JhcGhcIj48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PC9kaXY+PC9kaXY+Jyk7XG4kKCcucGFyYWdyYXBoOm9kZCcpLmFkZENsYXNzKCdvZGQtcGFyYWdyYXBoJyk7XG4kKCcucGFyYWdyYXBoOmV2ZW4nKS5hZGRDbGFzcygnZXZlbi1wYXJhZ3JhcGgnKTsiLCJcbmltcG9ydCAndGFibGVleHBvcnQuanF1ZXJ5LnBsdWdpbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2Jvb3RzdHJhcC10YWJsZS5taW4uY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCAnYm9vdHN0cmFwLXRhYmxlL2Rpc3QvZXh0ZW5zaW9ucy9leHBvcnQvYm9vdHN0cmFwLXRhYmxlLWV4cG9ydCc7XG5cbiQoXCIuZmlsdGVyU2VsZWN0XCIpLnNlbGVjdDIoe1xuICAgIHRoZW1lOiBcImJvb3RzdHJhcC01XCIsXG59KTtcbiQoJy5maWx0ZXJTZWxlY3QnKS5vbignY2hhbmdlJyxyZWZyZXNoVGFibGUpXG5cbmxldCBhcGlDYWxsID0ge1xuICAgIGFqYXg6IHtcbiAgICAgICAgZGVsYXk6IDEwMDAsXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHtcbiAgICAgICAgICAgICAgICBpdGVtc1BlclBhZ2U6IDMwLFxuICAgICAgICAgICAgICAgIHBhZ2U6IHBhcmFtcy5wYWdlIHx8IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogcGFyYW1zLnRlcm1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vcmU6IGRhdGFbXCJoeWRyYTp2aWV3XCJdW1wiaHlkcmE6bGFzdFwiXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGFwaVBhcnRpID0gYXBpQ2FsbDtcbmFwaVBhcnRpLmFqYXgudXJsID0gJy9hcGkvcGFydGlzJztcbmFwaVBhcnRpLnBsYWNlaG9sZGVyID0gJCgnI3BsYWNlaG9sZGVyU2VsZWN0UGFydGknKS5odG1sKCkgPz8gXCJTZWxlY3QgYSBwYXJ0aVwiO1xuJCgnI3NlbGVjdFBhcnRpJykuc2VsZWN0MihhcGlQYXJ0aSk7XG5cbmxldCBhcGlSZWdpb24gPSBhcGlDYWxsO1xuYXBpUmVnaW9uLmFqYXgudXJsID0gJy9hcGkvcmVnaW9ucyc7XG5hcGlSZWdpb24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIHJlZ2lvblwiO1xuJCgnI3NlbGVjdFJlZ2lvbicpLnNlbGVjdDIoYXBpUmVnaW9uKTtcblxubGV0IGFwaVByb3ZpbmNlID0gYXBpQ2FsbDtcbmFwaVByb3ZpbmNlLmFqYXgudXJsID0gJy9hcGkvcHJvdmluY2VzJztcbmFwaVByb3ZpbmNlLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBwcm92aW5jZVwiO1xuJCgnI3NlbGVjdFByb3ZpbmNlJykuc2VsZWN0MihhcGlQcm92aW5jZSk7XG5cbmxldCBhcGlBcnJvbmRpc3NlbWVudCA9IGFwaUNhbGw7XG5hcGlBcnJvbmRpc3NlbWVudC5hamF4LnVybCA9ICcvYXBpL2Fycm9uZGlzc2VtZW50cyc7XG5hcGlBcnJvbmRpc3NlbWVudC5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgYXJyb25kaXNzZW1lbnRcIjtcbiQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpLnNlbGVjdDIoYXBpQXJyb25kaXNzZW1lbnQpO1xuXG5sZXQgYXBpQ2FudG9uID0gYXBpQ2FsbDtcbmFwaUNhbnRvbi5hamF4LnVybCA9ICcvYXBpL2NhbnRvbnMnO1xuYXBpQ2FudG9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBjYW50b25cIjtcbiQoJyNzZWxlY3RDYW50b24nKS5zZWxlY3QyKGFwaUNhbnRvbik7XG5cbmxldCBhcGlDb21tdW5lID0gYXBpQ2FsbDtcbmFwaUNvbW11bmUuYWpheC51cmwgPSAnL2FwaS9jb21tdW5lcyc7XG5hcGlDb21tdW5lLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBjb21tdW5lXCI7XG4kKCcjc2VsZWN0Q29tbXVuZScpLnNlbGVjdDIoYXBpQ29tbXVuZSk7XG5cbmxldCBhcGlFbGVjdGlvbiA9IGFwaUNhbGw7XG5hcGlFbGVjdGlvbi5hamF4LnVybCA9ICcvYXBpL2VsZWN0aW9ucyc7XG5hcGlFbGVjdGlvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgZWxlY3Rpb25cIjtcbiQoJyNzZWxlY3RFbGVjdGlvbicpLnNlbGVjdDIoYXBpRWxlY3Rpb24pO1xuXG5mdW5jdGlvbiByZWZyZXNoVGFibGUoKXtcbiAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpXG59XG53aW5kb3cucXVlcnlQYXJhbXMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5UGFyYW1zJywgcGFyYW1zKVxuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbndpbmRvdy5hamF4UmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcGFyYW1ldGVycyA9IHt9O1xuICAgIGlmIChwYXJhbXMuZGF0YS5saW1pdCkge1xuICAgICAgICBwYXJhbWV0ZXJzLml0ZW1zUGVyUGFnZSA9IHBhcmFtcy5kYXRhLmxpbWl0O1xuICAgICAgICBwYXJhbWV0ZXJzLnBhZ2UgPSBwYXJhbXMuZGF0YS5vZmZzZXQgLyBwYXJhbXMuZGF0YS5saW1pdCArIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJhbWV0ZXJzLnBhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5kYXRhLnNvcnQpIHtcbiAgICAgICAgcGFyYW1ldGVyc1snb3JkZXJbJyArIHBhcmFtcy5kYXRhLnNvcnQgKyAnXSddID0gcGFyYW1zLmRhdGEub3JkZXI7XG4gICAgfVxuICAgIGlmICgkKCQoJyNzZWxlY3RQYXJ0aScpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRQYXJ0eS5pZCddID0gJCgkKCcjc2VsZWN0UGFydGknKVswXSkudmFsKCk7XG4gICAgfVxuICAgIGlmICgkKCQoJyNzZWxlY3RSZWdpb24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkUmVnaW9uLmlkJ10gPSAkKCQoJyNzZWxlY3RSZWdpb24nKVswXSkudmFsKCk7XG4gICAgfVxuICAgIGlmICgkKCQoJyNzZWxlY3RQcm92aW5jZScpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRQcm92aW5jZS5pZCddID0gJCgkKCcjc2VsZWN0UHJvdmluY2UnKVswXSkudmFsKCk7XG4gICAgfVxuICAgIGlmICgkKCQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRBcnJvbmRpc3NlbWVudC5pZCddID0gJCgkKCcjc2VsZWN0QXJyb25kaXNzZW1lbnQnKVswXSkudmFsKCk7XG4gICAgfVxuICAgIGlmICgkKCQoJyNzZWxlY3RDYW50b24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQ2FudG9uLmlkJ10gPSAkKCQoJyNzZWxlY3RDYW50b24nKVswXSkudmFsKCk7XG4gICAgfVxuICAgIGlmICgkKCQoJyNzZWxlY3RDb21tdW5lJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZENvbW11bmUuaWQnXSA9ICQoJCgnI3NlbGVjdENvbW11bmUnKVswXSkudmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKCQoJCgnI3NlbGVjdEVsZWN0aW9uJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZEVsZWN0aW9uLmlkJ10gPSAkKCQoJyNzZWxlY3RFbGVjdGlvbicpWzBdKS52YWwoKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gJy9hcGkvcmVzdWx0YXRzJztcbiAgICBjb25zb2xlLmxvZyhwYXJhbWV0ZXJzLCAkLnBhcmFtKHBhcmFtZXRlcnMpKTtcbiAgICAkLmdldCh1cmwgKyAnPycgKyAkLnBhcmFtKHBhcmFtZXRlcnMpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc1snaHlkcmE6bWVtYmVyJ107XG4gICAgICAgIHJlc3VsdC50b3RhbCA9IHJlc1snaHlkcmE6dG90YWxJdGVtcyddO1xuICAgICAgICBwYXJhbXMuc3VjY2VzcyhyZXN1bHQpXG4gICAgfSlcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFuaW1hdGUiLCJyaWdodCIsImFkZENsYXNzIiwiZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInZhbCIsIndyYXAiLCJzZWxlY3QyIiwidGhlbWUiLCJyZWZyZXNoVGFibGUiLCJhcGlDYWxsIiwiYWpheCIsImRlbGF5IiwiZGF0YSIsInBhcmFtcyIsInF1ZXJ5IiwiaXRlbXNQZXJQYWdlIiwicGFnZSIsIm5hbWUiLCJ0ZXJtIiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsImlkIiwicGFnaW5hdGlvbiIsIm1vcmUiLCJ1bmRlZmluZWQiLCJhcGlQYXJ0aSIsInVybCIsInBsYWNlaG9sZGVyIiwiaHRtbCIsImFwaVJlZ2lvbiIsImFwaVByb3ZpbmNlIiwiYXBpQXJyb25kaXNzZW1lbnQiLCJhcGlDYW50b24iLCJhcGlDb21tdW5lIiwiYXBpRWxlY3Rpb24iLCJib290c3RyYXBUYWJsZSIsInF1ZXJ5UGFyYW1zIiwiY29uc29sZSIsImxvZyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydCIsIm9yZGVyIiwibGVuZ3RoIiwicGFyYW0iLCJnZXQiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==