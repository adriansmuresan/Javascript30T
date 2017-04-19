let countdown;

function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	//console.log({now, then});

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check if we should stop it! and from going lower than 0
		if (setInterval <= 0) {
			clearInterval(countdown);
			return;
		}
		// display the interval
		console.log(secondsLeft);

	}, 1000);
}