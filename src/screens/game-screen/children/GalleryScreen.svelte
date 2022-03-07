<script lang="ts">
	import { galleryItems } from "../stores/stores";
	import GalleryCanvas from "../../../components/GalleryCanvas.svelte";
</script>

<h1>gallery</h1>
<ul class="gallery">
	{#each $galleryItems as { subject, score, imageBitmap }}
		<li class="galleryItems">
			<span>{subject}</span>
			<GalleryCanvas {imageBitmap} />
			<span>confidence: {score} %</span>
		</li>
	{/each}
</ul>

<style>
	.gallery {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		max-width: 1200px;
	}
	.galleryItems {
		margin-top: 15px;
		display: flex;
		flex-direction: column;
	}
</style>
