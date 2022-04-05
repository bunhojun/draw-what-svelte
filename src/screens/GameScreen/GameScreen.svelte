<script lang="ts">
	import { currentScreen } from "./stores/stores";
	import PureGameScreen from "./PureGameScreen.svelte";
</script>

<PureGameScreen currentScreen={$currentScreen} />
