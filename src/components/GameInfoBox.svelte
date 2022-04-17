<script lang="ts">
	import ScoreDisplay from "./ScoreDisplay/ScoreDisplay.svelte";
	import type { Candidates } from "../helpers/classify-drawing";
	import Button from "./Button/Button.svelte";
	import { Canvas } from "../classes/canvas";
	import type { GalleryItem } from "../screens/GameScreen/stores/stores";
	import MainGameRemainder from "./MainGameRemainder/MainGameRemainder.svelte";

	export let remainder: number;
	export let candidates: Candidates;
	export let canvas: Canvas;
	export let isSummaryTime: boolean;
	export let finalResult: GalleryItem | undefined;
</script>

<div class="gameInfo">
	<MainGameRemainder {isSummaryTime} {remainder} />
	<ScoreDisplay {candidates} {finalResult} {remainder} />
	<Button onClick={() => canvas.clearCanvas()}>clear canvas</Button>
</div>

<style>
	.gameInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
