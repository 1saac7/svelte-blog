<script>
    import '$lib/styles/color.css'
    import '$lib/styles/main.css'
    import Head from '$lib/components/Head.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<Head />

<div class="markdown-body container">
    <main class="main">
        <slot />
        <div class="empty-space" />
    </main>
    <Footer />
</div>

<style>
    .container {
        margin: 0 auto;
        padding: 8px 64px 0 64px;
        max-width: 768px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
        min-height: calc(100dvh - 2em);
        margin-bottom: 0;
    }

    .empty-space {
        margin: 0 auto 4em auto;
    }

    @media (max-width: 768px) {
        .container {
            padding-left: 45px;
            padding-right: 45px;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media (max-width: 414px) {
        .container {
            padding-left: 18px;
            padding-right: 18px;
        }

        .main {
            min-height: calc(100dvh - 4em);
        }
    }
</style>
