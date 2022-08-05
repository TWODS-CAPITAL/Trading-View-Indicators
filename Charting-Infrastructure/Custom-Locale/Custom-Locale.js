function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
	var switcherElement = document.createElement('div');
	switcherElement.classList.add('switcher');

	var intervalElements = items.map(function(item) {
		var itemEl = document.createElement('button');
		itemEl.innerText = item;
		itemEl.classList.add('switcher-item');
		itemEl.classList.toggle('switcher-active-item', item === activeItem);
		itemEl.addEventListener('click', function() {
			onItemClicked(item);
		});
		switcherElement.appendChild(itemEl);
		return itemEl;
	});

	function onItemClicked(item) {
		if (item === activeItem) {
			return;
		}

		intervalElements.forEach(function(element, index) {
			element.classList.toggle('switcher-active-item', items[index] === item);
		});

		activeItem = item;

		activeItemChangedCallback(item);
	}

	return switcherElement;
}

var switcherElement = createSimpleSwitcher(['es-ES', 'en-US', 'ja-JP'], 'en-US', function(locale) {
	chart.applyOptions({
		localization: {
			locale: locale,
      dateFormat: 'ja-JP' === locale ? 'yyyy-MM-dd' : 'dd MMM \'yy',
		},
	});
});

var chartElement = document.createElement('div');

var chart = LightweightCharts.createChart(chartElement, {
	width: 600,
  height: 300,
	localization: {
		locale: 'en-US',
	},
});

document.body.appendChild(chartElement);
document.body.appendChild(switcherElement);

var lineSeries = chart.addLineSeries();

lineSeries.setData([
	{ time: '2018-10-19', value: 52.89 },
	{ time: '2018-10-22', value: 51.65 },
	{ time: '2018-10-23', value: 51.56 },
	{ time: '2018-10-24', value: 50.19 },
	{ time: '2018-10-25', value: 51.86 },
	{ time: '2018-10-26', value: 51.25 },
	{ time: '2018-10-29', value: 52.23 },
	{ time: '2018-10-30', value: 52.69 },
	{ time: '2018-10-31', value: 53.23 },
	{ time: '2018-11-01', value: 53.56 },
	{ time: '2018-11-02', value: 53.61 },
	{ time: '2018-11-05', value: 53.66 },
	{ time: '2018-11-06', value: 53.55 },
	{ time: '2018-11-07', value: 53.58 },
	{ time: '2018-11-08', value: 53.16 },
	{ time: '2018-11-09', value: 53.04 },
	{ time: '2018-11-12', value: 52.35 },
	{ time: '2018-11-13', value: 52.74 },
	{ time: '2018-11-14', value: 52.15 },
	{ time: '2018-11-15', value: 52.82 },
	{ time: '2018-11-16', value: 52.94 },
	{ time: '2018-11-19', value: 53.32 },
	{ time: '2018-11-20', value: 52.54 },
	{ time: '2018-11-21', value: 52.43 },
	{ time: '2018-11-23', value: 51.83 },
	{ time: '2018-11-26', value: 52.88 },
	{ time: '2018-11-27', value: 53.19 },
	{ time: '2018-11-28', value: 54.35 },
	{ time: '2018-11-29', value: 54.04 },
	{ time: '2018-11-30', value: 54.28 },
	{ time: '2018-12-03', value: 54.24 },
	{ time: '2018-12-04', value: 51.78 },
	{ time: '2018-12-06', value: 51.09 },
	{ time: '2018-12-07', value: 50.26 },
	{ time: '2018-12-10', value: 48.80 },
	{ time: '2018-12-11', value: 47.76 },
	{ time: '2018-12-12', value: 47.74 },
	{ time: '2018-12-13', value: 47.03 },
	{ time: '2018-12-14', value: 46.54 },
	{ time: '2018-12-17', value: 46.61 },
	{ time: '2018-12-18', value: 46.52 },
	{ time: '2018-12-19', value: 45.67 },
	{ time: '2018-12-20', value: 46.04 },
	{ time: '2018-12-21', value: 45.12 },
	{ time: '2018-12-24', value: 43.60 },
	{ time: '2018-12-26', value: 45.59 },
	{ time: '2018-12-27', value: 45.53 },
	{ time: '2018-12-28', value: 45.78 },
	{ time: '2018-12-31', value: 46.08 },
	{ time: '2019-01-02', value: 46.94 },
	{ time: '2019-01-03', value: 46.57 },
	{ time: '2019-01-04', value: 47.95 },
	{ time: '2019-01-07', value: 47.64 },
	{ time: '2019-01-08', value: 47.54 },
	{ time: '2019-01-09', value: 47.80 },
	{ time: '2019-01-10', value: 47.75 },
	{ time: '2019-01-11', value: 47.87 },
	{ time: '2019-01-14', value: 48.42 },
	{ time: '2019-01-15', value: 47.67 },
	{ time: '2019-01-16', value: 48.94 },
	{ time: '2019-01-17', value: 49.23 },
	{ time: '2019-01-18', value: 50.01 },
	{ time: '2019-01-22', value: 49.86 },
	{ time: '2019-01-23', value: 50.12 },
	{ time: '2019-01-24', value: 49.98 },
	{ time: '2019-01-25', value: 50.13 },
	{ time: '2019-01-28', value: 49.82 },
	{ time: '2019-01-29', value: 49.85 },
	{ time: '2019-01-30', value: 50.09 },
	{ time: '2019-01-31', value: 48.91 },
	{ time: '2019-02-01', value: 48.91 },
	{ time: '2019-02-04', value: 49.06 },
	{ time: '2019-02-05', value: 49.27 },
	{ time: '2019-02-06', value: 49.22 },
	{ time: '2019-02-07', value: 48.08 },
	{ time: '2019-02-08', value: 47.65 },
	{ time: '2019-02-11', value: 47.65 },
	{ time: '2019-02-12', value: 49.05 },
	{ time: '2019-02-13', value: 49.02 },
	{ time: '2019-02-14', value: 48.52 },
	{ time: '2019-02-15', value: 49.22 },
	{ time: '2019-02-19', value: 49.38 },
	{ time: '2019-02-20', value: 49.81 },
	{ time: '2019-02-21', value: 49.56 },
	{ time: '2019-02-22', value: 49.02 },
	{ time: '2019-02-25', value: 49.66 },
	{ time: '2019-02-26', value: 49.59 },
	{ time: '2019-02-27', value: 49.90 },
	{ time: '2019-02-28', value: 49.89 },
	{ time: '2019-03-01', value: 50.03 },
	{ time: '2019-03-04', value: 50.11 },
	{ time: '2019-03-05', value: 49.89 },
	{ time: '2019-03-06', value: 49.82 },
	{ time: '2019-03-07', value: 49.68 },
	{ time: '2019-03-08', value: 49.80 },
	{ time: '2019-03-11', value: 49.76 },
	{ time: '2019-03-12', value: 49.65 },
	{ time: '2019-03-13', value: 49.92 },
	{ time: '2019-03-14', value: 50.35 },
	{ time: '2019-03-15', value: 50.66 },
	{ time: '2019-03-18', value: 51.73 },
	{ time: '2019-03-19', value: 51.41 },
	{ time: '2019-03-20', value: 50.40 },
	{ time: '2019-03-21', value: 49.86 },
	{ time: '2019-03-22', value: 48.31 },
	{ time: '2019-03-25', value: 48.08 },
	{ time: '2019-03-26', value: 49.01 },
	{ time: '2019-03-27', value: 48.77 },
	{ time: '2019-03-28', value: 49.09 },
	{ time: '2019-03-29', value: 48.32 },
	{ time: '2019-04-01', value: 48.81 },
	{ time: '2019-04-02', value: 48.21 },
	{ time: '2019-04-03', value: 48.86 },
	{ time: '2019-04-04', value: 49.17 },
	{ time: '2019-04-05', value: 48.78 },
	{ time: '2019-04-08', value: 48.88 },
	{ time: '2019-04-09', value: 48.14 },
	{ time: '2019-04-10', value: 47.79 },
	{ time: '2019-04-11', value: 47.74 },
	{ time: '2019-04-12', value: 46.49 },
	{ time: '2019-04-15', value: 46.77 },
	{ time: '2019-04-16', value: 47.65 },
	{ time: '2019-04-17', value: 47.55 },
	{ time: '2019-04-18', value: 47.58 },
	{ time: '2019-04-22', value: 47.26 },
	{ time: '2019-04-23', value: 47.35 },
	{ time: '2019-04-24', value: 47.48 },
	{ time: '2019-04-25', value: 47.51 },
	{ time: '2019-04-26', value: 47.96 },
	{ time: '2019-04-29', value: 48.27 },
	{ time: '2019-04-30', value: 48.41 },
	{ time: '2019-05-01', value: 48.23 },
	{ time: '2019-05-02', value: 48.30 },
	{ time: '2019-05-03', value: 48.65 },
	{ time: '2019-05-06', value: 48.43 },
	{ time: '2019-05-07', value: 47.17 },
	{ time: '2019-05-08', value: 47.00 },
	{ time: '2019-05-09', value: 46.74 },
	{ time: '2019-05-10', value: 47.15 },
	{ time: '2019-05-13', value: 46.33 },
	{ time: '2019-05-14', value: 46.49 },
	{ time: '2019-05-15', value: 45.84 },
	{ time: '2019-05-16', value: 45.90 },
	{ time: '2019-05-17', value: 45.70 },
	{ time: '2019-05-20', value: 45.45 },
	{ time: '2019-05-21', value: 46.33 },
	{ time: '2019-05-22', value: 46.10 },
	{ time: '2019-05-23', value: 45.56 },
	{ time: '2019-05-24', value: 46.17 },
	{ time: '2019-05-28', value: 46.01 },
]);