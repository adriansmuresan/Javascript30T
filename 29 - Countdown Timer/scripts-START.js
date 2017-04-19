let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	//console.log({now, then});
	displayTimeLeft(seconds);
	displayEndTime(then);

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
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
	document.title = display;
	//console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const adjustedHour = hour > 12 ? hour -12 : hour;
	const minutes = end.getMinutes();
	endTime.textContent = `Be back in ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
	console.log(this);s
}

buttons.forEach(button => button.addEventListener('click', startTimer));