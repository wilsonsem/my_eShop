import mongoose from "mongoose"

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.DB_URI)
        console.log(`Database connected: ${conn.connection.host}`)
    }
    catch(error){
        console.log("Not connected")
    }
}

export default connectDB