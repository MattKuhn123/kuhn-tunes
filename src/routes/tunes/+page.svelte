<script lang="ts">
	import AudioPlayer from '../../audio-player/AudioPlayer.svelte';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/tunes/$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>Kuhn Tunes</title>
	<meta name="description" />
</svelte:head>

<div class="todos">
	<h1>Tunes</h1>
</div>

{#each data.tunes as { src, title, group }}
	<p class="title">{title} // <small>featured on: {group}</small></p>
	<AudioPlayer {src} />
{/each}

<style>
	.todos {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>
