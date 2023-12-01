import { process } from '$lib/js/parser'

export async function load({ params }) {
    const { slug } = params
    const { metadata, content } = process(`src/posts/${slug}.md`)
    const post = JSON.stringify({ metadata, content })
    return {
        post,
    }
}
