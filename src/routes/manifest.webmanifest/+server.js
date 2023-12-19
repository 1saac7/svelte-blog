import { siteConfig } from '$lib/js/config'

export async function GET() {
    return new Response(
        JSON.stringify({
            name: siteConfig.siteName,
            short_name: siteConfig.siteName,
            description: siteConfig.description,
            id: siteConfig.siteUrl,
            start_url: '/',
            scope: '/',
            display: 'standalone',
            orientation: 'portrait',
            categories: ['education', 'blog'],
            background_color: '#ffffff',
            theme_color: '#ffffff',
            icons: [
                {
                    src: '/favicon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: '/favicon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: '/favicon-512-maskable.png',
                    type: 'image/png',
                    sizes: '512x512',
                    purpose: 'maskable',
                },
            ],
        }),
        {
            headers: {
                'Content-Type': 'application/manifest+json',
            },
        }
    )
}
