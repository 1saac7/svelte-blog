<script>
    export let data
    const post = JSON.parse(data.post)
</script>

<svelte:head>
    {#if post.metadata.latex}
        <script
            id="MathJax-script"
            async
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        ></script>
    {/if}
    <title>{post.metadata.title}</title>
    <meta
        name="description"
        content="Isaac's blog post: {post.metadata.title}"
    />
</svelte:head>

<br />

<article>
    {@html post.content}
</article>

<br />

<p align="right"><small>Published on {post.metadata.date2}</small></p>
