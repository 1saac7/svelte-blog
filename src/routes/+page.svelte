<script>
    import About from '$lib/components/About.svelte'
    import Posts from '$lib/components/Posts.svelte'
    export let data
</script>

<svelte:head>
    <title>Isaac's Blog</title>
    <meta name="description" content="Home page of Isaac's svelte blog" />
</svelte:head>

<div>
    <About />
    <Posts posts={data.posts} />
</div>
