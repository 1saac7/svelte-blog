import { process } from '$lib/js/parser'
import fs from 'fs'
import dayjs from 'dayjs'

export const prerender = true

export async function load() {
    let posts = fs
        .readdirSync(`src/posts`)
        .filter((filename) => /.+\.md$/.test(filename))
        .map((filename) => {
            const { metadata } = process('src/posts/'.concat(filename))
            return {
                metadata,
                slug: filename.slice(0, -3),
            }
        })
    posts.sort(
        (b, a) =>
            dayjs(a.metadata.date, 'MMM D, YYYY') -
            dayjs(b.metadata.date, 'MMM D, YYYY')
    )
    return {
        posts,
    }
}
