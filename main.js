window.onload = function () {
	var seconds = 00;
	var tens = 00;
	var outputSeconds = document.getElementById('second');
	var outputTens = document.getElementById('tens');
	var btnStart = document.getElementById('btn-start');
	var btnReset = document.getElementById('btn-reset');
	var btnStop = document.getElementById('btn-stop');
	var Interval;

	btnStart.addEventListener('click', () => {
		clearInterval(Interval);
		Interval = setInterval(startTime, 10);
	});

	btnStop.addEventListener('click', () => {
		clearInterval(Interval);
	});

	btnReset.addEventListener('click', () => {
		clearInterval(Interval);
		tens = '00';
		seconds = '00';
		outputSeconds.innerHTML = seconds;
		outputTens.innerHTML = tens;
	});

	function startTime() {
		tens++;
		if (tens <= 9) {
			outputTens.innerHTML = '0' + tens;
		}
		if (tens > 9) {
			outputTens.innerHTML = tens;
		}
		if (tens > 99) {
			seconds++;
			outputSeconds.innerHTML = '0' + seconds;
			tens = 0;
			outputTens.innerHTML = '0' + tens;
		}
		if (seconds > 9) {
			outputSeconds.innerHTML = seconds;
		}
	}
};

// window.onload = function () {
// 	var seconds = 00;
// 	var tens = 00;
// 	var OutputSeconds = document.getElementById('second');
// 	var OutputTens = document.getElementById('tens');
// 	var buttonStart = document.getElementById('btn-start');
// 	var buttonStop = document.getElementById('btn-stop');
// 	var buttonReset = document.getElementById('btn-reset');
// 	var Interval;

// 	buttonStart.addEventListener('click', () => {
// 		clearInterval(Interval);
// 		Interval = setInterval(startTimer, 10); // millisecond 10 = 0.01 second
// 	});

// 	buttonStop.addEventListener('click', () => {
// 		clearInterval(Interval);
// 	});

// 	buttonReset.addEventListener('click', () => {
// 		clearInterval(Interval);
// 		tens = '00';
// 		seconds = '00';
// 		OutputSeconds.innerHTML = seconds;
// 		OutputTens.innerHTML = tens;
// 	});

// 	function startTimer() {
// 		tens++;
// 		if (tens <= 9) {
// 			OutputTens.innerHTML = '0' + tens;
// 		}

// 		if (tens > 9) {
// 			OutputTens.innerHTML = tens;
// 		}

// 		if (tens > 99) {
// 			seconds++;
// 			OutputSeconds.innerHTML = '0' + seconds;
// 			tens = 0;
// 			OutputTens.innerHTML = '0' + 0;
// 		}

// 		if (seconds > 9) {
// 			OutputSeconds.innerHTML = seconds;
// 		}
// 	}
// };
