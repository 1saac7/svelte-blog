import { process } from '$lib/js/parser'
import { error } from '@sveltejs/kit'

export const prerender = true

export async function load({ params }) {
    const { slug } = params
    const { metadata, content } = process(`src/posts/${slug}.md`)
    if (metadata.error) throw error(404)
    const post = JSON.stringify({ metadata, content })
    return {
        post,
    }
}
