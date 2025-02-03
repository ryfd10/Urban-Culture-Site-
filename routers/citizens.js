const express = require('express')

const router = express.Router()

router.get('/all', (req, res) => {
    console.log(req.query);
    const { skip = 0, count = 78 } = req.query
    console.log({ skip, count});
    res.status(200).json([])
})
router.get('/all-street/:streetname/area/:a-name', (req, res) => {
    console.log(req.params);
    res.status(200).json([])
})
router.post('/add-family', express.json(), (req, res) => {
    const family = req.body
    console.table({ family })

    res.status(201).json({ ...family })
})












module.exports = router;