<script>
    import '$lib/styles/color.css'
    import '$lib/styles/main.css'
    import Head from '$lib/components/Head.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<Head />

<div class="container">
    <main class="main">
        <slot />
    </main>
    <Footer />
</div>

<style>
    .container {
        margin: 0 auto;
        max-width: 100vw;
        min-width: 200px;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
        min-height: calc(100dvh - 2em - 6px);
    }
</style>
