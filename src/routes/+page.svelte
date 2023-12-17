<script>
    import { siteData } from '$lib/js/config'
    import About from '$lib/components/About.svelte'
    import Posts from '$lib/components/Posts.svelte'
    export let data
</script>

<svelte:head>
    <title>{siteData.siteName}</title>
    <meta name="description" content={siteData.description} />
</svelte:head>

<div>
    <About />
    <Posts posts={data.posts} />
</div>
