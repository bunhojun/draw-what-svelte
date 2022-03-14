<script lang="ts">
	import Header from "./Header.svelte";
	export let withDefaultHeader: boolean;
</script>

<div class="screenTemplate">
	{#if withDefaultHeader}
		<Header />
	{/if}
	<slot />
</div>

<style>
	.screenTemplate {
		height: 100%;
		background-color: #ffc0cb;
	}
	:global(h1) {
		margin: 0;
	}
</style>
