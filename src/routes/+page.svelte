<script>
    import About from '$lib/components/About.svelte'
    import Posts from '$lib/components/Posts.svelte'
    export let data
</script>

<svelte:head>
    <title>1saac's Blog</title>
</svelte:head>

<div>
    <About />
    <Posts posts={data.posts} />
</div>
