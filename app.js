const express =require('express')
const citizenRouter=require('./routers/citizens')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).send('server')
})
app.use('/citizens',citizenRouter)

app.get('/*',(req,res)=>{
    res.status(404).send(`the ${req.url} was not found`)
})
module.exports={app}