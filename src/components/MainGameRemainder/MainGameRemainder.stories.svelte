<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MainGameRemainder from "./MainGameRemainder.svelte";
</script>

<Meta title="Components/MainGameRemainder" component={MainGameRemainder} />

<Template let:args>
	<div class="template">
		<div class="container">
			<MainGameRemainder {...args} />
		</div>
	</div>
</Template>

<Story
	name="Default"
	args={{
		isSummaryTime: false,
		remainder: 20,
	}}
/>

<Story
	name="Blinking"
	args={{
		isSummaryTime: false,
		remainder: 2,
	}}
/>

<Story
	name="Finish"
	args={{
		isSummaryTime: true,
		remainder: 3,
	}}
/>

<style>
	.template {
		height: 100vh;
		background-color: #ffc0cb;
		padding: 10px;
	}
	.container {
		width: 350px;
	}
</style>
