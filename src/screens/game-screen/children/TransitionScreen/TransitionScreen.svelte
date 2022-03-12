<script lang="ts">
	import { currentRound, currentScreen, currentSubject } from "../../stores/stores";
	import { SCREENS } from "../../../../constants/screens";
	import PureTransitionScreen from "./PureTransitionScreen.svelte";

	const onFinishCountDown = () => {
		currentScreen.set(SCREENS.MAIN_GAME);
	};
</script>

<PureTransitionScreen
	currentRound={$currentRound}
	currentSubject={$currentSubject}
	{onFinishCountDown}
/>
