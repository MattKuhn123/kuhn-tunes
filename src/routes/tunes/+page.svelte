<script lang="ts">
	import AudioPlayer from '../../audio-player/AudioPlayer.svelte';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/tunes/$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>Kuhn Tunes</title>
	<meta name="description" />
</svelte:head>

{#each data.tunes as { src, title, group }}
	<p class="title">{title} // <small>featured on: {group}</small></p>
	<AudioPlayer {src} />
{/each}

<style>
</style>
