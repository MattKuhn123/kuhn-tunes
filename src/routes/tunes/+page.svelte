<script lang="ts">
	import Tune from '../../tune/tune.svelte';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/tunes/$types';
	
	export let data: PageData;

	let searchTitle = "";
	let searchAlbum = "";
	$: filteredList = data.tunes.filter(tune => tune.title.indexOf(searchTitle) !== -1 && tune.group.indexOf(searchAlbum) !== -1);
</script>

<svelte:head>
	<title>Kuhn Tunes</title>
	<meta name="description" />
</svelte:head>

<div class="filter">
	<div>
		<label for="titleSearch">Title</label>
		<input id="titleSearch" bind:value={searchTitle} />
	</div>
	<div>
		<label for="titleSearch">Album</label>
		<input id="titleSearch" bind:value={searchAlbum} />
	</div>
</div>

{#each filteredList as { src, title, group, created }}
	<Tune {src} {title} {group} {created}/>
{/each}

<style>
	.filter {
		display: flex;
		justify-content: space-around;
	}
</style>
