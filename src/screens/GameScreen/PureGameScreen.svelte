<script lang="ts">
	import TransitionScreen from "./children/TransitionScreen/TransitionScreen.svelte";
	import { SCREENS } from "../../constants/screens";
	import MainGame from "./children/MainGameScreen/MainGameScreen.svelte";
	import GalleryScreen from "./children/GalleryScreen/GalleryScreen.svelte";
	import type { CurrentScreen } from "./stores/stores";

	export let currentScreen: CurrentScreen;
</script>

{#if currentScreen === SCREENS.TRANSITION}
	<TransitionScreen />
{:else if currentScreen === SCREENS.MAIN_GAME}
	<MainGame />
{:else if currentScreen === SCREENS.GALLERY}
	<GalleryScreen />
{/if}
