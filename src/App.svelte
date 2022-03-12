<script lang="ts">
	import GameScreen from "./screens/game-screen/GameScreen.svelte";
	import HomeScreen from "./screens/HomeScreen/HomeScreen.svelte";
	import { isGameStarted } from "./stores/stores";
</script>

<main>
	{#if $isGameStarted}
		<GameScreen />
	{:else}
		<HomeScreen />
	{/if}
</main>

<style>
	:global(body) {
		margin: 0;
	}
	:global(main) {
		height: 100vh;
	}
	:global(li) {
		list-style: none;
	}
</style>
