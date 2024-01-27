<script>
    import { onMount } from 'svelte'

    export let image
    export let lazy = false

    let src = '/images/placeholder.png'
    let observer = null
    let node

    onMount(() => {
        if (!lazy) src = image.url
        node.onload = function () {
            if (lazy) {
                node.style.opacity = '0.5'
                observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            observer.unobserve(node)
                            src = image.url
                            node.style.opacity = '1'
                        }
                    },
                    {
                        rootMargin: '200px',
                    }
                )
                observer.observe(node)
                return () => observer.unobserve(node)
            }
        }
    })
</script>

{#if image.wide}
    <img bind:this={node} class="wide-image" {src} alt={image.alt} />
{:else}
    <img bind:this={node} {src} alt={image.alt} />
{/if}

<style>
    img {
        width: 100%;
        height: 100%;
        max-width: 50vw;
        max-height: 85vh;
        object-fit: cover;
        background-color: var(--color-canvas-default);
        transition: opacity 500ms ease;
    }

    img.wide-image {
        grid-column: span 2 / auto;
    }

    @media screen and (max-width: 1200px) {
        img {
            max-width: 100vw;
            max-height: 98vh;
        }
    }

    @media screen and (max-width: 480px) {
        img.wide-image {
            grid-column: auto;
        }
    }
</style>
