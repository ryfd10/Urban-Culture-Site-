const express = require('express');
const { checkRequireBodrArgumrnts } = require('../utils/middlewares/validations');

const router = express.Router()

router.get('/all', (req, res, next) => {
    console.log(req.query);
    const { skip = 0, count = 78 } = req.query
    console.log({ skip, count });
    res.status(200).json({ skip: +skip, count: +count })
    res.locals['response'] = 200
    next()
})
router.get('/all-street/:streetname/area/:area-name', (req, res, next) => {
    console.log(req.params);
    res.status(200).json({ streetname, area })
    res.locals['response'] = 200
    next()
})
router.post('/add-family', express.json(), checkRequireBodrArgumrnts(['name', 'address', 'phone']), (req, res, next) => {
    if (res.locals['response'] === undefined) {
        const family = req.body
        console.table({ family })
        res.status(201).json({ ...family })
        res.locals['response'] = 201
    }
    next()

})


module.exports = router;