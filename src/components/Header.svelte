<script lang="ts">
	import { isGameStarted } from "../stores/stores";

	const onClickLogo = () => {
		isGameStarted.set(false);
	};
</script>

<header class="header">
	<button on:click={onClickLogo}>Draw What?</button>
</header>

<style>
	.header {
		position: absolute;
		top: 0;
	}
</style>
