<script lang="ts">
	import { trimUnderscore } from "../helpers/trim-underscore";
	import type { Candidates } from "../helpers/classify-drawing";
	import { TEST_ID } from "../constants/test-id";

	export let candidates: Candidates = [];

	let trimmedCandidates: Candidates;
	$: trimmedCandidates = trimUnderscore(candidates);
</script>

<div class="scoreDisplay">
	{#if trimmedCandidates.length > 0}
		<ul data-testid={TEST_ID.ConfidenceScores}>
			{#each trimmedCandidates as { label, confidence }}
				<li class="confidence">
					<span>{label}</span> <span>{Math.round(confidence * 100)} %</span>
				</li>
			{/each}
		</ul>
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
	}
	ul {
		width: 100%;
	}
	.confidence {
		font-size: 25px;
		display: flex;
		justify-content: space-between;
	}
</style>
