const mongoose = require("mongoose")

const ConnectDB = async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to the Database Successfully")
            
    }

    catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);

    }
}

module.exports = ConnectDB;