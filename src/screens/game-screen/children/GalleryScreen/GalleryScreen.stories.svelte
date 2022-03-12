<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureGalleryScreen from "./PureGalleryScreen.svelte";
</script>

<Meta title="Screens/Gallery" component={PureGalleryScreen} />

<Template let:args>
	<div class="template">
		<PureGalleryScreen {...args} />
	</div>
</Template>

<Story
	name="Gallery"
	args={{
		galleryItems: [],
	}}
/>

<style>
	.template {
		height: 100vh;
	}
</style>
