const express = require('express')
const citizenRouter = require('./routers/citizens')
const path = require('path')
const { startLogger, endLogger } = require('./utils/middlewares/logger')
const app = express()


app.use('/my-style', express.static(path.join(__dirname, './pages/styles')))
app.use('/my-script', express.static(path.join(__dirname, './pages/scripts')))

app.get('/', startLogger, (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, './pages/index.html'))
    next()
}, endLogger)
app.use('/citizens', citizenRouter)

app.get('/*', (req, res) => {
    res.status(404).send(`the ${req.url} was not found`)
})
module.exports = { app }