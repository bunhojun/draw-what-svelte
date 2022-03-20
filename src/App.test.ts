import { render, fireEvent } from "@testing-library/svelte";
import { TEST_ID } from "./constants/test-id";
import App from "./App.svelte";

describe("HomeScreen", () => {
	it("moves to GameScreen when the start button is clicked", async () => {
		const { getByTestId } = render(App);

		await fireEvent.click(getByTestId(TEST_ID.StartButton));

		expect(getByTestId(TEST_ID.TransitionScreen)).toBeInTheDocument();
	});
});
