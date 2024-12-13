const mongoose = require("mongoose")

const InquiryForm = new mongoose.Schema({

      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      phoneNumber:{
        type:String,
        required:true
      },
      message:{
        type:String,
        required:true
      }
})

const Inquiry = mongoose.model("Inquiry",InquiryForm)

module.exports = Inquiry;