import { isGameStarted, quitGame, startGame } from "./stores";
import { get } from "svelte/store";

describe("start / quit game", () => {
	it("changes isGameStarted state accordingly", () => {
		expect(get(isGameStarted)).toBe(false);
		startGame();
		expect(get(isGameStarted)).toBe(true);
		quitGame();
		expect(get(isGameStarted)).toBe(false);
	});
});
