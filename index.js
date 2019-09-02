/* IMPORT */

const path = require("path")
const fs = require("fs")
const Handlebars = require('handlebars');
const pdf = require('html-pdf')

const { asyncReaddir, loopResults } = require('./helpers')

const searchPath = process.argv[2]

/* look for folder's path. If path is not provided the script will return an error */
if(!searchPath){
    console.log('Necessario fornire il percorso della cartella da esaminare')
    return process.exit(1)
}

/* check if path exists */
if(searchPath){
    if (!fs.existsSync(searchPath)){
        console.log('La cartella selezionata non esiste')
        return process.exit(1)
    }
}


async function main(){
    const result = await asyncReaddir(searchPath)
    const files = loopResults(result, searchPath)
    console.log(files)
}


/* executes main function */
main()


