<script>
	import { isGameStarted } from "../../stores/stores";
	import PureHomeScreen from "./PureHomeScreen.svelte";

	const onClickStart = () => {
		isGameStarted.set(true);
	};
</script>

<PureHomeScreen {onClickStart} />
