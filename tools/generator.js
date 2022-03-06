const fs = require('fs');
const replace = require('replace-in-file');

const config = require('./generator_config');

config.replaceSnippets.forEach(replaceSnippet => {
    console.log("Nahrazení snipetů:" + replaceSnippet.fileNames.join(", "))
    if (!fs.existsSync(replaceSnippet.targetDir)) {
        fs.mkdirSync(replaceSnippet.targetDir);
    }

    replaceSnippet.fileNames.forEach(fileName => {
        fs.copyFileSync(
            replaceSnippet.templateDir + '/' + fileName,
            replaceSnippet.targetDir + '/' + fileName
        )
    })

    replaceSnippet.applySnippets.forEach(snippetSettings => {

        let dir = snippetSettings.snippet;
        const headerprefix = "#".repeat(snippetSettings.headerOffset);
        snippetsFiles = fs.readdirSync(dir);
        snippetsFiles.sort((a,b) => b.length - a.length).forEach(file => {
            let snippetToken = 'snippet-'+snippetSettings.prefix+':' + file.replace('.md', '');
            const regex = new RegExp(snippetToken, 'g');
            let to = fs.readFileSync(dir + '/' + file, 'utf8');
            const regexHeader = new RegExp('# ', 'g');
            replace.sync({
                files: replaceSnippet.fileNames.map(fileName => replaceSnippet.targetDir + '/' + fileName),
                from: regex,
                to: to.replace(regexHeader,headerprefix +'# '),
            });
        });

    });

})

config.mergeFiles.forEach(mergeFile => {
    if (!fs.existsSync(mergeFile.target)) {
        let content = mergeFile.files.map(file => fs.readFileSync(file));
        fs.writeFileSync(mergeFile.target, content.join(""));
        mergeFile.files.map(file => fs.unlinkSync(file))
        console.log("Slouční souborů - " + mergeFile.target)
    } else {
        console.log("Slouční souborů - cílový soubor už existue - " + mergeFile.target)
    }
})

