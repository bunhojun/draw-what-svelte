<script lang="ts">
	import { TEST_ID } from "../../constants/test-id";

	export let isSummaryTime: boolean;
	export let remainder: number;
</script>

<div
	class={`remainderContainer ${!isSummaryTime && remainder <= 5 && remainder !== 0 && "blinking"}`}
	data-testid={TEST_ID.MainGameRemainderContainer}
>
	<span class="remainder">{remainder}</span> sec {isSummaryTime ? "until next round" : "remaining"}
</div>

<style>
	.remainderContainer {
		height: 70px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px solid #000;
		border-radius: 5px;
	}
	.remainder {
		font-size: 20px;
		margin-right: 5px;
	}
	.blinking {
		animation-name: blink;
		animation-duration: 500ms;
		animation-iteration-count: infinite;
	}
	@keyframes blink {
		0% {
			background-color: #fff;
		}
		100% {
			background-color: #f25205;
		}
	}
</style>
