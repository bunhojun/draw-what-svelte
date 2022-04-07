import {
	currentRound,
	currentScreen,
	currentSubject,
	exportForTest,
	galleryItems,
	initializeState,
} from "./stores";
import { SCREENS } from "../../../constants/screens";
import { expect } from "@storybook/jest";
import { get } from "svelte/store";
import { SUBJECTS } from "../../../constants/rule";

describe("initializeState", () => {
	it("initializes state", () => {
		const { initial } = exportForTest;
		currentScreen.set(SCREENS.MAIN_GAME);
		currentRound.set(2);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		galleryItems.set([{ subject: "cat", imageBitmap: undefined, score: 0 }]);
		expect(get(currentScreen)).toBe(SCREENS.MAIN_GAME);
		expect(get(currentRound)).toBe(2);
		expect(get(currentSubject)).toBe(SUBJECTS[1]);
		expect(get(galleryItems)).toEqual([{ subject: "cat", imageBitmap: undefined, score: 0 }]);
		initializeState();
		expect(get(currentScreen)).toBe(initial.screen);
		expect(get(currentRound)).toBe(initial.round);
		expect(get(currentSubject)).toBe(SUBJECTS[0]);
		expect(get(galleryItems)).toEqual(initial.galleryItems);
	});
});
