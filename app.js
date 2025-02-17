const express = require('express')
const citizenRouter = require('./routers/citizens')
const path = require('path')
const eventRouter=require('./routers/events')
const { startLogger, endLogger } = require('./utils/middlewares/logger')
const app = express()

app.use(startLogger)

app.use('/my-style', express.static(path.join(__dirname, './pages/styles')))
app.use('/my-script', express.static(path.join(__dirname, './pages/scripts')))
app.get('/', startLogger, (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, './pages/index.html'))
    res.locals['response'] = 200
    next()
})
app.use('/citizens', citizenRouter)
app.use('/events',eventRouter)

app.get('/*', (req, res, next) => {
    if (!res.locals['response']) {
        res.status(404).send(`the ${req.url} was not found`)
        res.locals(['response']) = 404
    }
    next()
})

app.use(endLogger)
module.exports = { app }