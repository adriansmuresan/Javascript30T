function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	//console.log({now, then});

	setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check if we should stop it! and from going lower than 0
		if (setInterval <= 0) {
			return;
		}
		// display teh interval
		console.log(secondsLeft);

	}, 1000);
}