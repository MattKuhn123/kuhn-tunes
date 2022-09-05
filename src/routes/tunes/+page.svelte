<script lang="ts">
	import Tune from '../../tune/tune.svelte';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/tunes/$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>Kuhn Tunes</title>
	<meta name="description" />
</svelte:head>

{#each data.tunes as { src, title, group, created }}
	<Tune {src} {title} {group} {created}/>
{/each}

<style>
</style>
