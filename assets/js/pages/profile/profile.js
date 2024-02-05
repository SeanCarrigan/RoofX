document.addEventListener('DOMContentLoaded', function () {
    let profileSave = document.getElementById('profile-save');
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let email = document.getElementById('email');

    let submitCompany = document.getElementById('submit-company');
    let companyName = document.getElementById('company-name');
    let companyEmail = document.getElementById('company-email');
    let companyPhone = document.getElementById('phone');
    let companyAddress = document.getElementById('company-address');
    let companyCity = document.getElementById('company-city');
    let companyState = document.getElementById('company-state');
    let companyZip = document.getElementById('company-zip');
    let companyMotto = document.getElementById('company-motto');

    let joinCompany = document.getElementById('join-submit-company');
    let companyCode = document.getElementById('company-code');

    let companyIdHolder = document.getElementById('company-id-holder');
    let editCompany = document.getElementById('edit-company');
    let editCompanyName = document.getElementById('company-name-edit');
    let editCompanyEmail = document.getElementById('company-email-edit');
    let editCompanyPhone = document.getElementById('company-phone-edit');
    let editCompanyAddress = document.getElementById('company-address-edit');
    let editCompanyCity = document.getElementById('company-city-edit');
    let editCompanyState = document.getElementById('company-state-edit');
    let editCompanyZip = document.getElementById('company-zip-edit');
    let editCompanyMotto = document.getElementById('company-motto-edit');


    profileSave.addEventListener('click', function () {


        let data = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        }


        fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // console.log("========== RESPONSE! ==========");
                // console.log(data);
                window.location.reload();
            })
            .catch((error) => {
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
        }

        fetch('/api/createCompany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // console.log("========== RESPONSE! ==========");
                // console.log(data);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                document.getElementById('error').innerText = 'Company with this Email already exists!';
                document.getElementById('error').removeAttribute('hidden');
            });
    });

    joinCompany.addEventListener('click', function () {
        data = {
            companyCode: companyCode.value
        }

        fetch('/api/joinCompany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // console.log("========== RESPONSE! ==========");
                // console.log(data);
                window.location.reload();
            })
            .catch((error) => {
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
        }

        fetch('/api/editCompany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // console.log("========== RESPONSE! ==========");
                // console.log(data);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                document.getElementById('error').innerText = 'Company with this Email already exists!';
                document.getElementById('error').removeAttribute('hidden');
            });

    });


});
