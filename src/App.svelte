<script lang="ts">
	import GameScreen from "./screens/game-screen/GameScreen.svelte";
	import HomeScreen from "./screens/HomeScreen/HomeScreen.svelte";
	import { isGameStarted } from "./stores/stores";
</script>

{#if $isGameStarted}
	<GameScreen />
{:else}
	<HomeScreen />
{/if}

<style>
	:global(body) {
		margin: 0;
	}
	:global(li) {
		list-style: none;
	}
</style>
