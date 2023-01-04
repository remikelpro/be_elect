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

// const result = await fetch("http://localhost:8000/api/resultats?pagination=false&idElection.id%5B%5D=17").then(data => {
//     return data.json();
// })

// let cities = [];
// for (const element of result['hydra:member']) {
//     cities[element.idCommune.name] = element.numberBallot
// }

var municipalities = chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_4__.feature(belgium, belgium.objects.municipalities).features;
var projection = chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_5__["default"]();
new chartjs_chart_geo__WEBPACK_IMPORTED_MODULE_6__.ChoroplethChart(document.getElementById('mapMap').getContext('2d'), {
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
var data = {
  responsive: true,
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
    hoverOffset: 1
  }]
};
var config = {
  type: 'doughnut',
  data: data,
  options: {
    rotation: -90,
    circumference: 180
  }
};
var donut = new chart_js_auto__WEBPACK_IMPORTED_MODULE_3__["default"](document.getElementById('donutGraph').getContext('2d'), config);
window.addEventListener('before', function () {
  donut.resize(600, 600);
});
window.addEventListener('afterprint', function () {
  donut.resize();
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-831a47"], () => (__webpack_exec__("./assets/map.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkYsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtFQUN4Q0YsS0FBSyxDQUFDRyxNQUFNLEVBQUU7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0bydcbmltcG9ydCB7IENob3JvcGxldGhDaGFydCB9IGZyb20gJ2NoYXJ0anMtY2hhcnQtZ2VvJztcbmltcG9ydCAqIGFzIENoYXJ0R2VvIGZyb20gJ2NoYXJ0anMtY2hhcnQtZ2VvJztcbmNvbnN0IGJlbGdpdW0gPSBhd2FpdCBmZXRjaCgnL21hcC9iZWxnaXVtLW1hcC5qc29uJykudGhlbihyID0+IHtcbiAgICByZXR1cm4gci5qc29uKCk7XG59KS5jYXRjaChlID0+XG4gICAgY29uc29sZS5sb2coZSkpO1xuXG4vLyBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVzdWx0YXRzP3BhZ2luYXRpb249ZmFsc2UmaWRFbGVjdGlvbi5pZCU1QiU1RD0xN1wiKS50aGVuKGRhdGEgPT4ge1xuLy8gICAgIHJldHVybiBkYXRhLmpzb24oKTtcbi8vIH0pXG5cbi8vIGxldCBjaXRpZXMgPSBbXTtcbi8vIGZvciAoY29uc3QgZWxlbWVudCBvZiByZXN1bHRbJ2h5ZHJhOm1lbWJlciddKSB7XG4vLyAgICAgY2l0aWVzW2VsZW1lbnQuaWRDb21tdW5lLm5hbWVdID0gZWxlbWVudC5udW1iZXJCYWxsb3Rcbi8vIH1cblxuY29uc3QgbXVuaWNpcGFsaXRpZXMgPSBDaGFydEdlby50b3BvanNvbi5mZWF0dXJlKGJlbGdpdW0sIGJlbGdpdW0ub2JqZWN0cy5tdW5pY2lwYWxpdGllcykuZmVhdHVyZXM7XG52YXIgcHJvamVjdGlvbiA9IENoYXJ0R2VvLmdlb01lcmNhdG9yKClcbm5ldyBDaG9yb3BsZXRoQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcE1hcCcpLmdldENvbnRleHQoJzJkJyksXG4gICAge1xuICAgICAgICB0eXBlOiAnY2hvcm9wbGV0aCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogbXVuaWNpcGFsaXRpZXMubWFwKChkKSA9PiAoZC5wcm9wZXJ0aWVzLm5hbWVfZnIpKSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ211bmljaXBhbGl0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbXVuaWNpcGFsaXRpZXMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IG11bmljaXBhbGl0aWVzLm1hcCgoZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGQucHJvcGVydGllcy5uYW1lX2ZyID8gZC5wcm9wZXJ0aWVzLnBvcHVsYXRpb24gOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBheGlzOiAneCcsXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246IHByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuLy8gRE9OVVRcbmNvbnN0IGRhdGEgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBsYWJlbHM6IFtcbiAgICAgICAgJ1JlZCcsXG4gICAgICAgICdCbHVlJyxcbiAgICAgICAgJ1llbGxvdydcbiAgICBdLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ015IEZpcnN0IERhdGFzZXQnLFxuICAgICAgICBkYXRhOiBbMzAwLCA1MCwgMTAwXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICAgICAgJ3JnYig1NCwgMTYyLCAyMzUpJyxcbiAgICAgICAgICAgICdyZ2IoMjU1LCAyMDUsIDg2KSdcbiAgICAgICAgXSxcbiAgICAgICAgaG92ZXJPZmZzZXQ6IDFcbiAgICB9XVxufTtcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgb3B0aW9uczoge1xuICAgICAgcm90YXRpb246IC05MCxcbiAgICAgIGNpcmN1bWZlcmVuY2U6IDE4MCxcbiAgfVxufTtcbmxldCBkb251dCA9IG5ldyBDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9udXRHcmFwaCcpLmdldENvbnRleHQoJzJkJyksIGNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZScsICgpID0+IHtcbiAgICBkb251dC5yZXNpemUoNjAwLCA2MDApO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcbiAgICBkb251dC5yZXNpemUoKTtcbn0pOyJdLCJuYW1lcyI6WyJDaGFydCIsIkNob3JvcGxldGhDaGFydCIsIkNoYXJ0R2VvIiwiYmVsZ2l1bSIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtdW5pY2lwYWxpdGllcyIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJmZWF0dXJlcyIsInByb2plY3Rpb24iLCJnZW9NZXJjYXRvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJtYXAiLCJkIiwicHJvcGVydGllcyIsIm5hbWVfZnIiLCJkYXRhc2V0cyIsImxhYmVsIiwib3V0bGluZSIsInZhbHVlIiwicG9wdWxhdGlvbiIsIm9wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsImF4aXMiLCJyZXNwb25zaXZlIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJPZmZzZXQiLCJjb25maWciLCJyb3RhdGlvbiIsImNpcmN1bWZlcmVuY2UiLCJkb251dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiXSwic291cmNlUm9vdCI6IiJ9