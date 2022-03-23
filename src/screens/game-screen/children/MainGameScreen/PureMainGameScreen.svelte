<script lang="ts">
	import { RULE } from "../../../../constants/rule";
	import { Interval, startCountdown } from "../../../../helpers/start-countdown";
	import { onDestroy, onMount } from "svelte";
	import { Canvas } from "../../../../classes/canvas";
	import {
		Candidates,
		ClassifierCallback,
		classifyDrawing,
	} from "../../../../helpers/classify-drawing";
	import ScoreDisplay from "../../../../components/ScoreDisplay.svelte";
	import { CurrentSubject, GalleryItem } from "../../stores/stores";
	import ScreenTemplate from "../../../../components/ScreenTemplate.svelte";
	import Button from "../../../../components/Button/Button.svelte";

	export let updateGalleryItems: (newItem: GalleryItem) => void;
	export let onSummaryFinish: () => void;
	export let currentSubject: CurrentSubject;

	let element: HTMLElement;
	let remainder: number = RULE.GAME_DURATION;
	let canvas: Canvas;
	let candidates: Candidates = [];
	let interval: Interval;

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
	};

	const onGetResult: ClassifierCallback = (e, result) => {
		candidates = result.splice(0, RULE.NUM_OF_CANDIDATES);
	};

	const startSummaryCountdown = () => {
		const onSummaryTick = () => {
			remainder = remainder - 1;
		};

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
			await classifyDrawing(canvas, onGetFinalResult);
			startSummaryCountdown();
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

<ScreenTemplate withDefaultHeader>
	<h1>draw {currentSubject}</h1>
	<div class="canvasWrapper">
		<div bind:this={element} class="canvas" />
		<div>
			<div>{remainder} sec</div>
			<ScoreDisplay {candidates} />
			<Button onClick={() => canvas.clearCanvas()}>clear canvas</Button>
		</div>
	</div>
</ScreenTemplate>

<style>
	.canvasWrapper {
		display: flex;
	}
	.canvas {
		margin-right: 10px;
	}
</style>
