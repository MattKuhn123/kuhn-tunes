<script lang="ts">
	import type { PageData } from '../../../.svelte-kit/types/src/routes/tunes/$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>Kuhn Tunes</title>
	<meta name="description" content="A list of songs and music by Kuhn" />
</svelte:head>

<div class="todos">
	<h1>Tunes</h1>
</div>

{#each data.tunes as tune}
	<div>
		<p>{tune.title}</p>
	</div>
{/each}

<style>
	.todos {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>
