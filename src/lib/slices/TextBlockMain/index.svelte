<script>
	/** @type {import("@prismicio/client").Content.TextBlockMainSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

		{slice.primary.singletitle}

		{#each slice.items as item}
		  <p>{item.title}</p>
		{/each} 
</section>


<pre>
	{JSON.stringify(slice, null, 2)}
</pre>