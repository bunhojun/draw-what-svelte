import { derived, writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { SCREENS } from "../../../constants/screens";
import { SUBJECTS } from "../../../constants/rule";

export type GalleryItem = {
	subject: string;
	imageBitmap: ImageBitmap;
	score: number;
};
export type CurrentScreen = number;
export type CurrentRound = number;
export type CurrentSubject = string;

const initial = {
	screen: SCREENS.TRANSITION,
	// start from 1 instead of 0 for convenience
	round: 1,
	galleryItems: [],
};

export const currentScreen = writable<CurrentScreen>(initial.screen);
export const currentRound = writable<CurrentRound>(initial.round);
export const currentSubject = derived<Writable<CurrentRound>, CurrentSubject>(
	currentRound,
	($currentRound) => SUBJECTS[$currentRound - 1]
);

// items to show in the gallery screen
export const galleryItems = writable<GalleryItem[]>(initial.galleryItems);

export const initializeState = () => {
	currentScreen.set(initial.screen);
	currentRound.set(initial.round);
	galleryItems.set(initial.galleryItems);
};

export const exportForTest = {
	initial,
};
