import { derived, writable } from "svelte/store";
import { SCREENS } from "../../../constants/screens";
import { SUBJECTS } from "../../../constants/rule";

export type GalleryItem = {
	imageBitmap: ImageBitmap;
	score: number;
};

export const currentScreen = writable(SCREENS.TRANSITION);
// start from 1 instead of 0 for convenience
export const currentRound = writable(1);

export const currentSubject = derived(currentRound, ($currentRound) => SUBJECTS[$currentRound - 1]);
// items to show in the gallery screen
export const galleryItems = writable<GalleryItem[]>([]);
