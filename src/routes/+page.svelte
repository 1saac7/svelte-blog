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
    .homepage {
        margin: 0 auto;
        padding: 8px 64px 0 64px;
        max-width: 768px;
        min-width: 200px;
    }

    .toolbar {
        display: flex;
    }

    @media (max-width: 1200px) {
        .homepage {
            max-width: 65vw;
        }
    }

    @media (max-width: 768px) {
        .homepage {
            padding-left: 45px;
            padding-right: 45px;
            max-width: 100vw;
        }
    }

    @media (max-width: 480px) {
        .homepage {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media (max-width: 414px) {
        .homepage {
            padding-left: 18px;
            padding-right: 18px;
        }
    }
</style>
