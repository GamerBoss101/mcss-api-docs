export default {
    scope: '/',
    base: '/',
    strategies: 'injectManifest',
    kit: {
        trailingSlash: 'always',
    },
    darkManifest: '/manifest-dark.webmanifest',
    manifest: {
        start_url: '/',
        scope: '/',
        name: 'MCServerSoft Docs',
        short_name: 'MCSS Docs',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            }
        ],
        theme_color: '#f2f2f2',
        background_color: '#f2f2f2',
        display: 'standalone',
    }
} as any