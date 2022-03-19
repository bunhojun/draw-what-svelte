import "@testing-library/jest-dom";

import { render } from "@testing-library/svelte";
import HomeScreen from "./HomeScreen.svelte";

describe("HomeScreen", () => {
	it("has h1 tag", () => {
		const { getByRole } = render(HomeScreen);

		expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
	});
});
