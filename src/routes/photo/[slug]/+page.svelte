<script>
    import { siteConfig } from '$lib/js/config'
    export let data
    $: post = JSON.parse(data.post)
    import { onMount } from 'svelte'

    onMount(() => {
        let c = 0
        JSON.parse(data.post).metadata.images.forEach((image) => {
            document.getElementById(c).src = image.url
            c += 1
        })
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
        {#if image.wide}
            <img
                id={index}
                loading="lazy"
                class="wide-image"
                src="/images/placeholder.png"
                alt={image.alt}
            />
        {:else}
            <img
                id={index}
                loading="lazy"
                src="/images/placeholder.png"
                alt={image.alt}
            />
        {/if}
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

    img {
        width: 100%;
        height: 100%;
        max-width: 50vw;
        max-height: 85vh;
        object-fit: cover;
        background-color: var(--color-canvas-default);
    }

    img.wide-image {
        grid-column: span 2 / auto;
    }

    @media screen and (max-width: 1200px) {
        .gallery {
            grid-template-columns: 1fr 1fr;
        }

        img {
            max-width: 100vw;
            max-height: 98vh;
        }
    }

    @media screen and (max-width: 480px) {
        /* changes the grid layout to a single column */
        .gallery {
            grid-template-columns: 1fr;
        }

        img.wide-image {
            grid-column: auto;
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
        fill: currentColor;
        stroke: currentColor;
    }
</style>
