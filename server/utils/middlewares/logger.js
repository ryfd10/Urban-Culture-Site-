
const { logToFile } = require("../../services/logger")

function startLogger(req, res, next) {
    const logObject = {
        option: 'start',
        method: req.method,
        url: req.url,
        time: new Date().toISOString()
    }

    logToFile(logObject)
    next()
}
function endLogger(req, res) {
    const logObject = {
        option: 'end',
        method: res.method,
        url:req.url,
        response:res.locals['response'],
        time: new Date().toISOString()
    }
    logToFile(logObject)
}
module.exports = { startLogger, endLogger }