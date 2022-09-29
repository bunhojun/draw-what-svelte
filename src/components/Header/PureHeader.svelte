<script lang="ts">
	import { TEST_ID } from "../../constants/test-id";
	import { RULE } from "../../constants/rule";

	export let onClickLogo;
	export let withRoundIndicator = false;
	export let currentRound: number;
	export let maxRound = RULE.GAME_MAX_ROUND;
</script>

<header class="header">
	<a href="/" on:click|preventDefault={onClickLogo} data-testid={TEST_ID.HomeLink}> Draw What? </a>
	{#if withRoundIndicator}
		<ul class="roundIndicatorWrapper" data-testid={TEST_ID.RoundIndicator}>
			{#each [...Array(maxRound).keys()] as _, i}
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
		width: 95%;
	}
	.roundIndicatorWrapper {
		display: flex;
		font-size: 25px;
	}
	.roundIndicator {
		margin-right: 10px;
		border: 1px solid #000;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
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
	@media only screen and (max-width: 480px) {
		.header {
			position: relative;
		}
		.roundIndicatorWrapper {
			font-size: 15px;
		}
		.roundIndicator {
			width: 20px;
			height: 20px;
		}
	}
</style>
