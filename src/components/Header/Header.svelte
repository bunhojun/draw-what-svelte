<script lang="ts">
	import { isGameStarted } from "../../stores/stores";
	import PureHeader from "./PureHeader.svelte";

	const onClickLogo = () => {
		isGameStarted.set(false);
	};
</script>

<PureHeader {onClickLogo} />
