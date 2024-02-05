(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/map"],{

/***/ "./assets/js/pages/map/map.js":
/*!************************************!*\
  !*** ./assets/js/pages/map/map.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
mapboxgl.accessToken = "pk.eyJ1Ijoic2VhbmNhcnJpZ2FuIiwiYSI6ImNsbXAyMnh2eTB0bTUybHFndGZ0a3d6OXEifQ.fYyH1nfV9C9wxei66yATMQ";
var map = new mapboxgl.Map({
  container: "map",
  // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/satellite-v9",
  // style URL
  center: [-87.64953641886095, 41.87119359072147],
  // starting position [lng, lat]
  zoom: 16 // starting zoom
});

var draw = new MapboxDraw({
  displayControlsDefault: false,
  // Select which mapbox-gl-draw control buttons to add to the map.
  controls: {
    polygon: true,
    trash: true
  },
  // Set mapbox-gl-draw to draw by default.
  // The user does not have to click the polygon control button first.
  defaultMode: "draw_polygon"
});
map.addControl(draw);

// Define these variables outside the updateArea function
var area, perimeter;
map.on("draw.create", updateArea);
map.on("draw.delete", updateArea);
map.on("draw.update", updateArea);
function updateArea(e) {
  var data = draw.getAll();
  var answer = document.getElementById("calculated-area");
  var answerPerimeter = document.getElementById("calculated-perimeter");
  if (data.features.length > 0) {
    // Calculate the area using Turf.js
    var _area = turf.area(data);

    // Calculate the perimeter using Turf.js
    var _perimeter = turf.lineDistance(data.features[0], {
      units: 'meters'
    });
    var roundedArea = Math.round(_area * 100) / 100;
    var roundedPerimeter = Math.round(_perimeter * 100) / 100;
    var squareFeet = Math.round(roundedArea * 10.7639) * 100 / 100;
    var feet = Math.round(roundedPerimeter * 3.2808) * 100 / 100;
    answer.innerHTML = "<p><strong>Area: ".concat(squareFeet, " square feet</strong></p>");
    answerPerimeter.innerHTML = "<p><strong>Perimeter: ".concat(feet, " feet</strong></p>");
  } else {
    answer.innerHTML = "";
    answerPerimeter.innerHTML = "";
    if (e.type !== "draw.delete") alert("Click the map to draw a polygon");
  }
}

// Add geocoding functionality
var geocoder = document.getElementById("geocoder");
var searchInput = document.getElementById("address");
var searchButton = document.getElementById("search");
searchButton.addEventListener("click", function () {
  var query = searchInput.value;
  if (query.trim() !== "") {
    // Use the Mapbox Geocoding API to search for the address and center the map on the result.
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(query, ".json?access_token=").concat(mapboxgl.accessToken)).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.features.length > 0) {
        var center = data.features[0].center;
        map.flyTo({
          center: center,
          zoom: 20
        });
      } else {
        alert("Address not found.");
      }
    })["catch"](function (error) {
      console.error("Error:", error);
      alert("An error occurred while searching for the address.");
    });
  }
});
var script = document.getElementById('search-js');
script.onload = function () {
  var addressInput = document.getElementById('address');
  // mapboxsearch.autofill({
  //     accessToken: "pk.eyJ1Ijoic2VhbmNhcnJpZ2FuIiwiYSI6ImNsbXAyMnh2eTB0bTUybHFndGZ0a3d6OXEifQ.fYyH1nfV9C9wxei66yATMQ"
  // });

  // Add an event listener to handle the selection of a suggestion
  var searchContainer = document.querySelector('.mapboxgl-ctrl-geocoder');

  // searchContainer.addEventListener('click', function(event) {
  //     const selectedSuggestion = event.target.closest('.--Suggestion');
  //     if (selectedSuggestion) {
  //         const selectedAddress = selectedSuggestion.textContent;
  //         addressInput.value = selectedAddress;
  //     }
  // });
};

// Function to populate the input field with the selected suggestion
function populateInput(selectedValue) {
  var addressInput = document.getElementById('address');
  addressInput.value = selectedValue;
}

// Attach a click event listener to each suggestion item
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('suggestion-item')) {
    var selectedValue = event.target.textContent;
    populateInput(selectedValue);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var observer = new MutationObserver(function (mutationsList, observer) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(mutation.addedNodes),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var node = _step2.value;
              if (node.classList && node.classList.contains('mapboxgl-ctrl-geocoder')) {
                attachEventListenerToSearchContainer(node);
                observer.disconnect(); // Stop observing once we've found our element
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
function attachEventListenerToSearchContainer(searchContainer) {
  searchContainer.addEventListener('click', function (event) {
    var selectedSuggestion = event.target.closest('.mbx0aa48ec1--Suggestion');
    if (selectedSuggestion) {
      var selectedAddress = selectedSuggestion.textContent;
      var addressInput = document.getElementById('address');
      addressInput.value = selectedAddress;
    }
  });
}
var areaCompleted = document.getElementById("calculated-area");
var perimeterCompleted = document.getElementById("calculated-perimeter");
var completeButton = document.getElementById("complete-estimate");
function extractIntFromString(str) {
  var match = str.match(/\d+/); // Match the first sequence of digits
  return match ? Number(match[0]) : null;
}
completeButton.addEventListener('click', function (event) {
  var address = document.querySelector("#address").value;
  if (!address) {
    alert("Please enter an address");
    return;
  }
  var perimeterText = document.querySelector("#calculated-perimeter p").innerText;
  var areaText = document.querySelector("#calculated-area p").innerText;
  var perimeterInt = extractIntFromString(perimeterText);
  var areaInt = extractIntFromString(areaText);
  data = {
    perimeterInt: perimeterInt,
    areaInt: areaInt,
    address: address
  };
  fetch('/api/createEstimate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    window.location.href = '/estimates';
  })["catch"](function (error) {
    console.log(error);
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-58e517","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_create-iter-result-object_js-node_modules_core-js_inte-582fe0","vendors-node_modules_core-js_internals_this-number-value_js-node_modules_core-js_modules_es_e-39c312","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--7adca5","vendors-node_modules_core-js_modules_es_regexp_to-string_js-node_modules_core-js_modules_es_s-0fb5b8","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-860e46"], () => (__webpack_exec__("./assets/js/pages/map/map.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdSLG9CQUFvQixDQUFDSyxhQUFhLENBQUM7RUFDdEQsSUFBSUksT0FBTyxHQUFHVCxvQkFBb0IsQ0FBQ08sUUFBUSxDQUFDO0VBSTVDbEYsSUFBSSxHQUFHO0lBQ0htRixZQUFZLEVBQUVBLFlBQVk7SUFDMUJDLE9BQU8sRUFBRUEsT0FBTztJQUNoQkwsT0FBTyxFQUFFQTtFQUNiLENBQUM7RUFJRG5ELEtBQUssQ0FBQyxxQkFBcUIsRUFBRTtJQUN6QnlELE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRTtNQUNMLGNBQWMsRUFBRTtJQUNwQixDQUFDO0lBQ0RwQixJQUFJLEVBQUVxQixJQUFJLENBQUNDLFNBQVMsQ0FBQ3hGLElBQUk7RUFDN0IsQ0FBQyxDQUFDLENBQ0c2QixJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQTdCLElBQUksRUFBSTtJQUNWeUYsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxZQUFZO0VBQ3ZDLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQzFELEtBQUssRUFBSztJQUNkQyxPQUFPLENBQUMwRCxHQUFHLENBQUMzRCxLQUFLLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBR1YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL21hcC9tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibWFwYm94Z2wuYWNjZXNzVG9rZW4gPVxuICAgIFwicGsuZXlKMUlqb2ljMlZoYm1OaGNuSnBaMkZ1SWl3aVlTSTZJbU5zYlhBeU1uaDJlVEIwYlRVeWJIRm5kR1owYTNkNk9YRWlmUS5mWXlIMW5mVjlDOXd4ZWk2NnlBVE1RXCI7XG5jb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICBjb250YWluZXI6IFwibWFwXCIsIC8vIGNvbnRhaW5lciBJRFxuICAgIC8vIENob29zZSBmcm9tIE1hcGJveCdzIGNvcmUgc3R5bGVzLCBvciBtYWtlIHlvdXIgb3duIHN0eWxlIHdpdGggTWFwYm94IFN0dWRpb1xuICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXY5XCIsIC8vIHN0eWxlIFVSTFxuICAgIGNlbnRlcjogWy04Ny42NDk1MzY0MTg4NjA5NSwgNDEuODcxMTkzNTkwNzIxNDddLCAvLyBzdGFydGluZyBwb3NpdGlvbiBbbG5nLCBsYXRdXG4gICAgem9vbTogMTYsIC8vIHN0YXJ0aW5nIHpvb21cbn0pO1xuXG5jb25zdCBkcmF3ID0gbmV3IE1hcGJveERyYXcoe1xuICAgIGRpc3BsYXlDb250cm9sc0RlZmF1bHQ6IGZhbHNlLFxuICAgIC8vIFNlbGVjdCB3aGljaCBtYXBib3gtZ2wtZHJhdyBjb250cm9sIGJ1dHRvbnMgdG8gYWRkIHRvIHRoZSBtYXAuXG4gICAgY29udHJvbHM6IHtcbiAgICAgICAgcG9seWdvbjogdHJ1ZSxcbiAgICAgICAgdHJhc2g6IHRydWUsXG4gICAgfSxcbiAgICAvLyBTZXQgbWFwYm94LWdsLWRyYXcgdG8gZHJhdyBieSBkZWZhdWx0LlxuICAgIC8vIFRoZSB1c2VyIGRvZXMgbm90IGhhdmUgdG8gY2xpY2sgdGhlIHBvbHlnb24gY29udHJvbCBidXR0b24gZmlyc3QuXG4gICAgZGVmYXVsdE1vZGU6IFwiZHJhd19wb2x5Z29uXCIsXG59KTtcbm1hcC5hZGRDb250cm9sKGRyYXcpO1xuXG4vLyBEZWZpbmUgdGhlc2UgdmFyaWFibGVzIG91dHNpZGUgdGhlIHVwZGF0ZUFyZWEgZnVuY3Rpb25cbmxldCBhcmVhLCBwZXJpbWV0ZXI7XG5cbm1hcC5vbihcImRyYXcuY3JlYXRlXCIsIHVwZGF0ZUFyZWEpO1xubWFwLm9uKFwiZHJhdy5kZWxldGVcIiwgdXBkYXRlQXJlYSk7XG5tYXAub24oXCJkcmF3LnVwZGF0ZVwiLCB1cGRhdGVBcmVhKTtcblxuZnVuY3Rpb24gdXBkYXRlQXJlYShlKSB7XG4gICAgY29uc3QgZGF0YSA9IGRyYXcuZ2V0QWxsKCk7XG4gICAgY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVkLWFyZWFcIik7XG4gICAgY29uc3QgYW5zd2VyUGVyaW1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVkLXBlcmltZXRlclwiKTtcblxuICAgIGlmIChkYXRhLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhcmVhIHVzaW5nIFR1cmYuanNcbiAgICAgICAgY29uc3QgYXJlYSA9IHR1cmYuYXJlYShkYXRhKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmltZXRlciB1c2luZyBUdXJmLmpzXG4gICAgICAgIGNvbnN0IHBlcmltZXRlciA9IHR1cmYubGluZURpc3RhbmNlKGRhdGEuZmVhdHVyZXNbMF0sIHsgdW5pdHM6ICdtZXRlcnMnIH0pO1xuXG4gICAgICAgIGNvbnN0IHJvdW5kZWRBcmVhID0gTWF0aC5yb3VuZChhcmVhICogMTAwKSAvIDEwMDtcbiAgICAgICAgY29uc3Qgcm91bmRlZFBlcmltZXRlciA9IE1hdGgucm91bmQocGVyaW1ldGVyICogMTAwKSAvIDEwMDtcblxuICAgICAgICBjb25zdCBzcXVhcmVGZWV0ID0gKE1hdGgucm91bmQocm91bmRlZEFyZWEgKiAxMC43NjM5KSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIGNvbnN0IGZlZXQgPSAoTWF0aC5yb3VuZChyb3VuZGVkUGVyaW1ldGVyICogMy4yODA4KSAqIDEwMCkgLyAxMDA7XG5cbiAgICAgICAgYW5zd2VyLmlubmVySFRNTCA9IGA8cD48c3Ryb25nPkFyZWE6ICR7c3F1YXJlRmVldH0gc3F1YXJlIGZlZXQ8L3N0cm9uZz48L3A+YDtcbiAgICAgICAgYW5zd2VyUGVyaW1ldGVyLmlubmVySFRNTCA9IGA8cD48c3Ryb25nPlBlcmltZXRlcjogJHtmZWV0fSBmZWV0PC9zdHJvbmc+PC9wPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGFuc3dlclBlcmltZXRlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoZS50eXBlICE9PSBcImRyYXcuZGVsZXRlXCIpXG4gICAgICAgICAgICBhbGVydChcIkNsaWNrIHRoZSBtYXAgdG8gZHJhdyBhIHBvbHlnb25cIik7XG4gICAgfVxufVxuXG5cbi8vIEFkZCBnZW9jb2RpbmcgZnVuY3Rpb25hbGl0eVxuY29uc3QgZ2VvY29kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlb2NvZGVyXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZHJlc3NcIik7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBpZiAocXVlcnkudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgTWFwYm94IEdlb2NvZGluZyBBUEkgdG8gc2VhcmNoIGZvciB0aGUgYWRkcmVzcyBhbmQgY2VudGVyIHRoZSBtYXAgb24gdGhlIHJlc3VsdC5cbiAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke3F1ZXJ5fS5qc29uP2FjY2Vzc190b2tlbj0ke21hcGJveGdsLmFjY2Vzc1Rva2VufWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VudGVyID0gZGF0YS5mZWF0dXJlc1swXS5jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5mbHlUbyh7Y2VudGVyLCB6b29tOiAyMH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQWRkcmVzcyBub3QgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzZWFyY2hpbmcgZm9yIHRoZSBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5cbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtanMnKTtcbnNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhZGRyZXNzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xuICAgIC8vIG1hcGJveHNlYXJjaC5hdXRvZmlsbCh7XG4gICAgLy8gICAgIGFjY2Vzc1Rva2VuOiBcInBrLmV5SjFJam9pYzJWaGJtTmhjbkpwWjJGdUlpd2lZU0k2SW1Oc2JYQXlNbmgyZVRCMGJUVXliSEZuZEdaMGEzZDZPWEVpZlEuZll5SDFuZlY5Qzl3eGVpNjZ5QVRNUVwiXG4gICAgLy8gfSk7XG5cbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIHRoZSBzZWxlY3Rpb24gb2YgYSBzdWdnZXN0aW9uXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcGJveGdsLWN0cmwtZ2VvY29kZXInKTtcblxuICAgIC8vIHNlYXJjaENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gICAgIGNvbnN0IHNlbGVjdGVkU3VnZ2VzdGlvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuLS1TdWdnZXN0aW9uJyk7XG4gICAgLy8gICAgIGlmIChzZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkQWRkcmVzcyA9IHNlbGVjdGVkU3VnZ2VzdGlvbi50ZXh0Q29udGVudDtcbiAgICAvLyAgICAgICAgIGFkZHJlc3NJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQWRkcmVzcztcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gcG9wdWxhdGUgdGhlIGlucHV0IGZpZWxkIHdpdGggdGhlIHNlbGVjdGVkIHN1Z2dlc3Rpb25cbmZ1bmN0aW9uIHBvcHVsYXRlSW5wdXQoc2VsZWN0ZWRWYWx1ZSkge1xuICAgIGNvbnN0IGFkZHJlc3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzc0lucHV0LnZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcbn1cblxuLy8gQXR0YWNoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBzdWdnZXN0aW9uIGl0ZW1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Z2dlc3Rpb24taXRlbScpKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIHBvcHVsYXRlSW5wdXQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG4gICAgICAgIGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucygnbWFwYm94Z2wtY3RybC1nZW9jb2RlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudExpc3RlbmVyVG9TZWFyY2hDb250YWluZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7ICAvLyBTdG9wIG9ic2VydmluZyBvbmNlIHdlJ3ZlIGZvdW5kIG91ciBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgY29uZmlndXJlZCBwYXJhbWV0ZXJzXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVyVG9TZWFyY2hDb250YWluZXIoc2VhcmNoQ29udGFpbmVyKSB7XG4gICAgc2VhcmNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdWdnZXN0aW9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tYngwYWE0OGVjMS0tU3VnZ2VzdGlvbicpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRTdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEFkZHJlc3MgPSBzZWxlY3RlZFN1Z2dlc3Rpb24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xuICAgICAgICAgICAgYWRkcmVzc0lucHV0LnZhbHVlID0gc2VsZWN0ZWRBZGRyZXNzO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmxldCBhcmVhQ29tcGxldGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVkLWFyZWFcIik7XG5sZXQgcGVyaW1ldGVyQ29tcGxldGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVkLXBlcmltZXRlclwiKTtcbmxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGUtZXN0aW1hdGVcIilcblxuZnVuY3Rpb24gZXh0cmFjdEludEZyb21TdHJpbmcoc3RyKSB7XG4gICAgbGV0IG1hdGNoID0gc3RyLm1hdGNoKC9cXGQrLyk7IC8vIE1hdGNoIHRoZSBmaXJzdCBzZXF1ZW5jZSBvZiBkaWdpdHNcbiAgICByZXR1cm4gbWF0Y2ggPyBOdW1iZXIobWF0Y2hbMF0pIDogbnVsbDtcbn1cbmNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzXCIpLnZhbHVlO1xuICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhbiBhZGRyZXNzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBlcmltZXRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbGN1bGF0ZWQtcGVyaW1ldGVyIHBcIikuaW5uZXJUZXh0O1xuICAgIGxldCBhcmVhVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FsY3VsYXRlZC1hcmVhIHBcIikuaW5uZXJUZXh0O1xuXG5cbiAgICBsZXQgcGVyaW1ldGVySW50ID0gZXh0cmFjdEludEZyb21TdHJpbmcocGVyaW1ldGVyVGV4dCk7XG4gICAgbGV0IGFyZWFJbnQgPSBleHRyYWN0SW50RnJvbVN0cmluZyhhcmVhVGV4dCk7XG5cblxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgcGVyaW1ldGVySW50OiBwZXJpbWV0ZXJJbnQsXG4gICAgICAgIGFyZWFJbnQ6IGFyZWFJbnQsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICB9XG5cblxuXG4gICAgZmV0Y2goJy9hcGkvY3JlYXRlRXN0aW1hdGUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9lc3RpbWF0ZXMnO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG5cbn0pO1xuXG5cbiJdLCJuYW1lcyI6WyJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwiZHJhdyIsIk1hcGJveERyYXciLCJkaXNwbGF5Q29udHJvbHNEZWZhdWx0IiwiY29udHJvbHMiLCJwb2x5Z29uIiwidHJhc2giLCJkZWZhdWx0TW9kZSIsImFkZENvbnRyb2wiLCJhcmVhIiwicGVyaW1ldGVyIiwib24iLCJ1cGRhdGVBcmVhIiwiZSIsImRhdGEiLCJnZXRBbGwiLCJhbnN3ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYW5zd2VyUGVyaW1ldGVyIiwiZmVhdHVyZXMiLCJsZW5ndGgiLCJ0dXJmIiwibGluZURpc3RhbmNlIiwidW5pdHMiLCJyb3VuZGVkQXJlYSIsIk1hdGgiLCJyb3VuZCIsInJvdW5kZWRQZXJpbWV0ZXIiLCJzcXVhcmVGZWV0IiwiZmVldCIsImlubmVySFRNTCIsImNvbmNhdCIsInR5cGUiLCJhbGVydCIsImdlb2NvZGVyIiwic2VhcmNoSW5wdXQiLCJzZWFyY2hCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnkiLCJ2YWx1ZSIsInRyaW0iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmbHlUbyIsImVycm9yIiwiY29uc29sZSIsInNjcmlwdCIsIm9ubG9hZCIsImFkZHJlc3NJbnB1dCIsInNlYXJjaENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1bGF0ZUlucHV0Iiwic2VsZWN0ZWRWYWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0ZXh0Q29udGVudCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwibXV0YXRpb24iLCJhZGRlZE5vZGVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm5vZGUiLCJhdHRhY2hFdmVudExpc3RlbmVyVG9TZWFyY2hDb250YWluZXIiLCJkaXNjb25uZWN0IiwiZXJyIiwiZiIsIm9ic2VydmUiLCJib2R5IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInNlbGVjdGVkU3VnZ2VzdGlvbiIsImNsb3Nlc3QiLCJzZWxlY3RlZEFkZHJlc3MiLCJhcmVhQ29tcGxldGVkIiwicGVyaW1ldGVyQ29tcGxldGVkIiwiY29tcGxldGVCdXR0b24iLCJleHRyYWN0SW50RnJvbVN0cmluZyIsInN0ciIsIm1hdGNoIiwiTnVtYmVyIiwiYWRkcmVzcyIsInBlcmltZXRlclRleHQiLCJpbm5lclRleHQiLCJhcmVhVGV4dCIsInBlcmltZXRlckludCIsImFyZWFJbnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=