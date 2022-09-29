<script lang="ts">
	import { RULE as defaultRule } from "../../../../constants/rule";
	import type { Interval } from "../../../../helpers/start-countdown";
	import { startCountdown } from "../../../../helpers/start-countdown";
	import { onDestroy, onMount } from "svelte";
	import { Canvas } from "../../../../classes/canvas";
	import type { Candidates, ClassifierCallback } from "../../../../helpers/classify-drawing";
	import { classifyDrawing } from "../../../../helpers/classify-drawing";
	import type { CurrentSubject, GalleryItem } from "../../stores/stores";
	import ScreenTemplate from "../../../../components/ScreenTemplate.svelte";
	import GameInfoBox from "../../../../components/GameInfoBox.svelte";
	import { TEST_ID } from "../../../../constants/test-id";
	import MainGameRemainder from "../../../../components/MainGameRemainder/MainGameRemainder.svelte";

	export let updateGalleryItems: (newItem: GalleryItem) => void;
	export let onSummaryFinish: () => void;
	export let currentSubject: CurrentSubject;
	// to enable to test this component, set RULE as a property
	export let RULE = defaultRule;

	let element: HTMLElement;
	let remainder: number = RULE.GAME_DURATION;
	let canvas: Canvas;
	let candidates: Candidates = [];
	let interval: Interval;
	let isSummaryTime = false;
	let finalResult: GalleryItem | undefined;

	const onGetFinalResult: ClassifierCallback = async (e, result) => {
		const thisGameResult = result.find(({ label }) => label === currentSubject);
		const currentCanvas = element.children[0] as HTMLCanvasElement;
		const newImage = await createImageBitmap(currentCanvas);
		const newItem: GalleryItem = {
			subject: currentSubject,
			imageBitmap: newImage,
			score: (thisGameResult && Math.round(thisGameResult.confidence * 100)) || 0,
		};
		updateGalleryItems(newItem);
		finalResult = newItem;
	};

	const onGetResult: ClassifierCallback = (e, result) => {
		candidates = result.splice(0, RULE.NUM_OF_CANDIDATES);
	};

	const startSummaryCountdown = () => {
		const onSummaryTick = () => {
			remainder = remainder - 1;
		};

		isSummaryTime = true;
		remainder = RULE.TRANSITION_DURATION;
		interval = startCountdown(remainder, onSummaryTick, onSummaryFinish).interval;
	};

	const startGameCountdown = () => {
		const onTick = async () => {
			remainder = remainder - 1;
			if (remainder % 2 === 0) {
				return classifyDrawing(canvas, onGetResult);
			}
		};
		const onFinishCountdown = async () => {
			canvas.disableCanvas();
			await classifyDrawing(canvas, onGetFinalResult);
			setTimeout(startSummaryCountdown, 1000);
		};

		interval = startCountdown(remainder, onTick, onFinishCountdown).interval;
	};

	onMount(() => {
		startGameCountdown();
		canvas = new Canvas(element);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<ScreenTemplate screenTestId={TEST_ID.MainGameScreen} withRoundIndicator>
	<div class="title">
		<h1>draw {currentSubject}</h1>
		{#if window.screen.width <= 480}
			<MainGameRemainder {remainder} {isSummaryTime} />
		{/if}
	</div>
	<div class="gameWrapper">
		<div bind:this={element} class="canvas" />
		<GameInfoBox {remainder} {canvas} {currentSubject} {candidates} {isSummaryTime} {finalResult} />
	</div>
</ScreenTemplate>

<style>
	.gameWrapper {
		display: flex;
	}
	.canvas {
		margin-right: 10px;
		height: 560px;
		border: 3px solid #000;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media only screen and (max-width: 480px) {
		.gameWrapper {
			display: block;
		}
		.canvas {
			margin-right: 0;
			height: 350px;
			border: 3px solid #000;
		}
	}
</style>
