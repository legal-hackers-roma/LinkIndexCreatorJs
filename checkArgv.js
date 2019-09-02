const fs = require('fs')

function checkArgv() {
    const searchPath = process.argv[2]
    const avvocato = process.argv[3]

    /* look for folder's path. If path is not provided the script will return an error */
    if (!searchPath) {
        console.log('Necessario fornire il percorso della cartella da esaminare')
        return process.exit(1)
    }

    /* check if path exists */
    if (searchPath) {
        if (!fs.existsSync(searchPath)) {
            console.log('La cartella selezionata non esiste')
            return process.exit(1)
        }
    }

    if(!avvocato){
        console.log('Necessario fornire il nome dell\' Avvocato')
        return process.exit(1)
    }

    return {
        searchPath: searchPath,
        avvocato: avvocato
    }
}

module.exports.checkArgv = checkArgv