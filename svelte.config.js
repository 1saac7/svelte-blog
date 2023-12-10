import adapter from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
    },
}

export default {
    kit: {
        adapter: adapter({
            routes: {
                include: ['/*'],
                exclude: ['<all>'],
            },
        }),
    },
}
