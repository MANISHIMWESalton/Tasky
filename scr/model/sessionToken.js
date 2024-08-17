const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    user:{
        type:String,
        ref:{
            type:mongoose.Schema.Types.ObjectId
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},
{timestamps})
const Session = mongoose.model("Session",sessionSchema)
module.exports = Session;