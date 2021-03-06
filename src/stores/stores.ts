import { writable } from "svelte/store";

export const isGameStarted = writable(false);
export const startGame = () => {
	isGameStarted.set(true);
};
export const quitGame = () => {
	isGameStarted.set(false);
};
