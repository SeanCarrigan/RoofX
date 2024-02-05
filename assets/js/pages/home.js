let companyAccept = document.getElementsByClassName('notification-accept');
let companyReject = document.getElementsByClassName('notification-reject');


Array.from(companyAccept).forEach((element) => {
    element.addEventListener('click', function () {
        let id = element.getAttribute('data-user');
        let requestId = element.getAttribute('data-request');
        let company = element.getAttribute('data-company');
        let data = {
            id: id,
            requestId: requestId,
            company: company,
            status: 'accepted'
        }

        fetch('/api/decideCompany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    });
});

Array.from(companyReject).forEach((element) => {
    element.addEventListener('click', function () {
        let id = element.getAttribute('data-user');
        let requestId = element.getAttribute('data-request');
        let company = element.getAttribute('data-company');
        let data = {
            id: id,
            requestId: requestId,
            company: company,
            status: 'rejected'
        }

        fetch('/api/decideCompany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    });
});




