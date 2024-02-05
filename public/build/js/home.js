(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/home"],{

/***/ "./assets/js/pages/home.js":
/*!*********************************!*\
  !*** ./assets/js/pages/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
var companyAccept = document.getElementsByClassName('notification-accept');
var companyReject = document.getElementsByClassName('notification-reject');
Array.from(companyAccept).forEach(function (element) {
  element.addEventListener('click', function () {
    var id = element.getAttribute('data-user');
    var requestId = element.getAttribute('data-request');
    var company = element.getAttribute('data-company');
    var data = {
      id: id,
      requestId: requestId,
      company: company,
      status: 'accepted'
    };
    fetch('/api/decideCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      window.location.reload();
    })["catch"](function (error) {
      console.log(error);
    });
  });
});
Array.from(companyReject).forEach(function (element) {
  element.addEventListener('click', function () {
    var id = element.getAttribute('data-user');
    var requestId = element.getAttribute('data-request');
    var company = element.getAttribute('data-company');
    var data = {
      id: id,
      requestId: requestId,
      company: company,
      status: 'rejected'
    };
    fetch('/api/decideCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      window.location.reload();
    })["catch"](function (error) {
      console.log(error);
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-58e517","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_create-iter-result-object_js-node_modules_core-js_inte-582fe0","vendors-node_modules_core-js_internals_object-create_js-node_modules_core-js_modules_es_array-005cfc"], () => (__webpack_exec__("./assets/js/pages/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbXBhbnlBY2NlcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdub3RpZmljYXRpb24tYWNjZXB0Jyk7XG5sZXQgY29tcGFueVJlamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGlmaWNhdGlvbi1yZWplY3QnKTtcblxuXG5BcnJheS5mcm9tKGNvbXBhbnlBY2NlcHQpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS11c2VyJyk7XG4gICAgICAgIGxldCByZXF1ZXN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXF1ZXN0Jyk7XG4gICAgICAgIGxldCBjb21wYW55ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29tcGFueScpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxuICAgICAgICAgICAgY29tcGFueTogY29tcGFueSxcbiAgICAgICAgICAgIHN0YXR1czogJ2FjY2VwdGVkJ1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvZGVjaWRlQ29tcGFueScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuQXJyYXkuZnJvbShjb21wYW55UmVqZWN0KS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlcicpO1xuICAgICAgICBsZXQgcmVxdWVzdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVxdWVzdCcpO1xuICAgICAgICBsZXQgY29tcGFueSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbXBhbnknKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgICAgIGNvbXBhbnk6IGNvbXBhbnksXG4gICAgICAgICAgICBzdGF0dXM6ICdyZWplY3RlZCdcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKCcvYXBpL2RlY2lkZUNvbXBhbnknLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJjb21wYW55QWNjZXB0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29tcGFueVJlamVjdCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwiZ2V0QXR0cmlidXRlIiwicmVxdWVzdElkIiwiY29tcGFueSIsImRhdGEiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=