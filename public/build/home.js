(self["webpackChunk"] = self["webpackChunk"] || []).push([["home"],{

/***/ "./assets/home.js":
/*!************************!*\
  !*** ./assets/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./assets/map.js");
/* harmony import */ var _search_parti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-parti */ "./assets/search-parti.js");
/* harmony import */ var _search_parti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_parti__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ }),

/***/ "./assets/map.js":
/*!***********************!*\
  !*** ./assets/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
/* harmony import */ var chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! chartjs-chart-geo */ "./node_modules/chartjs-chart-geo/build/index.js");
/* harmony import */ var chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! chartjs-chart-geo */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! chartjs-chart-geo */ "./node_modules/d3-geo/src/projection/mercator.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



$(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var belgium, municipalities, projection, data, config, donut;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('/map/belgium-map.json').then(function (r) {
            return r.json();
          })["catch"](function (e) {
            return console.log(e);
          });
        case 2:
          belgium = _context.sent;
          municipalities = chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_26__.feature(belgium, belgium.objects.municipalities).features;
          projection = chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_27__["default"]();
          new chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_28__.ChoroplethChart(document.getElementById('mapMap').getContext('2d'), {
            type: 'choropleth',
            data: {
              labels: municipalities.map(function (d) {
                return d.properties.name_fr;
              }),
              datasets: [{
                label: 'municipalities',
                outline: municipalities,
                data: municipalities.map(function (d) {
                  return {
                    feature: d,
                    value: d.properties.name_fr ? d.properties.population : 10
                  };
                })
              }]
            },
            options: {
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                projection: {
                  axis: 'x',
                  projection: projection
                }
              }
            }
          });

          // DONUT
          data = {
            responsive: true,
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              hoverOffset: 1
            }]
          };
          config = {
            type: 'doughnut',
            data: data,
            options: {
              rotation: -90,
              circumference: 180
            }
          };
          donut = new chart_js_auto__WEBPACK_IMPORTED_MODULE_25__["default"](document.getElementById('donutGraph').getContext('2d'), config);
          window.addEventListener('before', function () {
            donut.resize(500, 500);
          });
          window.addEventListener('afterprint', function () {
            donut.resize();
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ }),

/***/ "./assets/search-parti.js":
/*!********************************!*\
  !*** ./assets/search-parti.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _$$html;
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
$('.parti-search').on('change', function (e) {
  window.location.href = 'parti/' + $(this).val();
});
$(".filterSelect").select2({
  theme: "bootstrap-5"
});
var apiCall = {
  ajax: {
    delay: 1000,
    data: function data(params) {
      var query = {
        itemsPerPage: 30,
        page: params.page || 1,
        logo: params.term
      };
      return query;
    },
    processResults: function processResults(data) {
      var results = data["hydra:member"].map(function (item) {
        return {
          "id": item.id,
          "text": item.acronym
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-a257e2","vendors-node_modules_chart_js_auto_auto_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-d9685c"], () => (__webpack_exec__("./assets/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsVUFBQ3lDLElBQUksRUFBSztRQUM3QyxPQUFPO1VBQ0gsSUFBSSxFQUFFQSxJQUFJLENBQUNDLEVBQUU7VUFDYixNQUFNLEVBQUVELElBQUksQ0FBQ0U7UUFDakIsQ0FBQztNQUNMLENBQUMsQ0FBQztNQUNGLE9BQU87UUFDSEgsT0FBTyxFQUFQQSxPQUFPO1FBQ1BJLFVBQVUsRUFBRTtVQUNSQyxJQUFJLEVBQUUvQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUtnRDtRQUMvQztNQUNKLENBQUM7SUFDTDtFQUNKO0FBQ0osQ0FBQztBQUVELElBQUlDLFFBQVEsR0FBR2pCLE9BQU87QUFDdEJpQixRQUFRLENBQUNoQixJQUFJLENBQUNpQixHQUFHLEdBQUcsYUFBYTtBQUNqQ0QsUUFBUSxDQUFDRSxXQUFXLGNBQUdqRixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2tGLElBQUksRUFBRSw2Q0FBSSxnQkFBZ0I7QUFDOUVsRixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM0RCxPQUFPLENBQUNtQixRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZWFyY2gtcGFydGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnLi9tYXAnO1xyXG5pbXBvcnQgJy4vc2VhcmNoLXBhcnRpJztcclxuJChcIiNzd2l0Y2hlck1hcFwiKS5vbiggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKCQoJy5pbm5lcicpLmhhc0NsYXNzKCdsZWZ0Jykpe1xyXG4gICAgICAgICQoJy5pbm5lcicpLnJlbW92ZUNsYXNzKCdsZWZ0Jyk7XHJcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICcwJSd9KTtcclxuICAgICAgICAkKCcjbWFwJykucmVtb3ZlQ2xhc3MoJ3RleHQtZW5kJyk7XHJcbiAgICAgICAgJCgnI21hcCcpLmFkZENsYXNzKCd0ZXh0LWNlbnRlcicpO1xyXG4gICAgICAgICQoJyNkb251dCcpLmFkZENsYXNzKCd0ZXh0LXN0YXJ0Jyk7XHJcbiAgICAgICAgJCgnI2RvbnV0JykucmVtb3ZlQ2xhc3MoJ3RleHQtY2VudGVyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5pbm5lcicpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbiAgICAgICAgJCgnLmlubmVyJykuYW5pbWF0ZSh7cmlnaHQ6ICc1MCUnfSk7ICAgIFxyXG4gICAgICAgICQoJyNkb251dCcpLnJlbW92ZUNsYXNzKCd0ZXh0LXN0YXJ0Jyk7XHJcbiAgICAgICAgJCgnI2RvbnV0JykuYWRkQ2xhc3MoJ3RleHQtY2VudGVyJyk7XHJcbiAgICAgICAgJCgnI21hcCcpLmFkZENsYXNzKCd0ZXh0LWVuZCcpO1xyXG4gICAgICAgICQoJyNtYXAnKS5yZW1vdmVDbGFzcygndGV4dC1jZW50ZXInKTtcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xyXG5pbXBvcnQgeyBDaG9yb3BsZXRoQ2hhcnQgfSBmcm9tICdjaGFydGpzLWNoYXJ0LWdlbyc7XHJcbmltcG9ydCAqIGFzIENoYXJ0R2VvIGZyb20gJ2NoYXJ0anMtY2hhcnQtZ2VvJztcclxuJChkb2N1bWVudCkucmVhZHkoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYmVsZ2l1bSA9IGF3YWl0IGZldGNoKCcvbWFwL2JlbGdpdW0tbWFwLmpzb24nKS50aGVuKHIgPT4ge1xyXG4gICAgICAgIHJldHVybiByLmpzb24oKTtcclxuICAgIH0pLmNhdGNoKGUgPT5cclxuICAgICAgICBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgY29uc3QgbXVuaWNpcGFsaXRpZXMgPSBDaGFydEdlby50b3BvanNvbi5mZWF0dXJlKGJlbGdpdW0sIGJlbGdpdW0ub2JqZWN0cy5tdW5pY2lwYWxpdGllcykuZmVhdHVyZXM7XHJcbiAgICB2YXIgcHJvamVjdGlvbiA9IENoYXJ0R2VvLmdlb01lcmNhdG9yKClcclxuICAgIG5ldyBDaG9yb3BsZXRoQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcE1hcCcpLmdldENvbnRleHQoJzJkJyksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hvcm9wbGV0aCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogbXVuaWNpcGFsaXRpZXMubWFwKChkKSA9PiAoZC5wcm9wZXJ0aWVzLm5hbWVfZnIpKSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ211bmljaXBhbGl0aWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbXVuaWNpcGFsaXRpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG11bmljaXBhbGl0aWVzLm1hcCgoZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGQucHJvcGVydGllcy5uYW1lX2ZyID8gZC5wcm9wZXJ0aWVzLnBvcHVsYXRpb24gOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBheGlzOiAneCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246IHByb2plY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIC8vIERPTlVUXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICdSZWQnLFxyXG4gICAgICAgICAgICAnQmx1ZScsXHJcbiAgICAgICAgICAgICdZZWxsb3cnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBEYXRhc2V0JyxcclxuICAgICAgICAgICAgZGF0YTogWzMwMCwgNTAsIDEwMF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgJ3JnYigyNTUsIDk5LCAxMzIpJyxcclxuICAgICAgICAgICAgICAgICdyZ2IoNTQsIDE2MiwgMjM1KScsXHJcbiAgICAgICAgICAgICAgICAncmdiKDI1NSwgMjA1LCA4NiknXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGhvdmVyT2Zmc2V0OiAxXHJcbiAgICAgICAgfV1cclxuICAgIH07XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcm90YXRpb246IC05MCxcclxuICAgICAgICAgICAgY2lyY3VtZmVyZW5jZTogMTgwLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgZG9udXQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbnV0R3JhcGgnKS5nZXRDb250ZXh0KCcyZCcpLCBjb25maWcpXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZScsICgpID0+IHtcclxuICAgICAgICBkb251dC5yZXNpemUoNTAwLCA1MDApO1xyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgICBkb251dC5yZXNpemUoKTtcclxuICAgIH0pO1xyXG59KVxyXG4iLCIkKCcucGFydGktc2VhcmNoJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdwYXJ0aS8nICsgJCh0aGlzKS52YWwoKTtcclxufSk7XHJcblxyXG4kKFwiLmZpbHRlclNlbGVjdFwiKS5zZWxlY3QyKHtcclxuICAgIHRoZW1lOiBcImJvb3RzdHJhcC01XCIsXHJcbn0pO1xyXG5cclxubGV0IGFwaUNhbGwgPSB7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1BlclBhZ2U6IDMwLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMSxcclxuICAgICAgICAgICAgICAgIGxvZ286IHBhcmFtcy50ZXJtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gZGF0YVtcImh5ZHJhOm1lbWJlclwiXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBpdGVtLmFjcm9ueW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZTogZGF0YVtcImh5ZHJhOnZpZXdcIl1bXCJoeWRyYTpsYXN0XCJdICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBhcGlQYXJ0aSA9IGFwaUNhbGw7XHJcbmFwaVBhcnRpLmFqYXgudXJsID0gJy9hcGkvcGFydGlzJztcclxuYXBpUGFydGkucGxhY2Vob2xkZXIgPSAkKCcjcGxhY2Vob2xkZXJTZWxlY3RQYXJ0aScpLmh0bWwoKSA/PyBcIlNlbGVjdCBhIHBhcnRpXCI7XHJcbiQoJyNzZWxlY3RQYXJ0aScpLnNlbGVjdDIoYXBpUGFydGkpOyJdLCJuYW1lcyI6WyIkIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYW5pbWF0ZSIsInJpZ2h0IiwiYWRkQ2xhc3MiLCJDaGFydCIsIkNob3JvcGxldGhDaGFydCIsIkNoYXJ0R2VvIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJiZWxnaXVtIiwibXVuaWNpcGFsaXRpZXMiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZmVhdHVyZXMiLCJwcm9qZWN0aW9uIiwiZ2VvTWVyY2F0b3IiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsIm1hcCIsImQiLCJwcm9wZXJ0aWVzIiwibmFtZV9mciIsImRhdGFzZXRzIiwibGFiZWwiLCJvdXRsaW5lIiwidmFsdWUiLCJwb3B1bGF0aW9uIiwib3B0aW9ucyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5Iiwic2NhbGVzIiwiYXhpcyIsInJlc3BvbnNpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJob3Zlck9mZnNldCIsImNvbmZpZyIsInJvdGF0aW9uIiwiY2lyY3VtZmVyZW5jZSIsImRvbnV0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsImxvY2F0aW9uIiwiaHJlZiIsInZhbCIsInNlbGVjdDIiLCJ0aGVtZSIsImFwaUNhbGwiLCJhamF4IiwiZGVsYXkiLCJwYXJhbXMiLCJxdWVyeSIsIml0ZW1zUGVyUGFnZSIsInBhZ2UiLCJsb2dvIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicmVzdWx0cyIsIml0ZW0iLCJpZCIsImFjcm9ueW0iLCJwYWdpbmF0aW9uIiwibW9yZSIsInVuZGVmaW5lZCIsImFwaVBhcnRpIiwidXJsIiwicGxhY2Vob2xkZXIiLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==