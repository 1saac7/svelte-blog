<script>
    import { page } from '$app/stores'
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>

<div class="markdown-body">
    <br />
    {#if $page.status === 404}
        <h1>404</h1>
        <p>Page not found :(</p>
    {:else}
        <h1>Error</h1>
        <p>Something went wrong :(</p>
    {/if}
</div>
