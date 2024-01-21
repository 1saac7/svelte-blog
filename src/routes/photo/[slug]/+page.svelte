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
    <link rel="preload" as="image" href={post.metadata.images[0].url} />
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
                src={image.url}
                alt={image.alt}
            />
        {:else}
            <img loading="lazy" src={image.url} alt={image.alt} />
        {/if}
    {/each}
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
            max-height: 100vh;
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
</style>
