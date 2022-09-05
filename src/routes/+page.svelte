<svelte:head>
	<title>Kuhn Tunes</title>
	<meta name="description" content="music catalog" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="kuhn-tunes.png" type="image/webp" />
				<img src="kuhn-tunes.png" alt="Welcome" />
			</picture>
		</span>
	</h1>
	<p>
		Welcome to Kuhn Tunes - built using Svelte, hosted in Cloudflare, and version-controled with Git in <a href="https://codeberg.org/Mattitiyahoo/kuhn-tunes">Codeberg</a>.
		<br /> Peace, grace and love,
		<br /> - Matt Kuhn
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
