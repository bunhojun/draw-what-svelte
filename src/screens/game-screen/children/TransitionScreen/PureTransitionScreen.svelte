<script lang="ts">
	import { RULE } from "../../../../constants/rule";
	import { Interval, startCountdown } from "../../../../helpers/start-countdown";
	import { onDestroy, onMount } from "svelte";
	import { CurrentSubject, CurrentRound } from "../../stores/stores";

	export let onFinishCountDown: () => void;
	export let currentSubject: CurrentSubject;
	export let currentRound: CurrentRound;

	let currentRemainder: number = RULE.TRANSITION_DURATION;
	let interval: Interval;

	const onTick = () => {
		currentRemainder = currentRemainder - 1;
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
	draw {currentSubject}
</h1>
<div>
	{currentRemainder} sec
</div>
<div>
	{currentRound}
</div>
