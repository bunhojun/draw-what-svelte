<script lang="ts">
	import GalleryCanvas from "../../../../components/GalleryCanvas.svelte";
	import type { GalleryItem } from "../../stores/stores";
	import ScreenTemplate from "../../../../components/ScreenTemplate.svelte";
	import { TEST_ID } from "../../../../constants/test-id";

	export let galleryItems: GalleryItem[] = [];
</script>

<ScreenTemplate screenTestId={TEST_ID.GalleryScreen}>
	<h1>gallery</h1>
	<ul class="gallery">
		{#each galleryItems as { subject, score, imageBitmap }}
			<li class="galleryItem">
				<span>{subject}</span>
				<GalleryCanvas {imageBitmap} />
				<span>confidence: {score} %</span>
			</li>
		{/each}
	</ul>
</ScreenTemplate>

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		width: 1200px;
	}
	.galleryItem {
		margin-top: 15px;
		margin-right: 10px;
		display: flex;
		flex-direction: column;
	}
</style>
