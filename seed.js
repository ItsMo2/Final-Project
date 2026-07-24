import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import { Product } from './models/product.js'
import { sampleProducts } from './data/productsData.js'

dotenv.config()

const seedDatabase = async() => {
    try{
        await connectDB()

        await Product.deleteMany()
        console.log("existing products deleted")

        await Product.insertMany(sampleProducts)
        console.log("sample products inserted")
    } catch (err){
        console.error('insertion failed:',err);
    } finally {
        await mongoose.connection.close();
        console.log("database connection closed")
    }
}
seedDatabase();