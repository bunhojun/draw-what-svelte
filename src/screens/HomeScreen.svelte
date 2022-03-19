<script>
	import { isGameStarted } from "../stores/stores";
	import { TEST_ID } from "../constants/test-id";

	const onClickStart = () => {
		isGameStarted.set(true);
	};
</script>

<h1>Draw What?</h1>
<button on:click={onClickStart} data-testid={TEST_ID.StartButton}>start game</button>
