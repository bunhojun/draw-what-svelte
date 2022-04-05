<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureMainGameScreen from "./PureMainGameScreen.svelte";
</script>

<Meta title="Screens/MainGame" component={PureMainGameScreen} />

<Template let:args>
	<PureMainGameScreen {...args} />
</Template>

<Story
	name="MainGame"
	args={{
		updateGalleryItems: () => null,
		onSummaryFinish: () => null,
		currentSubject: "cat",
	}}
/>
