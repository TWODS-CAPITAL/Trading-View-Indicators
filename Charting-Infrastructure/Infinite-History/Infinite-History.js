var chart = LightweightCharts.createChart(document.body, {
	width: 600,
  height: 300,
});

var candleSeries = chart.addCandlestickSeries();

var period = {
	timeFrom: { day: 1, month: 1, year: 2018 },
	timeTo: { day: 1, month: 1, year: 2019 },
};
var data = generateBarsData(period);
candleSeries.setData(data);

var timeScale = chart.timeScale();

var timer = null;
timeScale.subscribeVisibleLogicalRangeChange(() => {
	if (timer !== null) {
		return;
	}
	timer = setTimeout(() => {
	 var logicalRange = timeScale.getVisibleLogicalRange();
	 if (logicalRange !== null) {
		 var barsInfo = candleSeries.barsInLogicalRange(logicalRange);
		 if (barsInfo !== null && barsInfo.barsBefore < 10) {
			 var firstTime = getBusinessDayBeforeCurrentAt(data[0].time, 1);
			 var lastTime = getBusinessDayBeforeCurrentAt(firstTime, Math.max(100, -barsInfo.barsBefore + 100));
			 var newPeriod = {
				 timeFrom: lastTime,
				 timeTo: firstTime,
			 };
			 data = [...generateBarsData(newPeriod), ...data];
			 candleSeries.setData(data);
		 }
	 }
	 timer = null;
	}, 50);
});

function getBusinessDayBeforeCurrentAt(date, daysDelta) {
	const dateWithDelta = new Date(Date.UTC(date.year, date.month - 1, date.day - daysDelta, 0, 0, 0, 0));
	return { year: dateWithDelta.getFullYear(), month: dateWithDelta.getMonth() + 1, day: dateWithDelta.getDate() };
}

function generateBarsData(period) {
	var res = [];
	var controlPoints = generateControlPoints(res, period);
	for (var i = 0; i < controlPoints.length - 1; i++) {
		var left = controlPoints[i];
		var right = controlPoints[i + 1];
		fillBarsSegment(left, right, res);
	}
	return res;
}

function fillBarsSegment(left, right, points) {
	var deltaY = right.price - left.price;
	var deltaX = right.index - left.index;
	var angle = deltaY / deltaX;
	for (var i = left.index; i <= right.index; i++) {
		var basePrice = left.price + (i - left.index) * angle;
		var openNoise = (0.1 - Math.random() * 0.2) + 1;
		var closeNoise = (0.1 - Math.random() * 0.2) + 1;
		var open = basePrice * openNoise;
		var close = basePrice * closeNoise;
		var high = Math.max(basePrice * (1 + Math.random() * 0.2), open, close);
		var low = Math.min(basePrice * (1 - Math.random() * 0.2), open, close);
		points[i].open = open;
		points[i].high = high;
		points[i].low = low;
		points[i].close = close;
	}
}

function generateControlPoints(res, period, dataMultiplier) {
	var time = period !== undefined ? period.timeFrom : { day: 1, month: 1, year: 2018 };
	var timeTo = period !== undefined ? period.timeTo : { day: 1, month: 1, year: 2019 };
	var days = getDiffDays(time, timeTo);
	dataMultiplier = dataMultiplier || 1;
	var controlPoints = [];
	controlPoints.push({ index: 0, price: getRandomPrice() * dataMultiplier });
	for (var i = 0; i < days; i++) {
		if (i > 0 && i < days - 1 && Math.random() < 0.05) {
			controlPoints.push({ index: i, price: getRandomPrice() * dataMultiplier });
		}
		res.push({ time: time });
		time = nextBusinessDay(time);
	}
	controlPoints.push({ index: res.length - 1, price: getRandomPrice() * dataMultiplier });
	return controlPoints;
}

function getDiffDays(dateFrom, dateTo) {
	var df = convertBusinessDayToUTCTimestamp(dateFrom);
	var dt = convertBusinessDayToUTCTimestamp(dateTo);
	var diffTime = Math.abs(dt.getTime() - df.getTime());
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function convertBusinessDayToUTCTimestamp(date) {
	return new Date(Date.UTC(date.year, date.month - 1, date.day, 0, 0, 0, 0));
}

function nextBusinessDay(time) {
	var d = convertBusinessDayToUTCTimestamp({ year: time.year, month: time.month, day: time.day + 1 });
	return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
}

function getRandomPrice() {
	return 10 + Math.round(Math.random() * 10000) / 100;
}