const fs = require("fs")
const path = require("path")
const { promisify } = require('util')

/* create promise version of fs.readdir */
const readdir = promisify(fs.readdir)

/* check if element is file or not */
function isFile(fileName){
    return fs.lstatSync(fileName).isFile()
  }

/* check if readdir elements are files and returns array of files, excluding hidden files */
function loopResults(list, listPath){
    const listFiles = list.filter((element)=>{
        return isFile(path.join(listPath, element)) && /^\..*/.test(element) == false
    })

    return listFiles
}

/* asyncReaddir => return list of files */
async function asyncReaddir(dir){
    const files = await readdir(dir)
    return files
}


module.exports.asyncReaddir = asyncReaddir
module.exports.loopResults = loopResults
