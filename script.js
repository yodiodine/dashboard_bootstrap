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

	let label = [];
	const datapoints = [0, 20, 20, 60, 60, 120, 100, 180, 120, 125, 105, 110, 170];
	for (let i = 0; i < 12; ++i) {
		label.push(i.toString());
	}

    let myChart2 = new Chart(
        document.getElementById("chart-line"),
		{
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: "red",
                  data: datapoints,
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
