<script lang="ts">
	import GameScreen from "./screens/GameScreen/GameScreen.svelte";
	import HomeScreen from "./screens/HomeScreen/HomeScreen.svelte";
	import { isGameStarted } from "./stores/stores";
	import { RULE as defaultRule } from "./constants/rule";
	import { setContext } from "svelte";

	// to enable to test the whole process of this game easily, set RULE as a property
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
