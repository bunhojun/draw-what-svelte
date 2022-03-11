export type Interval = NodeJS.Timer | null;

export const startCountdown = (duration: number, onTick: () => void, onFinish: () => void) => {
	let counter = duration;
	let interval: Interval = null;

	const startInterval = () => {
		interval = setInterval(() => {
			onTick();
			counter = counter - 1;
			if (counter === 0) {
				onFinish();
				if (interval) clearInterval(interval);
			}
		}, 1000);
	};

	startInterval();

	return {
		interval,
	};
};
