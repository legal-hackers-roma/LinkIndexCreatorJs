const fs = require("fs")
const path = require("path")
const { promisify } = require('util')
const pdf = require('html-pdf')




/* create promise version of fs.readdir */
const readdir = promisify(fs.readdir)

/* check if element is file or not */
function isFile(fileName) {
    return fs.lstatSync(fileName).isFile()
}

/* check if readdir elements are files and returns array of files, excluding hidden files */
function loopResults(list, listPath) {
    const listFiles = list.filter((element) => {
        return isFile(path.join(listPath, element)) && /^\..*/.test(element) == false
    })

    return listFiles
}

/* check for permitted files */
function checkPermittedFiles(list) {
    const permittedFiles = list.filter((element) => {
        return path.extname(element).toLowerCase() === '.pdf' ||
            path.extname(element).toLowerCase() === '.tiff'
    })
    return permittedFiles
}

/* asyncReaddir => return list of files */
async function asyncReaddir(dir) {
    const files = await readdir(dir)
    return files
}


/* format Date into string it */

function parseDateIntoStringLocaleIT(date) {
    const _date = date.toString()
    console.log(_date)
    const _month = _date.split(' ')[1]
    const day = _date.split(' ')[2]
    const year = _date.split(' ')[3]

    let month = ''
    switch (_month) {
        case 'Jan':
            month = 'Gennaio'
            break;
        case 'Feb':
            month = 'Febbraio';
            break;
        case 'Mar':
            month = 'Marzo';
            break;
        case 'Apr':
            month = 'Aprile';
            break;
        case 'May':
            month = 'Maggio';
            break;
        case 'Jun':
            month = 'Giugno';
            break;
        case 'Jul':
            month = 'Luglio';
            break;
        case 'Aug':
            month = 'Agosto';
            break;
        case 'Sep':
            month = 'Settembre';
            break;
        case 'Oct':
            month = 'Ottobre';
            break;
        case 'Nov':
            month = 'Novembre';
            break;
        case 'Dec':
            month = 'Dicembre';
            break;
    }

    return `${day} ${month} ${year}`

}

/* Generate List of files (url and name) for Handlebars context */
function generateListItems(files) {
    let entries = []
    for (let i = 0; i < files.length; i++) {
        const current = files[i]
        entries.push({
            url: './' + current,
            name: current
        })
    }
    return entries
}

function createPDF(html, outputPath) {
    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: {
            'top': '35mm',
            'right': '35mm',
            'bottom': '20mm',
            'left': '35mm'
        },
        footer: {
            'height': '20mm',
        },
        type: 'pdf',
        base: 'file://' + path.resolve(outputPath)
    }
    pdf.create(html, options).toFile(outputPath, (err, res) => {
        if (err) throw err;
        console.log('SAVED!');
    })
}

function createHTML(html, outputPath) {
    fs.writeFile(outputPath, html, (err) => {
        if (err) {
            throw (err)
        } else {
            console.log('SAVED HTML!')
        }
    })
}


module.exports = {
    asyncReaddir,
    loopResults,
    checkPermittedFiles,
    parseDateIntoStringLocaleIT,
    generateListItems,
    createHTML,
    createPDF
}