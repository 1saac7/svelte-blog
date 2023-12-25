<script>
    // import '$lib/github-markdown.css'
    import "$lib/styles/color.css"
    import "$lib/styles/main.css"
    import Head from "$lib/components/Head.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>

<Head />

<div class="markdown-body container">
    <main class="main">
        <slot />
    </main>
    <Footer />
</div>

<style>
    .container {
        margin: 0 auto;
        padding: 23px 30px 0 30px;
        max-width: 708px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        min-height: 97vh;
    }

    .main {
        flex: 1;
    }

    @media (max-width: 480px) {
        .container {
            padding-top: 19px;
            padding-right: 16px;
            padding-left: 16px;
        }
    }
</style>
