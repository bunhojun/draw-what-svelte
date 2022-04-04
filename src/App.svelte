<script lang="ts">
	import GameScreen from "./screens/game-screen/GameScreen.svelte";
	import HomeScreen from "./screens/HomeScreen/HomeScreen.svelte";
	import { isGameStarted } from "./stores/stores";
	import { RULE as defaultRule } from "./constants/rule";
	import { setContext } from "svelte";

	//
	export let RULE = defaultRule;
	setContext("RULE", RULE);
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
