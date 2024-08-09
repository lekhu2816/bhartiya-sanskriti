import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('DATABASE CONNECTED SUCCESSFULLY !');
    } catch (error) {
        console.log("ERROR WHILE CONNECTING DATABASE");
    }
}
export default connectDB;
