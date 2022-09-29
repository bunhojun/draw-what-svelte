<script lang="ts">
	import { currentRound, currentScreen, currentSubject } from "../../stores/stores";
	import { SCREENS } from "../../../../constants/screens";
	import PureTransitionScreen from "./PureTransitionScreen.svelte";
	import { getContext, onDestroy, onMount } from "svelte";
	import type { Interval } from "../../../../helpers/start-countdown";
	import { startCountdown } from "../../../../helpers/start-countdown";

	const RULE = getContext("RULE");
	let currentRemainder = RULE.TRANSITION_DURATION;
	let interval: Interval;

	const onFinishCountDown = () => {
		currentScreen.set(SCREENS.MAIN_GAME);
	};

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

<PureTransitionScreen
	{RULE}
	currentRound={$currentRound}
	currentSubject={$currentSubject}
	{onFinishCountDown}
	{currentRemainder}
/>
