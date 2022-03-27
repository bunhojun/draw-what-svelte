<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<div class="template">
		<div class="buttonContainer">
			<Button>Button</Button>
		</div>
	</div>
</Template>

<Story
	name="Button"
	args={{
		onClick: () => null,
	}}
/>

<style>
	.template {
		height: 100vh;
		background-color: #ffc0cb;
		padding: 10px;
	}
	.buttonContainer {
		width: 300px;
	}
</style>
