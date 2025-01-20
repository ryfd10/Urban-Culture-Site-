const express =require('express')

const app=express()

app.get('/',(req,res)=>{
    res.status(200).send('server')
})
app.get('/*',(req,res)=>{
    res.status(404).send(`the ${req.url} was not found`)
})
module.exports={app}