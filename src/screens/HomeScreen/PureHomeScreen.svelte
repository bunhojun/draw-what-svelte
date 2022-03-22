<script lang="ts">
	import ScreenTemplate from "../../components/ScreenTemplate.svelte";
	import { TEST_ID } from "../../constants/test-id";

	export let onClickStart: () => void;
</script>

<ScreenTemplate>
	<div class="home">
		<h1>Draw What?</h1>
		<button on:click={onClickStart} data-testid={TEST_ID.StartButton}>start game</button>
	</div>
</ScreenTemplate>

<style>
	.home {
		text-align: center;
	}
</style>
