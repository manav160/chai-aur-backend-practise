import mongoose from "mongoose";
// import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    // console.log("index: 1");
    try {
        // console.log("index: 2");
        var tempString = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
        // console.log("index: ", tempString);
        const connectionInstance = await mongoose.connect(tempString);
        console.log(`MongoDB conncetd succesfully && Data Host :- ${connectionInstance.Connection.name}`)
        
    }
    catch(error) {
        console.log(`MONGODB con :- ${error}`)
        process.exit(1);
    }
}

export default connectDB