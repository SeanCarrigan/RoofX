(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/graphs"],{

/***/ "./assets/js/graphs.js":
/*!*****************************!*\
  !*** ./assets/js/graphs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('Creating Graphs');
  var ctx = document.getElementById('estimates-over-time').getContext('2d'); // Updated to match the canvas ID
  window.estimateCreationTimeline = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets.map(function (dataset) {
        return _objectSpread(_objectSpread({}, dataset), {}, {
          tension: 0.2 // Assuming you want to set the tension for all datasets
        });
      })
    },

    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  var ctx2 = document.getElementById('graph-prices').getContext('2d');
  window.estimateCreationTimeline = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: chartData2.labels,
      datasets: chartData2.datasets.map(function (dataset) {
        return _objectSpread({}, dataset);
      })
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-58e517","vendors-node_modules_core-js_internals_create-iter-result-object_js-node_modules_core-js_inte-582fe0","vendors-node_modules_core-js_internals_this-number-value_js-node_modules_core-js_modules_es_e-39c312","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--7adca5","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-06d9a0"], () => (__webpack_exec__("./assets/js/graphs.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZ3JhcGhzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7RUFLOUIsSUFBSUMsR0FBRyxHQUFHTCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUMzRUMsTUFBTSxDQUFDQyx3QkFBd0IsR0FBRyxJQUFJQyxLQUFLLENBQUNMLEdBQUcsRUFBRTtJQUM3Q00sSUFBSSxFQUFFLE1BQU07SUFDWkMsSUFBSSxFQUFFO01BQ0ZDLE1BQU0sRUFBRUMsU0FBUyxDQUFDRCxNQUFNO01BQ3hCRSxRQUFRLEVBQUVELFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsT0FBTztRQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQ0QsT0FBTztVQUNWRSxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQUE7TUFBQSxDQUNmO0lBQ04sQ0FBQzs7SUFDREMsT0FBTyxFQUFFO01BQ0xDLE1BQU0sRUFBRTtRQUNKQyxDQUFDLEVBQUU7VUFDQ0MsV0FBVyxFQUFFLElBQUk7VUFDakJDLEtBQUssRUFBRTtZQUNIQyxTQUFTLEVBQUU7VUFDZjtRQUNKO01BQ0osQ0FBQztNQUNEQyxPQUFPLEVBQUU7UUFDTEMsTUFBTSxFQUFFO1VBQ0pDLE9BQU8sRUFBRTtRQUNiO01BQ0o7SUFDSjtFQUNKLENBQUMsQ0FBQztFQUVGLElBQUlDLElBQUksR0FBRzdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25FQyxNQUFNLENBQUNDLHdCQUF3QixHQUFHLElBQUlDLEtBQUssQ0FBQ21CLElBQUksRUFBRTtJQUM5Q2xCLElBQUksRUFBRSxLQUFLO0lBQ1hDLElBQUksRUFBRTtNQUNGQyxNQUFNLEVBQUVpQixVQUFVLENBQUNqQixNQUFNO01BQ3pCRSxRQUFRLEVBQUVlLFVBQVUsQ0FBQ2YsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsT0FBTztRQUFBLE9BQUFDLGFBQUEsS0FDbkNELE9BQU87TUFBQSxDQUNaO0lBQ04sQ0FBQztJQUNERyxPQUFPLEVBQUU7TUFDTEMsTUFBTSxFQUFFO1FBQ0pDLENBQUMsRUFBRTtVQUNDQyxXQUFXLEVBQUUsSUFBSTtVQUNqQkMsS0FBSyxFQUFFO1lBQ0hDLFNBQVMsRUFBRTtVQUNmO1FBQ0o7TUFDSixDQUFDO01BQ0RDLE9BQU8sRUFBRTtRQUNMQyxNQUFNLEVBQUU7VUFDSkMsT0FBTyxFQUFFO1FBQ2I7TUFDSjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dyYXBocy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBHcmFwaHMnKTtcblxuXG5cblxuICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXN0aW1hdGVzLW92ZXItdGltZScpLmdldENvbnRleHQoJzJkJyk7IC8vIFVwZGF0ZWQgdG8gbWF0Y2ggdGhlIGNhbnZhcyBJRFxuICAgIHdpbmRvdy5lc3RpbWF0ZUNyZWF0aW9uVGltZWxpbmUgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBjaGFydERhdGEubGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IGNoYXJ0RGF0YS5kYXRhc2V0cy5tYXAoKGRhdGFzZXQpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldCxcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjIgLy8gQXNzdW1pbmcgeW91IHdhbnQgdG8gc2V0IHRoZSB0ZW5zaW9uIGZvciBhbGwgZGF0YXNldHNcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IGN0eDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JhcGgtcHJpY2VzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB3aW5kb3cuZXN0aW1hdGVDcmVhdGlvblRpbWVsaW5lID0gbmV3IENoYXJ0KGN0eDIsIHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnREYXRhMi5sYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogY2hhcnREYXRhMi5kYXRhc2V0cy5tYXAoKGRhdGFzZXQpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldCxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG59KTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY3R4IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiZXN0aW1hdGVDcmVhdGlvblRpbWVsaW5lIiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImNoYXJ0RGF0YSIsImRhdGFzZXRzIiwibWFwIiwiZGF0YXNldCIsIl9vYmplY3RTcHJlYWQiLCJ0ZW5zaW9uIiwib3B0aW9ucyIsInNjYWxlcyIsInkiLCJiZWdpbkF0WmVybyIsInRpY2tzIiwicHJlY2lzaW9uIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJjdHgyIiwiY2hhcnREYXRhMiJdLCJzb3VyY2VSb290IjoiIn0=