require('dotenv').config()
const http =require('http')

const {app}=require('./app')
//const { getHeapCodeStatistics } = require('v8')
const{HOST='127.0.0.1',PORT=8080}=process.env
app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
    
})
const server=http.createServer(app)