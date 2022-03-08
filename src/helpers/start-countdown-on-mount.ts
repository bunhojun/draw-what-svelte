import { onDestroy, onMount } from "svelte";

export const startCountdownOnMount = (
	duration: number,
	onTick: () => void,
	onFinish: () => void
) => {
	let counter = duration;
	let interval: NodeJS.Timer;

	onMount(() => {
		interval = setInterval(() => {
			onTick();
			counter = counter - 1;
			if (counter === 0) {
				onFinish();
				clearInterval(interval);
			}
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
};
