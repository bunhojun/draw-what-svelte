<script lang="ts">
	import Header from "./Header.svelte";
	export let withDefaultHeader: boolean;
</script>

<div class="screenTemplate">
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
	}
	.content {
		display: flex;
		justify-content: center;
	}
	:global(h1) {
		margin: 0;
	}
</style>
