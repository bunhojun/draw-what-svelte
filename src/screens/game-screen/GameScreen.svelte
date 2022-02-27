<script lang="ts">
	import TransitionScreen from "./children/TransitionScreen.svelte";
	import Header from "../../components/Header.svelte";
	import { currentScreen } from "./stores/stores";
	import { SCREENS } from "../../constants/screens";
	import MainGame from "./children/MainGameScreen.svelte";
	import GalleryScreen from "./children/GalleryScreen.svelte";
</script>

<Header />
{#if $currentScreen === SCREENS.TRANSITION}
	<TransitionScreen />
{:else if $currentScreen === SCREENS.MAIN_GAME}
	<MainGame />
{:else if $currentScreen === SCREENS.GALLERY}
	<GalleryScreen />
{/if}
