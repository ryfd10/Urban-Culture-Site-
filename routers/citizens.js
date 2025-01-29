const express = require('express')

const router = express.Router()

router.get('/all', (req, res) => {
    res.status(200).json([])
})
router.post('/add-family',(req,res)=>{
    const family=req.body
    res.status(201).json({...family})
})












module.exports = router;