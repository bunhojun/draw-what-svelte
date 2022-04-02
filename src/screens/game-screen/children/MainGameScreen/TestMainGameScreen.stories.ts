import PureMainGameScreen from "./PureMainGameScreen.svelte";
import { waitFor, screen } from "@storybook/testing-library";
import { TEST_ID } from "../../../../constants/test-id";
import { expect } from "@storybook/jest";

export default {
	title: "Tests",
	component: PureMainGameScreen,
};

const Template = () => ({
	Component: PureMainGameScreen,
	props: {
		updateGalleryItems: () => null,
		onSummaryFinish: () => null,
		currentSubject: "cat",
	},
});

export const MainGameScreen = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MainGameScreen.parameters = {
	// disable snapshot since this test requires timeout, which makes the result of test on Chromatic unstable
	chromatic: { disableSnapshot: true },
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MainGameScreen.play = async () => {
	const mainGameRemainderContainer = screen.getByTestId(TEST_ID.MainGameRemainderContainer);
	// check if the remainder container renders the proper text
	await expect(mainGameRemainderContainer).toContainHTML("remaining");
	// check if imageClassifier is called 3 seconds after mounting
	await waitFor(() => expect(screen.getByTestId(TEST_ID.ConfidenceScores)).toBeInTheDocument(), {
		timeout: 3000,
	});
	// check if the remainder container starts blinking 15 seconds after mounting
	await waitFor(() => expect(mainGameRemainderContainer.classList).toContain("blinking"), {
		timeout: 15000,
	});
	// check if the remainder container stops blinking 20 seconds after mounting
	await waitFor(() => expect(mainGameRemainderContainer.classList).not.toContain("blinking"), {
		timeout: 20000,
	});
	// check if the remainder container renders the proper text 22 seconds after mounting
	await waitFor(() => expect(mainGameRemainderContainer).toContainHTML("until next round"), {
		timeout: 22000,
	});
};
