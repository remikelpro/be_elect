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
  $.get(url + '?' + $.param(parameters)).then(function (res) {
    var result = res['hydra:member'];
    result.total = res['hydra:totalItems'];
    params.success(result);
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-65eb85","vendors-node_modules_bootstrap-table_dist_bootstrap-table_min_js-node_modules_bootstrap-table-51d94c"], () => (__webpack_exec__("./assets/table.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtQztBQUNtQjtBQUM3QjtBQUM4QztBQUV2RUEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxPQUFPLENBQUM7RUFDdkJDLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQztBQUNGRixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUNDLFlBQVksQ0FBQztBQUU1QyxJQUFJQyxPQUFPLEdBQUc7RUFDVkMsSUFBSSxFQUFFO0lBQ0ZDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLElBQUksRUFBRSxjQUFVQyxNQUFNLEVBQUU7TUFDcEIsSUFBSUMsS0FBSyxHQUFHO1FBQ1JDLFlBQVksRUFBRSxFQUFFO1FBQ2hCQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBSSxJQUFJLENBQUM7UUFDdEJDLElBQUksRUFBRUosTUFBTSxDQUFDSztNQUNqQixDQUFDO01BQ0QsT0FBT0osS0FBSztJQUNoQixDQUFDO0lBQ0RLLGNBQWMsRUFBRSx3QkFBVVAsSUFBSSxFQUFFO01BQzVCLElBQUlRLE9BQU8sR0FBR1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDUyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1FBQUE7UUFDN0MsT0FBTztVQUNILElBQUksRUFBRUEsSUFBSSxDQUFDQyxFQUFFO1VBQ2IsTUFBTSxnQkFBRUQsSUFBSSxDQUFDTCxJQUFJLG1EQUFJSyxJQUFJLENBQUNFO1FBQzlCLENBQUM7TUFDTCxDQUFDLENBQUM7TUFDRixPQUFPO1FBQ0hKLE9BQU8sRUFBUEEsT0FBTztRQUNQSyxVQUFVLEVBQUU7VUFDUkMsSUFBSSxFQUFFZCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUtlO1FBQy9DO01BQ0osQ0FBQztJQUNMO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBSUMsUUFBUSxHQUFHbkIsT0FBTztBQUN0Qm1CLFFBQVEsQ0FBQ2xCLElBQUksQ0FBQ21CLEdBQUcsR0FBRyxhQUFhO0FBQ2pDRCxRQUFRLENBQUNFLFdBQVcsY0FBRzFCLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDMkIsSUFBSSxFQUFFLDZDQUFJLGdCQUFnQjtBQUM5RTNCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsT0FBTyxDQUFDdUIsUUFBUSxDQUFDO0FBRW5DLElBQUlJLFNBQVMsR0FBR3ZCLE9BQU87QUFDdkJ1QixTQUFTLENBQUN0QixJQUFJLENBQUNtQixHQUFHLEdBQUcsY0FBYztBQUNuQ0csU0FBUyxDQUFDRixXQUFXLEdBQUcsaUJBQWlCO0FBQ3pDMUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxPQUFPLENBQUMyQixTQUFTLENBQUM7QUFFckMsSUFBSUMsV0FBVyxHQUFHeEIsT0FBTztBQUN6QndCLFdBQVcsQ0FBQ3ZCLElBQUksQ0FBQ21CLEdBQUcsR0FBRyxnQkFBZ0I7QUFDdkNJLFdBQVcsQ0FBQ0gsV0FBVyxHQUFHLG1CQUFtQjtBQUM3QzFCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxPQUFPLENBQUM0QixXQUFXLENBQUM7QUFFekMsSUFBSUMsaUJBQWlCLEdBQUd6QixPQUFPO0FBQy9CeUIsaUJBQWlCLENBQUN4QixJQUFJLENBQUNtQixHQUFHLEdBQUcsc0JBQXNCO0FBQ25ESyxpQkFBaUIsQ0FBQ0osV0FBVyxHQUFHLHlCQUF5QjtBQUN6RDFCLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDQyxPQUFPLENBQUM2QixpQkFBaUIsQ0FBQztBQUVyRCxJQUFJQyxTQUFTLEdBQUcxQixPQUFPO0FBQ3ZCMEIsU0FBUyxDQUFDekIsSUFBSSxDQUFDbUIsR0FBRyxHQUFHLGNBQWM7QUFDbkNNLFNBQVMsQ0FBQ0wsV0FBVyxHQUFHLGlCQUFpQjtBQUN6QzFCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsT0FBTyxDQUFDOEIsU0FBUyxDQUFDO0FBRXJDLElBQUlDLFVBQVUsR0FBRzNCLE9BQU87QUFDeEIyQixVQUFVLENBQUMxQixJQUFJLENBQUNtQixHQUFHLEdBQUcsZUFBZTtBQUNyQ08sVUFBVSxDQUFDTixXQUFXLEdBQUcsa0JBQWtCO0FBQzNDMUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE9BQU8sQ0FBQytCLFVBQVUsQ0FBQztBQUV2QyxJQUFJQyxXQUFXLEdBQUc1QixPQUFPO0FBQ3pCNEIsV0FBVyxDQUFDM0IsSUFBSSxDQUFDbUIsR0FBRyxHQUFHLGdCQUFnQjtBQUN2Q1EsV0FBVyxDQUFDUCxXQUFXLEdBQUcsbUJBQW1CO0FBQzdDMUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLE9BQU8sQ0FBQ2dDLFdBQVcsQ0FBQztBQUV6QyxTQUFTN0IsWUFBWSxHQUFFO0VBQ25CSixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNrQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ3pDO0FBQ0FDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLFVBQVUzQixNQUFNLEVBQUU7RUFDbkM0QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU3QixNQUFNLENBQUM7RUFDbEMsT0FBT0EsTUFBTTtBQUNqQixDQUFDO0FBRUQwQixNQUFNLENBQUNJLFdBQVcsR0FBRyxVQUFVOUIsTUFBTSxFQUFFO0VBQ25DLElBQUkrQixVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ25CLElBQUkvQixNQUFNLENBQUNELElBQUksQ0FBQ2lDLEtBQUssRUFBRTtJQUNuQkQsVUFBVSxDQUFDN0IsWUFBWSxHQUFHRixNQUFNLENBQUNELElBQUksQ0FBQ2lDLEtBQUs7SUFDM0NELFVBQVUsQ0FBQzVCLElBQUksR0FBR0gsTUFBTSxDQUFDRCxJQUFJLENBQUNrQyxNQUFNLEdBQUdqQyxNQUFNLENBQUNELElBQUksQ0FBQ2lDLEtBQUssR0FBRyxDQUFDO0VBQ2hFLENBQUMsTUFDSTtJQUNERCxVQUFVLENBQUNuQixVQUFVLEdBQUcsS0FBSztFQUNqQztFQUNBLElBQUlaLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDbUMsSUFBSSxFQUFFO0lBQ2xCSCxVQUFVLENBQUMsUUFBUSxHQUFHL0IsTUFBTSxDQUFDRCxJQUFJLENBQUNtQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUdsQyxNQUFNLENBQUNELElBQUksQ0FBQ29DLEtBQUs7RUFDckU7RUFDQSxJQUFJNUMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ3pDTixVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUd4QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFO0VBQzVEO0VBQ0EsSUFBSTdDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztJQUMxQ04sVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHeEMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRTtFQUM5RDtFQUNBLElBQUk3QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztJQUM1Q04sVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHeEMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFO0VBQ2xFO0VBQ0EsSUFBSTdDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0lBQ2xETixVQUFVLENBQUMscUJBQXFCLENBQUMsR0FBR3hDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRTtFQUM5RTtFQUNBLElBQUk3QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFDMUNOLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBR3hDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUU7RUFDOUQ7RUFDQSxJQUFJN0MsQ0FBQyxDQUFDQSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFDM0NOLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBR3hDLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEdBQUcsRUFBRTtFQUNoRTtFQUVBLElBQUk3QyxDQUFDLENBQUNBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2QyxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztJQUM1Q04sVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHeEMsQ0FBQyxDQUFDQSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNkMsR0FBRyxFQUFFO0VBQ2xFO0VBRUEsSUFBSXBCLEdBQUcsR0FBRyxnQkFBZ0I7RUFDMUJ6QixDQUFDLENBQUMrQyxHQUFHLENBQUN0QixHQUFHLEdBQUcsR0FBRyxHQUFHekIsQ0FBQyxDQUFDZ0QsS0FBSyxDQUFDUixVQUFVLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQUMsVUFBVUMsR0FBRyxFQUFFO0lBQ3ZELElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNoQ0MsTUFBTSxDQUFDQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0Q3pDLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDO0VBQzFCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7QUMzSEQsV0FBVyxtQkFBTyxDQUFDLHFHQUFvQztBQUN2RCxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msd0JBQXdCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ25FLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFcEU7O0FBRUEsc0JBQXNCLGtFQUFrRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLFVBQVU7QUFDViw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hFQSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNsQkEsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7Ozs7Ozs7OztBQ3JCQSw4QkFBOEIsbUJBQU8sQ0FBQyw2R0FBd0M7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkEsa0JBQWtCLG1CQUFPLENBQUMsbUhBQTJDO0FBQ3JFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxrQkFBa0IsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQSxjQUFjLG1CQUFPLENBQUMsaUZBQTBCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEEsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkRZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG9IQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDZEQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtSEFBNEM7QUFDdkUsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELHFCQUFxQixnSUFBZ0Q7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN4QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC10YWJsZS9kaXN0L2Jvb3RzdHJhcC10YWJsZS5taW4uY3NzP2E1ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ3RhYmxlZXhwb3J0LmpxdWVyeS5wbHVnaW4nO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUvZGlzdC9ib290c3RyYXAtdGFibGUubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZS9kaXN0L2V4dGVuc2lvbnMvZXhwb3J0L2Jvb3RzdHJhcC10YWJsZS1leHBvcnQnO1xuXG4kKFwiLmZpbHRlclNlbGVjdFwiKS5zZWxlY3QyKHtcbiAgICB0aGVtZTogXCJib290c3RyYXAtNVwiLFxufSk7XG4kKCcuZmlsdGVyU2VsZWN0Jykub24oJ2NoYW5nZScscmVmcmVzaFRhYmxlKVxuXG5sZXQgYXBpQ2FsbCA9IHtcbiAgICBhamF4OiB7XG4gICAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAzMCxcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmFtcy50ZXJtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBkYXRhW1wiaHlkcmE6bWVtYmVyXCJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IGl0ZW0ubmFtZSA/PyBpdGVtLmFjcm9ueW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbW9yZTogZGF0YVtcImh5ZHJhOnZpZXdcIl1bXCJoeWRyYTpsYXN0XCJdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgYXBpUGFydGkgPSBhcGlDYWxsO1xuYXBpUGFydGkuYWpheC51cmwgPSAnL2FwaS9wYXJ0aXMnO1xuYXBpUGFydGkucGxhY2Vob2xkZXIgPSAkKCcjcGxhY2Vob2xkZXJTZWxlY3RQYXJ0aScpLmh0bWwoKSA/PyBcIlNlbGVjdCBhIHBhcnRpXCI7XG4kKCcjc2VsZWN0UGFydGknKS5zZWxlY3QyKGFwaVBhcnRpKTtcblxubGV0IGFwaVJlZ2lvbiA9IGFwaUNhbGw7XG5hcGlSZWdpb24uYWpheC51cmwgPSAnL2FwaS9yZWdpb25zJztcbmFwaVJlZ2lvbi5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgcmVnaW9uXCI7XG4kKCcjc2VsZWN0UmVnaW9uJykuc2VsZWN0MihhcGlSZWdpb24pO1xuXG5sZXQgYXBpUHJvdmluY2UgPSBhcGlDYWxsO1xuYXBpUHJvdmluY2UuYWpheC51cmwgPSAnL2FwaS9wcm92aW5jZXMnO1xuYXBpUHJvdmluY2UucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIHByb3ZpbmNlXCI7XG4kKCcjc2VsZWN0UHJvdmluY2UnKS5zZWxlY3QyKGFwaVByb3ZpbmNlKTtcblxubGV0IGFwaUFycm9uZGlzc2VtZW50ID0gYXBpQ2FsbDtcbmFwaUFycm9uZGlzc2VtZW50LmFqYXgudXJsID0gJy9hcGkvYXJyb25kaXNzZW1lbnRzJztcbmFwaUFycm9uZGlzc2VtZW50LnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBhcnJvbmRpc3NlbWVudFwiO1xuJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50Jykuc2VsZWN0MihhcGlBcnJvbmRpc3NlbWVudCk7XG5cbmxldCBhcGlDYW50b24gPSBhcGlDYWxsO1xuYXBpQ2FudG9uLmFqYXgudXJsID0gJy9hcGkvY2FudG9ucyc7XG5hcGlDYW50b24ucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGNhbnRvblwiO1xuJCgnI3NlbGVjdENhbnRvbicpLnNlbGVjdDIoYXBpQ2FudG9uKTtcblxubGV0IGFwaUNvbW11bmUgPSBhcGlDYWxsO1xuYXBpQ29tbXVuZS5hamF4LnVybCA9ICcvYXBpL2NvbW11bmVzJztcbmFwaUNvbW11bmUucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGNvbW11bmVcIjtcbiQoJyNzZWxlY3RDb21tdW5lJykuc2VsZWN0MihhcGlDb21tdW5lKTtcblxubGV0IGFwaUVsZWN0aW9uID0gYXBpQ2FsbDtcbmFwaUVsZWN0aW9uLmFqYXgudXJsID0gJy9hcGkvZWxlY3Rpb25zJztcbmFwaUVsZWN0aW9uLnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBlbGVjdGlvblwiO1xuJCgnI3NlbGVjdEVsZWN0aW9uJykuc2VsZWN0MihhcGlFbGVjdGlvbik7XG5cbmZ1bmN0aW9uIHJlZnJlc2hUYWJsZSgpe1xuICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJylcbn1cbndpbmRvdy5xdWVyeVBhcmFtcyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygncXVlcnlQYXJhbXMnLCBwYXJhbXMpXG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxud2luZG93LmFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCBwYXJhbWV0ZXJzID0ge307XG4gICAgaWYgKHBhcmFtcy5kYXRhLmxpbWl0KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuaXRlbXNQZXJQYWdlID0gcGFyYW1zLmRhdGEubGltaXQ7XG4gICAgICAgIHBhcmFtZXRlcnMucGFnZSA9IHBhcmFtcy5kYXRhLm9mZnNldCAvIHBhcmFtcy5kYXRhLmxpbWl0ICsgMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmFtZXRlcnMucGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmRhdGEuc29ydCkge1xuICAgICAgICBwYXJhbWV0ZXJzWydvcmRlclsnICsgcGFyYW1zLmRhdGEuc29ydCArICddJ10gPSBwYXJhbXMuZGF0YS5vcmRlcjtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFBhcnRpJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFBhcnR5LmlkJ10gPSAkKCQoJyNzZWxlY3RQYXJ0aScpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRSZWdpb24uaWQnXSA9ICQoJCgnI3NlbGVjdFJlZ2lvbicpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdFByb3ZpbmNlJylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZFByb3ZpbmNlLmlkJ10gPSAkKCQoJyNzZWxlY3RQcm92aW5jZScpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdEFycm9uZGlzc2VtZW50JylbMF0pLnZhbCgpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbWV0ZXJzWydpZEFycm9uZGlzc2VtZW50LmlkJ10gPSAkKCQoJyNzZWxlY3RBcnJvbmRpc3NlbWVudCcpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYW1ldGVyc1snaWRDYW50b24uaWQnXSA9ICQoJCgnI3NlbGVjdENhbnRvbicpWzBdKS52YWwoKTtcbiAgICB9XG4gICAgaWYgKCQoJCgnI3NlbGVjdENvbW11bmUnKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkQ29tbXVuZS5pZCddID0gJCgkKCcjc2VsZWN0Q29tbXVuZScpWzBdKS52YWwoKTtcbiAgICB9XG5cbiAgICBpZiAoJCgkKCcjc2VsZWN0RWxlY3Rpb24nKVswXSkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgIHBhcmFtZXRlcnNbJ2lkRWxlY3Rpb24uaWQnXSA9ICQoJCgnI3NlbGVjdEVsZWN0aW9uJylbMF0pLnZhbCgpO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSAnL2FwaS9yZXN1bHRhdHMnO1xuICAgICQuZ2V0KHVybCArICc/JyArICQucGFyYW0ocGFyYW1ldGVycykpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgcmVzdWx0LnRvdGFsID0gcmVzWydoeWRyYTp0b3RhbEl0ZW1zJ107XG4gICAgICAgIHBhcmFtcy5zdWNjZXNzKHJlc3VsdClcbiAgICB9KVxufSIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlclJlamVjdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBJU19GSUxURVJfUkVKRUNUID0gVFlQRSA9PSA3O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShzZWxmKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgJEFycmF5ID0gQXJyYXk7XG5cbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09ICRBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDO1xufTtcbiIsInZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gTmFzaG9ybiBidWc6XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMjhcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEzMFxuICBpZiAoY2xhc3NvZlJhdyhmbikgPT09ICdGdW5jdGlvbicpIHJldHVybiB1bmN1cnJ5VGhpcyhmbik7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIGVtcHR5ID0gW107XG52YXIgY29uc3RydWN0ID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdjb25zdHJ1Y3QnKTtcbnZhciBjb25zdHJ1Y3RvclJlZ0V4cCA9IC9eXFxzKig/OmNsYXNzfGZ1bmN0aW9uKVxcYi87XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGNvbnN0cnVjdG9yUmVnRXhwLmV4ZWMpO1xudmFyIElOQ09SUkVDVF9UT19TVFJJTkcgPSAhY29uc3RydWN0b3JSZWdFeHAuZXhlYyhub29wKTtcblxudmFyIGlzQ29uc3RydWN0b3JNb2Rlcm4gPSBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG4gIGlmICghaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBmYWxzZTtcbiAgdHJ5IHtcbiAgICBjb25zdHJ1Y3Qobm9vcCwgZW1wdHksIGFyZ3VtZW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBpc0NvbnN0cnVjdG9yTGVnYWN5ID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gIHN3aXRjaCAoY2xhc3NvZihhcmd1bWVudCkpIHtcbiAgICBjYXNlICdBc3luY0Z1bmN0aW9uJzpcbiAgICBjYXNlICdHZW5lcmF0b3JGdW5jdGlvbic6XG4gICAgY2FzZSAnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbic6IHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIC8vIHdlIGNhbid0IGNoZWNrIC5wcm90b3R5cGUgc2luY2UgY29uc3RydWN0b3JzIHByb2R1Y2VkIGJ5IC5iaW5kIGhhdmVuJ3QgaXRcbiAgICAvLyBgRnVuY3Rpb24jdG9TdHJpbmdgIHRocm93cyBvbiBzb21lIGJ1aWx0LWl0IGZ1bmN0aW9uIGluIHNvbWUgbGVnYWN5IGVuZ2luZXNcbiAgICAvLyAoZm9yIGV4YW1wbGUsIGBET01RdWFkYCBhbmQgc2ltaWxhciBpbiBGRjQxLSlcbiAgICByZXR1cm4gSU5DT1JSRUNUX1RPX1NUUklORyB8fCAhIWV4ZWMoY29uc3RydWN0b3JSZWdFeHAsIGluc3BlY3RTb3VyY2UoYXJndW1lbnQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuaXNDb25zdHJ1Y3RvckxlZ2FjeS5zaGFtID0gdHJ1ZTtcblxuLy8gYElzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9ICFjb25zdHJ1Y3QgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgY2FsbGVkO1xuICByZXR1cm4gaXNDb25zdHJ1Y3Rvck1vZGVybihpc0NvbnN0cnVjdG9yTW9kZXJuLmNhbGwpXG4gICAgfHwgIWlzQ29uc3RydWN0b3JNb2Rlcm4oT2JqZWN0KVxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZTsgfSlcbiAgICB8fCBjYWxsZWQ7XG59KSA/IGlzQ29uc3RydWN0b3JMZWdhY3kgOiBpc0NvbnN0cnVjdG9yTW9kZXJuO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIEZVTkNUSU9OX05BTUVfRVhJU1RTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5FWElTVFM7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xudmFyIG5hbWVSRSA9IC9mdW5jdGlvblxcYig/Olxcc3xcXC9cXCpbXFxTXFxzXSo/XFwqXFwvfFxcL1xcL1teXFxuXFxyXSpbXFxuXFxyXSspKihbXlxccygvXSopLztcbnZhciByZWdFeHBFeGVjID0gdW5jdXJyeVRoaXMobmFtZVJFLmV4ZWMpO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIUZVTkNUSU9OX05BTUVfRVhJU1RTKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJzZWxlY3QyIiwidGhlbWUiLCJvbiIsInJlZnJlc2hUYWJsZSIsImFwaUNhbGwiLCJhamF4IiwiZGVsYXkiLCJkYXRhIiwicGFyYW1zIiwicXVlcnkiLCJpdGVtc1BlclBhZ2UiLCJwYWdlIiwibmFtZSIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJhY3JvbnltIiwicGFnaW5hdGlvbiIsIm1vcmUiLCJ1bmRlZmluZWQiLCJhcGlQYXJ0aSIsInVybCIsInBsYWNlaG9sZGVyIiwiaHRtbCIsImFwaVJlZ2lvbiIsImFwaVByb3ZpbmNlIiwiYXBpQXJyb25kaXNzZW1lbnQiLCJhcGlDYW50b24iLCJhcGlDb21tdW5lIiwiYXBpRWxlY3Rpb24iLCJib290c3RyYXBUYWJsZSIsIndpbmRvdyIsInF1ZXJ5UGFyYW1zIiwiY29uc29sZSIsImxvZyIsImFqYXhSZXF1ZXN0IiwicGFyYW1ldGVycyIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydCIsIm9yZGVyIiwidmFsIiwibGVuZ3RoIiwiZ2V0IiwicGFyYW0iLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==