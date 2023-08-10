const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("collection",newSchema)