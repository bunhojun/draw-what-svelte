<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PureHeader from "./PureHeader.svelte";
</script>

<Meta title="Components/Header" component={PureHeader} />

<Template let:args>
	<PureHeader {...args} />
</Template>

<Story
	name="Header"
	args={{
		onClickLogo: () => null,
	}}
/>
