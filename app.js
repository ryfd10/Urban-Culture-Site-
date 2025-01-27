const express =require('express')
const path=require('path')
const app=express()


app.use('/my-style',express.static(path.join(__dirname, './pages/styles')))
app.use('/my-script',express.static(path.join(__dirname, './pages/scripts')))
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './pages/index.html'))
})
app.get('/*',(req,res)=>{
    res.status(404).send(`the ${req.url} was not found`)
})
module.exports={app}