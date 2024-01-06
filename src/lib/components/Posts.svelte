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
        margin-top: 2.8em;
    }

    .post-list h4 {
        padding-left: 4px;
        color: var(--color-accent-subtle);
        font-size: 1.05em;
        font-weight: 600;
    }

    .post-entry {
        margin: 0 0 2.2em 0;
        padding-left: 8px;
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
        font-size: 1.4em;
        font-weight: 700;
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
