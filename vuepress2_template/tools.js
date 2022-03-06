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
    }

}