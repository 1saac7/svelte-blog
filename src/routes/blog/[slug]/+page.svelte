<script>
    export let data
    $: post = JSON.parse(data.post)
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

{#if !post.metadata.hide_publish_time}
    <p align="right"><small>Published on {post.metadata.date2}</small></p>
{/if}
