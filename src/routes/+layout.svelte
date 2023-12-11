<script>
    import '$lib/github-markdown.css'
    import Footer from '$lib/components/Footer.svelte'
</script>

<div class="markdown-body overflow">
    <div class="container">
        <div class="main-footer">
            <main class="main">
                <slot />
            </main>

            <footer class="footer">
                <Footer />
            </footer>
        </div>
    </div>
</div>

<style>
    .overflow {
        overflow-y: auto;
    }

    .container {
        margin: 0 auto;
        max-width: 856px;
        min-width: 200px;
    }

    .main-footer {
        height: 100vh;
        box-sizing: border-box;
        padding: 45px 45px 0 45px;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
    }

    @media (max-width: 857px) {
        .main-footer {
            padding: 15px 30px 0 30px;
        }
    }
    .footer {
        bottom: 0;
        padding-top: 45px;
    }
</style>
