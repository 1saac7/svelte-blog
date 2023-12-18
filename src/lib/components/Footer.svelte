<script>
    import { siteConfig } from '$lib/js/config'
</script>

<footer>
    <div class="footer">
        <div class="msg">
            © 2024 {siteConfig.author}. {siteConfig.footerMsg}
        </div>

        <div class="msg">
            <a href={siteConfig.github}> GitHub</a> |
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0</a
            >
        </div>
    </div>
</footer>

<style>
    @media (max-width: 768px) {
        .footer {
            text-align: center;
        }
    }

    @media (min-width: 768px) {
        .msg {
            display: inline-block;
        }
    }

    .footer {
        bottom: 0;
        padding-top: 45px;
        padding-bottom: 10px;
    }
</style>
