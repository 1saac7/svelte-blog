<script>
    import { siteConfig } from '$lib/js/config'
    export let data
    $: post = JSON.parse(data.post)
</script>

<svelte:head>
    <title>{post.metadata.title} • {siteConfig.siteName}</title>
    {#if post.metadata.description}
        <meta name="description" content={post.metadata.description} />
    {:else}
        <meta
            name="description"
            content="{post.metadata.title} written by {siteConfig.author}."
        />
    {/if}
</svelte:head>

<div class="postpage">
    {#if !post.metadata.hide_title}
        <h1>{post.metadata.title}</h1>
    {:else}
        <br />
    {/if}

    <article>
        {@html post.content}
    </article>

    {#if !post.metadata.hide_date}
        <br />
        <p align="right"><small>Published on {post.metadata.date}</small></p>
    {/if}

    <div class="footer-icons">
        <a href="/" title="Home">
            <svg><use xlink:href="#home" /></svg>
        </a>
    </div>
</div>

<style>
    .postpage {
        margin: 0 auto;
        padding: 8px 64px 0 64px;
        max-width: 768px;
        min-width: 200px;
    }

    @media (max-width: 768px) {
        .postpage {
            padding-left: 45px;
            padding-right: 45px;
            max-width: 100vw;
        }
    }

    @media (max-width: 480px) {
        .postpage {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media (max-width: 414px) {
        .postpage {
            padding-left: 18px;
            padding-right: 18px;
        }
    }

    .footer-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    }

    .footer-icons a {
        transition: color 200ms;
    }

    .footer-icons a:hover {
        color: var(--color-accent-fg);
    }

    .footer-icons svg {
        width: 28px;
        height: 28px;
        overflow: visible !important;
        fill: currentColor;
        stroke: currentColor;
    }
</style>
