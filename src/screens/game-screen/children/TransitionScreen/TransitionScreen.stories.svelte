<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureTransitionScreen from "./PureTransitionScreen.svelte";
</script>

<Meta title="Screens/Transition" component={PureTransitionScreen} />

<Template let:args>
	<div class="template">
		<PureTransitionScreen {...args} />
	</div>
</Template>

<Story
	name="Transition"
	args={{ onFinishCountDown: () => null, currentSubject: "cat", currentRound: 1 }}
/>

<style>
	.template {
		height: 100vh;
	}
</style>
