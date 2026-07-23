import mongoose from 'mongoose';
import dotenv from 'dotenv'

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected successfuly")
    }
    catch(err){
        console.error(`connection failed: ${err}`)
        process.exit(1)
    }
    
}

export default connectDB 