const mongoose = require("mongoose")
// const {Schema} =mongoose
const userschrma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
   
    gender:{

        type:String,
        require:true
    },
    
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User =mongoose.model("user",userschrma)

module.exports=User