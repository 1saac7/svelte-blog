<script>
    import { base } from '$app/paths'
    export let posts
</script>

<div class="post-list">
    <h1>Posts</h1>

    <ul>
        {#each posts as post}
            {#if !post.metadata.hidden}
                <li>
                    <a href={`${base}/blog/${post.slug}`}>
                        {post.metadata.date} -
                        {post.metadata.title}
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    @media (max-width: 857px) {
        .post-list a {
            text-decoration: underline;
        }
    }
</style>
