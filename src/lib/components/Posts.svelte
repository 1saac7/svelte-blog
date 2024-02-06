<script>
    import { base } from '$app/paths'
    export let posts
</script>

<div class="post-list">
    <h4>POSTS</h4>

    {#each posts as post}
        {#if !post.metadata.hidden}
            <div class="post-entry">
                {#if post.metadata.gallery}
                    <a href={`${base}/photo/${post.slug}`}>
                        <h3>
                            {#if post.metadata.emoji}
                                {post.metadata.emoji}
                            {/if}
                            {post.metadata.title}
                        </h3>
                    </a>
                {:else}
                    <a href={`${base}/blog/${post.slug}`}>
                        <h3>
                            {#if post.metadata.emoji}
                                {post.metadata.emoji}
                            {/if}
                            {post.metadata.title}
                        </h3>
                    </a>
                {/if}
                <time>{post.metadata.date}</time>
            </div>
        {/if}
    {/each}
</div>

<style>
    .post-list {
        margin-top: 2em;
    }

    .post-list h4 {
        padding-left: 4px;
        color: var(--color-accent-subtle);
        font-size: 1.05em;
        font-weight: 600;
    }

    .post-entry {
        margin: 0 0 0.7em 0;
        padding: 0.3em 0 1.5em 8px;
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
        font-size: 75%;
        color: var(--color-fg-subtle);
    }

    @media (max-width: 768px) {
        .post-entry {
            padding: 0.6em 16px 0.35em 16px;
            background-color: var(--color-canvas-subtle);
            border: 1.5px solid;
            border-color: var(--color-border-default);
            border-radius: 10px;
            transition-property: background-color, border-color;
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
        }

        .post-entry h3 {
            display: block;
            font-size: 1.3em;
            margin-bottom: 0.35em;
        }
    }
</style>
