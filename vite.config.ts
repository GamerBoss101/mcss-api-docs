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
                    'vscode-icons': ['file-type-svelte', 'file-type-markdown', 'file-type-vite'],
                    'logos': ['typescript-icon', 'svelte-kit'],
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
                title: 'MCServerSoft Docs',
                description: 'MCSS Community Documentation',
            },
            addInspect: true,
        }),
    ],
});
