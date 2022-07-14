const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(71, 51, 255, 1)',
                'rgba(244, 82, 21, 1)',
                'rgba(255, 252,71, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});


const earn = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'First Seven Month',
            data: [5000, 25000, 7800, 12000, 2000, 30000, 15000],
            backgroundColor: [
                '#F15CFF',
                '#FF0800',
                '#CDCACC',
                '#FFB8D1',
                '#05E0F0',
                '#5CFF69',
                '#9598E6'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});