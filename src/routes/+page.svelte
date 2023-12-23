<script>
    import { siteConfig } from '$lib/js/config'
    import About from '$lib/components/About.svelte'
    import Social from '$lib/components/Social.svelte'
    import Posts from '$lib/components/Posts.svelte'
    export let data
</script>

<svelte:head>
    <title>{siteConfig.siteName}</title>
    <meta name="description" content={siteConfig.description} />
</svelte:head>

<div>
    <About />
    <Social />
    <Posts posts={data.posts} />
</div>
