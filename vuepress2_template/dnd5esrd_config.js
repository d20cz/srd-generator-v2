const tools = require('./tools');

let books = [
    {
        text: 'Příručka hráče',
        link: '/prirucka-hrace/predmluva',
        activeMatch: '/prirucka-hrace/',
    },
    {
        text: 'Průvodce pána jeskyně',
        link: '/pruvodce-pana-jeskyne/uvod',
        activeMatch: '/pruvodce-pana-jeskyne/',
    },
    {
        text: 'Bestiář',
        link: '/bestiar/uvod',
        activeMatch: '/bestiar/',
    },
    {
        text: 'Jeskyne a draci',
        link: '/jeskyne-a-draci/0-uvod',
        activeMatch: '/jeskyne-a-draci/',
    },
];
let grimoars = [
    {
        text: 'Abecední',
        link: '/grimoar/grimoar-jmen',
        activeMatch: '/grimoar/grimoar-jmen',
    },
    {
        text: 'Moci',
        link: '/grimoar/grimoar-moci',
        activeMatch: '/grimoar/grimoar-moci',
    },
    {
        text: 'Magických škol',
        link: '/grimoar/grimoar-skol',
        activeMatch: '/grimoar/grimoar-skol',
    },
];
let sumaryClasses = [
    {
        text: 'Barbar',
        link: '/soupis/barbar',
        activeMatch: '/soupis/barbar',
    },
    {
        text: 'Bard',
        link: '/soupis/bard',
        activeMatch: '/soupis/bard',
    },
    {
        text: 'Bojovník',
        link: '/soupis/bojovnik',
        activeMatch: '/soupis/bojovnik',
    },
    {
        text: 'Čaroděj',
        link: '/soupis/carodej',
        activeMatch: '/soupis/carodej',
    },
    {
        text: 'Černokněžník',
        link: '/soupis/cernokneznik',
        activeMatch: '/soupis/cernokneznik',
    },
    {
        text: 'Druid',
        link: '/soupis/druid',
        activeMatch: '/soupis/druid',
    },
    {
        text: 'Hraničář',
        link: '/soupis/hranicar',
        activeMatch: '/soupis/hranicar',
    },
    {
        text: 'Klerik',
        link: '/soupis/klerik',
        activeMatch: '/soupis/klerik',
    },
    {
        text: 'Kouzelník',
        link: '/soupis/kouzelnik',
        activeMatch: '/soupis/kouzelnik',
    },
    {
        text: 'Mnich',
        link: '/soupis/mnich',
        activeMatch: '/soupis/mnich',
    },
    {
        text: 'Paladin',
        link: '/soupis/paladin',
        activeMatch: '/soupis/paladin',
    },
    {
        text: 'Tulák',
        link: '/soupis/tulak',
        activeMatch: '/soupis/tulak',
    },
];
let config = {
    title: 'Český překlad DnD 5e SRD',
    description: 'Český překlad DnD 5e SRD',
    navbar: [
        {
            text: 'Knihy',
            children: books
        },
        {
            text: 'Grimoary',
            children: grimoars
        },
        {
            text: 'Soupisy povolání',
            children: sumaryClasses
        },
        tools.sharedTemplateDalsiSrd('dnd5esrd'),
        tools.sharedTemplateD20cz(),
    ],
    sidebar: {
        '/prirucka-hrace/': [
            tools.expandBook('Příručka hráče', 'prirucka-hrace', [
                'predmluva',
                'uvod',
                '1-kapitola',
                '2-kapitola',
                '3-kapitola',
                '4-kapitola',
                '5-kapitola',
                '6-kapitola',
                '7-kapitola',
                '8-kapitola',
                '9-kapitola',
                '10-kapitola',
                '11-kapitola',
                'dodatek-a',
                'dodatek-b',
                'dodatek-c',
                'dodatek-d',
                'dodatek-e',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/pruvodce-pana-jeskyne/': [
            tools.expandBook('Průvodce pána jeskyně', 'pruvodce-pana-jeskyne', [
                'uvod',
                '1-kapitola',
                '2-kapitola',
                '3-kapitola',
                '4-kapitola',
                '5-kapitola',
                '6-kapitola',
                '7-kapitola',
                '8-kapitola',
                '9-kapitola',
                'dodatek-A',
                'dodatek-B',
                'dodatek-C',
                'dodatek-D',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/jeskyne-a-draci/': [
            tools.expandBook('Jeskyne a draci', 'jeskyne-a-draci', [
                '0-uvod',
                '1-zaklady',
                '2-tvorba-postavy',
                '3-rasy',
                '4-povolani',
                '5-detaily-postavy',
                '6-vybaveni',
                '7-organizace-hry-a-pomucky',
                '8-hrani-hry',
                '9-vedeni-hry',
                '10-magie',
                '11-kouzelne-predmety',
                '12-protivnici-a-netvori',
                '13-stavy-a-nemoci',
                'hvezdne-obory',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/bestiar/': [
            tools.expandBook('Bestiář', 'bestiar', [
                'uvod',
                'abolet',
                'andele',
                'ankheg',
                'arakokra',
                'azer',
                'bazilisek',
                'behir',
                'blekotajici-tlamac',
                'bludicka',
                'bulta',
                'chimera',
                'chrlic',
                'chuul',
                'dablove',
                'demoni',
                'diblik',
                'dinosauri',
                'divous',
                'draci-zelva',
                'draci',
                'drak-stinovy',
                'drakostej',
                'dravouk',
                'dryada',
                'duch',
                'duergar',
                'dvojnik',
                'elementalove',
                'elfove-drowove',
                'empyrean',
                'ent',
                'etin',
                'fext',
                'flamp',
                'fomorian',
                'galeb-dur',
                'geniove',
                'ghulove',
                'githove',
                'gnolove',
                'gnom-hlubinny',
                'goblini',
                'gobri',
                'golemove',
                'gorgon',
                'grel',
                'gryf',
                'gryk',
                'hakovec',
                'harpyje',
                'hipogryf',
                'homunkulus',
                'houby',
                'hrotoun',
                'hydra',
                'jednorozec',
                'jesterci',
                'jezibaby',
                'kambion',
                'kenku',
                'kentaur',
                'klamopard',
                'klepetnatec',
                'koboldi',
                'kokatrice',
                'kostej',
                'kostlivci',
                'kovatl',
                'kraken',
                'krapnitec',
                'kuo-toove',
                'kyklop',
                'lamie',
                'litice',
                'lykantropove',
                'magmar',
                'mantikora',
                'meduza',
                'mefiti',
                'mimik',
                'minotaurus',
                'modroni',
                'moran',
                'morian',
                'mozkozrout',
                'mrchodravec',
                'mstitel',
                'mumie',
                'mykonidi',
                'nagy',
                'neviditelny-stopar',
                'nocni-mura',
                'noh',
                'notik',
                'obri',
                'obrneny-des',
                'ohniva-lebka',
                'on',
                'orkove',
                'otyugh',
                'ozivle-predmety',
                'pavoucnatec',
                'pegas',
                'pekelny-ohar',
                'peryton',
                'plastnik',
                'plazivy-parat',
                'poletucha',
                'polodrak',
                'polokostej',
                'prizrak',
                'pseudodrak',
                'purpurovy-cerv',
                'quagot',
                'raksaza',
                'remorazove',
                'ropusak',
                'rozumhlt',
                'rytir-smrti',
                'rzivy-netvor',
                'sahuagini',
                'sakalodlak',
                'salamandri',
                'satyr',
                'sfingy',
                'skuruti',
                'sladi',
                'slizy',
                'sneti',
                'sovodved',
                'spektra',
                'stin',
                'stitovy-strazce',
                'strasak',
                'striga',
                'sukuba-nebo-inkubus',
                'tarask',
                'temnoplast',
                'thri-kreen',
                'tlejici-valivec',
                'troglodyt',
                'troll',
                'upiri',
                'vili-dracek',
                'vodni-div',
                'vyverna',
                'xorn',
                'yettiove',
                'yuan-tiove',
                'yugoloti',
                'zlobri',
                'zombie',
                'zrici',
                'dodate-a',
                'dodatek-b',
                'dodatek-c',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/grimoar/grimoar-jmen': [
            '/grimoar/grimoar-jmen',
            tools.sharedTemplateOSrd(),
        ],
        '/grimoar/grimoar-moci': [
            '/grimoar/grimoar-moci',
            tools.sharedTemplateOSrd(),
        ],
        '/grimoar/grimoar-skol': [
            '/grimoar/grimoar-skol',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/barbar': [
            '/soupis/barbar',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/bard': [
            '/soupis/bard',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/bojovnik': [
            '/soupis/bojovnik',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/carodej': [
            '/soupis/carodej',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/cernokneznik': [
            '/soupis/cernokneznik',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/druid': [
            '/soupis/druid',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/hranicar': [
            '/soupis/hranicar',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/klerik': [
            '/soupis/klerik',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/kouzelnik': [
            '/soupis/kouzelnik',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/mnich': [
            '/soupis/mnich',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/paladin': [
            '/soupis/paladin',
            tools.sharedTemplateOSrd(),
        ],
        '/soupis/tulak': [
            '/soupis/tulak',
            tools.sharedTemplateOSrd(),
        ],
        '/': [
            {
                text: 'Knihy',
                children: books
            },
            {
                text: 'Grimoary',
                children: grimoars
            },
            {
                text: 'Soupisy povolání',
                children: sumaryClasses
            },
            tools.sharedTemplateOSrd(),
        ]
    }

};

module.exports = config