<script lang="ts">
	import ScreenTemplate from "../../components/ScreenTemplate.svelte";

	export let onClickStart: () => void;
</script>

<ScreenTemplate>
	<h1>Draw What?</h1>
	<button on:click={onClickStart}>start game</button>
</ScreenTemplate>
