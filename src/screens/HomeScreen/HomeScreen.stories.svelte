<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureHomeScreen from "./PureHomeScreen.svelte";
</script>

<Meta title="Screens/Home" component={PureHomeScreen} />

<Template let:args>
	<div class="template">
		<PureHomeScreen {...args} />
	</div>
</Template>

<Story name="Home" args={{ onClickStart: () => alert("clicked start") }} />

<style>
	.template {
		height: 100vh;
	}
</style>
