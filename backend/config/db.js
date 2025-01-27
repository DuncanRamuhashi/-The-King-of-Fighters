 import mongoose from "mongoose";

 export const connectDB = async () => {   
         const conn =  await mongoose.connect(`mongodb+srv://duncanramohashi:mufhatu@cluster0.mpkys.mongodb.net/kof`)
        console.log(`MongoDB Connected: ${conn.connection.host}`);

 }

 export default connectDB;

 