import { isGameStarted, startGame } from "./stores";
import { get } from "svelte/store";

describe("start game", () => {
	it("sets isGameStarted true", () => {
		expect(get(isGameStarted)).toBe(false);
		startGame();
		expect(get(isGameStarted)).toBe(true);
	});
});
