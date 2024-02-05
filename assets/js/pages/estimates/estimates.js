// let pdfButton = document.getElementById('pdfButton');
// pdfButton.addEventListener('click', function () {
//     let id = pdfButton.getAttribute('data-id');
//     let data = {
//         id: id
//     }
//
//     fetch('/api/pdfCreator', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(response => response.json())
//         .then(data => {
//             window.location.reload();
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });
//
//
