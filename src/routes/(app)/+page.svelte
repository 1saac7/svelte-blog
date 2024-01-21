<script>
    import { siteConfig } from '$lib/js/config'
    import About from '$lib/components/About.svelte'
    import Social from '$lib/components/Social.svelte'
    import Posts from '$lib/components/Posts.svelte'
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
    export let data
</script>

<svelte:head>
    <title>{siteConfig.siteName}</title>
    <meta name="description" content={siteConfig.description} />
</svelte:head>

<div class="homepage">
    <About />
    <div class="toolbar">
        <ThemeSwitch />
        <Social />
    </div>
    <Posts posts={data.posts} />
</div>

<style>
    .toolbar {
        display: flex;
    }
</style>
