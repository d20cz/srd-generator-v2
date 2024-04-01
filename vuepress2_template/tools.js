module.exports = {
    expandBookPages: function (dirName, files) {
        return files.map(s => "/" + dirName + "/" + s)
    },
    expandBook: function (name, dirName, files) {
        return {
            text: name,
            collapsible: false,
            //link: "/" + dirName + "/",
            children: this.expandBookPages(dirName, files)
        }
    },
    linksAddHtml: function (books) {
        return  books.map(s => {
            let link = null;
            if (s.link !== undefined ){
                link = s.link + ".html"
            }
            let children = null;
            if (s.children !== undefined ){
                children = this.linksAddHtml(s.children)
            }
            return {
                ...s,
                link: link,
                children: children,
            };
        })
    },
    sharedTemplateOSrd: function () {
        return {
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
        };
    },
    sharedTemplateD20cz: function () {
        return {
            text: 'd20.cz',
            link: 'http://www.d20.cz/'
        };
    },
    sharedTemplateDalsiSrd: function (actualSrd) {
        let fatesrd = {
            text: 'Fate',
            link: 'http://fatesrd.d20.cz',
        };
        let dnd5esrd = {
            text: 'DnD 5e',
            link: 'http://dnd5esrd.d20.cz',
        };
        let awsrd = {
            text: 'Apokalyptickej svět',
            link: 'http://awsrd.d20.cz',
        };
        let drd2srd = {
            text: 'DrDII',
            link: 'http://drd2srd.d20.cz',
        };
        let children = [];
        if (actualSrd !== 'fatesrd') {
            children.push(fatesrd)
        }
        if (actualSrd !== 'dnd5esrd') {
            children.push(dnd5esrd)
        }
        if (actualSrd !== 'awsrd') {
            children.push(awsrd)
        }
        if (actualSrd !== 'drd2srd') {
            children.push(drd2srd)
        }
        return {
            text: 'Další SRD',
            link: 'http://srd.d20.cz/',
            children: children
        };
    }

}