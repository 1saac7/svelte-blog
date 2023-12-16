<script>
    import '$lib/github-markdown.css'
    import Footer from '$lib/components/Footer.svelte'
</script>

<div class="markdown-body container">
    <main class="main">
        <slot />
    </main>
    <Footer />
</div>

<style>
    .container {
        margin: 0 auto;
        padding: 2vh 20px 0 20px;
        max-width: 756px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        min-height: 98vh;
    }

    .main {
        flex: 1;
    }
</style>
