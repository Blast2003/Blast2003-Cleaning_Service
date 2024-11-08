import mongoose from "mongoose";
import { Variables } from "./variables.js";

export const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(Variables.MONGO_URL)
        console.log(`Connected to ${connection.connection.host}`)
        
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit(1)
    }
}