<script>
    import { siteConfig } from '$lib/js/config'
    import About from '$lib/components/About.svelte'
    import Posts from '$lib/components/Posts.svelte'
    export let data
</script>

<svelte:head>
    <title>{siteConfig.siteName}</title>
    <meta name="description" content={siteConfig.description} />
</svelte:head>

<div>
    <About />
    <Posts posts={data.posts} />
</div>
