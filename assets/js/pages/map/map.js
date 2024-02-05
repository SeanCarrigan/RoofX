mapboxgl.accessToken =
    "pk.eyJ1Ijoic2VhbmNhcnJpZ2FuIiwiYSI6ImNsbXAyMnh2eTB0bTUybHFndGZ0a3d6OXEifQ.fYyH1nfV9C9wxei66yATMQ";
const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/satellite-v9", // style URL
    center: [-87.64953641886095, 41.87119359072147], // starting position [lng, lat]
    zoom: 16, // starting zoom
});

const draw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
        polygon: true,
        trash: true,
    },
    // Set mapbox-gl-draw to draw by default.
    // The user does not have to click the polygon control button first.
    defaultMode: "draw_polygon",
});
map.addControl(draw);

// Define these variables outside the updateArea function
let area, perimeter;

map.on("draw.create", updateArea);
map.on("draw.delete", updateArea);
map.on("draw.update", updateArea);

function updateArea(e) {
    const data = draw.getAll();
    const answer = document.getElementById("calculated-area");
    const answerPerimeter = document.getElementById("calculated-perimeter");

    if (data.features.length > 0) {
        // Calculate the area using Turf.js
        const area = turf.area(data);

        // Calculate the perimeter using Turf.js
        const perimeter = turf.lineDistance(data.features[0], { units: 'meters' });

        const roundedArea = Math.round(area * 100) / 100;
        const roundedPerimeter = Math.round(perimeter * 100) / 100;

        const squareFeet = (Math.round(roundedArea * 10.7639) * 100) / 100;
        const feet = (Math.round(roundedPerimeter * 3.2808) * 100) / 100;

        answer.innerHTML = `<p><strong>Area: ${squareFeet} square feet</strong></p>`;
        answerPerimeter.innerHTML = `<p><strong>Perimeter: ${feet} feet</strong></p>`;
    } else {
        answer.innerHTML = "";
        answerPerimeter.innerHTML = "";
        if (e.type !== "draw.delete")
            alert("Click the map to draw a polygon");
    }
}


// Add geocoding functionality
const geocoder = document.getElementById("geocoder");
const searchInput = document.getElementById("address");
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", function () {
    const query = searchInput.value;
    if (query.trim() !== "") {
        // Use the Mapbox Geocoding API to search for the address and center the map on the result.
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.features.length > 0) {
                    const center = data.features[0].center;
                    map.flyTo({center, zoom: 20});
                } else {
                    alert("Address not found.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while searching for the address.");
            });
    }
});


const script = document.getElementById('search-js');
script.onload = function() {
    const addressInput = document.getElementById('address');
    // mapboxsearch.autofill({
    //     accessToken: "pk.eyJ1Ijoic2VhbmNhcnJpZ2FuIiwiYSI6ImNsbXAyMnh2eTB0bTUybHFndGZ0a3d6OXEifQ.fYyH1nfV9C9wxei66yATMQ"
    // });

    // Add an event listener to handle the selection of a suggestion
    const searchContainer = document.querySelector('.mapboxgl-ctrl-geocoder');

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
    const addressInput = document.getElementById('address');
    addressInput.value = selectedValue;
}

// Attach a click event listener to each suggestion item
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('suggestion-item')) {
        const selectedValue = event.target.textContent;
        populateInput(selectedValue);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                for(let node of mutation.addedNodes) {
                    if (node.classList && node.classList.contains('mapboxgl-ctrl-geocoder')) {
                        attachEventListenerToSearchContainer(node);
                        observer.disconnect();  // Stop observing once we've found our element
                    }
                }
            }
        }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
});

function attachEventListenerToSearchContainer(searchContainer) {
    searchContainer.addEventListener('click', function(event) {
        const selectedSuggestion = event.target.closest('.mbx0aa48ec1--Suggestion');
        if (selectedSuggestion) {
            const selectedAddress = selectedSuggestion.textContent;
            const addressInput = document.getElementById('address');
            addressInput.value = selectedAddress;
        }
    });
}

let areaCompleted = document.getElementById("calculated-area");
let perimeterCompleted = document.getElementById("calculated-perimeter");
let completeButton = document.getElementById("complete-estimate")

function extractIntFromString(str) {
    let match = str.match(/\d+/); // Match the first sequence of digits
    return match ? Number(match[0]) : null;
}
completeButton.addEventListener('click', function(event){
    let address = document.querySelector("#address").value;
    if (!address) {
        alert("Please enter an address");
        return;
    }

    let perimeterText = document.querySelector("#calculated-perimeter p").innerText;
    let areaText = document.querySelector("#calculated-area p").innerText;


    let perimeterInt = extractIntFromString(perimeterText);
    let areaInt = extractIntFromString(areaText);



    data = {
        perimeterInt: perimeterInt,
        areaInt: areaInt,
        address: address
    }



    fetch('/api/createEstimate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            window.location.href = '/estimates';
        })
        .catch((error) => {
            console.log(error);
        });


});


