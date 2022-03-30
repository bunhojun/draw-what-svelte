<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureGalleryScreen from "./PureGalleryScreen.svelte";
	import { RULE, SUBJECTS } from "../../../../constants/rule";
	import { CANVAS } from "../../../../constants/canvas";

	const galleryItems = [...Array(RULE.GAME_MAX_ROUND).keys()].map((_, index) => {
		const canvas = document.createElement("canvas");
		canvas.width = CANVAS.FRAME_SIZE;
		canvas.height = CANVAS.FRAME_SIZE;
		if (canvas.getContext) {
			const context = canvas.getContext("2d");
			context.beginPath();
			context.fillStyle = "rgb( 255, 255, 255)";
			context.fillRect(0, 0, canvas.width, canvas.height);
		}
		return {
			subject: SUBJECTS[index],
			imageBitmap: canvas,
			score: 0,
		};
	});
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
		galleryItems,
	}}
/>

<style>
	.template {
		height: 100vh;
	}
</style>
