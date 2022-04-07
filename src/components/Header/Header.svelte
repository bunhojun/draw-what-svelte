<script lang="ts">
	import { isGameStarted } from "../../stores/stores";
	import PureHeader from "./PureHeader.svelte";
	import { currentRound, initializeState } from "../../screens/GameScreen/stores/stores";

	export let withRoundIndicator = false;

	const onClickLogo = () => {
		isGameStarted.set(false);
		initializeState();
	};
</script>

<PureHeader {onClickLogo} {withRoundIndicator} currentRound={$currentRound} />
