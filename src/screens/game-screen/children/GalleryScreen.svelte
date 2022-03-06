<script lang="ts">
	import { galleryItems } from "../stores/stores";
</script>

<h1>gallery</h1>
<ul>
	{#each $galleryItems as item}
		<li>{item.score}</li>
	{/each}
</ul>
