<script lang="ts">
	import { TEST_ID } from "../../constants/test-id";
	import { RULE } from "../../constants/rule";

	export let onClickLogo;
	export let withRoundIndicator = false;
	export let currentRound: number;
</script>

<header class="header">
	<a href="/" on:click|preventDefault={onClickLogo} data-testid={TEST_ID.HomeLink}> Draw What? </a>
	{#if withRoundIndicator}
		<ul class="roundIndicatorWrapper" data-testid={TEST_ID.RoundIndicator}>
			{#each [...Array(RULE.GAME_MAX_ROUND).keys()] as _, i}
				<li class={`roundIndicator ${currentRound === i + 1 ? "currentRound" : ""}`}>
					{i + 1}
				</li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	.header {
		position: absolute;
		top: 0;
		padding: 5px;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.roundIndicatorWrapper {
		display: flex;
		margin-right: 100px;
		font-size: 25px;
	}
	.roundIndicator {
		margin-right: 10px;
		border: 1px solid #000;
		border-radius: 50%;
		padding: 0 10px;
		text-align: center;
		font-family: sans-serif;
	}
	.currentRound {
		background-color: #000;
		color: #fff;
	}
	a {
		color: #000;
		text-decoration: none;
	}
</style>
