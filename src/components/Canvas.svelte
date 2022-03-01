<script lang="ts">
	import { onMount } from "svelte";
	import { useCanvas } from "../helpers/use-canvas";

	let canvas: HTMLElement;
	const { initCanvas } = useCanvas();

	onMount(() => {
		initCanvas(canvas);
	});
</script>

<div bind:this={canvas} />
