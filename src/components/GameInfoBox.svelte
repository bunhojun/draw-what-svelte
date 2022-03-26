<script lang="ts">
	import ScoreDisplay from "./ScoreDisplay.svelte";
	import type { Candidates } from "../helpers/classify-drawing";
	import Button from "./Button/Button.svelte";
	import { Canvas } from "../classes/canvas";

	export let remainder: number;
	export let candidates: Candidates;
	export let canvas: Canvas;
</script>

<div class="gameInfo">
	<div class="remainderContainer">
		<span class="remainder">{remainder}</span> sec remaining
	</div>
	<ScoreDisplay {candidates} />
	<Button onClick={() => canvas.clearCanvas()}>clear canvas</Button>
</div>

<style>
	.gameInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.remainderContainer {
		height: 70px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.remainder {
		font-size: 20px;
		margin-right: 5px;
	}
</style>
