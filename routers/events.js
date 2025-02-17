const express = require('express')
const router = express.Router()


router.post('/create',express.json() ,(req, res, next) => {
    try {
        const { name, type, audience } = req.body
        res.locals['response'] = 201
        res.status(201).json({ id: 1, name, type, audience })
    }
    catch
    (error) {
        res.locals['response'] = 500
        res.status(500).send(error.message)
    }
    next()
})
module.exports = router