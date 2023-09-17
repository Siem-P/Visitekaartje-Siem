<script>
	/** @type {import("@prismicio/client").Content.ProfileCardSlice} */
	export let slice;
</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

	<article class="content-wrapper">
		<div class="image-wrapper">
			<img src="{slice.primary.card_image.url}" alt="{slice.primary.card_image.alt}">
		</div>
		<div class="info-items">
		{#each slice.items as item}
			<p>{item.infoline}</p>
		{/each}
		</div>
	</article>
	
</section>


<!-- <pre>
{JSON.stringify(slice, null, 2)}
</pre> -->



<style>


	.image-wrapper {
		border: tomato 2px solid;
		width: 10em;
		height: 10em;
		display: flex;
		border-radius: 50%;
		overflow: hidden;
	}
	img {
		background-size: contain;
		background-clip: content-box;
		
		width: 100%;
		height: 10em;
	}
	.content-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		height: 28em;
		width: 22em;
		
	}

	article {
		display: flex;
		align-self: center;
		border: tomato 2px solid;
		width: 40em;
	}

	.info-items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>