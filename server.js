const mongoose = require('mongoose')
const express = require('express')
const app = express()
const url = "mongodb+srv://santhoshcs2000:santhoshkumar4210@freecluster.kcsmp.mongodb.net/Guest-room";
 
const router = require('./router/router')

mongoose.connect(url,{useNewUrlParser:'true'})

const con = mongoose.connection

con.on('open',(err)=>{
    if(!err){
        console.log("connected database")
    }
    else{
        console.log(" no yet database is connected")
    }
    
})
app.use(express.json())
app.listen(12000,(err)=>{
    if(!err){
        console.log("here is server connected")

    }
    else{
        console.log("here is express is not connected")
    }
   
    app.use('/hi',router)
    
})