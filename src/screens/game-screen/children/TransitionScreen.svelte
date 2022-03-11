<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import { currentRound, currentScreen, currentSubject } from "../stores/stores";
	import { SCREENS } from "../../../constants/screens";
	import { Interval, startCountdown } from "../../../helpers/start-countdown";
	import { onDestroy, onMount } from "svelte";

	let currentRemainder: number = RULE.TRANSITION_DURATION;
	let interval: Interval;

	const onTick = () => {
		currentRemainder = currentRemainder - 1;
	};

	const onFinishCountDown = () => {
		currentScreen.set(SCREENS.MAIN_GAME);
	};

	onMount(() => {
		interval = startCountdown(RULE.TRANSITION_DURATION, onTick, onFinishCountDown).interval;
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<h1>
	draw {$currentSubject}
</h1>
<div>
	{currentRemainder} sec
</div>
<div>
	{$currentRound}
</div>
