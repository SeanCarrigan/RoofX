(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/profile"],{

/***/ "./assets/js/pages/profile/profile.js":
/*!********************************************!*\
  !*** ./assets/js/pages/profile/profile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
document.addEventListener('DOMContentLoaded', function () {
  var profileSave = document.getElementById('profile-save');
  var firstName = document.getElementById('first-name');
  var lastName = document.getElementById('last-name');
  var email = document.getElementById('email');
  var submitCompany = document.getElementById('submit-company');
  var companyName = document.getElementById('company-name');
  var companyEmail = document.getElementById('company-email');
  var companyPhone = document.getElementById('phone');
  var companyAddress = document.getElementById('company-address');
  var companyCity = document.getElementById('company-city');
  var companyState = document.getElementById('company-state');
  var companyZip = document.getElementById('company-zip');
  var companyMotto = document.getElementById('company-motto');
  var joinCompany = document.getElementById('join-submit-company');
  var companyCode = document.getElementById('company-code');
  var companyIdHolder = document.getElementById('company-id-holder');
  var editCompany = document.getElementById('edit-company');
  var editCompanyName = document.getElementById('company-name-edit');
  var editCompanyEmail = document.getElementById('company-email-edit');
  var editCompanyPhone = document.getElementById('company-phone-edit');
  var editCompanyAddress = document.getElementById('company-address-edit');
  var editCompanyCity = document.getElementById('company-city-edit');
  var editCompanyState = document.getElementById('company-state-edit');
  var editCompanyZip = document.getElementById('company-zip-edit');
  var editCompanyMotto = document.getElementById('company-motto-edit');
  profileSave.addEventListener('click', function () {
    var data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    };
    fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log("========== RESPONSE! ==========");
      // console.log(data);
      window.location.reload();
    })["catch"](function (error) {
      console.log(error);
      document.getElementById('error').innerText = 'Email already exists!';
      document.getElementById('error').removeAttribute('hidden');
    });
  });
  submitCompany.addEventListener('click', function () {
    if (!companyName.value || !companyEmail.value || !companyPhone.value || !companyAddress.value || !companyCity.value || !companyState.value || !companyZip.value || !companyMotto.value) {
      alert('Please fill out all fields!');
      return;
    }
    data = {
      companyName: companyName.value,
      companyEmail: companyEmail.value,
      companyPhone: companyPhone.value,
      companyAddress: companyAddress.value,
      companyCity: companyCity.value,
      companyState: companyState.value,
      companyZip: companyZip.value,
      companyMotto: companyMotto.value
    };
    fetch('/api/createCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log("========== RESPONSE! ==========");
      // console.log(data);
      window.location.reload();
    })["catch"](function (error) {
      console.log(error);
      document.getElementById('error').innerText = 'Company with this Email already exists!';
      document.getElementById('error').removeAttribute('hidden');
    });
  });
  joinCompany.addEventListener('click', function () {
    data = {
      companyCode: companyCode.value
    };
    fetch('/api/joinCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log("========== RESPONSE! ==========");
      // console.log(data);
      window.location.reload();
    })["catch"](function (error) {
      console.log(error);
      // document.getElementById('error').innerText = 'Company with this Email already exists!';
      // document.getElementById('error').removeAttribute('hidden');
    });
  });

  editCompany.addEventListener('click', function () {
    data = {
      companyId: companyIdHolder.value,
      companyName: editCompanyName.value,
      companyEmail: editCompanyEmail.value,
      companyPhone: editCompanyPhone.value,
      companyAddress: editCompanyAddress.value,
      companyCity: editCompanyCity.value,
      companyState: editCompanyState.value,
      companyZip: editCompanyZip.value,
      companyMotto: editCompanyMotto.value
    };
    fetch('/api/editCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log("========== RESPONSE! ==========");
      // console.log(data);
      window.location.reload();
    })["catch"](function (error) {
      console.log(error);
      document.getElementById('error').innerText = 'Company with this Email already exists!';
      document.getElementById('error').removeAttribute('hidden');
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-58e517","vendors-node_modules_core-js_modules_es_promise_js"], () => (__webpack_exec__("./assets/js/pages/profile/profile.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBSUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUNHLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDckQsSUFBSUUsUUFBUSxHQUFHTCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBSUcsS0FBSyxHQUFHTixRQUFRLENBQUNHLGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFFNUMsSUFBSUksYUFBYSxHQUFHUCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFJSyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUN6RCxJQUFJTSxZQUFZLEdBQUdULFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUMzRCxJQUFJTyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUNuRCxJQUFJUSxjQUFjLEdBQUdYLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQy9ELElBQUlTLFdBQVcsR0FBR1osUUFBUSxDQUFDRyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQ3pELElBQUlVLFlBQVksR0FBR2IsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzNELElBQUlXLFVBQVUsR0FBR2QsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3ZELElBQUlZLFlBQVksR0FBR2YsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBRTNELElBQUlhLFdBQVcsR0FBR2hCLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLHFCQUFxQixDQUFDO0VBQ2hFLElBQUljLFdBQVcsR0FBR2pCLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUV6RCxJQUFJZSxlQUFlLEdBQUdsQixRQUFRLENBQUNHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUNsRSxJQUFJZ0IsV0FBVyxHQUFHbkIsUUFBUSxDQUFDRyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQ3pELElBQUlpQixlQUFlLEdBQUdwQixRQUFRLENBQUNHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUNsRSxJQUFJa0IsZ0JBQWdCLEdBQUdyQixRQUFRLENBQUNHLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztFQUNwRSxJQUFJbUIsZ0JBQWdCLEdBQUd0QixRQUFRLENBQUNHLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztFQUNwRSxJQUFJb0Isa0JBQWtCLEdBQUd2QixRQUFRLENBQUNHLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztFQUN4RSxJQUFJcUIsZUFBZSxHQUFHeEIsUUFBUSxDQUFDRyxjQUFjLENBQUMsbUJBQW1CLENBQUM7RUFDbEUsSUFBSXNCLGdCQUFnQixHQUFHekIsUUFBUSxDQUFDRyxjQUFjLENBQUMsb0JBQW9CLENBQUM7RUFDcEUsSUFBSXVCLGNBQWMsR0FBRzFCLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGtCQUFrQixDQUFDO0VBQ2hFLElBQUl3QixnQkFBZ0IsR0FBRzNCLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLG9CQUFvQixDQUFDO0VBR3BFRCxXQUFXLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBRzlDLElBQUkyQixJQUFJLEdBQUc7TUFDUHhCLFNBQVMsRUFBRUEsU0FBUyxDQUFDeUIsS0FBSztNQUMxQnhCLFFBQVEsRUFBRUEsUUFBUSxDQUFDd0IsS0FBSztNQUN4QnZCLEtBQUssRUFBRUEsS0FBSyxDQUFDdUI7SUFDakIsQ0FBQztJQUdEQyxLQUFLLENBQUMsY0FBYyxFQUFFO01BQ2xCQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUU7TUFDcEIsQ0FBQztNQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJO0lBQzdCLENBQUMsQ0FBQyxDQUNHUSxJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQVIsSUFBSSxFQUFJO01BQ1Y7TUFDQTtNQUNBVyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxLQUFLLEVBQUs7TUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNsQjFDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDMEMsU0FBUyxHQUFHLHVCQUF1QjtNQUNwRTdDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDMkMsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUM5RCxDQUFDLENBQUM7RUFDVixDQUFDLENBQUM7RUFFRnZDLGFBQWEsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDaEQsSUFBSSxDQUFDTyxXQUFXLENBQUNxQixLQUFLLElBQUksQ0FBQ3BCLFlBQVksQ0FBQ29CLEtBQUssSUFBSSxDQUFDbkIsWUFBWSxDQUFDbUIsS0FBSyxJQUFJLENBQUNsQixjQUFjLENBQUNrQixLQUFLLElBQUksQ0FBQ2pCLFdBQVcsQ0FBQ2lCLEtBQUssSUFBSSxDQUFDaEIsWUFBWSxDQUFDZ0IsS0FBSyxJQUFJLENBQUNmLFVBQVUsQ0FBQ2UsS0FBSyxJQUFJLENBQUNkLFlBQVksQ0FBQ2MsS0FBSyxFQUFFO01BQ3BMa0IsS0FBSyxDQUFDLDZCQUE2QixDQUFDO01BQ3BDO0lBQ0o7SUFFQW5CLElBQUksR0FBRztNQUNIcEIsV0FBVyxFQUFFQSxXQUFXLENBQUNxQixLQUFLO01BQzlCcEIsWUFBWSxFQUFFQSxZQUFZLENBQUNvQixLQUFLO01BQ2hDbkIsWUFBWSxFQUFFQSxZQUFZLENBQUNtQixLQUFLO01BQ2hDbEIsY0FBYyxFQUFFQSxjQUFjLENBQUNrQixLQUFLO01BQ3BDakIsV0FBVyxFQUFFQSxXQUFXLENBQUNpQixLQUFLO01BQzlCaEIsWUFBWSxFQUFFQSxZQUFZLENBQUNnQixLQUFLO01BQ2hDZixVQUFVLEVBQUVBLFVBQVUsQ0FBQ2UsS0FBSztNQUM1QmQsWUFBWSxFQUFFQSxZQUFZLENBQUNjO0lBQy9CLENBQUM7SUFFREMsS0FBSyxDQUFDLG9CQUFvQixFQUFFO01BQ3hCQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUU7TUFDcEIsQ0FBQztNQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJO0lBQzdCLENBQUMsQ0FBQyxDQUNHUSxJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQVIsSUFBSSxFQUFJO01BQ1Y7TUFDQTtNQUNBVyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxLQUFLLEVBQUs7TUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNsQjFDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDMEMsU0FBUyxHQUFHLHlDQUF5QztNQUN0RjdDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDMkMsZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUM5RCxDQUFDLENBQUM7RUFDVixDQUFDLENBQUM7RUFFRjlCLFdBQVcsQ0FBQ2YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDOUMyQixJQUFJLEdBQUc7TUFDSFgsV0FBVyxFQUFFQSxXQUFXLENBQUNZO0lBQzdCLENBQUM7SUFFREMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO01BQ3RCQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUU7TUFDcEIsQ0FBQztNQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJO0lBQzdCLENBQUMsQ0FBQyxDQUNHUSxJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQVIsSUFBSSxFQUFJO01BQ1Y7TUFDQTtNQUNBVyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxLQUFLLEVBQUs7TUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNsQjtNQUNBO0lBQ0osQ0FBQyxDQUFDO0VBRVYsQ0FBQyxDQUFDOztFQUVGdkIsV0FBVyxDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDOUMyQixJQUFJLEdBQUc7TUFDSG9CLFNBQVMsRUFBRTlCLGVBQWUsQ0FBQ1csS0FBSztNQUNoQ3JCLFdBQVcsRUFBRVksZUFBZSxDQUFDUyxLQUFLO01BQ2xDcEIsWUFBWSxFQUFFWSxnQkFBZ0IsQ0FBQ1EsS0FBSztNQUNwQ25CLFlBQVksRUFBRVksZ0JBQWdCLENBQUNPLEtBQUs7TUFDcENsQixjQUFjLEVBQUVZLGtCQUFrQixDQUFDTSxLQUFLO01BQ3hDakIsV0FBVyxFQUFFWSxlQUFlLENBQUNLLEtBQUs7TUFDbENoQixZQUFZLEVBQUVZLGdCQUFnQixDQUFDSSxLQUFLO01BQ3BDZixVQUFVLEVBQUVZLGNBQWMsQ0FBQ0csS0FBSztNQUNoQ2QsWUFBWSxFQUFFWSxnQkFBZ0IsQ0FBQ0U7SUFDbkMsQ0FBQztJQUVEQyxLQUFLLENBQUMsa0JBQWtCLEVBQUU7TUFDdEJDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUk7SUFDN0IsQ0FBQyxDQUFDLENBQ0dRLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBUixJQUFJLEVBQUk7TUFDVjtNQUNBO01BQ0FXLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUNDLEtBQUssRUFBSztNQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO01BQ2xCMUMsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMwQyxTQUFTLEdBQUcseUNBQXlDO01BQ3RGN0MsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMyQyxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQzlELENBQUMsQ0FBQztFQUVWLENBQUMsQ0FBQztBQUdOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcHJvZmlsZVNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1zYXZlJyk7XG4gICAgbGV0IGZpcnN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdC1uYW1lJyk7XG4gICAgbGV0IGxhc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3QtbmFtZScpO1xuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuXG4gICAgbGV0IHN1Ym1pdENvbXBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNvbXBhbnknKTtcbiAgICBsZXQgY29tcGFueU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS1uYW1lJyk7XG4gICAgbGV0IGNvbXBhbnlFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LWVtYWlsJyk7XG4gICAgbGV0IGNvbXBhbnlQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICAgIGxldCBjb21wYW55QWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LWFkZHJlc3MnKTtcbiAgICBsZXQgY29tcGFueUNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS1jaXR5Jyk7XG4gICAgbGV0IGNvbXBhbnlTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LXN0YXRlJyk7XG4gICAgbGV0IGNvbXBhbnlaaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS16aXAnKTtcbiAgICBsZXQgY29tcGFueU1vdHRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbnktbW90dG8nKTtcblxuICAgIGxldCBqb2luQ29tcGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2luLXN1Ym1pdC1jb21wYW55Jyk7XG4gICAgbGV0IGNvbXBhbnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbnktY29kZScpO1xuXG4gICAgbGV0IGNvbXBhbnlJZEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LWlkLWhvbGRlcicpO1xuICAgIGxldCBlZGl0Q29tcGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWNvbXBhbnknKTtcbiAgICBsZXQgZWRpdENvbXBhbnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbnktbmFtZS1lZGl0Jyk7XG4gICAgbGV0IGVkaXRDb21wYW55RW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS1lbWFpbC1lZGl0Jyk7XG4gICAgbGV0IGVkaXRDb21wYW55UGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS1waG9uZS1lZGl0Jyk7XG4gICAgbGV0IGVkaXRDb21wYW55QWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LWFkZHJlc3MtZWRpdCcpO1xuICAgIGxldCBlZGl0Q29tcGFueUNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS1jaXR5LWVkaXQnKTtcbiAgICBsZXQgZWRpdENvbXBhbnlTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW55LXN0YXRlLWVkaXQnKTtcbiAgICBsZXQgZWRpdENvbXBhbnlaaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFueS16aXAtZWRpdCcpO1xuICAgIGxldCBlZGl0Q29tcGFueU1vdHRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbnktbW90dG8tZWRpdCcpO1xuXG5cbiAgICBwcm9maWxlU2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUudmFsdWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUudmFsdWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwudmFsdWVcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZmV0Y2goJy9hcGkvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09IFJFU1BPTlNFISA9PT09PT09PT09XCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpLmlubmVyVGV4dCA9ICdFbWFpbCBhbHJlYWR5IGV4aXN0cyEnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHN1Ym1pdENvbXBhbnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghY29tcGFueU5hbWUudmFsdWUgfHwgIWNvbXBhbnlFbWFpbC52YWx1ZSB8fCAhY29tcGFueVBob25lLnZhbHVlIHx8ICFjb21wYW55QWRkcmVzcy52YWx1ZSB8fCAhY29tcGFueUNpdHkudmFsdWUgfHwgIWNvbXBhbnlTdGF0ZS52YWx1ZSB8fCAhY29tcGFueVppcC52YWx1ZSB8fCAhY29tcGFueU1vdHRvLnZhbHVlKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGZpbGwgb3V0IGFsbCBmaWVsZHMhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY29tcGFueU5hbWU6IGNvbXBhbnlOYW1lLnZhbHVlLFxuICAgICAgICAgICAgY29tcGFueUVtYWlsOiBjb21wYW55RW1haWwudmFsdWUsXG4gICAgICAgICAgICBjb21wYW55UGhvbmU6IGNvbXBhbnlQaG9uZS52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlBZGRyZXNzOiBjb21wYW55QWRkcmVzcy52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlDaXR5OiBjb21wYW55Q2l0eS52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlTdGF0ZTogY29tcGFueVN0YXRlLnZhbHVlLFxuICAgICAgICAgICAgY29tcGFueVppcDogY29tcGFueVppcC52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlNb3R0bzogY29tcGFueU1vdHRvLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCgnL2FwaS9jcmVhdGVDb21wYW55Jywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT0gUkVTUE9OU0UhID09PT09PT09PT1cIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykuaW5uZXJUZXh0ID0gJ0NvbXBhbnkgd2l0aCB0aGlzIEVtYWlsIGFscmVhZHkgZXhpc3RzISc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgam9pbkNvbXBhbnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjb21wYW55Q29kZTogY29tcGFueUNvZGUudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKCcvYXBpL2pvaW5Db21wYW55Jywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT0gUkVTUE9OU0UhID09PT09PT09PT1cIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykuaW5uZXJUZXh0ID0gJ0NvbXBhbnkgd2l0aCB0aGlzIEVtYWlsIGFscmVhZHkgZXhpc3RzISc7XG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBlZGl0Q29tcGFueS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNvbXBhbnlJZDogY29tcGFueUlkSG9sZGVyLnZhbHVlLFxuICAgICAgICAgICAgY29tcGFueU5hbWU6IGVkaXRDb21wYW55TmFtZS52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlFbWFpbDogZWRpdENvbXBhbnlFbWFpbC52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlQaG9uZTogZWRpdENvbXBhbnlQaG9uZS52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBhbnlBZGRyZXNzOiBlZGl0Q29tcGFueUFkZHJlc3MudmFsdWUsXG4gICAgICAgICAgICBjb21wYW55Q2l0eTogZWRpdENvbXBhbnlDaXR5LnZhbHVlLFxuICAgICAgICAgICAgY29tcGFueVN0YXRlOiBlZGl0Q29tcGFueVN0YXRlLnZhbHVlLFxuICAgICAgICAgICAgY29tcGFueVppcDogZWRpdENvbXBhbnlaaXAudmFsdWUsXG4gICAgICAgICAgICBjb21wYW55TW90dG86IGVkaXRDb21wYW55TW90dG8udmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKCcvYXBpL2VkaXRDb21wYW55Jywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT0gUkVTUE9OU0UhID09PT09PT09PT1cIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykuaW5uZXJUZXh0ID0gJ0NvbXBhbnkgd2l0aCB0aGlzIEVtYWlsIGFscmVhZHkgZXhpc3RzISc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxufSk7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZmlsZVNhdmUiLCJnZXRFbGVtZW50QnlJZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJzdWJtaXRDb21wYW55IiwiY29tcGFueU5hbWUiLCJjb21wYW55RW1haWwiLCJjb21wYW55UGhvbmUiLCJjb21wYW55QWRkcmVzcyIsImNvbXBhbnlDaXR5IiwiY29tcGFueVN0YXRlIiwiY29tcGFueVppcCIsImNvbXBhbnlNb3R0byIsImpvaW5Db21wYW55IiwiY29tcGFueUNvZGUiLCJjb21wYW55SWRIb2xkZXIiLCJlZGl0Q29tcGFueSIsImVkaXRDb21wYW55TmFtZSIsImVkaXRDb21wYW55RW1haWwiLCJlZGl0Q29tcGFueVBob25lIiwiZWRpdENvbXBhbnlBZGRyZXNzIiwiZWRpdENvbXBhbnlDaXR5IiwiZWRpdENvbXBhbnlTdGF0ZSIsImVkaXRDb21wYW55WmlwIiwiZWRpdENvbXBhbnlNb3R0byIsImRhdGEiLCJ2YWx1ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwicmVtb3ZlQXR0cmlidXRlIiwiYWxlcnQiLCJjb21wYW55SWQiXSwic291cmNlUm9vdCI6IiJ9