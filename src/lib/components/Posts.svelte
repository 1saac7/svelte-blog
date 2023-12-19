<script>
    import { base } from '$app/paths'
    export let posts
</script>

<div class="post-list">
    <h3>Posts</h3>

    <ul>
        {#each posts as post}
            {#if !post.metadata.hidden}
                {#if post.metadata.emoji}
                    <li>
                        <a href={`${base}/blog/${post.slug}`}>
                            {post.metadata.date} -
                            {post.metadata.emoji}
                            {post.metadata.title}
                        </a>
                    </li>
                {:else}
                    <li>
                        <a href={`${base}/blog/${post.slug}`}>
                            {post.metadata.date} -
                            {post.metadata.title}
                        </a>
                    </li>
                {/if}
            {/if}
        {/each}
    </ul>
</div>
