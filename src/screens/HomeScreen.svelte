<script>
	import { isGameStarted } from "../stores/stores";

	const onClickStart = () => {
		isGameStarted.set(true);
	};
</script>

<h1>Draw What?</h1>
<button on:click={onClickStart}>start game</button>
