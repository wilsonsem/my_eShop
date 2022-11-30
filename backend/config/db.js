import mongoose from "mongoose"

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology:rrue,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`Database connected: ${conn.connection.host}`)
    }
    catch(error){
        console.log("Not connected")
        // process.exit(1)
    }
}


export default connectDB