<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import {
		currentRound,
		currentScreen,
		currentSubject,
		GalleryItem,
		galleryItems,
	} from "../stores/stores";
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

	const onGetFinalResult: ClassifierCallback = async (e, result) => {
		const thisGameResult = result.find(({ label }) => label === $currentSubject);
		const currentCanvas = element.children[0] as HTMLCanvasElement;
		const newImage = await createImageBitmap(currentCanvas);
		const newItem: GalleryItem = {
			imageBitmap: newImage,
			score: thisGameResult?.confidence || 0,
		};
		galleryItems.update((items) => [...items, newItem]);
	};

	const onGetResult: ClassifierCallback = (e, result) => {
		candidates = result.splice(0, RULE.NUM_OF_CANDIDATES);
	};

	const startSummaryCountdown = () => {
		const onSummaryTick = () => {
			remainder = remainder - 1;
		};
		const onSummaryFinish = () => {
			if ($currentRound === RULE.GAME_MAX_ROUND) {
				currentScreen.set(SCREENS.GALLERY);
				return;
			}
			currentScreen.set(SCREENS.TRANSITION);
			currentRound.update((round) => ++round);
		};
		remainder = RULE.TRANSITION_DURATION;
		useCountdown(remainder, onSummaryTick, onSummaryFinish);
	};

	const startGameCountdown = () => {
		const onTick = async () => {
			remainder = remainder - 1;
			if (remainder % 2 === 0) {
				return classifyDrawing(canvas, onGetResult);
			}
		};
		const onFinishCountdown = async () => {
			await classifyDrawing(canvas, onGetFinalResult);
			startSummaryCountdown();
		};

		useCountdown(remainder, onTick, onFinishCountdown);
	};

	onMount(() => {
		startGameCountdown();
		canvas = new Canvas(element);
	});
</script>

<h1>main game</h1>
<div>{$currentRound}</div>
<h1>draw {$currentSubject}</h1>
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
