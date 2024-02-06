<script>
    import { siteConfig } from '$lib/js/config'
    export let data
    $: post = JSON.parse(data.post)
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
</svelte:head>

{#if !post.metadata.hide_title}
    <h1 class="title">{post.metadata.title}</h1>
{/if}

<div class="gallery">
    {#each post.metadata.images as image}
        {#if image.wide}
            <img
                loading="lazy"
                class="wide-image"
                srcset={`${image.small_url} 800w, ${image.url} 1800w`}
                sizes="(max-width: 600px) 1px, 1200px"
                src={image.small_url}
                alt={image.alt}
            />
        {:else}
            <img
                loading="lazy"
                srcset={`${image.small_url} 800w, ${image.url} 1200w`}
                sizes="(max-width: 1000px) 1px, 1200px"
                src={image.small_url}
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
        min-height: 49lvh;
        object-fit: cover;
        background-color: var(--color-canvas-default);
    }

    img.wide-image {
        grid-column: span 2 / auto;
    }

    @media screen and (max-width: 1536px) {
        .gallery {
            grid-template-columns: 1fr 1fr;
        }

        img {
            max-width: 100vw;
        }
    }

    @media screen and (max-width: 600px) and (max-aspect-ratio: 8/5) {
        .gallery {
            grid-template-columns: 1fr;
        }

        img.wide-image {
            grid-column: auto;
            min-height: 40lvh;
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
