<script lang="ts">
	import { galleryItems } from "../../stores/stores";
	import PureGalleryScreen from "./PureGalleryScreen.svelte";
</script>

<PureGalleryScreen galleryItems={$galleryItems} />
