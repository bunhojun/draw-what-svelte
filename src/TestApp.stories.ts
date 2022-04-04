import App from "./App.svelte";
import { screen, fireEvent, waitFor } from "@storybook/testing-library";
import { TEST_ID } from "./constants/test-id";
import { expect } from "@storybook/jest";

export default {
	title: "Tests",
	component: App,
};

const Template = () => ({
	Component: App,
	props: {
		RULE: {
			GAME_DURATION: 3,
			TRANSITION_DURATION: 1,
			GAME_MAX_ROUND: 2,
			NUM_OF_CANDIDATES: 3,
		},
	},
});

export const HomeScreen = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HomeScreen.parameters = {
	// disable snapshot since this test requires timeout, which makes the result of test on Chromatic unstable
	chromatic: { disableSnapshot: true },
};

const checkScreenExistence = async (screenId: keyof typeof TEST_ID, timeout = 0) =>
	waitFor(() => expect(screen.getByTestId(screenId)).toBeInTheDocument(), {
		timeout,
	});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HomeScreen.play = async () => {
	// check screen change: Home -> Transition
	fireEvent.click(screen.getByTestId(TEST_ID.StartButton));
	await checkScreenExistence(TEST_ID.TransitionScreen);
	// check screen change: Transition -> MainGame
	await checkScreenExistence(TEST_ID.MainGameScreen, 1000);
	// check screen change: MainGame -> Transition 2
	await checkScreenExistence(TEST_ID.TransitionScreen, 6000);
	// check screen change: Transition2 -> MainGame2
	await checkScreenExistence(TEST_ID.MainGameScreen, 7000);
	// check screen change: MainGame2 -> Gallery
	await checkScreenExistence(TEST_ID.GalleryScreen, 10000);
};
