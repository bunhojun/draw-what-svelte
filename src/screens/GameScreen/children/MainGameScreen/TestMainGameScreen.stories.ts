import PureMainGameScreen from "./PureMainGameScreen.svelte";
import { waitFor, screen } from "@storybook/testing-library";
import { TEST_ID } from "../../../../constants/test-id";
import { expect } from "@storybook/jest";

export default {
	title: "Tests",
	component: PureMainGameScreen,
};

const testRule = {
	GAME_DURATION: 7,
	TRANSITION_DURATION: 2,
	GAME_MAX_ROUND: 5,
	NUM_OF_CANDIDATES: 3,
};

const Template = () => ({
	Component: PureMainGameScreen,
	props: {
		updateGalleryItems: () => null,
		onSummaryFinish: () => null,
		currentSubject: "cat",
		RULE: testRule,
	},
});

export const TestMainGameScreen = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TestMainGameScreen.parameters = {
	// disable snapshot since this test requires timeout, which makes the result of test on Chromatic unstable
	chromatic: { disableSnapshot: true },
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TestMainGameScreen.play = async () => {
	const mainGameRemainderContainer = screen.getByTestId(TEST_ID.MainGameRemainderContainer);
	// check if the remainder container renders the proper text
	await expect(mainGameRemainderContainer).toContainHTML("remaining");
	// check if imageClassifier is called 3 seconds after mounting
	await waitFor(() => expect(screen.getByTestId(TEST_ID.ConfidenceScores)).toBeInTheDocument(), {
		timeout: 3000,
	});
	// check if the remainder container starts blinking 5 seconds before the round ends
	await waitFor(() => expect(mainGameRemainderContainer.classList).toContain("blinking"), {
		timeout: (testRule.GAME_DURATION - 5) * 1000,
	});
	// check if the remainder container stops blinking when the round ends
	await waitFor(() => expect(mainGameRemainderContainer.classList).not.toContain("blinking"), {
		timeout: testRule.GAME_DURATION * 1000,
	});
	// check if the remainder container renders the proper text when the round ends
	await waitFor(() => expect(mainGameRemainderContainer).toContainHTML("until next round"), {
		timeout: testRule.GAME_DURATION * 1000 + 2,
	});
};
