import mongoose from "mongoose"

mongoose.set("strictQuery", false);
const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.DB_URI)
        console.log(`Database connected: ${conn.connection.host}`.bgBlue.white.underline.bold)
    }
    catch(error){
        console.log(`Not connected:${error.message}`.red.bold)
    }
}

export default connectDB
