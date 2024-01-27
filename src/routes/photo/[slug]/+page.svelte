<script>
    import { onMount } from 'svelte'
    import { siteConfig } from '$lib/js/config'
    import LazyImage from '$lib/components/LazyImage.svelte'

    export let data

    $: post = JSON.parse(data.post)
    let hasAPI = true

    onMount(() => {
        const hasAPI = 'IntersectionObserver' in window
    })
</script>

<svelte:head>
    <title>{post.metadata.title} • {siteConfig.siteName}</title>
    {#if post.metadata.description}
        <meta name="description" content={post.metadata.description} />
    {:else}
        <meta
            name="description"
            content="{post.metadata.title} written by {siteConfig.author}."
        />
    {/if}
    <link rel="preload" as="image" href={post.metadata.images[0].url} />
</svelte:head>

{#if !post.metadata.hide_title}
    <h1 class="title">{post.metadata.title}</h1>
{/if}

<div class="gallery">
    {#each post.metadata.images as image, index}
        <LazyImage {image} lazy={hasAPI && index > 2} />
    {/each}
</div>

<div class="footer-icons">
    <a href="/" title="Home">
        <svg><use xlink:href="#home" /></svg>
    </a>
</div>

<style>
    .title {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-style: italic;
        color: white;
        text-shadow: 1px 1px 5px gray;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: auto;
        grid-auto-flow: dense;
    }

    @media screen and (max-width: 1200px) {
        .gallery {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 480px) {
        /* changes the grid layout to a single column */
        .gallery {
            grid-template-columns: 1fr;
        }
    }

    .footer-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .footer-icons a {
        transition: color 200ms;
    }

    .footer-icons a:hover {
        color: var(--color-accent-fg);
    }

    .footer-icons svg {
        width: 28px;
        height: 28px;
        overflow: visible !important;
        fill: currentcolor;
        stroke: currentcolor;
    }
</style>
