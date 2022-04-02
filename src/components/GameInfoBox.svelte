<script lang="ts">
	import ScoreDisplay from "./ScoreDisplay.svelte";
	import type { Candidates } from "../helpers/classify-drawing";
	import Button from "./Button/Button.svelte";
	import { Canvas } from "../classes/canvas";
	import { TEST_ID } from "../constants/test-id";

	export let remainder: number;
	export let candidates: Candidates;
	export let canvas: Canvas;
	export let isSummaryTime: boolean;
</script>

<div class="gameInfo">
	<div
		class={`remainderContainer ${
			remainder <= 5 && remainder !== 0 && !isSummaryTime && "blinking"
		}`}
		data-testid={TEST_ID.MainGameRemainderContainer}
	>
		<span class="remainder">{remainder}</span> sec {isSummaryTime
			? "until next round"
			: "remaining"}
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
		border: 3px solid #000;
		border-radius: 5px;
	}
	.remainder {
		font-size: 20px;
		margin-right: 5px;
	}
	@keyframes blink {
		0% {
			background-color: #fff;
		}
		100% {
			background-color: #f25205;
		}
	}
	.blinking {
		animation-name: blink;
		animation-duration: 500ms;
		animation-iteration-count: infinite;
	}
</style>
