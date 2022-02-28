<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import { currentRound, currentScreen } from "../stores/stores";
	import { SCREENS } from "../../../constants/screens";
	import { useCountdown } from "../../../helpers/use-countdown";
	import { onMount } from "svelte";
	import Canvas from "../../../components/Canvas.svelte";

	let remainder: number = RULE.GAME_DURATION;

	const onTick = () => {
		remainder = remainder - 1;
	};

	const onFinishCountdown = () => {
		if ($currentRound === RULE.GAME_MAX_ROUND) {
			currentScreen.set(SCREENS.GALLERY);
			return;
		}

		currentScreen.set(SCREENS.TRANSITION);
		currentRound.update((round) => ++round);
	};

	onMount(() => {
		useCountdown(remainder, onTick, onFinishCountdown);
	});
</script>

<h1>main game</h1>
<Canvas />
<div>{remainder} sec</div>
<div>{$currentRound}</div>
