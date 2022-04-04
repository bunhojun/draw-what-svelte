import type { Candidates } from "./classify-drawing";

export const trimUnderscore = (candidates: Candidates): Candidates => {
	return candidates.map(({ label, confidence }) => {
		const trimmedLabel = label.toString().replaceAll("_", " ");
		return {
			label: trimmedLabel,
			confidence,
		};
	});
};
