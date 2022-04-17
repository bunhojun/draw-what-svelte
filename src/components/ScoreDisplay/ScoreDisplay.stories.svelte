<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import ScoreDisplay from "./ScoreDisplay.svelte";

	const candidates = [
		{
			label: "cat",
			confidence: 0.2,
		},
		{
			label: "toe",
			confidence: 0.12,
		},
		{
			label: "hand",
			confidence: 0.01,
		},
	];
</script>

<Meta title="Components/ScoreDisplay" component={ScoreDisplay} />

<Template let:args>
	<div class="template">
		<ScoreDisplay {...args} />
	</div>
</Template>

<Story
	name="Waiting"
	args={{
		candidates: [],
		finalResult: undefined,
		remainder: 20,
	}}
/>

<Story
	name="MainGame"
	args={{
		candidates,
		finalResult: undefined,
		remainder: 17,
	}}
/>

<Story
	name="PreFinish"
	args={{
		candidates,
		finalResult: undefined,
		remainder: 2,
	}}
/>

<Story
	name="FinalResult"
	args={{
		candidates,
		finalResult: { subject: "cat", score: 50 },
		remainder: 2,
	}}
/>

<style>
	.template {
		height: 100vh;
		background-color: #ffc0cb;
		padding: 10px;
	}
</style>
