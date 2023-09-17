<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    
    export let data

    console.log(data)
</script>


<main>
    <!-- <h1>{ data.slices }</h1> -->
    <section class="content-wrapper">
        <SliceZone slices={data.slices} {components} />
    </section>
</main>



<style>
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {    
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%
    }
</style>