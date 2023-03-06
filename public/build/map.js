"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["map"],{

/***/ "./assets/map.js":
/*!***********************!*\
  !*** ./assets/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
          console.log('asd');
          _context.next = 3;
          return fetch('/map/belgium-map.json').then(function (r) {
            return r.json();
          })["catch"](function (e) {
            return console.log(e);
          });
        case 3:
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
        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-5f4fa7","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-bb9f4d"], () => (__webpack_exec__("./assets/map.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLEVBQUU7WUFDbkI7VUFDRixDQUFDO1VBQ0dDLEtBQUssR0FBRyxJQUFJL0Msc0RBQUssQ0FBQ0ksUUFBUSxDQUFDaUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUVzQixNQUFNLENBQUM7VUFFckZJLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07WUFDcENGLEtBQUssQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7VUFDMUIsQ0FBQyxDQUFDO1VBQ0ZGLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07WUFDeENGLEtBQUssQ0FBQ0csTUFBTSxFQUFFO1VBQ2xCLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBLENBQ04sR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nXG5pbXBvcnQgeyBDaG9yb3BsZXRoQ2hhcnQgfSBmcm9tICdjaGFydGpzLWNoYXJ0LWdlbyc7XG5pbXBvcnQgKiBhcyBDaGFydEdlbyBmcm9tICdjaGFydGpzLWNoYXJ0LWdlbyc7XG4kKGRvY3VtZW50KS5yZWFkeShhc3luYyAoKT0+e1xuICAgIGNvbnNvbGUubG9nKCdhc2QnKTtcbiAgICBjb25zdCBiZWxnaXVtID0gYXdhaXQgZmV0Y2goJy9tYXAvYmVsZ2l1bS1tYXAuanNvbicpLnRoZW4ociA9PiB7XG4gICAgICAgIHJldHVybiByLmpzb24oKTtcbiAgICB9KS5jYXRjaChlID0+XG4gICAgICAgIGNvbnNvbGUubG9nKGUpKTtcbiAgICBcbiAgICBjb25zdCBtdW5pY2lwYWxpdGllcyA9IENoYXJ0R2VvLnRvcG9qc29uLmZlYXR1cmUoYmVsZ2l1bSwgYmVsZ2l1bS5vYmplY3RzLm11bmljaXBhbGl0aWVzKS5mZWF0dXJlcztcbiAgICB2YXIgcHJvamVjdGlvbiA9IENoYXJ0R2VvLmdlb01lcmNhdG9yKClcbiAgICBuZXcgQ2hvcm9wbGV0aENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBNYXAnKS5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnY2hvcm9wbGV0aCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBtdW5pY2lwYWxpdGllcy5tYXAoKGQpID0+IChkLnByb3BlcnRpZXMubmFtZV9mcikpLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnbXVuaWNpcGFsaXRpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbXVuaWNpcGFsaXRpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtdW5pY2lwYWxpdGllcy5tYXAoKGQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkLnByb3BlcnRpZXMubmFtZV9mciA/IGQucHJvcGVydGllcy5wb3B1bGF0aW9uIDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXM6ICd4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246IHByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgIFxuICAgIC8vIERPTlVUXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAnUmVkJyxcbiAgICAgICAgICAgICdCbHVlJyxcbiAgICAgICAgICAgICdZZWxsb3cnXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBEYXRhc2V0JyxcbiAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICAgJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgICAgICAgICAncmdiKDU0LCAxNjIsIDIzNSknLFxuICAgICAgICAgICAgICAgICdyZ2IoMjU1LCAyMDUsIDg2KSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBob3Zlck9mZnNldDogMVxuICAgICAgICB9XVxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcm90YXRpb246IC05MCxcbiAgICAgICAgICBjaXJjdW1mZXJlbmNlOiAxODAsXG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgZG9udXQgPSBuZXcgQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbnV0R3JhcGgnKS5nZXRDb250ZXh0KCcyZCcpLCBjb25maWcpXG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZScsICgpID0+IHtcbiAgICAgICAgZG9udXQucmVzaXplKDUwMCwgNTAwKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcbiAgICAgICAgZG9udXQucmVzaXplKCk7XG4gICAgfSk7XG59KVxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiQ2hvcm9wbGV0aENoYXJ0IiwiQ2hhcnRHZW8iLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImUiLCJiZWxnaXVtIiwibXVuaWNpcGFsaXRpZXMiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZmVhdHVyZXMiLCJwcm9qZWN0aW9uIiwiZ2VvTWVyY2F0b3IiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsIm1hcCIsImQiLCJwcm9wZXJ0aWVzIiwibmFtZV9mciIsImRhdGFzZXRzIiwibGFiZWwiLCJvdXRsaW5lIiwidmFsdWUiLCJwb3B1bGF0aW9uIiwib3B0aW9ucyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5Iiwic2NhbGVzIiwiYXhpcyIsInJlc3BvbnNpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJob3Zlck9mZnNldCIsImNvbmZpZyIsInJvdGF0aW9uIiwiY2lyY3VtZmVyZW5jZSIsImRvbnV0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=