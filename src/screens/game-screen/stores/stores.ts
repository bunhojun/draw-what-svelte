import { derived, Writable, writable } from "svelte/store";
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

export const currentScreen = writable<CurrentScreen>(SCREENS.TRANSITION);
// start from 1 instead of 0 for convenience
export const currentRound = writable<CurrentRound>(1);

export const currentSubject = derived<Writable<CurrentRound>, CurrentSubject>(
	currentRound,
	($currentRound) => SUBJECTS[$currentRound - 1]
);

// items to show in the gallery screen
export const galleryItems = writable<GalleryItem[]>([]);
