let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	//console.log({now, then});
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check if we should stop it! and from going lower than 0
		if (secondsLeft <= 0) {
			clearInterval(countdown);
			return;
		}
		// display the interval
		displayTimeLeft(secondsLeft);

	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds}`;
	timerDisplay.textContent = display;
	//console.log({minutes, remainderSeconds});
}