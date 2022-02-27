<script lang="ts">
	import { isGameStarted } from "../stores/stores";

	const onClickLogo = () => {
		isGameStarted.set(false);
	};
</script>

<header>
	<button on:click={onClickLogo}>Draw What?</button>
</header>
