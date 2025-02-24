const express = require('express')
const { checkRequireBodrArgumrnts } = require('../utils/middlewares/validations')
const router = express.Router()


router.post('/create', express.json(), checkRequireBodrArgumrnts(['name', 'type', 'audience']), (req, res, next) => {
    if (res.locals['response'] === undefined) {
        try {
            const { name, type, audience, ...rest } = req.body
            res.locals['response'] = 201
            res.status(201).json({ id: 1, name, type, audience, ...rest })
        }
        catch
        (error) {
            res.locals['response'] = 500
            res.status(500).send(error.message)
        }
    }
    next()
})
module.exports = router