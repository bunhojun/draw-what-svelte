<script lang="ts">
	import { isGameStarted } from "../../stores/stores";
	import PureHeader from "./PureHeader.svelte";
	import { currentRound, initializeState } from "../../screens/GameScreen/stores/stores";
	import { getContext } from "svelte";
	import { RULE as defaultRule } from "../../constants/rule";

	export let withRoundIndicator = false;

	const maxRound = (getContext("RULE") || defaultRule).GAME_MAX_ROUND;
	const onClickLogo = () => {
		isGameStarted.set(false);
		initializeState();
	};
</script>

<PureHeader {onClickLogo} {withRoundIndicator} currentRound={$currentRound} {maxRound} />
