

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Creating Graphs');




    let ctx = document.getElementById('estimates-over-time').getContext('2d'); // Updated to match the canvas ID
    window.estimateCreationTimeline = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: chartData.datasets.map((dataset) => ({
                ...dataset,
                tension: 0.2 // Assuming you want to set the tension for all datasets
            }))
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
                },
            },
        },
    });

    let ctx2 = document.getElementById('graph-prices').getContext('2d');
    window.estimateCreationTimeline = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: chartData2.labels,
            datasets: chartData2.datasets.map((dataset) => ({
                ...dataset,
            }))
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
                },
            },
        },
    });

});