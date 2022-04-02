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
MainGameScreen.play = async () => {
	await waitFor(() => expect(screen.getByTestId(TEST_ID.ConfidenceScores)).toBeInTheDocument(), {
		timeout: 3000,
	});
};
