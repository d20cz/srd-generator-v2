const tools = require('./tools');

const googleAnalyticsId = (process.env.ENABLE_GA  === '1') ? process.env.GAID_SRD : '';

let config = {
    title: 'Vítejte na SRD Kostky!',
    description: 'Vítejte na SRD Kostky!',
    googleAnalyticsId: googleAnalyticsId,
    navbar: [
        {
            text: 'Další SRD',
            link: 'http://srd.d20.cz/',
            children: [
                {
                    text: 'Fate',
                    link: 'http://fatesrd.d20.cz',
                },
                {
                    text: 'DnD 5e',
                    link: 'http://dnd5esrd.d20.cz',
                },
                {
                    text: 'Apokalyptickej svět',
                    link: 'http://awsrd.d20.cz',
                },
                {
                    text: 'DrDII',
                    link: 'http://drd2srd.d20.cz',
                },
                {
                    text: 'Shadowrun 6e',
                    link: 'http://sr6srd.d20.cz',
                },
            ]
        },
        {
            text: 'd20.cz',
            link: 'http://www.d20.cz/'
        },
    ],
    sidebar: {
        '/': [
            {
                text: 'O srd',
                collapsible: false,
                link: '/faq/',
                children: [
                    '/faq/',
                    '/faq/editace',
                    '/faq/formatovani',
                    '/faq/tvorba-virtualnich-knih',
                    '/faq/components',
                ]
            },
            {
                text: 'Existující SRD',
                collapsible: false,
                children: [
                    {
                        text: 'Fate',
                        link: 'http://fatesrd.d20.cz',
                    },
                    {
                        text: 'DnD 5e',
                        link: 'http://dnd5esrd.d20.cz',
                    },
                    {
                        text: 'Apokalyptickej svět',
                        link: 'http://awsrd.d20.cz',
                    },
                    {
                        text: 'DrDII',
                        link: 'http://drd2srd.d20.cz',
                    },
                    {
                        text: 'Shadowrun 6e',
                        link: 'http://sr6srd.d20.cz',
                    },
                ]
            },
        ]
    }

};

module.exports = config