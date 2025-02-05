const express = require('express')

const router = express.Router()

router.get('/all', (req, res) => {
    console.log(req.query);
    const { skip = 0, count = 78 } = req.query
    console.log({ skip, count });
    res.status(200).json({ skip:+skip, count:+count })
})
router.get('/all-street/:streetname/area/:area-name', (req, res) => {
    console.log(req.params);
    res.status(200).json({ streetname, area })
})
router.post('/add-family', express.json(), (req, res) => {
    const family = req.body
    console.table({ family })

    res.status(201).json({ ...family })
})












module.exports = router;