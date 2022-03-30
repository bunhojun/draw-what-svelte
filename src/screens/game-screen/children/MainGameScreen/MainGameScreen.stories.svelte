<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureMainGameScreen from "./PureMainGameScreen.svelte";
</script>

<Meta title="Screens/MainGame" component={PureMainGameScreen} />

<Template let:args>
	<div class="template">
		<PureMainGameScreen {...args} />
	</div>
</Template>

<Story
	name="MainGame"
	args={{
		updateGalleryItems: () => null,
		onSummaryFinish: () => null,
		currentSubject: "cat",
	}}
/>

<style>
	.template {
		height: 100vh;
	}
</style>
