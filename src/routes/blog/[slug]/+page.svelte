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
    <h1>{post.metadata.title}</h1>
{:else}
    <br />
{/if}

<article>
    {@html post.content}
</article>

{#if !post.metadata.hide_date}
    <br />
    <p align="right"><small>Published on {post.metadata.date2}</small></p>
{/if}
