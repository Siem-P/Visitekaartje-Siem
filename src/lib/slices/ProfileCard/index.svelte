<script>
	/** @type {import("@prismicio/client").Content.ProfileCardSlice} */
	export let slice;
</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="image-wrapper">
		<img src="{slice.primary.card_image.url}" alt="{slice.primary.card_image.alt}">
	</div>
	
	<article class="content-wrapper">
		{#each slice.items as item}
			<p>{item.infoline}</p>
		{/each}
	</article>
	
</section>


<pre>
{JSON.stringify(slice, null, 2)}
</pre>
