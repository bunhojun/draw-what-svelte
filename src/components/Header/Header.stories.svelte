<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureHeader from "./PureHeader.svelte";
</script>

<Meta title="Components/Header" component={PureHeader} />

<Template let:args>
	<div class="template">
		<PureHeader {...args} />
	</div>
</Template>

<Story
	name="Header"
	args={{
		onClickLogo: () => null,
	}}
/>

<style>
	.template {
		height: 100vh;
		background-color: #ffc0cb;
		padding: 10px;
	}
</style>
