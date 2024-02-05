import { jsPDF } from "jspdf";

let pdfButton = document.getElementById('pdfButton');
let saveButton = document.getElementById('save-estimate-btn');
let emailPDFButton = document.getElementById('email-pdf-btn');

let address = document.getElementById('estimate-address');
let area = document.getElementById('estimate-area');
let perimeter = document.getElementById('estimate-perimeter');
let creator = document.getElementById('estimate-creator');
let company_name = document.getElementById('company-name');
let company_email = document.getElementById('company-email');
let company_phone = document.getElementById('company-phone');
let customer_name = document.getElementById('customer-name');
let customer_email = document.getElementById('customer-email');
let estimate_id = document.getElementById('estimate-id');

let estimate_material = document.getElementById('estimate-material');


function createPDF(pdf) {
    let selectedOption = estimate_material.querySelector('option:checked');
    let dataMoneyValue = selectedOption.getAttribute('data-money');
    console.log(dataMoneyValue);
    let laborCost = area.value * 2.00;
    let materialCost = area.value * dataMoneyValue;
    let totalCost = laborCost + materialCost;

    // Add a logo to top of PDF
    let logoImage = new Image();
    logoImage.src = '../images/logo.png';
    pdf.addImage(logoImage, 'PNG', 70, 5, 70, 70);

    // Set font and font size
    pdf.setFont("Arial");
    pdf.setFontSize(14);

    // Add border below the logo
    pdf.setDrawColor(128, 128, 128);
    pdf.rect(20, 80, 170, 45);
    pdf.setDrawColor(0);

    // Add content with styling inside the rectangle
    pdf.text(30, 90, "Company Name: " + company_name.value);
    pdf.text(30, 100, "Estimate Creator: " + creator.value);
    pdf.text(30, 110, "Phone: " + company_phone.value);
    pdf.text(30, 120, "Email: " + company_email.value);
    // Add border
    pdf.setDrawColor(128, 128, 128);
    pdf.rect(20, 140, 170, 100);
    pdf.setDrawColor(0);

    pdf.text(30, 150, "Estimate Date: " + new Date().toLocaleDateString("en-US"));
    pdf.text(30, 160, "Client Address: " + address.value);
    pdf.text(30, 170, "Estimated Roof Area: " + area.value + " ft²");
    pdf.text(30, 200, "Labor Cost: @ $2.00 per ft² = $" + laborCost.toFixed(2));
    pdf.text(30, 210, "Material Cost: @ $" + dataMoneyValue + " per ft² = $" + (materialCost).toFixed(2));
    pdf.setFont('Arial', 'bold');
    pdf.text(30, 230, "Total Estimate Cost: $" + totalCost.toFixed(2));
    pdf.setFont('Arial', 'normal');

    // Add small text at the very bottom
    pdf.setFontSize(10);
    pdf.text("Estimate generated with RoofX software. Copyright \u00A9 2023 CS484 LLC", 50, pdf.internal.pageSize.height - 10);

}


pdfButton.addEventListener('click', function () {
    console.log('Generating PDF...');
    // Create a new jsPDF instance
    let pdf = new jsPDF();
    // Call the function that will add content to the PDF
    createPDF(pdf);
    // Save the PDF
    pdf.save('sample.pdf');
});


emailPDFButton.addEventListener('click', function () {
    var modalWait = new bootstrap.Modal(document.getElementById('email-sending'));
    modalWait.show();

    console.log('Generating PDF...');
    // Create a new jsPDF instance
    let pdf = new jsPDF();
    // Call the function that will add content to the PDF
    createPDF(pdf);

    // Send email
    let data = {
        estimate_id: estimate_id.value,
        address: address.value,
        customer_name: customer_name.value,
        customer_email: customer_email.value,
        pdf: pdf.output('datauristring')
    };

    fetch('/api/estimate-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(function (response) {
            if (!response.ok) {
                return response.json().then(json => {
                    throw new Error(json.error || 'Server error');
                });
            }
            return response.json();
        })
        .then(function (data) {
            console.log('Success:', data);

            var modal = new bootstrap.Modal(document.getElementById('email-success'));
            modalWait.hide();
            modal.show();

        })
        .catch(function (error) {
            console.error('Error:', error);
            let errorMessage = document.getElementById('error-message');
            errorMessage.classList.remove('hidden');
            errorMessage.textContent = error.message; // Use textContent for security
        });
});




saveButton.addEventListener('click', function () {
    console.log('Saving estimate...');

    let data = {
        estimate_id: estimate_id.value,
        address: address.value,
        customer_name: customer_name.value,
        customer_email: customer_email.value,
        estimate_material: estimate_material.value
    };

    fetch('/api/estimate-save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(function (response) {
            if (!response.ok) {
                // If the server response is not OK, throw an error with the response
                return response.json().then(json => {
                    throw new Error(json.error || 'Server error');
                });
            }
            return response.json();
        })
        .then(function (data) {
            console.log('Success:', data);
            window.location.reload();
        })
        .catch(function (error) {
            console.error('Error:', error);
            let errorMessage = document.getElementById('error-message');
            errorMessage.classList.remove('hidden');
            errorMessage.textContent = error.message; // Use textContent for security
        });
});

