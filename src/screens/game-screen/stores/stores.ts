import { writable } from "svelte/store";
import { SCREENS } from "../../../constants/screens";

export const currentScreen = writable(SCREENS.TRANSITION);
// start from 1 instead of 0 for convenience
export const currentRound = writable(1);

export const remainders = writable();
