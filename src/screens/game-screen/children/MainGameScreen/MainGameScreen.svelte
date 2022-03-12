<script lang="ts">
	import { RULE } from "../../../../constants/rule";
	import {
		currentRound,
		currentScreen,
		currentSubject,
		GalleryItem,
		galleryItems,
	} from "../../stores/stores";
	import { SCREENS } from "../../../../constants/screens";
	import PureMainGameScreen from "./PureMainGameScreen.svelte";

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
	currentRound={$currentRound}
	currentSubject={$currentSubject}
/>
