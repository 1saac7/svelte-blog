<script>
    import { siteConfig } from '$lib/js/config'
</script>

<footer>
    <div class="footer">
        <div class="footer-text">
            © 2024 {siteConfig.author}.
        </div>
        <div class="footer-text">{siteConfig.footerMsg}</div>
        <div class="footer-text">
            <a
                target="_blank"
                rel="noopener noreferrer me"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
            >
                CC BY-SA 4.0</a
            >
        </div>
    </div>
</footer>

<style>
    .footer {
        text-align: center;
        margin-top: 6px;
        margin-bottom: 6px;
    }

    .footer-text {
        display: inline-block;
        white-space: nowrap;
        font-size: smaller;
        color: var(--color-fg-subtle);
    }

    .footer-text a {
        color: var(--color-fg-subtle);
    }
    .footer a[href^="https://"]::after
    {
        content: '';
        width: 13px;
        height: 13px;
        margin-left: 4px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
    }

    .footer a[href^="https://"]::after
    {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill= 'black' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'/%3E%3Cpath fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'/%3E%3C/svg%3E");
    }

    [data-theme='dark'] .footer a[href^="https://"]::after
    {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill= 'white' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'/%3E%3Cpath fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'/%3E%3C/svg%3E");
    }
</style>
