window.onload = function(){
    
    let myChart = new Chart(
        document.getElementById("chart-doughnut"),
        {
            type: 'doughnut',
            data: {
                labels: [
                    '1 / 5',
                    '2 / 5',
                    '3 / 30',
                    '4 / 30',
                    '5 / 30',
                  ],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: [
                    '#ffb515',
                    '#b620e1',
                    '#ff693b',
                    '#b7a3ff',
                    '#25c7ef'
                ],
                  data: [5, 5, 30, 30, 30],
                }]
              },
            options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                  },
                }
            }
        }
    );
}