<script lang="ts">
	import { onMount } from "svelte";
	import { CANVAS } from "../constants/canvas";

	export let imageBitmap: ImageBitmap;

	let canvas: HTMLCanvasElement;

	const canvasSize = CANVAS.FRAME_SIZE * CANVAS.GALLERY_SCALE;

	onMount(() => {
		const context = canvas.getContext("2d");
		const scale = (CANVAS.FRAME_SIZE / imageBitmap.width) * CANVAS.GALLERY_SCALE;
		context.save();
		context.scale(scale, scale);
		context.drawImage(imageBitmap, 0, 0);
		context.restore();
	});
</script>

<canvas bind:this={canvas} width={canvasSize} height={canvasSize} />
