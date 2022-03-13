const tools = require('./tools');

const googleAnalyticsId = (process.env.ENABLE_GOOGLE_ANALYTICS_ID  === '1') ? 'G-BY6H51G6BT' : '';

let books = [
    {
        text: 'Základní pravidla',
        link: '/fate-core-system/1-zaklady',
        activeMatch: '/fate-core-system/',
    },
    {
        text: 'Zrychlená edice',
        link: '/fae/1-zaciname',
        activeMatch: '/fae/',
    },
    {
        text: 'Systémové nástroje',
        link: '/fate-system-toolkit/predmluva',
        activeMatch: '/fate-system-toolkit/',
    },
    {
        text: 'Převodní přiručka',
        link: '/fate-prevodni-prirucka/1-predmluva',
        activeMatch: '/fate-prevodni-prirucka/',
    },
    {
        text: 'Star Wars',
        link: '/fate-star-wars/1-uvod',
        activeMatch: '/fate-star-wars/',
    },
];
let config = {
    title: 'Český překlad Fate SRD',
    description: 'Český překlad fate SRD',
    googleAnalyticsId: googleAnalyticsId,
    navbar: [
        {
            text: 'Knihy',
            children: books
        },
        tools.sharedTemplateDalsiSrd('fatesrd'),
        tools.sharedTemplateD20cz(),
    ],
    sidebar: {
        '/dfa/': [
            tools.expandBook('Dresden Files Zrychleně', 'dfa', [
                'faktura',
                'predmluva',
                '1-frakce',
                '2-mista',
                '3-svet',
                '4-tvorba-hry',
                '5-postava',
                '6-pravidla',
                '7-aspekty',
                '8-plaste',
                '9-ritualni-magie',
                '10-konflikty',
                '11-vyvoj',
                '12-vedeni-hry',
                '13-ukazkova-kampan',
                'rejstrik-herni-pomucky',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/fate-core-system/': [
            tools.expandBook('Fate základní pravidla', 'fate-core-system', [
                '1-zaklady',
                '2-tvorba-hry',
                '3-tvorba-postavy',
                '4-aspekty-a-body-osudu',
                '5-dovednosti-a-triky',
                '6-akce-a-vysledky',
                '7-vyzvy-strety-a-konflikty',
                '8-vedeni-hry',
                '9-sceny-sezeni-a-scenare',
                '10-dlouha-hra',
                '11-speciality',
                'prehled',
                'prirucka-veterana',
                'ke-stazeni-a-odkazy',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/fae/': [
            tools.expandBook('Fate zrychlená edice', 'fae', [
                '1-zaciname',
                '2-spolecne-vypraveni-pribehu',
                '3-kym-chcete-byt',
                '4-vysledky-akce-pristupy',
                '5-vyzvy-strety-a-konflikty',
                '6-hups-poskozeni-stres-a-nasledky',
                '7-aspekty-a-body-osudu',
                '8-triky',
                '9-zlepsovani-schopnosti-vyvoj-postavy',
                '10-byt-vypravecem',
                '11-ukazkove-postavy',
                'rychly-prehled',
                'ke-stazeni-a-odkazy',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/fate-system-toolkit/': [
            tools.expandBook('Fate systémové nástroje', 'fate-system-toolkit', [
                'predmluva',
                '1-uvod',
                '2-aspekty',
                '3-dovednosti',
                '4-triky',
                '5-rozsahla-hra',
                '6-zvlastni-okolnosti',
                '7-prizpusobene-nastroje',
                '8-magie',
                '9-subsystemy',
                'ke-stazeni-a-odkazy',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/fate-prevodni-prirucka/': [
            tools.expandBook('Fate převodní přiručka', 'fate-prevodni-prirucka', [
                '1-predmluva',
                '2-co-se-lisi',
                '3-prevod-dovednosti',
                '4-prevod-triku',
                '5-prevod-stresu',
                '6-prevod-pv',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/fate-star-wars/': [
            tools.expandBook('Fate Star Wars', 'fate-star-wars', [
                '1-uvod',
                '2-fate-svetelnou-rychlosti',
                '3-jak-hrat-star-wars',
                '4-tvorba-vasi-star-wars-hry',
                '5-tvorba-postavy',
                '6-sila',
                '7-akce-drama-boj',
                '8-galaxie',
                '9-vedeni-star-wars-pribehu',
                '10-dodatek-generator-planet',
                '11-seznam-obrazku',
                'ke-stazeni-a-odkazy',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/': [
            {
                text: 'Knihy',
                children: books,
            },
            tools.sharedTemplateOSrd(),
        ]
    }

};

module.exports = config