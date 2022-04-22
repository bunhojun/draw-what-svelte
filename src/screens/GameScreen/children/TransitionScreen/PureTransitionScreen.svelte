<script lang="ts">
	import { CurrentSubject, CurrentRound } from "../../stores/stores";
	import ScreenTemplate from "../../../../components/ScreenTemplate.svelte";
	import { TEST_ID } from "../../../../constants/test-id";
	import { RULE as defaultRule } from "../../../../constants/rule";

	export let currentSubject: CurrentSubject;
	export let currentRound: CurrentRound;
	export let RULE = defaultRule;
	export let currentRemainder: number;
</script>

<ScreenTemplate screenTestId={TEST_ID.TransitionScreen}>
	<div class="transition">
		<h1>
			draw {currentSubject}
		</h1>
		<div>
			{currentRemainder} sec
		</div>
		<div>
			{currentRound} / {RULE.GAME_MAX_ROUND}
		</div>
	</div>
</ScreenTemplate>

<style>
	.transition {
		text-align: center;
	}
</style>
