<script>
    import { base } from '$app/paths'
    export let posts
</script>

<div>
    <h1>Posts</h1>

    <ul>
        {#each posts as post}
            <li>
                <a href={`${base}/blog/${post.slug}`}>
                    {post.metadata.date} -
                    {post.metadata.title}
                </a>
            </li>
        {/each}
    </ul>
</div>
