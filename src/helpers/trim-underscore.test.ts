import { trimUnderscore } from "./trim-underscore";

describe("trimUnderscore", () => {
	it("trims underscore from candidates", () => {
		const initialCandidates = [
			{ label: "test_value1", confidence: 0 },
			{ label: "test_value2", confidence: 0 },
			{ label: "test_value3", confidence: 0 },
		];
		const newCandidates = trimUnderscore(initialCandidates);
		expect(newCandidates).toEqual([
			{ label: "test value1", confidence: 0 },
			{ label: "test value2", confidence: 0 },
			{ label: "test value3", confidence: 0 },
		]);
	});
});
