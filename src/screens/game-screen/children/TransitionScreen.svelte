<script lang="ts">
	import { RULE } from "../../../constants/rule";
	import { currentRound, currentScreen, currentSubject } from "../stores/stores";
	import { SCREENS } from "../../../constants/screens";
	import { startCountdownOnMount } from "../../../helpers/start-countdown-on-mount";

	let currentRemainder: number = RULE.TRANSITION_DURATION;

	const onTick = () => {
		currentRemainder = currentRemainder - 1;
	};

	const onFinishCountDown = () => {
		currentScreen.set(SCREENS.MAIN_GAME);
	};

	startCountdownOnMount(RULE.TRANSITION_DURATION, onTick, onFinishCountDown);
</script>

<h1>
	draw {$currentSubject}
</h1>
<div>
	{currentRemainder} sec
</div>
<div>
	{$currentRound}
</div>
