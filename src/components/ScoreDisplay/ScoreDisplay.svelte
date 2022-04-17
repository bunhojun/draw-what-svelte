<script lang="ts">
	import { trimUnderscore } from "../../helpers/trim-underscore";
	import type { Candidates } from "../../helpers/classify-drawing";
	import { TEST_ID } from "../../constants/test-id";
	import type { GalleryItem } from "../../screens/GameScreen/stores/stores";

	export let candidates: Candidates = [];
	export let finalResult: GalleryItem | undefined;
	export let remainder: number;

	let trimmedCandidates: Candidates;
	$: trimmedCandidates = trimUnderscore(candidates);
</script>

<div class="scoreDisplay">
	{#if finalResult}
		<span data-testid={TEST_ID.FinalResult}>
			confidence: {finalResult.score} %
		</span>
	{:else if remainder <= 2}
		<span data-testid={TEST_ID.PreFinish}>Hang on...</span>
	{:else if trimmedCandidates.length > 0}
		<ul data-testid={TEST_ID.ConfidenceScores}>
			{#each trimmedCandidates as { label, confidence }}
				<li class="confidence">
					<span>{label}</span> <span>{Math.round(confidence * 100)} %</span>
				</li>
			{/each}
		</ul>
	{:else}
		<span data-testid={TEST_ID.WaitingForCandidates}> analyzing... </span>
	{/if}
</div>

<style>
	.scoreDisplay {
		height: 400px;
		width: 300px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 30px;
		border: 3px solid #000;
		border-radius: 6px;
		font-size: 25px;
	}
	ul {
		width: 100%;
	}
	.confidence {
		display: flex;
		justify-content: space-between;
	}
</style>
