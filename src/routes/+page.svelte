<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    
    export let data

    console.log(data)
</script>

<!-- <h1>{ data.slices }</h1> -->
<section class="content-wrapper">
    <SliceZone slices={data.slices} {components} />
</section>


<style>
    .content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%
    }
</style>