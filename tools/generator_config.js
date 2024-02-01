let snippets = {
    kouzla: './source/dnd5esrd/snippets/kouzla',
    povolani: './source/dnd5esrd/snippets/povolani',
    obory: './source/dnd5esrd/snippets/obory',
}

let replaceSnippets = [
    {
        applySnippets: [
            {snippet: snippets.kouzla, prefix: 'kouzla', headerOffset: 2},
        ],
        templateDir: './source/dnd5esrd/templates',
        targetDir: './source/dnd5esrd/grimoar',
        fileNames: [
            'grimoar-jmen.md',
        ],
    },
    {
        applySnippets: [
            {snippet: snippets.kouzla, prefix: 'kouzla', headerOffset: 3},
        ],
        templateDir: './source/dnd5esrd/templates',
        targetDir: './source/dnd5esrd/grimoar',
        fileNames: [
            'grimoar-moci.md',
        ],
    },
    {
        applySnippets: [
            {snippet: snippets.kouzla, prefix: 'kouzla', headerOffset: 4},
        ],
        templateDir: './source/dnd5esrd/templates',
        targetDir: './source/dnd5esrd/grimoar',
        fileNames: [
            'grimoar-povolani.md',
        ],
    },
    {
        applySnippets: [
            {snippet: snippets.kouzla, prefix: 'kouzla', headerOffset: 3},
        ],
        templateDir: './source/dnd5esrd/templates',
        targetDir: './source/dnd5esrd/grimoar',
        fileNames: [
            'grimoar-skol.md',
        ],
    },
    {
        applySnippets: [
            {snippet: snippets.povolani, prefix: 'povolani', headerOffset: 1},
            {snippet: snippets.obory, prefix: 'obory', headerOffset: 2},
            {snippet: snippets.kouzla, prefix: 'kouzla', headerOffset: 3},
        ],
        templateDir: './source/dnd5esrd/templates',
        targetDir: './source/dnd5esrd/soupis',
        fileNames: [
            'barbar.md',
            'bard.md',
            'bojovnik.md',
            'carodej.md',
            'cernokneznik.md',
            'druid.md',
            'hranicar.md',
            'klerik.md',
            'kouzelnik.md',
            'mnich.md',
            'paladin.md',
            'tulak.md',
            'alchymista.md',
            'lovec-netvoru.md',
        ],
    },
];

let mergeFiles = [
    {
        files: [
            './source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola-a.md',
            './source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola-b.md',
        ],
        target: './source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola.md'
    },
    {
        files: [
            './source/dnd5esrd/prirucka-hrace/3-kapitola-a.md',
            './source/dnd5esrd/prirucka-hrace/3-kapitola-b.md',
        ],
        target: './source/dnd5esrd/prirucka-hrace/3-kapitola.md'
    },
    {
        files: [
            './source/dnd5esrd/prirucka-hrace/11-kapitola-a.md',
            './source/dnd5esrd/prirucka-hrace/11-kapitola-b.md',
        ],
        target: './source/dnd5esrd/prirucka-hrace/11-kapitola.md'
    },
    {
        files: [
            './source/dnd5esrd/jeskyne-a-draci/4a-povolani-po-kouz.md',
            './source/dnd5esrd/jeskyne-a-draci/4b-povolani-od-kouz.md',
        ],
        target: './source/dnd5esrd/jeskyne-a-draci/4-povolani.md'
    },
    {
        files: [
            './source/dnd5esrd/jeskyne-a-draci/8a-hrani-hry-po-boj.md',
            './source/dnd5esrd/jeskyne-a-draci/8b-hrani-hry-od-boj.md',
        ],
        target: './source/dnd5esrd/jeskyne-a-draci/8-hrani-hry.md'
    },
    {
        files: [
            './source/dnd5esrd/jeskyne-a-draci/10a-magie-po-kouzla.md',
            './source/dnd5esrd/jeskyne-a-draci/10b-magie-dostupna-kouzla.md',
            './source/dnd5esrd/jeskyne-a-draci/10c-magie-kouzla-0-3.md',
            './source/dnd5esrd/jeskyne-a-draci/10d-magie-kouzla-4-9.md',
        ],
        target: './source/dnd5esrd/jeskyne-a-draci/10-magie.md'
    },
];

module.exports = {
    replaceSnippets,
    mergeFiles,
};