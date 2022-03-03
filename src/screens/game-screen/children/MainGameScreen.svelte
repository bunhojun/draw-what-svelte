<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import { currentRound, currentScreen } from "../stores/stores";
	import { SCREENS } from "../../../constants/screens";
	import { useCountdown } from "../../../helpers/use-countdown";
	import { onMount } from "svelte";
	import { Canvas } from "../../../classes/canvas";
	import { ClassifierCallback, classifyDrawing } from "../../../helpers/classify-drawing";

	let remainder: number = RULE.GAME_DURATION;
	let element: HTMLElement;
	let canvas: Canvas;

	const onGetResult: ClassifierCallback = (e, result) => {
		console.log(result);
	};

	const onTick = async () => {
		remainder = remainder - 1;
		await classifyDrawing(canvas, onGetResult);
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
		canvas = new Canvas(element);
	});
</script>

<h1>main game</h1>
<div>{$currentRound}</div>
<div class="canvasWrapper">
	<div bind:this={element} />
	<div>
		<div>{remainder} sec</div>
		<div>some comment</div>
		<button on:click={() => canvas.clearCanvas()}>clear canvas</button>
	</div>
</div>

<style>
	.canvasWrapper {
		display: flex;
	}
</style>
