const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/wathareinfotech")

const UserSchema = new mongoose.Schema({
    ts: String,
    machine_status: Number,
    vibration: Number
})

const UserModel = mongoose.model("sampledata",UserSchema)

app.get("/getsampledata",(req,res)=>{
    UserModel.find({}).then(function(sampledata){
        res.json(sampledata)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})