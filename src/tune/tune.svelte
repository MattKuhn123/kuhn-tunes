<script>
    import AudioPlayer from "../audio-player/AudioPlayer.svelte";

	export /**
    * @type {any}*/
	 let title;
	export /**
    * @type {any}*/
	 let group;
     export /**
    * @type {any}*/
	 let src;
     export /**
    * @type {Date}*/
	 let created;
</script>

<div class='card'>
    <div>
        <h2>{title}</h2>
        <p>{group}</p>
        <p>{created}</p>
    </div>
	<AudioPlayer {src} />
</div>

<style>
	.card {
        background: linear-gradient(
            90deg,
            var(--tertiary-color) 15%,
            var(--primary-color) 60%,
            var(--accent-color) 95%
	    );
        display: flex;
        justify-content: space-between;
		margin: 0.5em;
		padding: 0.5em 0.5em 0.5em 6em;
		border: 1px solid #eee;
		border-radius: 4px;
		box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
	}

	.card::after {
		clear: both;
		display: block;
	}

	h2 {
		margin: 0 0 0.5em 0;
		font-size: 16px;
	}

	p {
		margin: 0;
		font-size: 14px;
	}
</style>