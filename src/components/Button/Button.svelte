<script lang="ts">
	export let onClick;
	export let testId: string;
</script>

<button on:click={onClick} data-testid={testId}>
	<slot />
</button>

<style>
	button {
		display: inline-block;
		font-size: 20px;
		padding: 5px 10px;
		border: #000 1px solid;
		border-radius: 2px;
		background: transparent;
		cursor: pointer;
		width: 100%;
	}
</style>
