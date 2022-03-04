<script lang="ts">
	import { trimUnderscore } from "../helpers/trim-underscore";
	export let candidates = [];
	$: trimmedCandidates = trimUnderscore(candidates);
</script>

<div class="scoreDisplay">
	{#if trimmedCandidates.length > 0}
		<ul>
			{#each trimmedCandidates as { label, confidence }}
				<li>
					<div>
						<span>{label}</span> <span>{Math.round(confidence * 100)} %</span>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	li {
		list-style: none;
	}
	.scoreDisplay {
		height: 150px;
		width: 300px;
		background-color: #fff;
	}
</style>
