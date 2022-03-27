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
		font-size: 25px;
		padding: 10px 0;
		border-radius: 4px;
		border: #000 1px solid;
		background: transparent;
		cursor: pointer;
		width: 100%;
	}
	button:active {
		background-color: #fff;
	}
</style>
