<script>
    import { base } from '$app/paths'
    export let posts
</script>

<div class="post-list">
    <h4>POSTS</h4>

    {#each posts as post}
        {#if !post.metadata.hidden}
            <div class="post-entry">
                <a href={`${base}/blog/${post.slug}`}>
                    <h3>
                        {#if post.metadata.emoji}
                            {post.metadata.emoji}
                        {/if}
                        {post.metadata.title}
                    </h3>
                </a>
                <time>{post.metadata.date}</time>
            </div>
        {/if}
    {/each}
</div>

<style>
    .post-list {
        margin-top: 3.3em;
    }
    .post-list h4 {
        font-size: 1.1em;
        color: var(--color-accent-subtle);
    }

    .post-entry {
        margin: 0 0 2.5em 0;
    }

    @media (max-width: 768px) {
        .post-entry {
            margin-left: 0.75em;
        }
    }

    .post-entry a {
        text-decoration: none;
        color: var(--color-fg-muted);
        transition: color 200ms;
    }

    .post-entry a:hover {
        color: var(--color-accent-fg);
    }

    .post-entry h3 {
        display: inline-block;
        font-size: 1.5em;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.2em;
        padding-bottom: 0;
    }

    .post-entry time {
        display: block;
        font-size: 85%;
        color: var(--color-fg-subtle);
    }
</style>
