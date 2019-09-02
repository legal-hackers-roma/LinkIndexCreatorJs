/* IMPORT */

const path = require("path")
const fs = require("fs")
const Handlebars = require('handlebars');


const { asyncReaddir, loopResults, checkPermittedFiles, parseDateIntoStringLocaleIT, generateListItems, createPDF, createHTML } = require('./helpers')
const { doc } = require('./template')
const { checkArgv } = require('./checkArgv')


/* Handlebars Helpers */

/* Handlebars initialization */
let template = Handlebars.compile(doc)



async function main() {
    try {
        const searchPath = checkArgv()
        const result = await asyncReaddir(searchPath)
        const files = loopResults(result, searchPath)
        const permittedFiles = checkPermittedFiles(files)
        console.log(permittedFiles)
        const entries = generateListItems(permittedFiles)

        /* Handlebars compilation */

        const context = { avvocato: 'Roberto Alma', data: parseDateIntoStringLocaleIT(new Date()), items: entries }
        const compiledTemplate = template(context)
        const outputPath = path.join(searchPath, '00_Indice.pdf')
        const outputPathHtml = path.join(searchPath, '00_Indice.html')
        createHTML(compiledTemplate, outputPathHtml)
        createPDF(compiledTemplate, outputPath)

    } catch (err) {
        console.log(err)
    }
}


/* executes main function */
main()