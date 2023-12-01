<script>
    export let data
    const post = JSON.parse(data.post)
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
</svelte:head>

<article>
    {@html post.content}
</article>

<br />

<p align="right"><small>Published on {post.metadata.date2}</small></p>
