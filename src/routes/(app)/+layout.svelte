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
        padding: 8px 64px 0 64px;
        max-width: 768px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
        min-height: calc(100dvh - 2em - 75px);
    }

    @media (max-width: 1200px) {
        .container {
            max-width: 65vw;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding-left: 45px;
            padding-right: 45px;
            max-width: 100vw;
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
            min-height: calc(100dvh - 4em - 75px);
        }
    }
</style>
