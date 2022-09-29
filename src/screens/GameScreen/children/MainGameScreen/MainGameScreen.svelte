<script lang="ts">
	import type { GalleryItem } from "../../stores/stores";
	import { currentRound, currentScreen, currentSubject, galleryItems } from "../../stores/stores";
	import { SCREENS } from "../../../../constants/screens";
	import PureMainGameScreen from "./PureMainGameScreen.svelte";
	import { getContext } from "svelte";

	const RULE = getContext("RULE");

	const updateGalleryItems = (newItem: GalleryItem) => {
		galleryItems.update((items) => [...items, newItem]);
	};

	const onSummaryFinish = () => {
		if ($currentRound === RULE.GAME_MAX_ROUND) {
			currentScreen.set(SCREENS.GALLERY);
			return;
		}
		currentScreen.set(SCREENS.TRANSITION);
		currentRound.update((round) => ++round);
	};
</script>

<PureMainGameScreen
	{updateGalleryItems}
	{onSummaryFinish}
	currentSubject={$currentSubject}
	{RULE}
/>
