const mongoose = require("mongoose")

const UserDetails = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const UserContact = mongoose.model('UserContact',UserDetails )

module.exports = UserContact

