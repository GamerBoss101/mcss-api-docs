// @ts-nocheck
import { defineConfig } from 'vite';

import { sveltepress } from '@sveltepress/vite';

import { defaultTheme } from '@sveltepress/theme-default';

import navbar from './config/navbar'
import sidebar from './config/sidebar'
import pwa from './config/pwa'

export default defineConfig({
    plugins: [
        sveltepress({
            theme: defaultTheme({
                navbar,
                sidebar,
                logo: "https://avatars.githubusercontent.com/u/105963300?s=200&v=4",
                github: 'https://github.com/mcserversoft-community',
                discord: 'https://discord.com/invite/DEn89PB',
                editLink: 'https://github.com/mcserversoft-community/mcss-api-docs/tree/main/src/routes/:route',
                pwa,
                themeColor: {
                    light: '#f2f2f2',
                    dark: '#18181b',
                    gradient: {
                        start: '#008f02',
                        end: '#7928ca',
                    }
                },
                preBuildIconifyIcons: {
                    'vscode-icons': ["file-type-js-official", "file-type-java-official"],
                    'logos': ['typescript-icon', 'svelte-kit', 'java'],
                    'emojione': ['artist-palette'],
                    'ph': ['smiley', 'layout-duotone', 'code-bold'],
                    'noto': ['package'],
                    'solar': ['chat-square-code-outline', 'reorder-outline'],
                    'carbon': ['tree-view-alt', 'import-export'],
                    'ic': ['sharp-rocket-launch'],
                    'tabler': ['icons'],
                    'mdi': ['theme-light-dark'],
                }
            }),
            siteConfig: {
                title: 'MC Server Soft Community',
                description: 'API Documentation',
            },
            addInspect: true,
        }),
    ],
    server: {
        port: 5000,
        strictPort: true,
        hmr: {
            port: 5000,
        }
    }
});
