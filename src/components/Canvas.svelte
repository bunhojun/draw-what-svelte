<script lang="ts">
	import { onMount } from "svelte";
	import P5 from "p5";
	import { CANVAS } from "../constants/canvas";

	let canvas: HTMLElement;

	const sketch = (p: P5): void => {
		p.setup = () => {
			p.createCanvas(CANVAS.FRAME_SIZE, CANVAS.FRAME_SIZE);
			p.background(255);
		};
	};

	onMount(() => {
		new P5(sketch, canvas);
	});
</script>

<div bind:this={canvas} />
