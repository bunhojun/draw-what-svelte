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
	name="DefaultHeader"
	args={{
		onClickLogo: () => null,
		currentRound: 1,
	}}
/>

<Story
	name="HeaderWithRoundIndicator"
	args={{
		onClickLogo: () => null,
		currentRound: 2,
		withRoundIndicator: true,
	}}
/>

<style>
	.template {
		height: 100vh;
		background-color: #ffc0cb;
		padding: 10px;
	}
</style>
