"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["map"],{

/***/ "./assets/map.js":
/*!***********************!*\
  !*** ./assets/map.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
/* harmony import */ var chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartjs-chart-geo */ "./node_modules/chartjs-chart-geo/build/index.js");
/* harmony import */ var chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartjs-chart-geo */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chartjs-chart-geo */ "./node_modules/d3-geo/src/projection/mercator.js");






var belgium = await fetch('/map/belgium-map.json').then(function (r) {
  return r.json();
})["catch"](function (e) {
  return console.log(e);
});
var municipalities = chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_4__.feature(belgium, belgium.objects.municipalities).features;
var projection = chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_5__["default"]();
new chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_6__.ChoroplethChart(document.getElementById('canvas').getContext('2d'), {
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
          value: d.properties.population ? d.properties.population : 10
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_es_object_t-e7f4fa"], () => (__webpack_exec__("./assets/map.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNtQjtBQUNOO0FBQzlDLElBQU1HLE9BQU8sR0FBRyxNQUFNQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFDLENBQUMsRUFBSTtFQUMzRCxPQUFPQSxDQUFDLENBQUNDLElBQUksRUFBRTtBQUNuQixDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUFDLENBQUM7RUFBQSxPQUNOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUVuQixJQUFNRyxjQUFjLEdBQUdULHNEQUF5QixDQUFDQyxPQUFPLEVBQUVBLE9BQU8sQ0FBQ1csT0FBTyxDQUFDSCxjQUFjLENBQUMsQ0FBQ0ksUUFBUTtBQUNsRyxJQUFJQyxVQUFVLEdBQUdkLHlEQUFvQixFQUFFO0FBQ3ZDLElBQUlELDhEQUFlLENBQUNpQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUNsRTtFQUNJQyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsSUFBSSxFQUFFO0lBQ0ZDLE1BQU0sRUFBRVosY0FBYyxDQUFDYSxHQUFHLENBQUMsVUFBQ0MsQ0FBQztNQUFBLE9BQU1BLENBQUMsQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPO0lBQUEsQ0FBQyxDQUFDO0lBQ3pEQyxRQUFRLEVBQUUsQ0FDTjtNQUNJQyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCQyxPQUFPLEVBQUVuQixjQUFjO01BQ3ZCVyxJQUFJLEVBQUVYLGNBQWMsQ0FBQ2EsR0FBRyxDQUFDLFVBQUNDLENBQUM7UUFBQSxPQUN2QjtVQUNJWixPQUFPLEVBQUVZLENBQUM7VUFDVk0sS0FBSyxFQUFFTixDQUFDLENBQUNDLFVBQVUsQ0FBQ00sVUFBVSxHQUFHUCxDQUFDLENBQUNDLFVBQVUsQ0FBQ00sVUFBVSxHQUFHO1FBQy9ELENBQUM7TUFBQSxDQUFDO0lBQ1YsQ0FBQztFQUVULENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ0xDLE9BQU8sRUFBRTtNQUNMQyxNQUFNLEVBQUU7UUFDSkMsT0FBTyxFQUFFO01BQ2I7SUFDSixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKckIsVUFBVSxFQUFFO1FBQ1JzQixJQUFJLEVBQUUsR0FBRztRQUNUdEIsVUFBVSxFQUFFQTtNQUNoQjtJQUNKO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xuaW1wb3J0IHsgQ2hvcm9wbGV0aENoYXJ0IH0gZnJvbSAnY2hhcnRqcy1jaGFydC1nZW8nO1xuaW1wb3J0ICogYXMgQ2hhcnRHZW8gZnJvbSAnY2hhcnRqcy1jaGFydC1nZW8nO1xuY29uc3QgYmVsZ2l1bSA9IGF3YWl0IGZldGNoKCcvbWFwL2JlbGdpdW0tbWFwLmpzb24nKS50aGVuKHIgPT4ge1xuICAgIHJldHVybiByLmpzb24oKTtcbn0pLmNhdGNoKGUgPT5cbiAgICBjb25zb2xlLmxvZyhlKSk7XG5cbmNvbnN0IG11bmljaXBhbGl0aWVzID0gQ2hhcnRHZW8udG9wb2pzb24uZmVhdHVyZShiZWxnaXVtLCBiZWxnaXVtLm9iamVjdHMubXVuaWNpcGFsaXRpZXMpLmZlYXR1cmVzO1xudmFyIHByb2plY3Rpb24gPSBDaGFydEdlby5nZW9NZXJjYXRvcigpXG5uZXcgQ2hvcm9wbGV0aENoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpLFxuICAgIHtcbiAgICAgICAgdHlwZTogJ2Nob3JvcGxldGgnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHM6IG11bmljaXBhbGl0aWVzLm1hcCgoZCkgPT4gKGQucHJvcGVydGllcy5uYW1lX2ZyKSksXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdtdW5pY2lwYWxpdGllcycsXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG11bmljaXBhbGl0aWVzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBtdW5pY2lwYWxpdGllcy5tYXAoKGQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkLnByb3BlcnRpZXMucG9wdWxhdGlvbiA/IGQucHJvcGVydGllcy5wb3B1bGF0aW9uIDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgYXhpczogJ3gnLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBwcm9qZWN0aW9uLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyJdLCJuYW1lcyI6WyJDaGFydCIsIkNob3JvcGxldGhDaGFydCIsIkNoYXJ0R2VvIiwiYmVsZ2l1bSIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtdW5pY2lwYWxpdGllcyIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJmZWF0dXJlcyIsInByb2plY3Rpb24iLCJnZW9NZXJjYXRvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJtYXAiLCJkIiwicHJvcGVydGllcyIsIm5hbWVfZnIiLCJkYXRhc2V0cyIsImxhYmVsIiwib3V0bGluZSIsInZhbHVlIiwicG9wdWxhdGlvbiIsIm9wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsImF4aXMiXSwic291cmNlUm9vdCI6IiJ9