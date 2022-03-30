<script lang="ts">
	import ScreenTemplate from "../../components/ScreenTemplate.svelte";
	import { TEST_ID } from "../../constants/test-id";
	import Button from "../../components/Button/Button.svelte";

	export let onClickStart: () => void;
</script>

<ScreenTemplate>
	<div class="home">
		<h1>Draw What?</h1>
		<Button onClick={onClickStart} testId={TEST_ID.StartButton}>start game</Button>
	</div>
</ScreenTemplate>

<style>
	.home {
		text-align: center;
	}
	h1 {
		margin-bottom: 10px;
	}
</style>
