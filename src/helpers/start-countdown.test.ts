import { startCountdown } from "./start-countdown";
import { waitFor } from "@testing-library/svelte";
import { expect } from "@storybook/jest";

describe("startCountdown", () => {
	it("fires the callback on each tick and on finishing countdown", async () => {
		let counter = 0;
		let message = "initial message";
		const onTick = () => {
			counter = counter + 1;
		};
		const onFinish = () => {
			message = "final message";
		};
		startCountdown(3, onTick, onFinish);
		await waitFor(() => expect(counter).toBe(1), { timeout: 1100 });
		await waitFor(() => expect(counter).toBe(2), { timeout: 1000 });
		await waitFor(() => expect(message).toBe("final message"), { timeout: 1000 });
	});
});
