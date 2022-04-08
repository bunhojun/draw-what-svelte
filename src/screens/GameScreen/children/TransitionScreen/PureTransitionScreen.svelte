<script lang="ts">
	import { Interval, startCountdown } from "../../../../helpers/start-countdown";
	import { onDestroy, onMount } from "svelte";
	import { CurrentSubject, CurrentRound } from "../../stores/stores";
	import ScreenTemplate from "../../../../components/ScreenTemplate.svelte";
	import { TEST_ID } from "../../../../constants/test-id";
	import { RULE as defaultRule } from "../../../../constants/rule";

	export let onFinishCountDown: () => void;
	export let currentSubject: CurrentSubject;
	export let currentRound: CurrentRound;
	export let RULE = defaultRule;

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

<ScreenTemplate screenTestId={TEST_ID.TransitionScreen}>
	<div class="transition">
		<h1>
			draw {currentSubject}
		</h1>
		<div>
			{currentRemainder} sec
		</div>
		<div>
			{currentRound} / {RULE.GAME_MAX_ROUND}
		</div>
	</div>
</ScreenTemplate>

<style>
	.transition {
		text-align: center;
	}
</style>
