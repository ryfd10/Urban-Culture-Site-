
require('dotenv').config()
const fs = require('fs')
const path = require('path')

const { LOGGER_FOLDER=__dirname, LOGGER_FILE="logger.log" } = process.env

function logToFile(data) {
    try {
if(!fs.existsSync(LOGGER_FOLDER)){
    fs.mkdirSync(LOGGER_FOLDER,{recursive:true})
}
const filePath=path.join(LOGGER_FOLDER,LOGGER_FILE)
console.log({filePath});

fs.appendFileSync(filePath,JSON.stringify(data)+ "\n")
    }
    catch (error) {
        throw error

    }

}

module.exports = { logToFile }