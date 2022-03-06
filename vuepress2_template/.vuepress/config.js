const srdConfig = require('./srd_config');
const { path } = require('@vuepress/utils')

module.exports = {
    // site config
    lang: 'cs',
    title: srdConfig.title,
    description: srdConfig.description,


    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        navbar: srdConfig.navbar,
        sidebar: srdConfig.sidebar,
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                maxSuggestions: 10,
                locales: {
                    '/': {
                        placeholder: 'Hledat',
                    }
                },
            },
        ],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
    ],
}