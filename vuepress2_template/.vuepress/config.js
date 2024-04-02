const srdConfig = require('./srd_config');
import { path } from 'vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
    lang: 'cs',
    title: srdConfig.title,
    description: srdConfig.description,

    plugins: [
        googleAnalyticsPlugin({
            id: srdConfig.googleAnalyticsId,
        }),
        searchPlugin({
            maxSuggestions: 10,
            locales: {
                '/': {
                    placeholder: 'Hledat',
                }
            },
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],

    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {

        },
    }),
    theme: defaultTheme({
        navbar: srdConfig.navbar,
        sidebar: srdConfig.sidebar,
    }),
})