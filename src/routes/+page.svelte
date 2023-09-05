<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    
    export let data

    console.log(data)
</script>

<!-- <h1>{ data.slices }</h1> -->

<SliceZone slices={data.slices} {components} />