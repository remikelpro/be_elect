(self["webpackChunk"] = self["webpackChunk"] || []).push([["table"],{

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
        var _item$name;
        return {
          "id": item.id,
          "text": (_item$name = item.name) !== null && _item$name !== void 0 ? _item$name : item.acronym
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
    parameters['parti.id'] = $($('#selectParti')[0]).val();
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
  $.get(url + '?' + $.param(parameters)).then(function (res) {
    var result = res['hydra:member'];
    result.total = res['hydra:totalItems'];
    params.success(result);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/bootstrap-table/dist/bootstrap-table.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-table/dist/bootstrap-table.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-a257e2","vendors-node_modules_bootstrap-table_dist_bootstrap-table_min_js-node_modules_bootstrap-table-51d94c"], () => (__webpack_exec__("./assets/table.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtQztBQUNtQjtBQUM3QjtBQUM4QztBQUV2RUEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxPQUFPLENBQUM7RUFDdkJDLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQztBQUNGRixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUNDLFlBQVksQ0FBQztBQUU1QyxJQUFJQyxPQUFPLEdBQUc7RUFDVkMsSUFBSSxFQUFFO0lBQ0ZDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLElBQUksRUFBRSxjQUFVQyxNQUFNLEVBQUU7TUFDcEIsSUFBSUMsS0FBSyxHQUFHO1FBQ1JDLFlBQVksRUFBRSxFQUFFO1FBQ2hCQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBSSxJQUFJLENBQUM7UUFDdEJDLElBQUksRUFBRUosTUFBTSxDQUFDSztNQUNqQixDQUFDO01BQ0QsT0FBT0osS0FBSztJQUNoQixDQUFDO0lBQ0RLLGNBQWMsRUFBRSx3QkFBVVAsSUFBSSxFQUFFO01BQzVCLElBQUlRLE9BQU8sR0FBR1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDUyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1FBQUE7UUFDN0MsT0FBTztVQUNILElBQUksRUFBRUEsSUFBSSxDQUFDQyxFQUFFO1VBQ2IsTUFBTSxnQkFBRUQsSUFBSSxDQUFDTCxJQUFJLG1EQUFJSyxJQUFJLENBQUNFO1FBQzlCLENBQUM7TUFDTCxDQUFDLENBQUM7TUFDRixPQUFPO1FBQ0hKLE9BQU8sRUFBUEEsT0FBTztRQUNQSyxVQUFVLEVBQUU7VUFDUkMsSUFBSSxFQUFFZCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUtlO1FBQy9DO01BQ0osQ0FBQztJQUNMO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBSUMsUUFBUSxHQUFHbkIsT0FBTztBQUN0Qm1CLFFBQVEsQ0FBQ2xCLElBQUksQ0FBQ21CLEdBQUcsR0FBRyxhQUFhO0FBQ2pDRCxRQUFRLENBQUNFLFdBQVcsY0FBRzFCLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDMkIsSUFBSSxFQUFFLDZDQUFJLGdCQUFnQjtBQUM5RTNCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsT0FBTyxDQUFDdUIsUUFBUSxDQUFDO0FBRW5DLElBQUlJLFNBQVMsR0FBR3ZCLE9BQU87QUFDdkJ1QixTQUFTLENBQUN0QixJQUFJLENBQUNtQixHQUFHLEdBQUcsY0FBYztBQUNuQ0csU0FBUyxDQUFDRixXQUFXLEdBQUcsaUJBQWlCO0FBQ3pDMUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxPQUFPLENBQUMyQixTQUFTLENBQUM7QUFFckMsSUFBSUMsV0FBVyxHQUFHeEIsT0FBTztBQUN6QndCLFdBQVcsQ0FBQ3ZCLElBQUksQ0FBQ21CLEdBQUcsR0FBRyxnQkFBZ0I7QUFDdkNJLFdBQVcsQ0FBQ0gsV0FBVyxHQUFHLG1CQUFtQjtBQUM3QzFCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxPQUFPLENBQUM0QixXQUFXLENBQUM7QUFFekMsSUFBSUMsaUJBQWlCLEdBQUd6QixPQUFPO0FBQy9CeUIsaUJBQWlCLENBQUN4QixJQUFJLENBQUNtQixHQUFHLEdBQUcsc0JBQXNCO0FBQ25ESyxpQkFBaUIsQ0FBQ0osV0FBVyxHQUFHLHlCQUF5QjtBQUN6RDFCLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDQyxPQUFPLENBQUM2QixpQkFBaUIsQ0FBQztBQUVyRCxJQUFJQyxTQUFTLEdBQUcxQixPQUFPO0FBQ3ZCMEIsU0FBUyxDQUFDekIsSUFBSSxDQUFDbUIsR0FBRyxHQUFHLGNBQWM7QUFDbkNNLFNBQVMsQ0FBQ0wsV0FBVyxHQUFHLGlCQUFpQjtBQUN6QzFCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsT0FBTyxDQUFDOEIsU0FBUyxDQUFDO0FBRXJDLElBQUlDLFVBQVUsR0FBRzNCLE9BQU87QUFDeEIyQixVQUFVLENBQUMxQixJQUFJLENBQUNtQixHQUFHLEdBQUcsZUFBZTtBQUNyQ08sVUFBVSxDQUFDTixXQUFXLEdBQUcsa0JBQWtCO0FBQzNDMUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE9BQU8sQ0FBQytCLFVBQVUsQ0FBQztBQUV2QyxJQUFJQyxXQUFXLEdBQUc1QixPQUFPO0FBQ3pCNEIsV0FBVyxDQUFDM0IsSUFBSSxDQUFDbUIsR0FBRyxHQUFHLGdCQUFnQjtBQUN2Q1EsV0FBVyxDQUFDUCxXQUFXLEdBQUcsbUJBQW1CO0FBQzdDMUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLE9BQU8sQ0FBQ2dDLFdBQVcsQ0FBQztBQUV6QyxTQUFTN0IsWUFBWSxHQUFFO0VBQ25CSixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNrQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ3pDO0FBQ0FDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLFVBQVUzQixNQUFNLEVBQUU7RUFDbkM0QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU3QixNQUFNLENBQUM7RUFDbEMsT0FBT0EsTUFBTTtBQUNqQixDQUFDO0FBRUQwQixNQUFNLENBQUNJLFdBQVcsR0FBRyxVQUFVOUIsTUFBTSxFQUFFO0VBQ25DLElBQUkrQixVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ25CLElBQUkvQixNQUFNLENBQUNELElBQUksQ0FBQ2lDLEtBQUssRUFBRTtJQUNuQkQsVUFBVSxDQUFDN0IsWUFBWSxHQUFHRixNQUFNLENBQUNELElBQUksQ0FBQ2lDLEtBQUs7SUFDM0NELFVBQVUsQ0FBQzVCLElBQUksR0FBR0gsTUFBTSxDQUFDRCxJQUFJLENBQUNrQyxNQUFNLEdBQUdqQyxNQUFNLENBQUNELElBQUksQ0FBQ2lDLEtBQUssR0FBRyxDQUFDO0VBQ2hFLENBQUMsTUFDSTtJQUNERCxVQUFVLENBQUNuQixVQUFVLEdBQUcsS0FBSztFQUNqQztFQUNBLElBQUlaLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDbUMsSUFBSSxFQUFFO0lBQ2xCSCxVQUFVLENBQUMsUUFBUSxHQUFHL0IsTUFBTSxDQUFDRCxJQUFJLENBQUNtQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUdsQyxNQUFNLENBQUNELElBQUksQ0FBQ29DLEtBQUs7RUFDckU7RUFDQSxJQUFJNUMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ3pDTixVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUd4QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFO0VBQzFEO0VBQ0EsSUFBSTdDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztJQUMxQ04sVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHeEMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRTtFQUM5RDtFQUNBLElBQUk3QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztJQUM1Q04sVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHeEMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFO0VBQ2xFO0VBQ0EsSUFBSTdDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ2xETixVQUFVLENBQUMscUJBQXFCLENBQUMsR0FBR3hDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRTtFQUM5RTtFQUNBLElBQUk3QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFDMUNOLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBR3hDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUU7RUFDOUQ7RUFDQSxJQUFJN0MsQ0FBQyxDQUFDQSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFDM0NOLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBR3hDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRTtFQUNoRTtFQUVBLElBQUk3QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztJQUM1Q04sVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHeEMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFO0VBQ2xFO0VBRUEsSUFBSXBCLEdBQUcsR0FBRyxnQkFBZ0I7RUFDMUJ6QixDQUFDLENBQUMrQyxHQUFHLENBQUN0QixHQUFHLEdBQUcsR0FBRyxHQUFHekIsQ0FBQyxDQUFDZ0QsS0FBSyxDQUFDUixVQUFVLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQUMsVUFBVUMsR0FBRyxFQUFFO0lBQ3ZELElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNoQ0MsTUFBTSxDQUFDQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0Q3pDLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDO0VBQzFCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7QUMzSEQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtSEFBNEM7QUFDdkUsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELHFCQUFxQixnSUFBZ0Q7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN4QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAtdGFibGUvZGlzdC9ib290c3RyYXAtdGFibGUubWluLmNzcz9hNWUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgJ3RhYmxlZXhwb3J0LmpxdWVyeS5wbHVnaW4nO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2Jvb3RzdHJhcC10YWJsZS5taW4uY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAtdGFibGUnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2V4dGVuc2lvbnMvZXhwb3J0L2Jvb3RzdHJhcC10YWJsZS1leHBvcnQnO1xyXG5cclxuJChcIi5maWx0ZXJTZWxlY3RcIikuc2VsZWN0Mih7XHJcbiAgICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxyXG59KTtcclxuJCgnLmZpbHRlclNlbGVjdCcpLm9uKCdjaGFuZ2UnLHJlZnJlc2hUYWJsZSlcclxuXHJcbmxldCBhcGlDYWxsID0ge1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAzMCxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHBhcmFtcy5wYWdlIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXJhbXMudGVybVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGFbXCJoeWRyYTptZW1iZXJcIl0ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogaXRlbS5uYW1lID8/IGl0ZW0uYWNyb255bVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0cyxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBtb3JlOiBkYXRhW1wiaHlkcmE6dmlld1wiXVtcImh5ZHJhOmxhc3RcIl0gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGFwaVBhcnRpID0gYXBpQ2FsbDtcclxuYXBpUGFydGkuYWpheC51cmwgPSAnL2FwaS9wYXJ0aXMnO1xyXG5hcGlQYXJ0aS5wbGFjZWhvbGRlciA9ICQoJyNwbGFjZWhvbGRlclNlbGVjdFBhcnRpJykuaHRtbCgpID8/IFwiU2VsZWN0IGEgcGFydGlcIjtcclxuJCgnI3NlbGVjdFBhcnRpJykuc2VsZWN0MihhcGlQYXJ0aSk7XHJcblxyXG5sZXQgYXBpUmVnaW9uID0gYXBpQ2FsbDtcclxuYXBpUmVnaW9uLmFqYXgudXJsID0gJy9hcGkvcmVnaW9ucyc7XHJcbmFwaVJlZ2lvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcmVnaW9uXCI7XHJcbiQoJyNzZWxlY3RSZWdpb24nKS5zZWxlY3QyKGFwaVJlZ2lvbik7XHJcblxyXG5sZXQgYXBpUHJvdmluY2UgPSBhcGlDYWxsO1xyXG5hcGlQcm92aW5jZS5hamF4LnVybCA9ICcvYXBpL3Byb3ZpbmNlcyc7XHJcbmFwaVByb3ZpbmNlLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBwcm92aW5jZVwiO1xyXG4kKCcjc2VsZWN0UHJvdmluY2UnKS5zZWxlY3QyKGFwaVByb3ZpbmNlKTtcclxuXHJcbmxldCBhcGlBcnJvbmRpc3NlbWVudCA9IGFwaUNhbGw7XHJcbmFwaUFycm9uZGlzc2VtZW50LmFqYXgudXJsID0gJy9hcGkvYXJyb25kaXNzZW1lbnRzJztcclxuYXBpQXJyb25kaXNzZW1lbnQucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGFycm9uZGlzc2VtZW50XCI7XHJcbiQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpLnNlbGVjdDIoYXBpQXJyb25kaXNzZW1lbnQpO1xyXG5cclxubGV0IGFwaUNhbnRvbiA9IGFwaUNhbGw7XHJcbmFwaUNhbnRvbi5hamF4LnVybCA9ICcvYXBpL2NhbnRvbnMnO1xyXG5hcGlDYW50b24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGNhbnRvblwiO1xyXG4kKCcjc2VsZWN0Q2FudG9uJykuc2VsZWN0MihhcGlDYW50b24pO1xyXG5cclxubGV0IGFwaUNvbW11bmUgPSBhcGlDYWxsO1xyXG5hcGlDb21tdW5lLmFqYXgudXJsID0gJy9hcGkvY29tbXVuZXMnO1xyXG5hcGlDb21tdW5lLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBjb21tdW5lXCI7XHJcbiQoJyNzZWxlY3RDb21tdW5lJykuc2VsZWN0MihhcGlDb21tdW5lKTtcclxuXHJcbmxldCBhcGlFbGVjdGlvbiA9IGFwaUNhbGw7XHJcbmFwaUVsZWN0aW9uLmFqYXgudXJsID0gJy9hcGkvZWxlY3Rpb25zJztcclxuYXBpRWxlY3Rpb24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGVsZWN0aW9uXCI7XHJcbiQoJyNzZWxlY3RFbGVjdGlvbicpLnNlbGVjdDIoYXBpRWxlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFRhYmxlKCl7XHJcbiAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpXHJcbn1cclxud2luZG93LnF1ZXJ5UGFyYW1zID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5UGFyYW1zJywgcGFyYW1zKVxyXG4gICAgcmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxud2luZG93LmFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgbGV0IHBhcmFtZXRlcnMgPSB7fTtcclxuICAgIGlmIChwYXJhbXMuZGF0YS5saW1pdCkge1xyXG4gICAgICAgIHBhcmFtZXRlcnMuaXRlbXNQZXJQYWdlID0gcGFyYW1zLmRhdGEubGltaXQ7XHJcbiAgICAgICAgcGFyYW1ldGVycy5wYWdlID0gcGFyYW1zLmRhdGEub2Zmc2V0IC8gcGFyYW1zLmRhdGEubGltaXQgKyAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcGFyYW1ldGVycy5wYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1zLmRhdGEuc29ydCkge1xyXG4gICAgICAgIHBhcmFtZXRlcnNbJ29yZGVyWycgKyBwYXJhbXMuZGF0YS5zb3J0ICsgJ10nXSA9IHBhcmFtcy5kYXRhLm9yZGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKCQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHBhcmFtZXRlcnNbJ3BhcnRpLmlkJ10gPSAkKCQoJyNzZWxlY3RQYXJ0aScpWzBdKS52YWwoKTtcclxuICAgIH1cclxuICAgIGlmICgkKCQoJyNzZWxlY3RSZWdpb24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgcGFyYW1ldGVyc1snaWRSZWdpb24uaWQnXSA9ICQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKTtcclxuICAgIH1cclxuICAgIGlmICgkKCQoJyNzZWxlY3RQcm92aW5jZScpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcclxuICAgICAgICBwYXJhbWV0ZXJzWydpZFByb3ZpbmNlLmlkJ10gPSAkKCQoJyNzZWxlY3RQcm92aW5jZScpWzBdKS52YWwoKTtcclxuICAgIH1cclxuICAgIGlmICgkKCQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcclxuICAgICAgICBwYXJhbWV0ZXJzWydpZEFycm9uZGlzc2VtZW50LmlkJ10gPSAkKCQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpWzBdKS52YWwoKTtcclxuICAgIH1cclxuICAgIGlmICgkKCQoJyNzZWxlY3RDYW50b24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDYW50b24uaWQnXSA9ICQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKTtcclxuICAgIH1cclxuICAgIGlmICgkKCQoJyNzZWxlY3RDb21tdW5lJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQ29tbXVuZS5pZCddID0gJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgcGFyYW1ldGVyc1snaWRFbGVjdGlvbi5pZCddID0gJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHVybCA9ICcvYXBpL3Jlc3VsdGF0cyc7XHJcbiAgICAkLmdldCh1cmwgKyAnPycgKyAkLnBhcmFtKHBhcmFtZXRlcnMpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzWydoeWRyYTptZW1iZXInXTtcclxuICAgICAgICByZXN1bHQudG90YWwgPSByZXNbJ2h5ZHJhOnRvdGFsSXRlbXMnXTtcclxuICAgICAgICBwYXJhbXMuc3VjY2VzcyhyZXN1bHQpXHJcbiAgICB9KVxyXG59IiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgRlVOQ1RJT05fTkFNRV9FWElTVFMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkVYSVNUUztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZyk7XG52YXIgbmFtZVJFID0gL2Z1bmN0aW9uXFxiKD86XFxzfFxcL1xcKltcXFNcXHNdKj9cXCpcXC98XFwvXFwvW15cXG5cXHJdKltcXG5cXHJdKykqKFteXFxzKC9dKikvO1xudmFyIHJlZ0V4cEV4ZWMgPSB1bmN1cnJ5VGhpcyhuYW1lUkUuZXhlYyk7XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhRlVOQ1RJT05fTkFNRV9FWElTVFMpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVnRXhwRXhlYyhuYW1lUkUsIGZ1bmN0aW9uVG9TdHJpbmcodGhpcykpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsInNlbGVjdDIiLCJ0aGVtZSIsIm9uIiwicmVmcmVzaFRhYmxlIiwiYXBpQ2FsbCIsImFqYXgiLCJkZWxheSIsImRhdGEiLCJwYXJhbXMiLCJxdWVyeSIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJuYW1lIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJpZCIsImFjcm9ueW0iLCJwYWdpbmF0aW9uIiwibW9yZSIsInVuZGVmaW5lZCIsImFwaVBhcnRpIiwidXJsIiwicGxhY2Vob2xkZXIiLCJodG1sIiwiYXBpUmVnaW9uIiwiYXBpUHJvdmluY2UiLCJhcGlBcnJvbmRpc3NlbWVudCIsImFwaUNhbnRvbiIsImFwaUNvbW11bmUiLCJhcGlFbGVjdGlvbiIsImJvb3RzdHJhcFRhYmxlIiwid2luZG93IiwicXVlcnlQYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiYWpheFJlcXVlc3QiLCJwYXJhbWV0ZXJzIiwibGltaXQiLCJvZmZzZXQiLCJzb3J0Iiwib3JkZXIiLCJ2YWwiLCJsZW5ndGgiLCJnZXQiLCJwYXJhbSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9