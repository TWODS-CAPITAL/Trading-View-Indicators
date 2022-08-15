document.body.style.position = 'relative';

var container = document.createElement('div');
document.body.appendChild(container);

var chartWidth = 600;
var chartHeight = 300;

var chart = LightweightCharts.createChart(container, {
	width: chartWidth,
	height: chartHeight,
	rightPriceScale: {
		scaleMargins: {
			top: 0.2,
			bottom: 0.1,
		},
	},
	timeScale: {
		rightOffset: 2,
	},
});

var areaSeries = chart.addAreaSeries({
  topColor: 'rgba(245, 124, 0, 0.4)',
  bottomColor: 'rgba(245, 124, 0, 0.1)',
  lineColor: 'rgba(245, 124, 0, 1)',
  lineWidth: 2,
});

areaSeries.setData([
	{ time: '2016-07-18', value: 26.10 },
	{ time: '2016-07-25', value: 26.19 },
	{ time: '2016-08-01', value: 26.24 },
	{ time: '2016-08-08', value: 26.22 },
	{ time: '2016-08-15', value: 25.98 },
	{ time: '2016-08-22', value: 25.85 },
	{ time: '2016-08-29', value: 25.98 },
	{ time: '2016-09-05', value: 25.71 },
	{ time: '2016-09-12', value: 25.84 },
	{ time: '2016-09-19', value: 25.89 },
	{ time: '2016-09-26', value: 25.65 },
	{ time: '2016-10-03', value: 25.69 },
	{ time: '2016-10-10', value: 25.67 },
	{ time: '2016-10-17', value: 26.11 },
	{ time: '2016-10-24', value: 25.80 },
	{ time: '2016-10-31', value: 25.70 },
	{ time: '2016-11-07', value: 25.40 },
	{ time: '2016-11-14', value: 25.32 },
	{ time: '2016-11-21', value: 25.48 },
	{ time: '2016-11-28', value: 25.08 },
	{ time: '2016-12-05', value: 25.06 },
	{ time: '2016-12-12', value: 25.11 },
	{ time: '2016-12-19', value: 25.34 },
	{ time: '2016-12-26', value: 25.20 },
	{ time: '2017-01-02', value: 25.33 },
	{ time: '2017-01-09', value: 25.56 },
	{ time: '2017-01-16', value: 25.32 },
	{ time: '2017-01-23', value: 25.71 },
	{ time: '2017-01-30', value: 25.85 },
	{ time: '2017-02-06', value: 25.77 },
	{ time: '2017-02-13', value: 25.94 },
	{ time: '2017-02-20', value: 25.67 },
	{ time: '2017-02-27', value: 25.60 },
	{ time: '2017-03-06', value: 25.54 },
	{ time: '2017-03-13', value: 25.84 },
	{ time: '2017-03-20', value: 25.96 },
	{ time: '2017-03-27', value: 25.90 },
	{ time: '2017-04-03', value: 25.97 },
	{ time: '2017-04-10', value: 26.00 },
	{ time: '2017-04-17', value: 26.13 },
	{ time: '2017-04-24', value: 26.02 },
	{ time: '2017-05-01', value: 26.30 },
	{ time: '2017-05-08', value: 26.27 },
	{ time: '2017-05-15', value: 26.24 },
	{ time: '2017-05-22', value: 26.02 },
	{ time: '2017-05-29', value: 26.20 },
	{ time: '2017-06-05', value: 26.12 },
	{ time: '2017-06-12', value: 26.20 },
	{ time: '2017-06-19', value: 26.46 },
	{ time: '2017-06-26', value: 26.39 },
	{ time: '2017-07-03', value: 26.52 },
	{ time: '2017-07-10', value: 26.57 },
	{ time: '2017-07-17', value: 26.65 },
	{ time: '2017-07-24', value: 26.45 },
	{ time: '2017-07-31', value: 26.37 },
	{ time: '2017-08-07', value: 26.13 },
	{ time: '2017-08-14', value: 26.21 },
	{ time: '2017-08-21', value: 26.31 },
	{ time: '2017-08-28', value: 26.33 },
	{ time: '2017-09-04', value: 26.38 },
	{ time: '2017-09-11', value: 26.38 },
	{ time: '2017-09-18', value: 26.50 },
	{ time: '2017-09-25', value: 26.39 },
	{ time: '2017-10-02', value: 25.95 },
	{ time: '2017-10-09', value: 26.15 },
	{ time: '2017-10-16', value: 26.43 },
	{ time: '2017-10-23', value: 26.22 },
	{ time: '2017-10-30', value: 26.14 },
	{ time: '2017-11-06', value: 26.08 },
	{ time: '2017-11-13', value: 26.27 },
	{ time: '2017-11-20', value: 26.30 },
	{ time: '2017-11-27', value: 25.92 },
	{ time: '2017-12-04', value: 26.10 },
	{ time: '2017-12-11', value: 25.88 },
	{ time: '2017-12-18', value: 25.82 },
	{ time: '2017-12-25', value: 25.82 },
	{ time: '2018-01-01', value: 25.81 },
	{ time: '2018-01-08', value: 25.95 },
	{ time: '2018-01-15', value: 26.03 },
	{ time: '2018-01-22', value: 26.04 },
	{ time: '2018-01-29', value: 25.96 },
	{ time: '2018-02-05', value: 25.99 },
	{ time: '2018-02-12', value: 26.00 },
	{ time: '2018-02-19', value: 26.06 },
	{ time: '2018-02-26', value: 25.77 },
	{ time: '2018-03-05', value: 25.81 },
	{ time: '2018-03-12', value: 25.88 },
	{ time: '2018-03-19', value: 25.72 },
	{ time: '2018-03-26', value: 25.75 },
	{ time: '2018-04-02', value: 25.70 },
	{ time: '2018-04-09', value: 25.73 },
	{ time: '2018-04-16', value: 25.74 },
	{ time: '2018-04-23', value: 25.69 },
	{ time: '2018-04-30', value: 25.76 },
	{ time: '2018-05-07', value: 25.89 },
	{ time: '2018-05-14', value: 25.89 },
	{ time: '2018-05-21', value: 26.00 },
	{ time: '2018-05-28', value: 25.79 },
	{ time: '2018-06-04', value: 26.11 },
	{ time: '2018-06-11', value: 26.43 },
	{ time: '2018-06-18', value: 26.30 },
	{ time: '2018-06-25', value: 26.58 },
	{ time: '2018-07-02', value: 26.33 },
	{ time: '2018-07-09', value: 26.33 },
	{ time: '2018-07-16', value: 26.32 },
	{ time: '2018-07-23', value: 26.20 },
	{ time: '2018-07-30', value: 26.03 },
	{ time: '2018-08-06', value: 26.15 },
	{ time: '2018-08-13', value: 26.17 },
	{ time: '2018-08-20', value: 26.28 },
	{ time: '2018-08-27', value: 25.86 },
	{ time: '2018-09-03', value: 25.69 },
	{ time: '2018-09-10', value: 25.69 },
	{ time: '2018-09-17', value: 25.64 },
	{ time: '2018-09-24', value: 25.67 },
	{ time: '2018-10-01', value: 25.55 },
	{ time: '2018-10-08', value: 25.59 },
	{ time: '2018-10-15', value: 26.19 },
	{ time: '2018-10-22', value: 25.81 },
	{ time: '2018-10-29', value: 25.74 },
	{ time: '2018-11-05', value: 25.75 },
	{ time: '2018-11-12', value: 25.75 },
	{ time: '2018-11-19', value: 25.72 },
	{ time: '2018-11-26', value: 25.41 },
	{ time: '2018-12-03', value: 25.39 },
	{ time: '2018-12-10', value: 25.52 },
	{ time: '2018-12-17', value: 25.66 },
	{ time: '2018-12-24', value: 25.68 },
	{ time: '2018-12-31', value: 25.71 },
	{ time: '2019-01-07', value: 25.92 },
	{ time: '2019-01-14', value: 25.60 },
	{ time: '2019-01-21', value: 25.80 },
	{ time: '2019-01-28', value: 25.60 },
	{ time: '2019-02-04', value: 25.72 },
	{ time: '2019-02-11', value: 25.89 },
	{ time: '2019-02-18', value: 26.00 },
	{ time: '2019-02-25', value: 25.86 },
	{ time: '2019-03-04', value: 25.94 },
	{ time: '2019-03-11', value: 26.11 },
	{ time: '2019-03-18', value: 25.88 },
	{ time: '2019-03-25', value: 25.77 },
	{ time: '2019-04-01', value: 26.16 },
	{ time: '2019-04-08', value: 26.04 },
	{ time: '2019-04-15', value: 26.00 },
	{ time: '2019-04-22', value: 25.88 },
	{ time: '2019-04-29', value: 26.02 },
	{ time: '2019-05-06', value: 26.08 },
	{ time: '2019-05-13', value: 26.09 },
	{ time: '2019-05-20', value: 26.16 },
	{ time: '2019-05-27', value: 26.23 },
]);
chart.timeScale().scrollToPosition(-20, false);

var width = 27;
var height = 27;

var button = document.createElement('div');
button.className = 'go-to-realtime-button';
button.style.left = (chartWidth - width - 60) + 'px';
button.style.top = (chartHeight - height - 30) + 'px';
button.style.color = '#4c525e';
button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"></path></svg>';
document.body.appendChild(button);

var timeScale = chart.timeScale();
timeScale.subscribeVisibleTimeRangeChange(function() {
	var buttonVisible = timeScale.scrollPosition() < 0;
	button.style.display = buttonVisible ? 'block' : 'none';
});

button.addEventListener('click', function() {
	timeScale.scrollToRealTime();
});

button.addEventListener('mouseover', function() {
	button.style.background = 'rgba(250, 250, 250, 1)';
	button.style.color = '#000';
});

button.addEventListener('mouseout', function() {
	button.style.background = 'rgba(250, 250, 250, 0.6)';
	button.style.color = '#4c525e';
});