<script lang="ts">
	import { isGameStarted } from "../stores/stores";

	const onClickLogo = () => {
		isGameStarted.set(false);
	};
</script>

<header class="header">
	<a href="/" on:click|preventDefault={onClickLogo}> Draw What? </a>
</header>

<style>
	.header {
		position: absolute;
		top: 0;
	}
	a {
		color: #000;
		text-decoration: none;
	}
</style>
