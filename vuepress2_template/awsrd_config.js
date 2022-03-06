const tools = require('./tools');

let config = {
    title: 'Českej překlad Apokalyptickýho světa SRD',
    description: 'Českej překlad Apokalyptickýho světa SRD',
    navbar: [
        {
            text: 'Knihy',
            children: [
                {
                    text: 'Apokalyptickej svět',
                    link: '/e2/1-zaklady',
                    activeMatch: '/e2/',
                },
            ]
        },
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
                // {
                //     text: 'Apokalyptickej svět',
                //     link: 'http://awsrd.d20.cz',
                // },
                {
                    text: 'DrDII',
                    link: 'http://drd2srd.d20.cz',
                },
            ]
        },
        {
            text: 'd20.cz',
            link: 'http://www.d20.cz/'
        },
    ],
    sidebar: {
        '/e2/': [
            tools.expandBook('Apokalyptickej svět', 'e2', [
                '1-zaklady',
                '2-prirucky',
                '3-tvorba-postavy',
                '4-mistr-ceremonii',
                '5-prvni-sezeni',
                '6-hrozby',
                '7-nabalovani-tahu',
                '8-zakladni-tahy',
                '9-okrajovy-tahy',
                '10-bitevni-tahy',
                '11-takticky-a-podpurny-tahy',
                '12-lstivy-tahy',
                '13-tahy-silnicni-valky',
                '14-tahy-postav',
                '15-zraneni-a-leceni',
                '16-dalsi-typy-zraneni',
                '17-leceni',
                '18-vybaveni-a-kramy',
                '19-zlepsovani',
                '20-pokrocily-vyjebavky',
                '21-architektura-tahu',
                '22-poznamky-a-analyza',
                '23-ludgrafie',
                '24-dodatky-rozsirujici-prirucky',
                '25-dodatky-vesmirnej-vysadek',
                'ke-stazeni-a-odkazy',
            ]),
        ],
        '/': [
            {
                text: 'Knihy',
                children: [
                    {
                        text: 'Apokalyptickej svět',
                        link: '/e2/1-zaklady',
                    },
                ]
            },
            {
                text: 'O SRD',
                children: [
                    {
                        text: 'Návod na editaci',
                        link: 'http://srd.d20.cz/faq/editace.html'
                    },
                    {
                        text: 'Přidání knihy',
                        link: 'http://srd.d20.cz/faq/'
                    },
                ],
            },
        ]
    }

};

module.exports = config