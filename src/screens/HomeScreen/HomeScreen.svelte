<script>
	import { startGame } from "../../stores/stores";
	import PureHomeScreen from "./PureHomeScreen.svelte";

	const onClickStart = () => {
		startGame();
	};
</script>

<PureHomeScreen {onClickStart} />
