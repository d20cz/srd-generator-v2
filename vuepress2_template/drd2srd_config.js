const tools = require('./tools');

let config = {
    title: 'DrDII SRD',
    description: 'DrDII SRD',
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
                // {
                //     text: 'DrDII',
                //     link: 'http://drd2srd.d20.cz',
                // },
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
                text: 'Základní příručka',
                collapsible: false,
                children: [
                    {
                        text: 'ČÁST I - Úvod do hry',
                        collapsible: true,
                        children: [
                            '/zakladni-prirucka/11-co-jsou-hry-na-hrdiny',
                            '/zakladni-prirucka/12-priklad-hry',
                        ]
                    },
                    {
                        text: 'ČÁST II - Tvorba postav',
                        collapsible: true,
                        children: [
                            '/zakladni-prirucka/21-dobrodruzi',
                            '/zakladni-prirucka/22-ukazkove-postavy',
                            '/zakladni-prirucka/23-tvorba-hrdiny',
                            '/zakladni-prirucka/24-rasy',
                            '/zakladni-prirucka/25-zakladni-povolani',
                            '/zakladni-prirucka/26-pokrocila-povolani',
                        ]
                    },
                    {
                        text: 'ČÁST III - Hraní hry',
                        collapsible: true,
                        children: [
                            '/zakladni-prirucka/31-zakladni-pravidla',
                            '/zakladni-prirucka/32-slozitejsi-situace',
                            '/zakladni-prirucka/33-vybaveni',
                            '/zakladni-prirucka/34-pomocnici-a-site',
                            '/zakladni-prirucka/35-pouzivani-dovednosti',
                            '/zakladni-prirucka/36-kouzla-nastrahy-leceni',
                            '/zakladni-prirucka/37-zvlastni-schopnosti',
                            '/zakladni-prirucka/38-zkusenosti-a-zlepsovani-postavy',
                        ]
                    },
                    {
                        text: 'ČÁST IV - Vyprávění příběhů',
                        collapsible: true,
                        children: [
                            '/zakladni-prirucka/41-priprava-a-vedeni-hry',
                            '/zakladni-prirucka/42-inspirace-pro-dobrodruzstvi',
                            '/zakladni-prirucka/43-bestiar',
                            '/zakladni-prirucka/44-navrat-do-bileho-hradu',
                        ]
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