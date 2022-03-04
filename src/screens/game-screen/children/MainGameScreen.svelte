<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import { currentRound, currentScreen } from "../stores/stores";
	import { SCREENS } from "../../../constants/screens";
	import { useCountdown } from "../../../helpers/use-countdown";
	import { onMount } from "svelte";
	import { Canvas } from "../../../classes/canvas";
	import {
		Candidates,
		ClassifierCallback,
		classifyDrawing,
	} from "../../../helpers/classify-drawing";
	import ScoreDisplay from "../../../components/ScoreDisplay.svelte";

	let remainder: number = RULE.GAME_DURATION;
	let element: HTMLElement;
	let canvas: Canvas;
	let candidates: Candidates = [];

	const onGetResult: ClassifierCallback = (e, result) => {
		candidates = result.splice(0, RULE.NUM_OF_CANDIDATES);
	};

	const onTick = async () => {
		remainder = remainder - 1;
		if (remainder % 2 === 0) {
			await classifyDrawing(canvas, onGetResult);
		}
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
	<div bind:this={element} class="canvas" />
	<div>
		<div>{remainder} sec</div>
		<ScoreDisplay {candidates} />
		<button on:click={() => canvas.clearCanvas()}>clear canvas</button>
	</div>
</div>

<style>
	.canvasWrapper {
		display: flex;
	}
	.canvas {
		margin-right: 10px;
	}
</style>
