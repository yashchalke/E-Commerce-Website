const mongoose = require('mongoose');

const ConnectToDb = async (connectionString)=>{
    try{
    await mongoose.connect(connectionString);
    }
    catch(err){
        console.log("Failed to connect to MongoDB" , err);
    }
    finally{
        console.log("MongoDB Connected SuccessFully!!!");
    }
}

module.exports = {ConnectToDb}