<script lang="ts">
	import { currentRound, currentScreen, currentSubject } from "../../stores/stores";
	import { SCREENS } from "../../../../constants/screens";
	import PureTransitionScreen from "./PureTransitionScreen.svelte";
	import { getContext } from "svelte";

	const RULE = getContext("RULE");

	const onFinishCountDown = () => {
		currentScreen.set(SCREENS.MAIN_GAME);
	};
</script>

<PureTransitionScreen
	{RULE}
	currentRound={$currentRound}
	currentSubject={$currentSubject}
	{onFinishCountDown}
/>
