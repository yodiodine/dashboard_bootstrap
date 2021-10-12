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
				maintainAspectRatio:false,
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
	const datapoints = [30, 25, 20, 40, 45, 62, 42, 40, 40, 20, 23, 25, 30];
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
				cubicInterpolationMode: 'monotone',
				tension: 0.4
				}]
			},
			options: {
			maintainAspectRatio:false,
				responsive: true,
				plugins: {
				legend: {
					position: 'none',
				},
				},
				y: {
				display: true,
				title: {
					display: true,
					text: 'Value'
				},
				suggestedMin: 0,
				suggestedMax: 100
				}
			}
		}
	);
	media();
	window.onresize = function(){
		media();
	}
	
	function media(){
		if (window.matchMedia("(max-width: 1200px)").matches) {
			myChart.destroy();
			myChart = new Chart(
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
						maintainAspectRatio:false,
						responsive: true,
						plugins: {
						legend: {
							position: 'none',
						},
						}
					}
				}
			);
		}
		else{
			myChart.config._config.options.plugins.legend.position = "right";
		}
	}
}

