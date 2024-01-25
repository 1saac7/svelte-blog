<script>
    import { siteConfig } from '$lib/js/config'
</script>

<div class="social-icons">
    {#if siteConfig.social_unsplash}
        <a
            href={siteConfig.social_unsplash}
            target="_blank"
            rel="noopener noreferrer me"
            title="Unsplash profile"
        >
            <svg><use xlink:href="#unsplash"> </use></svg>
        </a>
    {/if}

    {#if siteConfig.social_github}
        <a
            href={siteConfig.social_github}
            target="_blank"
            rel="noopener noreferrer me"
            title="View source on GitHub"
        >
            <svg><use xlink:href="#github"> </use></svg>
        </a>
    {/if}

    {#if siteConfig.social_email}
        <a
            href={siteConfig.social_email}
            target="_blank"
            rel="noopener noreferrer me"
            title="Email"
        >
            <svg><use xlink:href="#email" /></svg>
        </a>
    {/if}

    {#if siteConfig.social_rss}
        <a
            href={siteConfig.social_rss}
            target="_blank"
            rel="noopener noreferrer me"
            title="RSS Feed"
        >
            <svg><use xlink:href="#rss" /> </svg>
        </a>
    {/if}
</div>

<style>
    .social-icons {
        margin: 0 4px;
        display: inline-block;
    }

    .social-icons a {
        transition: color 200ms;
    }

    .social-icons a:hover {
        color: var(--color-accent-fg);
    }

    .social-icons svg {
        width: 32px;
        height: 32px;
        margin: 0 0 0 10px;
        overflow: visible !important;
        fill: currentColor;
        stroke: currentColor;
    }
</style>
