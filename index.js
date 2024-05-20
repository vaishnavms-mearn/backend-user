//import express
const express =require('express')
//import route
const router =require('./Router/route')
//import cors
const cors =require('cors')
//db connection import
const db=require('./DB/connection')
//create a backend server using express
const pfServer=express()
pfServer.use(cors())
pfServer.use(express.json())//Returns midddleware that only parses json
// pfServer.use(appMiddleware)
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))
//port creation
const PORT= 4001
//server listen
pfServer.listen(PORT, '0.0.0.0',()=>{
    console.log('Listening on port ' +PORT);
})

//http=get resolving to http :// localhost/4000
pfServer.get("/",(req,res)=>{
res.send('<h1>user is started</h1>')
})
