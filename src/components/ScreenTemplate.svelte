<script lang="ts">
	import Header from "./Header/Header.svelte";
	export let withDefaultHeader = false;
	export let screenTestId;
</script>

<div class="screenTemplate" data-testid={screenTestId}>
	{#if withDefaultHeader}
		<Header />
	{/if}
	<main class="content">
		<div>
			<slot />
		</div>
	</main>
</div>

<style>
	.screenTemplate {
		height: 100vh;
		background-color: #ffc0cb;
		position: relative;
	}
	.content {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
