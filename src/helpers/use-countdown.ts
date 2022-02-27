export const useCountdown = (duration: number, onTick: () => void, onFinish: () => void) => {
	let counter = duration;
	const interval = setInterval(() => {
		onTick();
		counter = counter - 1;
		if (counter === 0) {
			onFinish();
			clearInterval(interval);
		}
	}, 1000);
};
