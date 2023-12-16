<script>
    export let data
    $: post = JSON.parse(data.post)
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
    <meta
        name="description"
        content="Isaac's blog post: {post.metadata.title}"
    />
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
