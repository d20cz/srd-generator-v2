const tools = require('./tools');

const googleAnalyticsId = (process.env.ENABLE_GA  === '1') ? process.env.GAID_SR6SRD : '';

let books = [
    {
        text: 'Základní pravidla',
        link: '/zakladni-pravidla/01-uvod',
        activeMatch: '/zakladni-pravidla/',
    },
    {
        text: 'Anarchopedie',
        link: '/neo-anarch/01-uvod',
        activeMatch: '/neo-anarch/',
    },
];
let config = {
    title: 'Český překlad Shadowrun 6e SRD',
    description: 'Český překlad Shadowrun 6e SRD',
    googleAnalyticsId: googleAnalyticsId,
    navbar: [
        {
            text: 'Knihy',
            children: tools.linksAddHtml(books)
        },
        tools.sharedTemplateDalsiSrd('sr6srd'),
        tools.sharedTemplateD20cz(),
    ],
    sidebar: {
        '/zakladni-pravidla/': [
            tools.expandBook('Základní pravidla', 'zakladni-pravidla', [
                '01-uvod.md',
                '02-zivot-ktery-jsi-opustil.md',
                '03-koncepty-hry.md',
                '04-tvorba-postavy.md',
                '05-archetypy.md',
                '06-dovednosti.md',
                '07-boj.md',
                '08-magie.md',
                '09-matrix.md',
                '10-riggovani.md',
                '11-rozmanity-zivot.md',
                '12-vedeni-hry.md',
                '13-vybaveni.md',
                '99-shrnuti-pravidel.md',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/neo-anarch/': [
            tools.expandBook('Anarchopedie', 'neo-anarch', [
                '01-uvod.md',
                '02-skutecnej-punk.md',
                '03-poulicni-encyklopedie.md',
                '04-a.md',
                '05-b.md',
                '06-c.md',
                '07-d.md',
                '08-e.md',
                '09-f.md',
                '10-g.md',
                '11-h.md',
                '12-i.md',
                '13-j.md',
                '14-k.md',
                '15-l.md',
                '16-m.md',
                '17-n.md',
                '18-o.md',
                '19-p.md',
                '20-q.md',
                '21-r.md',
                '22-s.md',
                '23-t.md',
                '24-u.md',
                '25-v.md',
                '26-w.md',
                '27-x.md',
                '28-y.md',
                '29-z.md',
            ]),
            tools.sharedTemplateOSrd(),
        ],
        '/': [
            {
                text: 'Knihy',
                children: tools.linksAddHtml(books),
            },
            tools.sharedTemplateOSrd(),
        ]
    }

};

module.exports = config