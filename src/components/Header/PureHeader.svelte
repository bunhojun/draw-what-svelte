<script lang="ts">
	export let onClickLogo;
</script>

<header class="header">
	<a href="/" on:click|preventDefault={onClickLogo}> Draw What? </a>
</header>

<style>
	.header {
		position: absolute;
		top: 0;
		padding: 5px;
	}
	a {
		color: #000;
		text-decoration: none;
	}
</style>
