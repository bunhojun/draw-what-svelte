<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import { currentRound, currentScreen } from "../stores/stores";
	import { SCREENS } from "../../../constants/screens";
	import { onMount } from "svelte";
	import { useCountdown } from "../../../helpers/use-countdown";

	const currentSubject = "cat";
	let currentRemainder: number = RULE.TRANSITION_DURATION;

	const onTick = () => {
		currentRemainder = currentRemainder - 1;
	};

	const onFinishCountDown = () => {
		currentScreen.set(SCREENS.MAIN_GAME);
	};

	onMount(() => {
		useCountdown(RULE.TRANSITION_DURATION, onTick, onFinishCountDown);
	});
</script>

<h1>
	draw {currentSubject}
</h1>
<div>
	{currentRemainder} sec
</div>
<div>
	{$currentRound}
</div>
